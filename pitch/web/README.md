# 🎤 Tangible Pitch — Web edition

Pitch deck HTML/CSS/JS premium pour Scrum'Innov 2026.
**12 slides 16:9 · plein écran · notes du présentateur · export PDF.**

## 🚀 Lancer

### Option 1 — Ouvrir directement
```bash
xdg-open pitch/web/index.html     # Linux
open pitch/web/index.html         # macOS
start pitch/web/index.html        # Windows
```

### Option 2 — Serveur local (recommandé, pour les polices Google Fonts)
```bash
cd pitch/web
python3 -m http.server 8000
# → http://localhost:8000
```

## ⌨️ Contrôles

| Touche | Action |
|--------|--------|
| `→` `↓` `Espace` `Entrée` | Slide suivante |
| `←` `↑` | Slide précédente |
| `Home` / `End` | Début / Fin |
| `1`-`9` | Slide directe |
| `F` | Plein écran |
| `N` | Afficher/masquer notes |
| `P` | Export PDF (imprimer) |
| `?` | Aide |
| `Esc` | Fermer aide |

- **Clic gauche** de l'écran = précédent · **clic droit** = suivant
- **Swipe** (mobile/tablette) pour naviguer

## 📄 Export PDF (→ puis PowerPoint si besoin)

1. Presse `P` (ou Cmd/Ctrl+P)
2. Dans la boîte d'impression :
   - **Destination** : *Enregistrer au format PDF*
   - **Mise en page** : Paysage
   - **Marges** : Aucune
   - **Graphismes d'arrière-plan** : ✅ activés
3. Enregistrer → `Tangible-Pitch.pdf`
4. Pour PowerPoint : importe le PDF dans PPT (Insertion → Objet → PDF) ou ouvre-le directement en plein écran le jour J (pas besoin de PPT).

## 🎨 Design — ce qui est inclus

- **Palette** : `#2B2F33` ink · `#E6733C` flame · `#FBF8F1` ivory
- **Typos** : Fraunces (titres) · Inter (corps) · JetBrains Mono (labels)
- **Effets web premium** :
  - Radial gradients + linear gradients
  - `backdrop-filter: blur()` sur la HUD et les notes
  - Drop shadows multi-layer
  - Glows orange avec `box-shadow` + `text-shadow` + `filter: drop-shadow()`
  - Watermark logos en `opacity: 0.05`
  - Film grain fixe global
  - Animations subtiles : float, pulse, pulseDot
  - Tilt 3D sur le certificat (Slide 5)
  - Titres éditoriaux avec `em` italique orange

## 📝 Notes du présentateur

Chaque slide contient une `<aside class="notes">` avec les notes du script pitch 7 min. Touches `N` pour toggle.

## 🖋️ Éditer le contenu

Toute la structure est dans `index.html` — chaque slide est une `<section class="slide">` indépendante. Les styles dans `styles.css` sont organisés par slide. La navigation est dans `script.js`.

## 📦 Fichiers

```
pitch/web/
├── index.html    ← les 12 slides
├── styles.css    ← design system complet
├── script.js     ← navigation + keyboard + touch
├── README.md     ← ce fichier
└── assets/
    ├── tangible-logo-vertical.svg
    ├── tangible-logo-horizontal.svg
    ├── tangible-icon.svg
    └── tangible-favicon.png
```

## 🎯 Jour J — recommandation

1. **La veille** : tester en plein écran sur le projecteur de l'IUT si possible
2. **Backup** : avoir le PDF généré + le .pptx python-pptx + le HTML ouvert — 3 voies de secours
3. Brancher + `F` pour plein écran immédiat
4. `N` pour toggler les notes sur écran externe si config dual

Bonne chance 🎬 **Ne louez plus votre passion. Possédez-la.**
