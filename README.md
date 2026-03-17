# ExoScan Pro 📷 → 📄
### Assistant mathématiques pour enseignantes du primaire — Fédération Wallonie-Bruxelles

> Application web progressive (PWA) — fonctionne sur iPad, PC, Android — hors-ligne après premier chargement

🌐 **Lien live** : [cherradinab-byte.github.io/exoscan](https://cherradinab-byte.github.io/exoscan)

---

## ✨ Fonctionnalités

### 📷 Scan
Photographiez ou faites un screenshot d'un exercice (manuel scolaire, site web, FR ou EN) → l'IA analyse, traduit si besoin, et propose l'exercice éditable.

- **Traduction automatique** EN → FR avec adaptation des unités (miles → km, lbs → kg…)
- **Valeurs numériques modifiables** : chaque chiffre est cliquable et modifiable
- **Bouton "Nouveaux chiffres"** : randomise les valeurs en conservant la cohérence pédagogique
- **Ajout à la fiche** : l'exercice scanné rejoint la fiche en cours d'un tap

### ✨ Créer
Générateur d'exercices from scratch, sans photo, alimenté par l'IA.

**Types disponibles :**
- Calcul mental, Addition/Soustraction, Multiplication/Division
- Fractions, Géométrie, Mesures, Problème textuel, Numération
- **🆕 Exercice à trous** : `3 × ___ = 12`, `___ + 7 = 15`
- **🆕 Grille de nombres** : tableau interactif à compléter
- **🆕 Problème par étapes** : structure *Je lis / Je cherche / Je calcule / Je vérifie*

**Paramètres :** niveau (1re → 6e), difficulté (facile/normal/difficile), nombre de questions, thème/contexte optionnel

**Style belge :** consignes générées dans le style des manuels Tip Top, Maths et Moustique, Math Pratique (verbes d'action, langage simple, contextes wallons)

### 🗂️ Bibliothèque
Tous les exercices scannés ou générés sont sauvegardés automatiquement.

- **Filtre par chapitre** : Numération, Addition, Soustraction, Multiplication, Division, Fractions, Géométrie, Mesures, Problèmes
- **Recherche texte** libre dans les consignes
- **Rechargement en un tap** dans l'éditeur pour modifier et réutiliser
- **Sauvegarde locale** (localStorage, 200 exercices max)

### 📄 Export Word
Génère des fichiers `.docx` prêts à imprimer.

**Options d'export :**
- ☑ En-tête élève (Nom / Date / Classe)
- ☑ Lignes de réponse (pointillés)
- ☑ Barème (points par exercice, total /20)
- ☑ Version corrigé (2e fichier avec réponses)
- ☑ **🆕 Style manuel belge** : mise en page Maths et Moustique (en-tête tabulaire, numéros dans carré coloré, police plus grande, encadrés pour étapes)

**Variantes anti-copie :** génère 2/3/4 versions A/B/C/D du même exercice avec des chiffres différents, exportables en un seul fichier Word paginé.

### ✅ Corriger une copie
Mode correction automatique : photographiez le corrigé attendu + la copie d'un élève → l'IA compare et identifie les erreurs.

- Score X/Y affiché
- Liste des questions avec ✓/✗ et explication
- Feedback bienveillant pour l'élève

### 📅 Planning
Génère une séquence de cours complète en quelques secondes.

- Thème, niveau, durée (1/2/3 semaines), objectif
- Séances détaillées : titre, objectif, activités, matériel, durée
- Export Word du planning

### 📐 Géométrie
Éditeur de figures SVG interactif — construit une figure, visualise-la, insère-la dans le Word.

**Figures disponibles :**
- Rectangle, Carré, Triangle équilatéral, Triangle rectangle, Cercle, Pentagone

**Options en temps réel :**
- Dimensions en cm (modifiables instantanément)
- Afficher/masquer : dimensions cotées, angles droits, aire, périmètre, quadrillage
- 6 couleurs au choix, 4 modes de remplissage (vide, clair, plein, hachuré)
- Calcul automatique de l'aire et du périmètre

### 🛒 Banque de problèmes
30 problèmes contextualisés prêts à l'emploi, ancrés dans la vie quotidienne belge.

**10 contextes :** marché/courses, vélo/transport, friterie/resto, sport, météo/saisons, anniversaires/fêtes, école/classe, nature/jardin, maison/cuisine, kermesse/foire

**Filtres combinables :** contexte + niveau + opération (+ / - / × / ÷ / mixte) + recherche texte

**Personnalisation :** chaque problème s'ouvre dans un éditeur rapide — modifiez les valeurs, l'énoncé, la réponse — puis ajoutez à la fiche en un tap.

### ✖️ Tables de multiplication
Deux modes :

- **Grille** : tableau 10×10 complet, la table sélectionnée est surlignée, chips 1–10 pour naviguer
- **Drill ⚡** : entraînement aléatoire question par question, score, chrono, barre de progression, étoiles
- **Export Word** : fiche imprimable avec la table complète + exercice à trous aléatoire

### 📖 Dictionnaire mathématique
35 termes mathématiques du primaire avec définitions simples et exemples concrets.

- Recherche instantanée
- Filtre par catégorie (Addition, Fractions, Géométrie, Mesures…)
- Définition + exemple au tap

### ⚙️ Réglages
- **Synchronisation GitHub Gist** : sauvegarde/restauration de la bibliothèque entre appareils
- **Statut de l'IA** : mode actif (API / IA locale / WASM)
- **Test API** : vérifie la connexion OpenRouter
- **Recharge l'IA locale** si besoin

---

## 🤖 Architecture IA — Mode hybride automatique

ExoScan fonctionne avec 4 niveaux de fallback automatiques, sans aucune action de l'utilisateur :

```
1. 🌐 API OpenRouter (Mistral Small 3.1 / Llama 3.2 Vision / Gemini 2.0 Flash)
        ↓ si pas de connexion ou quota atteint
2. 🔒 SmolVLM local via WebGPU (Chrome/Brave/Firefox — 3-8s)
        ↓ si WebGPU non disponible
3. 🟡 SmolVLM local via WASM (Safari — 20-40s)
        ↓ si modèle non chargé
4. 📝 OCR Tesseract + Phi-3 Mini texte (extraction + analyse textuelle)
```

**Pour le scan d'images**, l'API est toujours privilégiée (vision de meilleure qualité). Les modèles locaux prennent le relais automatiquement hors-ligne.

**Pour la génération de texte** (créer des exercices, planning, correction), l'IA locale fonctionne entièrement hors-ligne après le premier téléchargement (~400MB mis en cache).

---

## 🔧 Technologies utilisées

| Composant | Outil | Description |
|---|---|---|
| **IA Vision (API)** | [OpenRouter](https://openrouter.ai) | Passerelle vers Mistral, Llama, Gemini — gratuit |
| **IA Vision (local)** | [SmolVLM via Transformers.js](https://huggingface.co/HuggingFaceTB/SmolVLM-256M-Instruct) | Modèle vision-langage 256M, ONNX quantisé q4 |
| **IA Texte (local)** | [Phi-3 Mini via Transformers.js](https://huggingface.co/Xenova/Phi-3-mini-4k-instruct) | Génération de texte offline |
| **OCR local** | [Tesseract.js](https://tesseract.projectnaptha.com/) | Extraction de texte des images (FR + EN) |
| **Export PDF** | [jsPDF](https://raw.githack.com/MrRio/jsPDF/master/docs/) v2.5 | Génération PDF côté navigateur |
| **Fiches 3 niveaux** | IA + interface native | Génération ⭐/⭐⭐/⭐⭐⭐ avec sélection et export |
| **PWA / Cache** | Service Worker | Cache offline, installation écran d'accueil |
| **Sync** | GitHub Gist API | Sauvegarde privée de la bibliothèque |
| **Figures SVG** | Vanilla JS + SVG | Éditeur géométrie côté client, export dans Word |
| **Hébergement** | [GitHub Pages](https://pages.github.com/) | Gratuit, HTTPS, déploiement automatique |
| **Polices** | Google Fonts (Lora + DM Sans) | Mises en cache par le SW |

---

## 🚀 Installation et démarrage

### Utiliser l'app (sans installation technique)

1. Ouvrir [cherradinab-byte.github.io/exoscan](https://cherradinab-byte.github.io/exoscan) dans **Chrome, Brave ou Firefox**
2. Créer un compte gratuit sur [openrouter.ai](https://openrouter.ai) → **Keys** → **Create Key**
3. Coller la clé (`sk-or-v1-…`) dans l'écran de démarrage
4. L'app est prête — l'IA locale se charge en arrière-plan

### Installer comme app sur iPad

1. Ouvrir l'URL dans **Chrome ou Brave** (recommandé pour WebGPU)
2. Menu du navigateur → **"Ajouter à l'écran d'accueil"**
3. L'app s'ouvre en plein écran comme une app native

> **Note Safari/iPad** : Safari ne supporte pas encore WebGPU de façon stable. L'analyse d'images fonctionne via WASM (20-40s) ou API. Pour la meilleure expérience offline, utilisez Brave ou Chrome.

### Déployer sa propre version

```bash
# Forker le repo GitHub
# Modifier index.html selon vos besoins
# Activer GitHub Pages : Settings → Pages → main / root
# URL : https://votre-pseudo.github.io/exoscan
```

---

## 🔄 Synchronisation entre appareils

La bibliothèque d'exercices peut être synchronisée entre iPad, PC, etc. via un **GitHub Gist privé**.

1. Aller sur [github.com/settings/tokens](https://github.com/settings/tokens/new?scopes=gist)
2. Créer un token avec le scope **gist** uniquement
3. Dans ExoScan → ⚙️ Réglages → coller le token → **Sauvegarder**
4. Sur un autre appareil : même token → **Restaurer**

---

## 📁 Structure des fichiers

```
exoscan/
├── index.html      — Application complète (HTML + CSS + JS en un fichier)
├── sw.js           — Service Worker (cache offline, mise à jour automatique)
├── manifest.json   — Manifest PWA (icône, couleurs, mode standalone)
└── README.md       — Cette documentation
```

---

## 🗺️ Roadmap — Améliorations prévues

- [ ] **Suivi individuel des élèves** — registre par élève, points faibles, progrès
- [ ] **Tableau de bord de classe** — vue synthétique, génération ciblée
- [ ] **Mode quiz interactif** — projection sur tableau, réponses en temps réel
- [ ] **Analyse des erreurs récurrentes** — détecte les patterns sur plusieurs copies
- [x] **Fiches à 3 niveaux** — génération ⭐/⭐⭐/⭐⭐⭐ avec sélection interactive et export Word + PDF
- [x] **Export PDF** — depuis la page Export et les fiches 3 niveaux
- [x] **Adaptation rapide** — boutons Simplifier/Enrichir/Changer contexte/Nouveaux chiffres sur chaque exercice
- [ ] **Export PDF direct** — sans passer par Word
- [ ] **Reconnaissance écriture manuscrite** — transcrire les réponses d'élèves
- [ ] **Rapport de fin de trimestre** — synthèse exportable

---

## 🔒 Confidentialité et sécurité

- **Aucune donnée envoyée à un serveur tiers** sauf les requêtes API OpenRouter (texte et images d'exercices)
- La clé API est stockée uniquement dans le `localStorage` de votre appareil
- La bibliothèque d'exercices est stockée localement (localStorage)
- La sync GitHub Gist utilise un token à portée minimale (`gist` uniquement)
- Les modèles IA locaux tournent entièrement sur votre appareil — zéro donnée envoyée

> Pour un usage 100% offline et privé : chargez l'IA locale une première fois avec connexion, puis déconnectez-vous. Tout fonctionne ensuite sans internet.

---

## 🤝 Crédits

Développé avec [Claude](https://claude.ai) (Anthropic) comme assistant de développement.

Conçu pour les enseignantes de l'école fondamentale en **Fédération Wallonie-Bruxelles**, en référence aux manuels **Tip Top Maths**, **Maths et Moustique** (Plantyn) et **Math Pratique** (Van In).

---

*ExoScan Pro — v8 — Mars 2026*
