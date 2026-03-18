# ExoScan Pro 📷 → 📄
### Assistant mathématiques pour enseignantes du primaire — FWB

🌐 **Live** : [cherradinab-byte.github.io/exoscan](https://cherradinab-byte.github.io/exoscan)

---

## 🚀 Démarrage

| Mode | Description | Clé |
|---|---|---|
| 🌐 OpenRouter | Mistral, Llama, Gemini — gratuit | `sk-or-v1-…` |
| 🤖 Claude | Meilleure qualité (Anthropic) | `sk-ant-…` |
| ✨ ChatGPT | GPT-4o Vision (OpenAI) | `sk-proj-…` |
| 🔒 Hors-ligne | Qwen2.5-0.5B + OCR — sans clé | — |

Le bouton ⚙ (ou la pastille IA cliquable) permet de changer de mode à tout moment.

### Mode hors-ligne
Télécharge **Qwen2.5-0.5B (~400MB)** une seule fois, ensuite 100% hors-ligne. Le chargement se fait **en arrière-plan** — navigation libre pendant ce temps. Une bannière indique la progression.

### Installer sur iPad
Chrome/Brave → ⋯ → **Ajouter à l'écran d'accueil**

### Export sur iPad (Word/PDF)
Sur iOS, le fichier s'ouvre dans un nouvel onglet → icône **Partager** → **Enregistrer dans Fichiers**.

---

## 📷 Scan depuis un livre

L'app est conçue pour ça. Vous pouvez photographier une page de manuel scolaire :
- L'IA extrait et traduit tous les exercices visibles
- Vous éditez, adaptez, ajoutez à la fiche
- Vous exportez une fiche propre en Word ou PDF — plus besoin de découper et recoller !

L'API (OpenRouter/Claude/GPT) donne les meilleurs résultats pour les images complexes. Le mode hors-ligne fonctionne bien pour les exercices avec du texte lisible.

---

## 📋 Onglets

| # | Nom | Fonction |
|---|---|---|
| 0 | 📷 Scan | Photo → exercice éditable |
| 1 | ✨ Créer | Génération IA d'exercices |
| 2 | 🗂 Biblio | Bibliothèque locale (200 exos) |
| 3 | 📄 Export | Fiche Word + PDF |
| 4 | ✅ Corr. | Correction de copies |
| 5 | 📅 Plan | Séquence de cours |
| 6 | 📐 Géom. | Éditeur SVG de figures |
| 7 | 🛒 Banque | 30 problèmes contextualisés belges |
| 8 | ✖ Tables | Grille + drill multiplication |
| 9 | 📖 Dico | 35 termes mathématiques |
| 10 | ⚙ Régl. | API, IA locale, sync Gist |

---

## 🔧 Technologies

| | Version |
|---|---|
| docx.js | 8.5.0 |
| jsPDF | 2.5.1 |
| Transformers.js | 3.4.0 |
| Tesseract.js | 5.x |
| Service Worker | v20 |

---

## 🔄 Déploiement

1. **github.com/cherradinab-byte/exoscan** → Add file → Upload files
2. Glisser `index.html`, `sw.js`, `manifest.json`, `icon.svg`, `README.md`
3. Vider le cache du site dans les paramètres du navigateur après mise à jour

---

*ExoScan Pro — v20 — Mars 2026*
