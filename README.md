# ExoScan Pro 📷 → 📄
### Assistant mathématiques pour enseignantes du primaire — Fédération Wallonie-Bruxelles

> Application web progressive (PWA) — iPad, PC, Android — fonctionne **hors-ligne** après premier chargement

🌐 **Live** : [cherradinab-byte.github.io/exoscan](https://cherradinab-byte.github.io/exoscan)

---

## 🚀 Démarrage

Au premier lancement, l'app propose **4 modes** — aucune clé n'est obligatoire :

| Mode | Description | Clé requise |
|---|---|---|
| 🌐 **OpenRouter** | Gratuit · Mistral, Llama, Gemini Flash | `sk-or-v1-…` |
| 🤖 **Claude (Anthropic)** | Meilleure qualité · Claude Sonnet | `sk-ant-…` |
| ✨ **ChatGPT (OpenAI)** | GPT-4o Vision | `sk-proj-…` |
| 🔒 **Hors-ligne** | IA locale SmolVLM + Phi-3 · **Aucune clé requise** | — |

Le mode et la clé sont **modifiables à tout moment** dans ⚙️ Réglages, sans redémarrer l'app.

### Installer comme app sur iPad
1. Ouvrir dans **Chrome ou Brave** (recommandé pour WebGPU)
2. Menu → **Ajouter à l'écran d'accueil**
3. L'app s'ouvre en plein écran comme une app native

> Safari/iPad : fonctionne en WASM (~30s/analyse). Pour la meilleure expérience offline, utilisez Brave ou Chrome.

---

## ✨ Fonctionnalités

### 📷 Scan
Photo ou screenshot d'un exercice → analyse IA → exercice éditable prêt à exporter.

- Traduction automatique EN → FR, adaptation des unités
- Valeurs numériques modifiables individuellement
- **Boutons d'adaptation rapide** : ⬇ Simplifier · ⬆ Enrichir · 🔄 Changer contexte · 🔢 Nouveaux chiffres
- Bouton **⭐ 3 niveaux** pour générer les 3 versions depuis un exercice scanné

### ✨ Créer
Générateur d'exercices IA avec style des manuels belges (Tip Top, Maths et Moustique, Math Pratique).

**Types d'exercices :**
- Calcul mental, Addition/Soustraction, Multiplication/Division, Fractions, Géométrie, Mesures, Problème textuel, Numération
- **Exercice à trous** : `3 × ___ = 12`, `___ + 7 = 15` — grille, réponses masquées révélables
- **Grille de nombres** : tableau interactif à double entrée avec cases vides
- **Problème par étapes** : structure *Je lis / Je cherche / Je calcule / Je vérifie*

**Paramètres :** niveau (1re–6e), difficulté, nombre de questions, thème/contexte, bouton **⭐ 3 niveaux**

### ⭐ Fiches 3 niveaux
Depuis n'importe quel exercice → l'IA génère 3 versions en une requête :

- **⭐ Facile** : pour élèves en difficulté
- **⭐⭐ Moyen** : version standard
- **⭐⭐⭐ Difficile** : pour élèves avancés

Interface native : cartes sélectionnables, détail expansible (consigne + réponse + conseil), export Word ou PDF des niveaux cochés uniquement.

### 🗂️ Bibliothèque
Exercices sauvegardés automatiquement (200 max, localStorage). Filtre par chapitre + recherche texte.

### 📄 Export
**Word (.docx) et PDF** depuis la même page.

Options : en-tête élève, lignes de réponse, barème /20, version corrigé, **style manuel belge** (mise en page Maths et Moustique), variantes anti-copie A/B/C/D.

### ✅ Corriger une copie
Photo corrigé + photo copie élève → score, liste ✓/✗, feedback bienveillant.

### 📅 Planning
Séquence de cours complète exportable en Word.

### 📐 Géométrie
Éditeur SVG : rectangle, carré, triangle, cercle, pentagone. Dimensions, remplissage, cotation, export Word.

### 🛒 Banque de problèmes
30 problèmes contextualisés belges (marché, vélo, friterie, sport, météo, anniversaires, école, nature, maison, kermesse). Filtres + personnalisation.

### ✖️ Tables de multiplication
Grille 10×10 + drill chronométré + export Word.

### 📖 Dictionnaire
35 termes mathématiques primaire avec définitions et exemples.

### ⚙️ Réglages
- Changer provider/clé API à tout moment
- Synchronisation GitHub Gist entre appareils
- Statut IA, test API, rechargement IA locale

---

## 🤖 Architecture IA — Hybride automatique

4 niveaux de fallback transparents :

```
1. API choisie (OpenRouter / Claude Anthropic / GPT-4o OpenAI)
         ↓ si hors-ligne ou erreur
2. SmolVLM local WebGPU (Chrome/Brave/Firefox)  ← 3–8 secondes
         ↓ si WebGPU indisponible
3. SmolVLM local WASM (Safari)                  ← 20–40 secondes
         ↓ si modèle non chargé
4. OCR Tesseract + Phi-3 Mini texte
```

Les modèles locaux (~400 MB) se téléchargent une seule fois puis fonctionnent entièrement hors-ligne.

---

## 🔧 Technologies

| Composant | Outil | Rôle |
|---|---|---|
| **IA Vision API** | OpenRouter · Anthropic Claude · OpenAI GPT-4o | Analyse images, génération texte |
| **IA Vision locale** | SmolVLM 256M via Transformers.js | Vision offline, WebGPU/WASM |
| **IA Texte locale** | Phi-3 Mini via Transformers.js | Génération offline |
| **OCR local** | Tesseract.js v5 | Extraction texte FR + EN |
| **Export Word** | docx.js v8.5 | Génération `.docx` navigateur |
| **Export PDF** | jsPDF v2.5 | Génération `.pdf` navigateur |
| **PWA / Cache** | Service Worker v10 | Cache offline, installation |
| **Sync** | GitHub Gist API | Bibliothèque entre appareils |
| **Géométrie** | SVG vanilla JS | Éditeur figures, export Word |
| **Hébergement** | GitHub Pages | Gratuit, HTTPS |

---

## 📁 Fichiers

```
exoscan/
├── index.html      — Application complète (~170KB)
├── sw.js           — Service Worker v10
├── manifest.json   — Manifest PWA
└── README.md       — Documentation
```

---

## 🔄 Mettre à jour sur GitHub

1. **github.com/cherradinab-byte/exoscan** → **Add file** → **Upload files**
2. Glisser les 4 fichiers → message de commit → **Commit changes**
3. Déploiement automatique en 1–2 minutes

Force reload : `Ctrl+Shift+R` (PC) · tirer vers le bas (iPad).

---

## 🔒 Confidentialité

- Clé API stockée uniquement dans le `localStorage` de l'appareil
- Seules les images d'exercices partent vers l'API choisie
- Mode hors-ligne : zéro donnée envoyée
- Sync Gist : token à portée minimale (`gist` uniquement)

---

## 🗺️ Roadmap

- [ ] Suivi individuel des élèves
- [ ] Tableau de bord de classe
- [ ] Mode quiz interactif (projection)
- [ ] Analyse des erreurs récurrentes
- [ ] Export Google Classroom / Teams
- [ ] Rapport de fin de trimestre

---

## 🤝 Crédits

Développé avec [Claude](https://claude.ai) (Anthropic).  
Référence : manuels **Tip Top Maths**, **Maths et Moustique** (Plantyn), **Math Pratique** (Van In) — FWB.

*ExoScan Pro — v10 — Mars 2026*
