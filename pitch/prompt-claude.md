# 🎤 Prompt — Pitch deck Tangible (Scrum'Innov)

> **Usage** : copie TOUT ce qui est en dessous de la ligne `========` et colle-le dans une nouvelle conversation Claude (ou une IA similaire). La partie avant la ligne est une notice pour toi.

## 📝 Notice (pour toi — ne pas envoyer à Claude)

**Objectif** : obtenir un `.pptx` PowerPoint premium, design studio, en 1 aller-retour avec Claude.

**Pourquoi ce prompt ?**
- La v1 python-pptx locale est trop basique (python-pptx ne peut pas faire de gradients, blur, ombres natives)
- Claude via une fresh session peut produire un code beaucoup plus soigné, avec la bonne direction artistique

**Voie recommandée (dans le prompt)** : Slidev markdown → `slidev export --format pptx` → PowerPoint direct
**Alternative** : script python-pptx amélioré (v2) si Claude préfère

**Après réception de la réponse Claude** :
1. Sauve le `slides.md` ou `generate.py` dans `pitch/v2/`
2. Suis son README (commande d'install + commande de génération)
3. Ouvre le .pptx généré dans PowerPoint → ajuste manuellement ce qui doit l'être
4. Présente au jury 🎬

========================================================================

# Mission

Tu es **directeur artistique d'un studio de pitch decks** (pense Stripe Sessions, Linear Yearbook, Figma Config). Je te demande de concevoir le pitch deck pour **Tangible**, un projet d'entreprise étudiant présenté devant un jury dans un créathlon (Scrum'Innov, BUT3 Informatique, IUT Montpellier — les 15-17 avril 2026).

Le deck fait **12 slides**, format **16:9**, pitch de **7 minutes**. Il doit être **design, éditorial, premium** — pas basique, pas Comic Sans, pas sauce PowerPoint 2007.

## Format de sortie demandé — **livrable final = fichier `.pptx` PowerPoint**

Le jury attend un .pptx lisible le jour J sur le projecteur de l'IUT (Windows + PowerPoint). **Priorité absolue** : un fichier `.pptx` qui s'ouvre et rend correctement.

**Voie à suivre (recommandée)** : tu écris un fichier **`slides.md` Slidev** que je vais ensuite exporter en `.pptx` avec la commande :
```bash
npm init slidev@latest       # 1 fois pour setup
# copie ton slides.md dans le projet
npx slidev export slides.md --format pptx
# → slides-export.pptx prêt pour PowerPoint
```

**Contraintes pour que l'export pptx fonctionne bien** :
- Chaque slide est une section Markdown séparée par `---`
- YAML frontmatter en tête : theme neutre (`default`), fonts système (Georgia/Calibri/Consolas — pas de Google Fonts exotiques qui perdent le rendu au export)
- **Évite les composants Vue dynamiques / animations / `<Toc/>` / v-click** — ils ne s'exportent pas en pptx
- **Privilégie HTML + CSS inline** plutôt que les layouts Slidev avancés
- Images référencées avec chemins relatifs `![](/logos/xxx.svg)` ou embed SVG inline
- Notes du présentateur via `<!-- ... -->` après chaque slide

**Format de chaque slide** :
```markdown
---
layout: default
background: '#1C1F24'
---

<div class="relative h-full w-full text-white p-16">
  <h1 class="text-6xl font-serif italic">Acheter ≠ Posséder.</h1>
  <!-- reste du contenu en HTML+Tailwind -->
</div>

<!--
Notes du présentateur ici.
-->
```

**Alternative si tu préfères** : livre un **script Python `generate.py` utilisant `python-pptx`** qui génère directement le `.pptx`. Si tu vas dans cette direction, sois maximaliste sur les shapes rounded, les shadows (layer offset), les gradients hacks via XML (`a:gradFill`), les accents visuels. Cite tes limites (pas de blur, pas de vrai drop-shadow, etc.) et contourne-les proprement.

**Dans les deux cas** : le jury doit recevoir un `.pptx` visuellement premium. Pas de pitch deck par défaut. Pas de bullet points sans hiérarchie.

---

# 🎬 Contexte — Projet Tangible

**Tangible** est une plateforme de cinéma numérique qui redonne aux spectateurs la **propriété réelle** de leurs films.

Contrairement à Netflix (accès loué) ou iTunes/Google Play (« achat » mais licence révocable, DRM propriétaire, pas de revente), Tangible propose :

1. **Tangible Player** — media center local premium : bibliothèque chiffrée (AES-256), lecture 4K HDR Dolby Vision, cast universel (Chromecast/AirPlay/DLNA), profils enfants, **100 % hors-ligne** après téléchargement.

2. **Tangible Store** — boutique légale où chaque achat génère un **certificat de propriété cryptographique** sur blockchain (Polygon L2). Le certificat est **vérifiable hors-ligne**. Distribution via P2P/IPFS. Marché secondaire de revente avec **royalties automatiques aux ayants droit** (15 %).

**Modèle économique :**
- Commission vente initiale : 20 % (studio 70 %, seeders 10 %, Tangible 20 %)
- Commission revente : 5 % (vendeur 80 %, ayants droit 15 %, Tangible 5 %)
- Tangible Pass optionnel : 7,99 €/mois (catalogue rotatif)
- Licence SDK B2B pour studios et distributeurs tiers

**Prix utilisateur** : 5-8 € SD · 8-12 € HD · 12-18 € 4K · bundles −20 %.

**Cibles** : cinéphiles frustrés par les retraits de films, collectionneurs numériques, défenseurs du numérique responsable, familles (profils enfants, téléchargements voyage), studios indépendants (B2B).

**Angle « numérique responsable »** (important pour ce jury) :
- Lutte contre l'obsolescence des contenus (Microsoft Movies fermé en 2021, Disney+ retire, iTunes bloque)
- Droit de propriété numérique vs location déguisée
- Alternative aux GAFAM
- Économie circulaire par la revente
- **Téléchargement unique vs re-streaming** : ~−80 % d'émissions CO2 sur 5 visionnages vs SVOD
- Moins d'énergie, plus de pérennité

**Marché** : 130 Mds € marché vidéo mondial. Fatigue abonnements : 3,4 SVOD/foyer en France, 300 €/an.

**Ask** : **950 k€ en amorçage** (500 k€ seed + 450 k€ prêt d'honneur + BPI). Runway 12 mois, MVP Player, Store bêta, 5 000 premiers utilisateurs.

**Trajectoire** : 8k users en 2026 (200 k€ CA) → 45k en 2027 (1,6 M€) → 150k en 2028 (6,7 M€). Break-even début 2028.

**Équipe** : 4 fondateurs (CEO produit, CTO archi, CSO sécurité, CPO UX), issus des 3 parcours BUT Informatique. Rampup à 25 ETP sur 3 ans.

---

# 🎨 Charte visuelle

| Rôle | Hex | Usage |
|------|-----|-------|
| Ink anthracite | `#2B2F33` | Texte principal, fonds sombres |
| Ink deep | `#1C1F24` | Fond des slides dramatiques |
| Ink soft | `#3A3E45` | Texte secondaire |
| **Flame (orange)** | `#E6733C` | Accent stratégique, CTA, bouton play du logo |
| Flame bright | `#FF8A4F` | Hover, glow |
| Flame deep | `#C5582A` | Hover pressed, titres sur fond clair |
| Ivory | `#FBF8F1` | Fond clair principal |
| Ivory deep | `#F3ECDE` | Fond clair secondaire |
| Paper | `#FFFFFF` | Cards sur fond ivory |
| Muted | `#9C978D` | Labels secondaires |
| Success | `#3AA574` | ✓ dans comparatifs |
| Danger | `#D14A3D` | ✕ dans comparatifs |

**Typographies :**
- **Titres** : *Fraunces* (serif moderne, éditorial) — fallback Georgia
- **Corps** : *Inter* — fallback Calibri / Helvetica
- **Mono/eyebrow/code** : *JetBrains Mono* — fallback Consolas / Menlo

**Hiérarchie typo cible** :
- Eyebrow : mono 11pt caps letter-spacing 0.18em, flame color
- H1 slide : serif 44-58pt bold, parfois italic
- H2 section : serif 24-32pt
- Body : sans 15-17pt line-height 1.6
- Footer : mono 9-10pt muted

---

# 🔖 Slogan

**FR** : « **Ne louez plus votre passion. Possédez-la.** »
**EN** : « **Don't rent your passion. Own it.** »

Usage :
- FR en italique serif gros sur slides cover/closing
- EN en mono caps petit en sous-titre (ponctuation graphique)

---

# 🖼️ Logos — sources SVG fournies

Le logo est une **empreinte digitale** (= propriété unique) avec un **bouton play orange au centre** (= cinéma). Couleurs exactes : `#2B2F33` (ink) pour les lignes d'empreinte et `#E6733C` (flame) pour le play.

**3 variantes disponibles** — tu peux les utiliser directement en SVG inline dans ton HTML/Slidev, ou sauvegarder chaque SVG dans `public/logos/` (Slidev) puis les référencer avec `![](/logos/xxx.svg)` ou `<img src="/logos/xxx.svg">`.

## Variante 1 : `tangible-icon.svg` (empreinte + play, portrait)

Usage recommandé : favicon, watermark géant sur slides, app icon, accent décoratif.

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="340 270 335 470"><path fill="#2B3136" d="M501.808 315.228C506.885 315.15 511.852 315.059 516.927 315.429C548.38 317.961 577.589 332.717 598.288 356.534C617.415 378.79 627.617 403.195 628.715 432.678C629.316 448.853 631.397 463.895 617.531 475.577C611.1 481.08 602.729 483.771 594.296 483.047C587.86 482.463 578.824 478.512 573.827 474.691C561.405 465.192 536.226 453.72 526.721 442.4C525.477 432.191 522.748 423.219 511.395 419.945C508.305 419.051 505.021 419.084 501.949 420.039C490.577 423.5 492.715 432.618 484.73 438.246C481.219 440.722 472.03 438.305 470.995 433.556C467.917 419.438 482.653 405.192 494.773 400.94C504.362 397.594 514.895 398.249 523.995 402.757C537.05 409.242 542.393 419.109 546.678 432.158C555.012 438.331 587.665 460.072 595.992 462.739C604.422 460.838 608.26 458.418 608.656 449.269C609.892 420.676 602.792 393.542 584.156 371.732C566.539 350.96 541.393 338.036 514.249 335.801C459.32 331.547 409.381 377.254 406.75 431.882C406.342 440.358 406.445 448.685 406.464 457.164L406.503 496.941L406.496 543.391C406.499 559.853 405.857 576.9 409.436 593.011C412.815 608.56 420.047 623.01 430.467 635.035C448.935 656.19 472.886 669.347 501.124 671.249C547.811 674.848 591.756 641.092 603.832 596.733C607.558 583.044 605.214 566.342 614.67 555.463C625.854 542.595 647.201 540.079 659.566 552.754C666.416 559.511 670.258 568.293 670.035 577.755C669.132 615.945 652.501 652.374 626.583 680.086C624.423 682.399 621.478 684.1 618.335 684.002C615.506 683.909 612.829 682.694 610.898 680.625C602.024 671.133 617.303 660.417 622.682 652.829C638.699 630.232 649.206 604.49 649.552 576.495C649.708 563.856 634.239 561.271 628.484 571.09C627.555 573.62 627.268 577.441 627.116 580.054C625.58 606.544 614.803 630.528 597.358 650.858C576.525 674.706 547.181 689.447 515.613 691.924C484.025 694.062 452.883 683.561 429.039 662.732C379.315 619.474 386.97 575.355 386.921 517.094L386.775 455.388C386.877 438.015 385.753 426.511 389.87 408.89C394.363 390.058 403.421 372.619 416.243 358.112C439.086 332.125 467.053 317.342 501.808 315.228Z"/><path fill="#2B3136" d="M506.461 273.212C542.339 271.897 582.297 287.31 609.878 309.994C643.791 337.41 665.241 377.322 669.392 420.733C670.654 434.297 670.762 456.426 669.526 469.724C667.168 495.096 647.242 515.705 624.478 524.931C612.953 529.603 600.124 537.888 593.554 548.883C586.381 559.612 587.257 570.962 585.375 582.944C579.851 618.127 549.541 647.087 514.36 650.104C493.463 651.967 472.683 645.449 456.594 631.985C440.045 618.073 429.831 598.055 428.277 576.491C427.651 568.438 427.941 559.156 427.991 550.993L428.009 516.138L428.011 461.782C428.032 449.367 427.53 430.949 430.028 419.376C432.891 406.692 438.83 394.907 447.321 385.06C461.75 368.293 479.996 358.768 502.031 357.125C522.769 355.583 543.263 362.394 558.953 376.042C569.902 385.524 575.294 394.001 581.616 406.709C588.958 421.468 574.991 430.454 565.8 421.075C564.221 418.769 562.513 414.642 561.213 412.019C550.646 390.701 527.185 376.005 503.306 377.832C487.208 379.087 472.286 386.747 461.883 399.095C447.013 416.797 447.981 434.071 448.051 455.539L448.123 491.846L448.096 542.342C448.092 552.567 447.779 565.682 448.724 575.66C450.173 591.589 457.949 606.271 470.31 616.419C482.258 626.199 497.608 630.821 512.969 629.263C540.297 626.393 562.517 603.617 565.949 576.679C566.78 570.156 566.991 563.574 568.456 557.159C570.879 546.632 575.917 536.887 583.104 528.823C589.446 521.678 597.037 515.742 605.487 511.302C617.963 504.746 630.728 500.807 639.858 489.236C643.761 484.22 646.575 478.446 648.122 472.281C651.015 460.56 649.978 429.804 648.407 417.488C643.531 380.336 624.066 346.653 594.31 323.879C552.24 291.525 499.503 284.808 451.147 305.871C445.354 308.395 439.469 312.793 433.342 314.063C428.616 315.043 421.828 309.17 421.602 304.4C421.316 295.835 433.738 291.397 440.005 288.462C451.708 282.982 463.429 279.01 476.09 276.512C486.28 274.501 496.125 273.755 506.461 273.212Z"/><path fill="#E9763C" d="M481.789 446.539C486.355 446.347 490.669 446.322 494.726 448.844C512.505 459.897 530.091 471.35 547.668 482.732C552.124 485.617 557.424 488.845 561.565 492.064C562.991 493.167 564.227 494.495 565.225 495.996C567.877 499.915 568.635 504.922 567.619 509.529C565.48 519.226 555.908 523.825 548.146 528.41C542.808 531.562 537.499 534.66 532.25 537.919C523.887 542.81 515.693 548.009 507.406 553.031C503.031 555.683 498.574 558.701 493.882 560.757C489.338 562.748 484.178 563.897 479.415 561.919C475.583 560.327 472.789 557.189 471.299 553.35C469.828 549.557 470.146 470.564 470.62 461.064C470.743 458.614 470.84 455.669 471.957 453.454C473.874 449.654 478.026 447.927 481.789 446.539ZM489.35 541.575C500.871 534.304 513.559 527.04 525.369 520.134C530.925 516.867 544.245 509.222 548.73 505.398C528.664 493.091 509.24 479.744 489.231 467.41C489.824 476.252 489.464 488.227 489.462 497.247C489.535 512.023 489.497 526.8 489.35 541.575Z"/><path fill="#2B3136" d="M352.47 557.579C365.861 555.838 365.193 565.479 365.468 574.9C368.272 671.026 467.878 739.388 558.226 704.007C565.384 701.204 576.583 693.727 581.871 703.453C583.186 705.876 583.482 708.722 582.692 711.363C581.351 715.826 578.615 717.355 574.835 719.315C539.448 735.197 503.492 738.207 465.972 728.274C424.312 716.933 388.814 689.604 367.196 652.229C353.833 629.335 342.462 592.77 345.76 564.787C346.16 561.391 349.55 559.114 352.47 557.579Z"/><path fill="#2B3136" d="M385.863 332.581C386.721 332.489 387.584 332.436 388.447 332.421C394.113 332.316 399.04 336.494 399.227 342.254C399.384 347.103 395.615 350.579 392.875 354.124C383.505 366.249 376.634 380.316 371.969 394.876C364.009 418.545 365.497 442.127 365.502 466.713L365.446 523.204C363.144 527.169 362.395 527.539 358.521 529.679C344.17 530.876 345.005 519.959 345.143 509.368C345.292 497.825 344.841 486.066 345.131 474.54C345.567 457.203 344.244 439.037 345.85 421.792C346.833 411.778 348.756 401.879 351.593 392.225C356.116 376.933 372.179 340.024 385.863 332.581Z"/><path fill="#2B3136" d="M531.58 563.641C535.632 563.184 540.608 563.479 542.903 567.126C549.399 577.942 538.78 593.471 530.337 600.043C514.255 612.561 490.523 610.952 477.776 594.201C477.129 593.495 476.516 592.759 475.939 591.995C472.174 587.043 469.244 580.85 470.42 574.495C470.893 571.957 472.447 569.751 474.678 568.45C491.971 558.138 488.853 595.293 512.07 586.645C527.791 580.79 521.007 569.884 531.008 563.972L531.58 563.641Z"/></svg>
```

## Variante 2 : `tangible-logo-horizontal.svg` (icône + texte "tangible" à droite)

Usage recommandé : header navigation, footer, email signature, bandeau.

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="180 360 680 315"><path fill="#2B2F33" d="M292.854 396.729C310.661 396.145 328.135 401.644 342.4 412.318C358.557 424.316 370.895 443.763 373.59 463.748C374.866 473.213 375.805 488.797 369.812 496.49C366.545 500.772 361.631 503.486 356.268 503.973C353.064 504.291 349.829 503.921 346.779 502.888C340.744 500.79 313.289 483.214 307.747 478.745C307.074 475.21 306.992 473.15 305.135 469.855C300.559 461.739 292.187 460.912 286.553 468.467C283.565 472.474 281.669 478.008 275.268 475.349C270.547 473.663 270.849 466.589 273.12 463.029C286.902 441.419 314.461 448.165 320.903 470.825C325.877 474.457 347.914 489.692 352.347 490.187C354.318 490.406 356.364 489.947 357.89 488.637C360.292 486.574 360.878 483.165 361.044 480.168C361.976 463.378 355.663 445.295 344.404 432.855C332.705 419.93 316.15 411.314 298.637 410.474C281.303 409.762 264.413 416.066 251.784 427.961C238.766 439.999 231.112 456.768 231.023 474.518C230.9 499.008 231.047 523.515 230.932 548.006C230.892 556.637 230.952 566.266 233.091 574.621C239.838 600.968 264.333 621.732 291.582 622.626C322.351 623.782 347.971 605.812 357.383 576.064C359.685 568.789 358.849 555.192 364.06 549.858C380.749 532.772 403.664 546.948 400.164 569.508C397.459 590.752 391.392 606.336 378.104 622.983C374.608 627.363 368.417 633.647 362.873 629.245C361.237 627.9 360.281 623.666 361.199 621.647C362.922 618.222 366.814 615.853 368.768 612.395C379.335 598.251 385.741 582.873 386.923 565.111C387.534 555.929 379.004 552.339 374.006 559.728C373.009 561.201 372.731 570.77 372.199 573.557C369.733 586.473 362.792 599.71 354.23 609.646C340.834 625.17 321.848 634.773 301.405 636.365C256.827 639.46 220.291 606.859 217.822 562.419C216.976 547.18 217.925 531.589 217.954 516.307L217.88 485.514C217.833 475.703 216.969 466.562 219.393 456.952C228.249 421.844 257.351 399.003 292.854 396.729Z"/><path fill="#2B2F33" d="M291.781 370.219C294.888 370.035 297.802 370.159 300.9 370.311C328.83 371.659 355.072 384.084 373.815 404.835C396.367 429.939 402.518 459.36 400.505 492.136C400.153 498.352 398.398 504.406 395.371 509.846C382.98 532.632 363.529 526.974 351.139 546.312C347.022 552.716 347.044 560.018 345.946 567.228C339.546 609.231 284.169 624.893 256.927 592.473C251.294 585.807 247.397 577.852 245.584 569.316C243.974 561.734 244.387 551.873 244.399 543.95L244.417 515.3C244.382 500.418 243.367 482.763 244.614 468.185C247.002 440.255 274.467 420.898 301.033 423.675C314.734 425.129 327.28 432.016 335.861 442.796C339.228 447.03 349.255 460.902 342.11 465.838C340.065 467.25 336.92 466.797 334.607 466.28C329.566 461.858 328.497 450.96 317.937 444.404C308.249 438.389 300.203 435.439 288.508 437.753C278.696 439.641 270.043 445.361 264.462 453.649C261.205 458.606 259.099 464.229 258.3 470.106C257.179 478.218 257.886 499.597 257.903 508.661L257.879 541.665C257.87 549.385 257.521 559.919 259.12 567.284C261.141 576.791 266.864 585.102 275.024 590.381C283.31 595.78 293.431 597.589 303.073 595.392C317.117 592.198 329.324 581.071 332.106 567.047C335.053 552.194 333.819 543.974 344.999 531.846C348.394 528.118 352.344 524.937 356.711 522.415C374.599 512.213 385.637 512.808 387.08 487.273C389.249 448.865 375.894 416.891 341.215 396.336C318.983 383 292.012 380.114 267.461 388.445C262.633 390.089 258.208 392.016 253.749 394.454C250.941 395.99 246.043 398.578 243.102 396.14C230.82 385.958 254.433 378.618 261.155 375.852C270.658 372.037 281.584 370.826 291.781 370.219Z"/><path fill="#E6733C" d="M279.376 479.523C288.491 478.974 301.114 490.578 309.451 495.266C314.714 498.226 323.506 503.809 328.27 507.495C346.487 521.591 322.644 532.347 311.825 538.667C307.409 541.156 303.075 543.905 298.651 546.371C289.358 551.552 279.09 560.066 271.562 547.705C270.995 539.08 271.414 526.567 271.364 517.662C271.307 507.286 270.888 494.637 271.596 484.58C274.366 481.727 275.638 480.806 279.376 479.523ZM284.022 540.738C291.694 536.013 299.419 531.376 307.196 526.828C311.09 524.479 318.886 520.279 322.24 517.898C308.986 510.265 296.29 500.954 283.903 493.835L284.022 540.738Z"/><path fill="#2B2F33" d="M194.795 550.54C197.522 550.302 202.601 550.287 203.418 553.555C204.624 558.379 204.457 564.027 205.054 568.986C207.114 585.568 213.596 601.29 223.821 614.506C248.619 646.304 292.828 658.601 330.057 642.715C334.506 640.816 341.338 638.296 344.244 644.407C346.031 648.164 343.173 650.976 340.241 652.932C321.649 662.93 297.59 665.216 276.994 661.533C249.679 656.404 225.422 640.869 209.337 618.204C199.134 603.391 192.856 586.232 191.091 568.333C190.486 562.121 189.069 554.447 194.795 550.54Z"/><path fill="#2B2F33" d="M625.825 489.121C626.717 489.043 627.613 489.009 628.508 489.02C636.508 489.194 640.151 491.613 645.369 497.165C645.632 494.703 645.733 492.261 645.865 489.789L650.535 489.621C650.614 504.829 651.674 520.48 649.293 535.453C646.802 551.114 615.661 550.231 610.894 540.604C610.898 538.704 610.642 539.547 611.653 537.972C613.429 537.494 612.58 537.447 614.289 538.108C621.453 543.039 634.406 545.444 641.191 538.703C645.461 534.461 645.34 528.909 645.171 523.35C636.97 530.308 625.312 532.59 616.116 526.081C611.699 522.985 608.739 518.218 607.923 512.886C605.868 500.004 613.494 491.307 625.825 489.121ZM632.354 525.238C641.01 523.626 646.72 515.304 645.111 506.648C643.501 497.992 635.18 492.279 626.524 493.887C617.865 495.495 612.15 503.819 613.76 512.478C615.37 521.137 623.696 526.85 632.354 525.238Z"/><path fill="#2B2F33" d="M217.646 407.926C233.09 409.191 221.048 423.478 217.259 429.153C197.286 459.062 206.696 496.09 203.458 529.517C203.323 530.909 200.276 532.578 199.184 533.101C193.348 532.926 191.19 530.941 190.978 524.836C190.941 519.484 190.835 513.977 191.022 508.627C191.516 494.405 190.272 479.414 191.397 465.274C191.892 458.851 193.044 452.497 194.836 446.31C197.98 435.415 207.355 413.632 217.646 407.926Z"/><path fill="#2B2F33" d="M709.136 472.484C711.065 472.52 712.581 472.298 714.156 473.307C714.779 475.325 714.554 493.678 714.551 497.227C718.235 492.787 722.652 490.193 728.388 489.523C749.623 487.045 759.509 511.146 745.933 526.364C740.142 531.608 733.178 533.564 725.578 531.619C720.911 530.424 718.493 527.547 714.709 525.041C713.697 526.366 715.064 528.381 714.076 531.231C712.164 532.226 711.908 531.823 709.406 531.765L709.136 472.484ZM731.737 526.977C740.719 526.312 747.468 518.503 746.823 509.52C746.178 500.537 738.384 493.771 729.399 494.395C720.387 495.022 713.595 502.847 714.241 511.858C714.888 520.869 722.728 527.644 731.737 526.977Z"/><path fill="#2B2F33" d="M822.137 489.265C837.668 489.874 840.697 499.497 842.669 512.427L805.779 512.632C809.696 525.476 817.786 529.924 830.881 525.758C833.276 524.191 836.096 521.682 838.672 524.064C838.91 529.117 830.563 531.433 826.483 532.028C805.015 535.158 793.221 512.293 806.133 495.842C810.056 490.844 815.818 489.685 822.137 489.265ZM806.205 508.474L825.75 508.5L837.234 508.455C833.927 498.133 830.237 492.749 818.3 494.073C810.474 496.403 807.991 500.752 806.205 508.474Z"/><path fill="#2B2F33" d="M499.258 489.622C519.015 487.716 522.434 497.336 521.286 514.968C521.054 518.532 522.287 529.742 520.769 531.786C518.952 531.802 518.36 531.904 516.596 531.336C515.684 529.845 516.026 528.251 516.023 526.247C507.728 533.573 495.9 535.089 487.878 526.538C486.695 524.146 486.092 521.688 486.093 519.022C486.102 505.517 508.085 507.921 516.44 508.005C515.25 494.122 507.432 491.495 494.449 495.887C493.121 496.336 491.54 498.229 489.505 499.052C488.429 498.636 488.661 498.896 488.326 498.11C485.815 492.219 496.449 490.172 499.258 489.622ZM498.476 527.408C506.813 528.532 511.339 527.417 516.004 520.033L516.028 511.869L510.507 511.742C505.673 511.894 496.308 511.606 493.219 515.044C488.749 520.02 493.139 525.881 498.476 527.408Z"/><path fill="#2B2F33" d="M310.374 554.605C315.45 553.963 320.148 554.959 319.963 561.385C319.614 573.458 306.509 584.205 294.665 583.579C286.853 583.166 281.723 580.09 276.393 574.621C273.131 570.567 268.509 561.039 273.847 557.656C284.499 551.47 284.246 568.489 292.854 569.565C305.501 571.146 303.984 558.982 310.374 554.605Z"/><path fill="#2B2F33" d="M553.018 496.755C558.804 490.395 564.387 488.605 572.958 489.692C590.552 491.924 586.463 517.96 586.478 531.738L581.158 531.707C580.957 523.303 581.026 514.568 580.977 506.137C579.464 499.102 576.634 494.032 568.215 493.821C544.58 493.229 557.359 526.201 551.849 531.966C549.772 532.162 548.03 530.332 548.121 528.918C548.477 523.375 546.927 492.627 548.537 489.749C550.126 489.672 550.643 489.567 552.216 489.98C553.625 491.908 553.091 494.075 553.018 496.755Z"/><path fill="#2B2F33" d="M454.707 480.117L455.361 480.326C455.931 482.094 455.853 487.787 455.887 489.928C460.268 489.856 464.359 489.348 468.251 491.36L468.424 492.368C465.387 494.538 459.609 494.119 455.828 494.106C455.958 500.027 455.552 506.432 455.645 512.374C455.888 528.016 456.058 527.151 469.546 526.544C471.07 527.463 470.682 527.475 471.575 529.475C464.108 533.487 452.317 534.091 451.079 522.99C450.066 513.918 450.877 503.79 450.446 494.398C447.016 494.337 445.107 494.829 442.703 492.504L442.721 491.632C445.14 489.377 447.144 489.896 450.518 489.917C450.489 487.041 449.829 483.48 450.87 481.198C452.456 479.881 452.178 480.309 454.707 480.117Z"/><path fill="#2B2F33" d="M773.807 472.551C775.89 472.565 776.394 472.535 778.391 472.984C779.267 474.437 779.109 525.875 778.791 531.525C776.893 531.514 776.365 531.493 774.501 531.211C773.493 529.644 773.991 478.986 773.807 472.551Z"/><path fill="#2B2F33" d="M677.332 489.594L682.477 489.822C682.76 503.633 682.759 517.449 682.476 531.26L681.863 531.666C680.259 531.769 678.939 532.095 677.657 531.268C677.125 528.724 677.153 526.141 677.168 523.552C677.235 512.237 676.909 500.903 677.332 489.594Z"/><path fill="#2B2F33" d="M678.102 472.281C680.106 471.306 682.522 472.122 683.523 474.113C684.525 476.105 683.741 478.531 681.763 479.559C680.46 480.236 678.894 480.16 677.663 479.359C676.432 478.559 675.727 477.158 675.818 475.692C675.909 474.227 676.781 472.923 678.102 472.281Z"/></svg>
```

## Variante 3 : `tangible-logo-vertical.svg` (icône en haut + "tangible" dessous)

Usage recommandé : slide cover, slide closing, affiche, print, format carré.

**⚠️ Fichier volumineux** — si tu veux l'afficher, utilise directement l'une des 2 SVG au-dessus et empile "tangible" en dessous avec la typo du projet (`font-family: 'Fraunces'`).

**Alternative : recompose le logo vertical comme suit :**
```html
<div style="display: flex; flex-direction: column; align-items: center; gap: 1rem;">
  <!-- Variante 1 (icône seule) ici -->
  <div style="font-family: 'Fraunces', Georgia, serif; font-size: 2.5rem; font-weight: 500; letter-spacing: 0.08em; color: #2B2F33;">tangible</div>
</div>
```

## Récap couleurs du logo
- Lignes d'empreinte : `#2B2F33` (ink) — ou `#2B3136` / `#2C3236` (variations très proches, mêmes pour le rendu)
- Bouton play central : `#E6733C` (flame) — ou `#E9763C` / `#ED763B` (variations très proches)

**Sur fond sombre** : inverse les logos en blanc avec le filtre CSS :
```css
filter: brightness(0) invert(1);
/* Pour conserver le play orange sur fond sombre, prefère utiliser directement le SVG et overrider les fills */
```

**Versions PNG** disponibles aussi si besoin (référencer par `/logos/tangible-xxx.png`) : `tangible-logo-vertical.png`, `tangible-logo-horizontal.png`, `tangible-icon.png`, `tangible-favicon.png`.

---

# 🎞️ Les 12 slides — contenu + notes

## Slide 1 — COVER · 5 s

**Visuel** : fond ink deep. Logo vertical très grand, centré. Slogan FR en serif italic 44pt ivory. Slogan EN en mono caps 13pt flame. Footer mono gris : "SCRUM'INNOV 2026 · 15-17 AVRIL · BUT3 IUT MONTPELLIER".

**Corner marks** orange L-shape top-left + top-right (éditorial).

**Notes** :
> Samedi dernier, j'ai voulu revoir The Matrix. Je l'avais 'acheté' sur iTunes en 2019. 15 €. Verdict : 'indisponible dans votre région'. Mon film a disparu. Parlons cash : quand on achète un film sur Netflix, Amazon, iTunes, on ne possède rien. On loue. Même quand on paie 15 € pour l'avoir 'pour toujours'. Résultat : Microsoft a arrêté de vendre des films en 2021 — leurs clients ont perdu leurs bibliothèques. Disney+ retire régulièrement des originaux.

---

## Slide 2 — LE PROBLÈME · 1 min

**Titre H1** : « Acheter ≠ Posséder. » en italic serif ~58pt ivory.
**Background deco** : énorme « ≠ » à ~350pt en filigrane (couleur `#26-2A-2F` presque invisible).
**4 cartes horizontales** (shadow + top stripe orange + rounded 14px) :

| Date | Titre | Suffix | Body |
|------|-------|--------|------|
| 2021 | Microsoft Movies | fermé | Arrêt des ventes. Bibliothèques gelées. Aucun export. |
| 2023 | Disney+ | retire | ~50 titres supprimés. *Willow*, *Crater*… disparus. |
| 2024 | iTunes | bloque | Changement de région ? Bibliothèque inaccessible. |
| ∞ | Netflix & co | location | 3 abonnements / foyer. 300 €/an. Zéro fichier possédé. |

**Notes** :
> Microsoft a arrêté de vendre des films en 2021 — les bibliothèques sont gelées. Disney+ retire des titres pour raisons fiscales. iTunes bloque régionalement. Netflix ne vend même pas. Tous ont une faille.

---

## Slide 3 — LA SOLUTION · 40 s

**Titre H1** : « Deux piliers. Une promesse. »
**Logo horizontal** en en-tête.
**Watermark icon** bottom-right (transparence ~92 %).

**Deux cartes grandes, rounded, shadow** :

**Card 01 — Tangible Player** (paper bg, badge "01" ivory)
- Media center local premium
- Bibliothèque chiffrée AES-256
- 4K HDR · Dolby Vision · sous-titres
- Cast Chromecast / AirPlay / DLNA
- Profils enfants · biométrie
- 100 % hors-ligne

**Card 02 — Tangible Store** (paper bg + top orange stripe + badge "02" flame)
- Boutique légale · achat définitif
- Films SD / HD / 4K
- Certificat on-chain cryptographique
- Distribution P2P / IPFS
- Marché de revente avec royalties
- Paiement CB / crypto

**Notes** :
> Tangible, c'est la première plateforme où acheter un film signifie vraiment le posséder. Un — le Player, media center local. Deux — le Store, boutique légale avec certificat de propriété cryptographique vérifiable hors-ligne.

---

## Slide 4 — DÉMO 1/2 · 50 s

**Titre H1** : « Achat en un clic. »

**2 écrans côte à côte** (mockups stylisés, rounded 16px, shadow) :
- Gauche : Tangible Player (fausse fenêtre avec traffic lights rouge/orange/vert + titlebar "TANGIBLE PLAYER") — placeholder "Bibliothèque Player" à remplacer
- Droite : Tangible Store page film avec titlebar orange "TANGIBLE STORE · DUNE PART TWO", prix "14,99 € · 4K HDR" en grand, CTA button orange "ACHETER DÉFINITIVEMENT"

**Notes** :
> Deux écrans : bibliothèque personnelle à gauche, page d'achat à droite. L'achat, c'est un clic.

---

## Slide 5 — DÉMO 2/2 · 10 s

**Titre H1** : « La propriété, prouvée. » en italic serif ivory.
**Fond** : ink (`#2B2F33`). Watermark icon bottom-right grande taille, transparence 95 %.

**À gauche — Certificat** (card paper, rounded, shadow, top ribbon orange) :
```
🎟  CERTIFICAT DE PROPRIÉTÉ

Dune : Part Two
Denis Villeneuve · 2024 · 4K HDR Dolby Vision

PROPRIÉTAIRE     0xAB…E9
LICENCE          TNGBL-D2-4K-0x9e3f…
TX ON-CHAIN      0x7ea…d83
ACHETÉ LE        15 avril 2026 · 14:32

[chip vert success]  ✓ VÉRIFIABLE HORS-LIGNE
[chip orange]        ♻ REVENDABLE
```

**À droite — Marché secondaire** (card ink deep, top ribbon orange) :
- Titre "Revendre. Légalement." en serif 32pt italic ivory
- "EXEMPLE · VENTE À 8 €" en mono flame
- **3 barres de progression** du split :
  - Vendeur (80 %) → 6,40 €
  - Ayants droit (15 %) → 1,20 €
  - Tangible (5 %) → 0,40 €

**Notes** :
> Chaque achat génère ce certificat. Vérifiable hors-ligne. Mieux : la revente. Vendeur 80 %, ayants droit 15 %, Tangible 5 %. Économie circulaire.

---

## Slide 6 — DIFFÉRENCIATION · 1 min

**Titre H1** : « Tangible vs. le reste. »

**Tableau rounded, shadow, 5 colonnes × 8 lignes** :

| Critère | **Tangible** | iTunes | Netflix | Jellyfin |
|---------|:-:|:-:|:-:|:-:|
| Achat définitif | ✓ | ~ | ✕ | ✕ |
| Téléchargement local | ✓ | ~ | ~ | ✓ |
| Certificat de propriété | ✓ | ✕ | ✕ | ✕ |
| Revente possible | ✓ | ✕ | ✕ | ✕ |
| Hors-ligne à vie | ✓ | ✕ | ✕ | ✓ |
| Media center complet | ✓ | ~ | ✕ | ✓ |
| Catalogue légal | ✓ | ✓ | ✓ | ✕ |
| Pas de vendor lock | ✓ | ✕ | ✕ | ✓ |

**Colonne Tangible** highlight avec background `#FDF4EC` (orange pâle) sur toute la hauteur. Header Tangible = orange flame. Autres headers = ink soft.
**✓ en vert success, ✕ en danger, ~ en flame.**

**Tagline** sous table (italic serif orange) : « Une seule ligne avec tous les ✓ : la nôtre. »

**Notes** :
> iTunes ? Propriété fictive. Netflix ? Location. Jellyfin ? Pas de boutique légale. Tangible combine tout.

---

## Slide 7 — LE MARCHÉ · 30 s

**Titre H1** : « Un marché fatigué. »

**3 KPI cards horizontales** (paper, rounded, shadow, top stripe orange) :

| Big (serif 80pt) | Unit (flame 22pt) | Label | Source |
|-----------------|------------------|-------|--------|
| 130 | Mds € | Marché vidéo mondial | Statista 2024 |
| 3,4 | — | Abonnements SVOD / foyer FR | Médiamétrie 2024 |
| 300 | €/an | Dépense moyenne par foyer | Deloitte 2024 |

**Bandeau opportunité** en bas (rounded, ink bg, all width) :
- Label mono flame : "NOTRE OPPORTUNITÉ →"
- Phrase serif italic ivory : « La niche propriété réelle — aucun acteur ne la sert correctement. »

---

## Slide 8 — BUSINESS MODEL · 1 min

**Titre H1** : « Quatre revenus. Diversifiés. »

**4 cards en grille 2×2** (paper, rounded, shadow, left stripe orange pour la 1ère, ink pour les autres) :

1. **20 %** / Commission vente / Studio 70 · Seeders 10 · Tangible 20 · *badge "PRIMARY" orange*
2. **5 %** / Commission revente / Vendeur 80 · Ayants droit 15 · Tangible 5
3. **7,99 €** / Tangible Pass / mois / Catalogue rotatif · −15 % sur achats
4. **B2B** / Licence SDK / Studios · distributeurs · API tierce

---

## Slide 9 — FINANCIER · 45 s

**Titre H1** : « Break-even en Année 3. »

**Chart barres** (à gauche, card paper rounded, ×60 % width) :
- Axe Y avec gridlines et labels (0 / 1,75k / 3,5k / 5,25k / 7k — en k€)
- 3 barres : 2026 (200 k€, pâle) · 2027 (1,6 M€, medium) · 2028 (6,7 M€, **flame**)
- Valeur inscrite au-dessus de chaque barre
- Années en mono sous chaque barre
- Marker "▼ BREAK-EVEN" au-dessus de la barre 2028 en vert success
- Label en haut de card : "CHIFFRE D'AFFAIRES (k€)" mono + "×33 en 3 ans" serif italic flame 22pt

**Ask panel** (à droite, card ink deep rounded, top stripe orange) :
- Label : "AMORÇAGE DEMANDÉ" mono flame
- Énorme **950 k€** en serif 72pt ivory
- "500 k€ seed + 450 k€ prêt & BPI" body muted
- Séparateur orange
- Liste usage : → 12 mois de runway / → MVP Player / → Store bêta / → 5 000 users

---

## Slide 10 — ÉQUIPE & ROADMAP · 45 s

**Titre H1** : « Des fondateurs. Une trajectoire. »

**2 colonnes** :

**L'ÉQUIPE** (gauche, eyebrow + thin line) :
4 rôles en lignes : badge role (rounded, orange pour CEO, ink pour autres) + titre serif + detail italic
- CEO — Produit & Business — Vision · levée · studios
- CTO — Architecture & Dev — Stack · qualité · recrutement
- CSO — Sécurité & Cryptographie — 5 couches · audits · conformité
- CPO — UX & Design — Player · Store · brand

**LA ROADMAP** (droite) :
Timeline verticale (ligne ink + dots). Première dot en orange flame, autres en ink.
- Phase 1 · 0-6 mo · MVP Player · 50 films indé
- Phase 2 · 6-12 mo · Store · mobile · blockchain
- Phase 3 · 12-24 mo · Marché secondaire · majors · B2B
- Phase 4 · 24+ mo · Smart TV · international

---

## Slide 11 — NOTRE ASK · 30 s

**Background** : ink deep. Énorme **« 950 »** en serif 600pt très faded en background (`#1B1D21`). Ambient glow orange sur le tiers gauche.

**Titre H1** sur 2 lignes : « 950 k€ pour changer / la propriété numérique. »

**3 cards horizontales** (rounded, ink mid, top stripe) :
- **500 k€** · Seed · Dev, équipe fondatrice, MVP
- **450 k€** · Prêt + BPI · Fonds de roulement, R&D sécurité
- **12 mois** · de runway · Jusqu'à 5 000 users validés

**Quote** en bas centrée :
- Italic serif ivory : « Au-delà de l'argent : une conviction. »
- Body italic muted : « le numérique responsable passe par la propriété réelle. »

**Notes** :
> Avec 950 000 €, 12 mois de runway, MVP Player livré, Store en bêta, 5 000 premiers utilisateurs. Mais au-delà de l'argent, nous construisons une conviction. SILENCE 1 seconde avant "Mais au-delà".

---

## Slide 12 — CLOSING · 5 s

**Fond** : ink deep avec un léger dégradé.
**Corner marks** orange top-left + top-right.
**Logo vertical géant** centré haut.
**Trait orange séparateur** court sous le logo.
**Slogan FR** serif italic 44pt ivory centré.
**Slogan EN** mono caps 13pt flame centré.
**URL** `pixnop.github.io/tangible` mono 12pt muted.
**Footer** italic : `— Merci. Vos questions. —`

---

# 🎨 Direction artistique

**Inspirations** :
- Stripe Sessions (sobriété + accents de couleur chirurgicaux)
- Linear Yearbook (typographie éditoriale, hiérarchie dramatique)
- Figma Config (pastilles d'accent, micro-décos)
- Apple keynotes modernes (espace blanc, focus)

**Principes** :
1. **Anchor visuel par slide** : un gros élément (chiffre géant, logo, icône) comme point focal
2. **Hiérarchie dramatique** : contraste ×8 entre body (13pt) et title (58pt)
3. **Orange comme ponctuation** : jamais envahissant, toujours précis (eyebrow, CTA, barre de highlight, ✓)
4. **Whitespace 60 %** : jamais empiler 20 infos par slide
5. **Corner marks éditoriaux** (┐ orange) pour identifier chaque slide
6. **Footer unifié** : TANGIBLE mono caps + progression dots + page number
7. **Cards avec shadow et rounded** : jamais de rectangle sec
8. **Background decorations** (chiffre/symbole géant faded) sur slides iconiques (2, 11, 12)

---

# 🚫 Ce qu'il NE FAUT PAS faire

- ❌ Clipart, emoji surdimensionnés, shadow violente
- ❌ Rectangle plein bord à bord sans respiration
- ❌ Police par défaut Calibri/Arial sans travail typographique
- ❌ Gradients agressifs (orange→violet type Instagram 2015)
- ❌ Citations motivantes génériques
- ❌ Bullet points sans hiérarchie visuelle
- ❌ Plus de 40 mots par slide
- ❌ Dire « révolutionner », « disruptif », « leader mondial »
- ❌ Oublier les notes du présentateur

---

# ✅ Critères de qualité

Le deck doit passer ces tests :
1. **Test du zoom arrière** : chaque slide reconnaissable comme « Tangible » sans lire le texte (palette, typo, corner mark, logo)
2. **Test du 3-secondes** : un jury distrait comprend l'idée principale de chaque slide en 3 s
3. **Test du noir et blanc** : la hiérarchie fonctionne sans couleur
4. **Test du projecteur daylight** : contrastes suffisants même avec projecteur pâle
5. **Test mobile** : lisible sur écran de fortune si besoin

---

# 📦 Livrable attendu — un `.pptx` premium

1. **`slides.md`** (Slidev) — fichier unique prêt à exporter en pptx
   → OU **`generate.py`** (script python-pptx) si tu préfères cette voie
2. **`README.md`** en tête du livrable expliquant :
   - Comment installer les deps (`npm init slidev@latest` ou `pip install python-pptx pillow`)
   - Comment produire le `.pptx` (commande `npx slidev export slides.md --format pptx` ou `python generate.py`)
   - Où placer les logos (dans `public/logos/` pour Slidev, dans `./logos/` pour Python)
3. **Notes du présentateur** pour chaque slide (`<!-- ... -->` en Slidev, `slide.notes_slide.notes_text_frame.text = ...` en python-pptx)
4. Les logos doivent être **embarqués correctement** dans le pptx final (pas de liens cassés, pas d'images placeholder)

**Ne fais pas** de boucle Q/A avec moi. Tu as tout le contexte. **Livre en un seul message** :
- Le fichier `slides.md` complet (ou `generate.py` complet)
- Le README avec la commande exacte pour obtenir le .pptx
- Notes brèves sur tes choix (palette nuance, typo alt, mockups invités)

**Test de réussite** : en suivant ton README, je dois obtenir en < 5 min un `Tangible-Pitch.pptx` que je peux ouvrir dans PowerPoint et qui ressemble au résultat d'un studio de design — pas à un template corporate générique.

C'est parti. 🎬
