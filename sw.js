const CACHE = 'exoscan-v18';
const ASSETS = [
  '/exoscan/',
  '/exoscan/index.html',
  '/exoscan/manifest.json',
  'https://fonts.googleapis.com/css2?family=Lora:wght@500;600&family=DM+Sans:wght@300;400;500&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/docx/8.5.0/docx.umd.min.js'
];
// Transformers.js est chargé dynamiquement — le SW le met en cache automatiquement au premier chargement

// Installation : mise en cache de l'app shell
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => {
      // On essaie chaque asset individuellement pour ne pas bloquer si un échoue
      return Promise.allSettled(ASSETS.map(url => cache.add(url)));
    }).then(() => self.skipWaiting())
  );
});

// Activation : supprime les anciens caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch : cache-first pour les assets de l'app, network-first pour l'API
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // Appels API OpenRouter → toujours réseau (jamais mis en cache)
  if (url.hostname === 'openrouter.ai') {
    e.respondWith(fetch(e.request));
    return;
  }

  // Transformers.js, Tesseract et HuggingFace → réseau avec mise en cache
  if (url.hostname === 'cdn.jsdelivr.net' || url.hostname.includes('huggingface.co') || url.pathname.includes('tesseract')) {
    e.respondWith(
      caches.open(CACHE).then(cache =>
        caches.match(e.request).then(cached => {
          if (cached) return cached;
          return fetch(e.request).then(resp => {
            if (resp && resp.status === 200) cache.put(e.request, resp.clone());
            return resp;
          });
        })
      )
    );
    return;
  }

  // Fonts Google → réseau avec fallback cache
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    e.respondWith(
      caches.open(CACHE).then(cache =>
        fetch(e.request).then(resp => { cache.put(e.request, resp.clone()); return resp; })
        .catch(() => caches.match(e.request))
      )
    );
    return;
  }

  // App shell + assets statiques → cache-first
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(resp => {
        if (resp && resp.status === 200) {
          caches.open(CACHE).then(cache => cache.put(e.request, resp.clone()));
        }
        return resp;
      });
    })
  );
});
