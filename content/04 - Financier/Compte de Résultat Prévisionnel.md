---
tags: [financier, compte-résultat, livrable-3, sprint-3]
statut: en-cours
sprint: 3
priorité: haute
---

# 📊 Compte de Résultat Prévisionnel — Année 1

> [!info] Livrable 3
> Compte de résultat à la fin de la première année d'activité (Année N = 2026).
> Hypothèses détaillées → [[Hypothèses Financières]]
> **Équipe An N : 5 personnes** · **Équipe An N+1 : 7 personnes (+2)**
> **Dispositifs : JEI (exonération patronale) + CIR 30 %**

## 💵 Compte de résultat — Année N (2026)

| CHARGES | Montant (€) | PRODUITS | Montant (€) |
|---------|------------:|----------|------------:|
| **Charges d'exploitation** |  | **Produits d'exploitation** |  |
| Achats de marchandises (royalties studios, 70 % du CA) | 105 000 | Chiffre d'Affaires | 150 000 |
| Achats de matières premières | 0 | **CIR** (Crédit Impôt Recherche, 30 % R&D) | 44 000 |
| Charges externes |  |  |  |
| — Publicité / marketing | 40 000 |  |  |
| — Services divers (VPS, IPFS pinning, outils dev) | 12 000 |  |  |
| — Légal / conformité | 20 000 |  |  |
| Actions d'organisation des ateliers | 2 000 |  |  |
| Frais de personnel (5 personnes, 35 k€ brut, **JEI inclus**) | 175 000 |  |  |
| AMORTISSEMENTS (matériel + dev capitalisé) | 8 000 |  |  |
| **Charges financières** (intérêts emprunts) | 5 000 | **Produits financiers** | 2 000 |
| **Charges exceptionnelles** | 2 000 | **Produits exceptionnels** | 0 |
| **TOTAL CHARGES** | **369 000** | **TOTAL PRODUITS** | **196 000** |
|  |  | **Résultat Avant Impôt** | **−173 000** |
|  |  | Impôt sur société | 0 (perte) |
|  |  | **RESULTAT NET** | **−173 000 €** |

> [!tip] Dispositifs d'aide appliqués
> - **JEI** (Jeune Entreprise Innovante) : exonération des cotisations patronales → coût chargé ≈ salaire brut (35 k€/personne au lieu de ~50 k€ sans JEI). Économie : **~75 000 €** sur An N.
> - **CIR** (Crédit Impôt Recherche, 30 %) : appliqué sur 80 % des salaires R&D + outils dev. Remboursable cash même en situation de perte. Montant An N : **44 000 €**.

> [!warning] Année 1 : perte attendue
> Une année 1 déficitaire est **normale** pour une startup tech. La levée initiale (500 k€ seed + 200 k€ prêt d'honneur + 250 k€ BPI amorçage ≈ **~950 k€**) couvre largement ce déficit. Déficit mensuel : **14 k€/mois**.

## 📈 Compte de résultat projeté — Années N+1 et N+2

| Poste | An N (2026) | An N+1 (2027) | An N+2 (2028) |
|-------|------------:|---------------:|---------------:|
| Chiffre d'Affaires | 150 000 | 1 000 000 | 3 500 000 |
| Achats / royalties | 105 000 | 650 000 | 2 100 000 |
| Marge brute | 45 000 | 350 000 | 1 400 000 |
| Taux de marge brute | 30 % | 35 % | 40 % |
| Charges externes | 74 000 | 180 000 | 500 000 |
| Frais de personnel (JEI, 35 k€/pers) | 175 000 | 245 000 | 420 000 |
| Amortissements | 8 000 | 25 000 | 80 000 |
| CIR (aide état, −30 % R&D) | −44 000 | −63 000 | −100 000 |
| **Résultat d'exploitation** | **−168 000** | **−37 000** | **+500 000** |
| Charges financières nettes | 3 000 | 8 000 | 10 000 |
| Exceptionnels | 2 000 | 0 | 0 |
| **Résultat avant impôt** | **−173 000** | **−45 000** | **+490 000** |
| IS (25 % sur résultat positif, 0 sinon) | 0 | 0 | 123 000 |
| **RESULTAT NET** | **−173 000 €** | **−45 000 €** | **+367 000 €** |

> [!tip] Break-even atteint **début Année 3 (An N+2, 2028)** — An N+1 quasi à l'équilibre (−4 k€/mois)

## 👥 Évolution des effectifs

| Année | Effectif | Salaire brut | Coût chargé (JEI) | Masse salariale |
|-------|:--------:|-------------:|------------------:|----------------:|
| An N (2026) | 5 personnes | 35 000 € | 35 000 € | 175 000 € |
| An N+1 (2027) | 7 personnes (+2) | 35 000 € | 35 000 € | 245 000 € |
| An N+2 (2028) | ~12 personnes | 35 000 € | 35 000 € | ~420 000 € |

> [!note] JEI = Jeune Entreprise Innovante
> Exonération totale des cotisations patronales pour les chercheurs/devs (éligible 8 ans). Coût chargé ≈ salaire brut.

## 📊 Visualisation du résultat

```
CA          ▏  An N ▏  An N+1 ▏   An N+2
150k        ████
1,0M        ████████████
3,5M        ████████████████████████████████████

Résultat    An N      An N+1      An N+2
            ▼         ▼~          ▲
          -173k      -45k        +367k
          [perte]   [quasi-BE]   [bénéfice]
```

## 🧠 Lecture stratégique

| Indicateur | An N | An N+1 | An N+2 |
|------------|:----:|:------:|:------:|
| Déficit / bénéfice mensuel | −14 k€ | −4 k€ | +31 k€ |
| Runway nécessaire | 12 mois | 4 mois | — |
| Effectif | 5 personnes | 7 personnes | ~12 personnes |
| JEI économie | 75 k€ | 105 k€ | 180 k€ |
| CIR reçu | 44 k€ | 63 k€ | 100 k€ |
| Levée suivante | Série A à M+18 | — | — |
| Marge brute | 30 % | 35 % | 40 % |

**Seuil de rentabilité** : atteint **début An N+2 (2028)**. An N+1 quasi à l'équilibre (−45 k€, −4 k€/mois).

## 🔗 Liens

- [[Plan de Trésorerie 3 ans]] · [[Hypothèses Financières]]
- [[Cases 3 - Coûts et Revenus]]
- [[MOC]]
