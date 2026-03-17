# ExoScan Pro 📷 → 📄
### Assistant mathématiques pour enseignantes du primaire — Fédération Wallonie-Bruxelles

> Application web progressive (PWA) — iPad, PC, Android — fonctionne **hors-ligne** après premier chargement

🌐 **Live** : [cherradinab-byte.github.io/exoscan](https://cherradinab-byte.github.io/exoscan)

---

## 🚀 Démarrage — 4 modes disponibles

Au premier lancement, choisissez votre mode. **Aucune clé n'est obligatoire.**

| Mode | Description | Clé requise | Coût |
|---|---|---|---|
| 🌐 **OpenRouter** | Mistral, Llama, Gemini Flash | `sk-or-v1-…` | Gratuit |
| 🤖 **Claude (Anthropic)** | Meilleure qualité · Claude Sonnet | `sk-ant-…` | Payant (~0.01-0.03€/scan) |
| ✨ **ChatGPT (OpenAI)** | GPT-4o Vision | `sk-proj-…` | Payant (~0.01-0.03€/scan) |
| 🔒 **Hors-ligne** | IA locale · **Aucune clé requise** | — | Gratuit |

Le mode et la clé sont **modifiables à tout moment** dans ⚙️ Réglages.

### Mode hors-ligne — comment ça marche

Le mode hors-ligne utilise deux modèles IA qui tournent entièrement sur votre appareil :
- **SmolVLM 256M** (HuggingFace) — analyse d'images / vision
- **Phi-3 Mini** (Microsoft via Transformers.js) — génération de texte

**Premier lancement offline :**
1. Sélectionner "Hors-ligne" → "Enregistrer et commencer"
2. Un écran de chargement s'affiche avec barre de progression
3. Les modèles se téléchargent (~400MB au total) — **connexion internet requise ce jour-là uniquement**
4. Une fois terminé : l'app fonctionne entièrement sans internet pour toujours

**Performances selon le navigateur :**
| Navigateur | Technologie | Vitesse d'analyse |
|---|---|---|
| Chrome / Brave | WebGPU | 3–8 secondes |
| Firefox | WebGPU | 3–10 secondes |
| Safari (iPad) | WASM | 20–40 secondes |

> Recommandé sur iPad : **Brave** ou **Chrome** pour activer WebGPU et obtenir les meilleures performances.

### Installer comme app sur iPad
1. Ouvrir dans **Chrome ou Brave**
2. Menu (⋯) → **Ajouter à l'écran d'accueil**
3. L'app s'ouvre en plein écran comme une app native, avec icône dédiée

---

## ✨ Fonctionnalités

### 📷 Scan
Photo ou screenshot d'un exercice → analyse IA → exercice éditable prêt à exporter.

- Traduction automatique EN → FR, adaptation des unités (miles→km, lbs→kg…)
- Valeurs numériques modifiables individuellement
- **Boutons d'adaptation rapide** (sous chaque exercice scanné) :
  - ⬇ Simplifier — réduit la difficulté
  - ⬆ Enrichir — augmente la difficulté
  - 🔄 Changer contexte — même structure, thème différent (belge, concret)
  - 🔢 Nouveaux chiffres — randomise les valeurs
- Bouton **⭐ 3 niveaux** pour générer les 3 versions depuis un exercice scanné
- OCR Tesseract intégré : extraction de texte avant l'analyse IA pour améliorer la précision

### ✨ Créer
Générateur d'exercices IA avec style des manuels belges (Tip Top, Maths et Moustique, Math Pratique).

**Types disponibles :**
- Calcul mental, Addition/Soustraction, Multiplication/Division, Fractions, Géométrie, Mesures, Problème textuel, Numération
- **Exercice à trous** : `3 × ___ = 12`, `___ + 7 = 15` — grille, réponses masquées révélables
- **Grille de nombres** : tableau interactif à double entrée avec cases vides à compléter
- **Problème par étapes** : structure *Je lis / Je cherche / Je calcule / Je vérifie*

**Paramètres :** niveau (1re–6e), difficulté (facile/normal/difficile), nombre de questions, thème/contexte optionnel

### ⭐ Fiches 3 niveaux
Depuis n'importe quel exercice (scan ou génération) → l'IA génère 3 versions calibrées :

- **⭐ Facile** — élèves en difficulté (nombres réduits, consigne simplifiée)
- **⭐⭐ Moyen** — version standard
- **⭐⭐⭐ Difficile** — élèves avancés (étapes supplémentaires, contexte enrichi)

Interface native : cartes sélectionnables/désélectionnables, détail expansible (consigne + réponse + conseil pédagogique pour l'enseignante), export Word ou PDF des niveaux cochés uniquement.

### 🗂️ Bibliothèque
Tous les exercices sauvegardés automatiquement (200 max, localStorage).
- Filtre par chapitre (9 chapitres) + recherche texte libre
- Rechargement en un tap dans l'éditeur

### 📄 Export
**Word (.docx) et PDF** disponibles depuis la même page.

Options :
- ☑ En-tête élève (Nom / Date / Classe)
- ☑ Lignes de réponse (pointillés)
- ☑ Barème (points par exercice, total /20)
- ☑ Version corrigé (2e fichier avec réponses)
- ☑ **Style manuel belge** — mise en page Maths et Moustique : tableau en-tête, numéro dans carré coloré, encadrés colorés pour les étapes

**Variantes anti-copie** : A/B/C/D avec chiffres différents automatiquement.

### ✅ Corriger une copie
Photo du corrigé + photo de la copie élève → l'IA compare et affiche :
- Score X/Y
- Liste ✓/✗ par question avec explication
- Feedback bienveillant pour l'élève

### 📅 Planning
Génère une séquence de cours complète (thème, niveau, durée, objectif) avec séances détaillées exportables en Word.

### 📐 Géométrie
Éditeur SVG interactif : rectangle, carré, triangle, triangle rectangle, cercle, pentagone.
- Dimensions en cm (temps réel), 4 modes de remplissage, 6 couleurs
- Affichage optionnel : dimensions cotées, angles droits, aire, périmètre, quadrillage
- Export dans le Word avec la figure reproduite

### 🛒 Banque de problèmes
30 problèmes contextualisés belges — 10 contextes (marché, vélo, friterie, sport, météo, anniversaires, école, nature, maison, kermesse).
- Filtres combinables : contexte + niveau + opération (+ / - / × / ÷ / mixte)
- Personnalisation avant ajout à la fiche

### ✖️ Tables de multiplication
- **Grille** : tableau 10×10 complet, table sélectionnée surlignée, chips 1–10
- **Drill ⚡** : entraînement aléatoire, score, chrono, barre de progression, étoiles
- **Export Word** : fiche imprimable + exercice à trous aléatoire

### 📖 Dictionnaire
35 termes mathématiques primaire avec définitions simples et exemples. Recherche + filtre par catégorie.

### ⚙️ Réglages
- **Changer provider / clé API** à tout moment
- **Synchronisation GitHub Gist** — bibliothèque sauvegardée entre appareils
- Statut IA actif (API / WebGPU / WASM), test API, rechargement IA locale

---

## 🤖 Architecture IA — Hybride automatique

L'app sélectionne automatiquement la meilleure méthode disponible, sans intervention de l'utilisateur :

```
Scan d'image ou génération de texte
         │
         ▼
1. API configurée (OpenRouter / Claude / GPT-4o)
   — si connexion internet + clé valide
         │ si hors-ligne, erreur réseau, ou mode offline
         ▼
2. SmolVLM local — WebGPU (Chrome/Brave/Firefox)
   — 3–8 secondes, nécessite téléchargement initial
         │ si WebGPU indisponible
         ▼
3. SmolVLM local — WASM (Safari, tous navigateurs)
   — 20–40 secondes
         │ si modèle pas encore chargé
         ▼
4. OCR Tesseract + Phi-3 Mini texte
   — extraction texte de l'image + analyse textuelle
```

**Important :** les modèles locaux (~400 MB) nécessitent une connexion pour le **premier téléchargement uniquement**. Ils sont ensuite mis en cache par le navigateur et le Service Worker, et fonctionnent indéfiniment hors-ligne.

---

## 🔧 Technologies

| Composant | Outil | Version | Rôle |
|---|---|---|---|
| **IA Vision API** | OpenRouter / Anthropic / OpenAI | — | Analyse images, génération texte via API |
| **IA Vision locale** | SmolVLM via Transformers.js | 256M instruct | Vision offline, WebGPU ou WASM |
| **IA Texte locale** | Phi-3 Mini via Transformers.js | 4k instruct | Génération texte offline |
| **OCR local** | Tesseract.js | v5 | Extraction texte FR + EN |
| **Export Word** | docx.js | v8.5 | Génération `.docx` côté navigateur |
| **Export PDF** | jsPDF | v2.5 | Génération `.pdf` côté navigateur |
| **PWA / Cache** | Service Worker | v11 | Cache offline, installation écran d'accueil |
| **Sync** | GitHub Gist API | — | Sauvegarde bibliothèque entre appareils |
| **Géométrie** | SVG + JS vanilla | — | Éditeur figures, export dans Word |
| **Hébergement** | GitHub Pages | — | Gratuit, HTTPS, déploiement automatique |
| **Polices** | Google Fonts | — | Lora + DM Sans, mises en cache SW |

---

## 📁 Structure des fichiers

```
exoscan/
├── index.html      — Application complète (HTML + CSS + JS, ~172KB)
├── sw.js           — Service Worker v11 (cache offline, mise à jour auto)
├── manifest.json   — Manifest PWA (icône, couleurs, mode standalone)
└── README.md       — Cette documentation
```

---

## 🔄 Mettre à jour sur GitHub

1. Aller sur **github.com/cherradinab-byte/exoscan**
2. **Add file** → **Upload files** → glisser les fichiers modifiés
3. Message de commit (ex: `ExoScan v11`) → **Commit changes**
4. Déploiement automatique en 1–2 minutes

**Forcer le rechargement après mise à jour :**
- PC : `Ctrl+Shift+R` (Windows/Linux) · `Cmd+Shift+R` (Mac)
- iPad : maintenir le refresh · ou vider le cache navigateur

---

## 🔒 Confidentialité et sécurité

- Clé API stockée **uniquement dans le `localStorage`** de votre appareil — jamais envoyée ailleurs
- Seules les **images d'exercices** sont transmises à l'API choisie (OpenRouter / Anthropic / OpenAI)
- **Mode hors-ligne** : zéro donnée envoyée, tout tourne sur l'appareil
- Sync GitHub Gist : token à portée minimale (`gist` uniquement, pas d'accès aux repos)
- Aucune publicité, aucune télémétrie, aucun tracking

---

## 🗺️ Roadmap

- [ ] Suivi individuel des élèves (registre, points faibles, progrès)
- [ ] Tableau de bord de classe (vue synthétique, génération ciblée)
- [ ] Mode quiz interactif (projection sur tableau, réponses temps réel)
- [ ] Analyse des erreurs récurrentes (patterns sur plusieurs copies)
- [ ] Export Google Classroom / Teams
- [ ] Reconnaissance écriture manuscrite élèves
- [ ] Rapport de fin de trimestre exportable

---

## 🤝 Crédits

Développé avec [Claude](https://claude.ai) (Anthropic) comme assistant de développement.

Conçu pour les enseignantes de l'école fondamentale en **Fédération Wallonie-Bruxelles**.
Référence pédagogique : manuels **Tip Top Maths** (La Cigale), **Maths et Moustique** (Plantyn), **Math Pratique** (Van In).

---

*ExoScan Pro — v11 — Mars 2026*
