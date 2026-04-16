# Tangible

> **Ne louez plus votre passion. Possédez-la.**
> *Don't rent your passion. Own it.*

Projet Scrum'Innov — BUT3 Informatique · IUT Montpellier · 15-17 avril 2026.

Plateforme de cinéma numérique qui redonne aux spectateurs la **propriété réelle** de leurs films : achetés, téléchargés, chiffrés localement, certifiés on-chain, lisibles à vie hors-ligne.

## 🌐 Site en ligne

| URL | Contenu |
|-----|---------|
| `/` | Landing page marketing (HTML/CSS) |
| `/vault/` | Vault Obsidian publié (BMC, SWOT, Porter, financier, pitch…) |

## 🗂️ Structure du repo

```
tangible/
├── index.html              ← Landing page
├── styles.css
├── assets/                 ← Logos pour la landing
│
├── content/                ← Vault Obsidian (source de vérité Markdown)
│   ├── index.md            ← Hub (= MOC)
│   ├── 00 - Cadrage/       ← PDF converti, planning, critères jury
│   ├── 01 - Concept/       ← Description, slogan, identité, équipe, prototype
│   ├── 02 - Business Canvas/
│   ├── 03 - Analyse Stratégique/
│   ├── 04 - Financier/
│   ├── 05 - Pitch/
│   ├── 06 - Technique/
│   ├── 07 - Brainstorm/
│   └── assets/logos/       ← Logos SVG/PNG
│
├── reference/              ← Documents sources (PDF du TD, …)
│
├── quartz/                 ← Framework Quartz 4 (ne pas modifier)
├── quartz.config.ts        ← Configuration Quartz (theme, baseUrl)
├── quartz.layout.ts        ← Layout des pages générées
│
└── .github/workflows/deploy.yml  ← Build + publish vers GitHub Pages
```

## 🧑‍💻 Travailler en local

### Éditer le vault Obsidian
Ouvrir le dossier `content/` comme un vault dans Obsidian.
Les fichiers `.md` sont la source de vérité.

### Prévisualiser le vault en HTML (Quartz)

```bash
npm install              # installe Quartz + dépendances
npx quartz build --serve # lance le serveur local
```

→ Ouvre http://localhost:8080

### Prévisualiser la landing page

```bash
# Ouvre index.html directement dans le navigateur
xdg-open index.html          # Linux
open index.html              # macOS
```

Ou via un petit serveur local :

```bash
python3 -m http.server 8000
```
→ http://localhost:8000

## 🚀 Déploiement sur GitHub Pages

1. Créer un repo GitHub **public** : `https://github.com/Pixnop/tangible`
2. Pousser le code : `git remote add origin git@github.com:Pixnop/tangible.git && git push -u origin main`
3. Dans **Settings → Pages** du repo :
   - **Source** : *GitHub Actions*
4. À chaque push sur `main`, le workflow build + deploy automatiquement.

Le site sera publié sur : `https://tangible-app.eu/` (DNS à configurer sur OVH) avec fallback initial `https://pixnop.github.io/tangible/`.

### 🌐 Configuration du domaine `tangible-app.eu` (GitHub Pages)

1. Dans GitHub → **Settings → Pages → Custom domain** : renseigner `tangible-app.eu` (crée automatiquement le fichier `CNAME`).
2. Sur OVH → zone DNS de `tangible-app.eu`, ajouter :
   - `A    @    185.199.108.153`
   - `A    @    185.199.109.153`
   - `A    @    185.199.110.153`
   - `A    @    185.199.111.153`
   - `CNAME    www    pixnop.github.io.`
3. Cocher **Enforce HTTPS** une fois les DNS propagés (24-48 h max).
4. URLs finales :
   - Landing : `https://tangible-app.eu/`
   - Pitch : `https://tangible-app.eu/pitch/`
   - Vault : `https://tangible-app.eu/vault/`

> ⚠️ Si ton nom GitHub est différent, modifie `baseUrl` dans `quartz.config.ts` (actuellement `tangible-app.eu/vault`) avant le premier push.

## 📚 Technologies

- **Landing** : HTML5 + CSS3 (Fraunces + Inter + JetBrains Mono via Google Fonts)
- **Vault** : [Obsidian](https://obsidian.md) pour l'édition, [Quartz 4](https://quartz.jzhao.xyz/) pour la publication statique
- **Hosting** : GitHub Pages (gratuit pour repo public)

## 🎨 Identité visuelle

| Couleur | Hex | Usage |
|---------|-----|-------|
| Ink (anthracite) | `#2B2F33` | Empreinte du logo, texte principal |
| Flame (orange) | `#E6733C` | Bouton play du logo, accent, CTA |
| Ivory | `#FBF8F1` | Fond clair |

Typographies : **Fraunces** (titres) · **Inter** (corps) · **JetBrains Mono** (code/labels).

## 📜 Licences

- **Code du site vitrine** : MIT
- **Contenu du vault** : CC BY-SA 4.0
- **Quartz** (framework) : MIT — voir `LICENSE-QUARTZ.txt`

## 🔗 Ressources

- [Obsidian](https://obsidian.md) — éditeur markdown
- [Quartz 4 — docs](https://quartz.jzhao.xyz/)
- Fresque du Numérique — voir `content/00 - Cadrage/Fresque du Numérique.md`
- Référentiel Scrum'Innov — voir `reference/R6.01 - Calendrier et Contenu.pdf`
