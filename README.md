# ExoScan Pro 📷 → 📄
### Assistant mathématiques pour enseignantes du primaire — Fédération Wallonie-Bruxelles

> Application web progressive (PWA) — iPad, PC, Android

🌐 **Live** : [cherradinab-byte.github.io/exoscan](https://cherradinab-byte.github.io/exoscan)

---

## 🚀 Démarrage — 4 modes disponibles

Au premier lancement, choisissez votre mode. **Aucune clé n'est obligatoire.**

| Mode | Description | Clé requise |
|---|---|---|
| 🌐 **OpenRouter** | Mistral, Llama, Gemini Flash — gratuit | `sk-or-v1-…` |
| 🤖 **Claude (Anthropic)** | Meilleure qualité · Claude Sonnet | `sk-ant-…` |
| ✨ **ChatGPT (OpenAI)** | GPT-4o Vision | `sk-proj-…` |
| 🔒 **Hors-ligne** | Phi-3 Mini + OCR Tesseract · Aucune clé requise | — |

Le mode et la clé sont **modifiables à tout moment** via ⚙ dans le header → ou en cliquant sur la pastille IA.

### Mode hors-ligne

Le premier lancement hors-ligne télécharge **Phi-3 Mini (~230MB)** depuis HuggingFace — connexion requise ce jour-là uniquement. Le téléchargement se fait **en arrière-plan** : vous pouvez naviguer librement dans l'app pendant ce temps. Une bannière en haut indique la progression.

Flux offline : photo → OCR Tesseract (extrait le texte) → Phi-3 Mini (analyse et structure en JSON). Fonctionne bien pour les exercices avec du texte lisible. Pour les images purement visuelles (dés, figures sans texte), une API est recommandée.

**Navigateurs recommandés :** Chrome ou Brave (WASM optimisé). Safari fonctionne mais peut être plus lent.

---

## 📱 Installer comme app sur iPad

1. Ouvrir dans **Chrome ou Brave**
2. Menu (⋯) → **Ajouter à l'écran d'accueil**
3. L'app s'ouvre en plein écran avec icône dédiée

---

## ✨ Fonctionnalités

### 📷 Scan (onglet 0)
Photo ou screenshot d'un exercice → analyse IA → exercice éditable.
- OCR Tesseract intégré pour extraction de texte
- Valeurs numériques modifiables individuellement
- Boutons : Simplifier · Enrichir · Changer contexte · Nouveaux chiffres
- Bouton **⭐ 3 niveaux** depuis l'exercice scanné

### ✨ Créer (onglet 1)
Génération d'exercices par IA avec style des manuels belges.
Types : Addition/Soustraction, Multiplication/Division, Fractions, Géométrie, Mesures, Problème textuel, Numération, Exercice à trous, Grille de nombres, Problème par étapes.

### 🗂 Biblio (onglet 2)
Bibliothèque locale (200 exercices max). Filtres par chapitre + recherche texte.

### 📄 Export (onglet 3)
Fiche constituée des exercices du panier. Options : en-tête, lignes de réponse, barème /20, corrigé, style manuel belge. Export **Word (.docx)** et **PDF**.

Fiches **3 niveaux** : génération automatique Facile / Moyen / Difficile, export sélectif.

### ✅ Corriger (onglet 4)
2 photos (corrigé + copie élève) → score, liste ✓/✗, feedback bienveillant.

### 📅 Planning (onglet 5)
Séquence de cours complète exportable en Word.

### 📐 Géom. (onglet 6)
Éditeur SVG : rectangle, carré, triangle, cercle, pentagone. Dimensions, couleurs, remplissage. Export dans la fiche + PDF avec figure rendue.

### 🛒 Banque (onglet 7)
30 problèmes contextualisés belges. Filtres : contexte (marché, vélo, friterie, sport…) + niveau + opération.

### ✖ Tables (onglet 8)
Grille 10×10 + drill chronométré (20 questions, score, étoiles) + fiche Word.

### 📖 Dico (onglet 9)
35 termes mathématiques primaire. Recherche + filtre par catégorie. Clic = définition + exemple.

### ⚙ Réglages (onglet 10)
- Pastille IA en haut à droite → **cliquable** → ouvre les Réglages directement
- Changer provider / clé API
- Tester la connexion API
- Recharger l'IA locale (Phi-3)
- Synchronisation GitHub Gist entre appareils

---

## 🤖 Architecture IA

```
Scan d'image
      │
      ▼ si API configurée (OpenRouter / Claude / GPT-4o)
  callOpenRouterVision()
      │ si offline ou erreur
      ▼ si VLM local chargé (désactivé — SmolVLM non supporté)
  localVLM (non actif)
      │
      ▼ si Phi-3 chargé
  OCR Tesseract → texte → Phi-3 Mini (text-generation, WASM)
      │
      ▼ sinon
  Erreur explicite

Génération de texte (exercices, planning, 3 niveaux)
      │
      ▼ si API configurée
  callAIText() → provider (Anthropic / OpenAI / OpenRouter)
      │ si offline
      ▼
  localLLM → Phi-3 Mini (WASM)
```

**Note WebGPU :** WebGPU a été désactivé — trop gourmand en mémoire sur iPad/mobile, bloquait le navigateur. WASM (mode par défaut) est stable sur tous les navigateurs.

---

## 🔧 Technologies

| Composant | Version | Rôle |
|---|---|---|
| docx.js | 8.5.0 | Génération Word côté navigateur |
| jsPDF | 2.5.1 | Génération PDF côté navigateur |
| Transformers.js | 3.4.0 | Phi-3 Mini en WASM |
| Tesseract.js | 5.x | OCR français + anglais |
| GitHub Pages | — | Hébergement HTTPS gratuit |
| Service Worker | v19 | Cache offline |

---

## 📁 Fichiers

```
exoscan/
├── index.html   — App complète (~121KB)
├── sw.js        — Service Worker v19
├── manifest.json
└── README.md
```

## 🔄 Mettre à jour sur GitHub

1. **github.com/cherradinab-byte/exoscan** → Add file → Upload files
2. Glisser les fichiers → Commit
3. Déploiement en 1–2 min

**Forcer le rechargement :** vider le cache du site dans les paramètres du navigateur (Settings > Site data), pas juste Ctrl+Shift+R — le Service Worker peut servir l'ancienne version.

---

## 🔒 Confidentialité

- Clé API stockée uniquement dans `localStorage` de l'appareil
- Seules les images d'exercices partent vers l'API choisie
- Mode hors-ligne : zéro donnée envoyée
- Aucune publicité, aucun tracking

---

*ExoScan Pro — v19 — Mars 2026*
