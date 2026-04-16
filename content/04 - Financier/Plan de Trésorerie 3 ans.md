---
tags: [financier, trésorerie, livrable-3, sprint-3]
statut: en-cours
sprint: 3
priorité: haute
---

# 💧 Plan de Trésorerie Prévisionnel — 3 ans

> [!info] Livrable 3
> Plan de trésorerie annuel sur 3 ans (N = 2026 à N+2 = 2028).
> Hypothèses → [[Hypothèses Financières]]
> **Modèle : 5 personnes JEI · salaire brut 35 k€ · CIR 30 %**

## 💶 Plan de trésorerie annuel (montants en €)

| Poste | Année N (2026) | Année N+1 (2027) | Année N+2 (2028) |
|-------|---------------:|-----------------:|-----------------:|
| **ENCAISSEMENTS** | | | |
| Chiffre d'Affaires encaissé | 150 000 | 1 000 000 | 3 500 000 |
| CIR reçu (crédit impôt remboursable) | 44 000 | 63 000 | 100 000 |
| Levée de fonds (Seed) | 500 000 | 0 | 0 |
| Emprunts (prêt d'honneur + BPI amorçage) | 450 000 | 0 | 0 |
| Produits financiers | 2 000 | 5 000 | 10 000 |
| **Total Encaissements** | **1 146 000** | **1 068 000** | **3 610 000** |
| **DÉCAISSEMENTS** | | | |
| Royalties studios (70 % → 65 % → 60 % du CA) | 105 000 | 650 000 | 2 100 000 |
| Frais de personnel (JEI, 35 k€/pers) | 175 000 | 245 000 | 420 000 |
| Publicité & marketing | 40 000 | 100 000 | 200 000 |
| Légal & conformité | 20 000 | 30 000 | 60 000 |
| Services & infra | 12 000 | 35 000 | 200 000 |
| Ateliers & événements | 2 000 | 15 000 | 40 000 |
| Investissements (matériel + dev) | 8 000 | 25 000 | 80 000 |
| Intérêts d'emprunt | 5 000 | 8 000 | 10 000 |
| Remboursement emprunt (principal) | 0 | 50 000 | 200 000 |
| Charges exceptionnelles | 2 000 | 0 | 0 |
| Impôt sur société | 0 | 0 | 123 000 |
| **Total Décaissements** | **369 000** | **1 158 000** | **3 433 000** |
| **FLUX NET DE TRÉSORERIE** | **+777 000** | **−90 000** | **+177 000** |
| Trésorerie début de période | 0 | 777 000 | 687 000 |
| **Trésorerie fin de période** | **777 000 €** | **687 000 €** | **864 000 €** |

> [!tip] La trésorerie reste positive sur les 3 ans grâce à la levée initiale de 950 k€.
> Point le plus bas : ~687 k€ fin An N+1 — largement au-dessus du seuil critique.

## 📉 Profil mensuel — Année N (2026)

```
Tréso début An N : 950 k€ (levée reçue à T0)
Dépenses mensuelles moyennes : ~30 k€/mois (charges opérationnelles hors levée)
Recettes mensuelles moyennes : ~16 k€/mois (CA + CIR proratisé)
Déficit mensuel : ~14 k€/mois

Mois     |  J    F    M    A    M    J    J    A    S    O    N    D
Tréso    | 936  922  908  894  880  866  852  838  824  810  796  777
```

> [!warning] Buffer de sécurité
> Déficit opérationnel An N : 173 k€ sur 12 mois.
> La levée de 950 k€ couvre **5,5 ans** de ce rythme — confort important.

## 💰 Plan de financement

| Tour | Moment | Montant | Usage |
|------|--------|--------:|-------|
| **Levée de fonds (Seed)** | Lancement | 500 k€ | Développement MVP, équipe fondatrice |
| **Prêt d'honneur** | T0 + 3 mois | 200 k€ | Fonds de roulement, non-dilutif |
| **BPI Amorçage** | T0 + 3 mois | 250 k€ | Développement produit, non-dilutif |
| **Levée de croissance** | T0 + 18 mois | À définir | Accélération catalogue, recrutements |

> [!note] Remboursement des prêts (450 k€) prévu à partir de l'An N+2, une fois l'équilibre atteint.

## 🚨 Scénarios de sensibilité

| Scénario | Tréso fin An N | Tréso fin An N+1 | Tréso fin An N+2 |
|----------|---------------:|-----------------:|-----------------:|
| **Base** (tableau principal) | 777 k€ | 687 k€ | 864 k€ |
| **Optimiste** (+30 % CA) | 800 k€ | 950 k€ | 1 500 k€ |
| **Pessimiste** (−30 % CA) | 750 k€ | 450 k€ | 300 k€ |
| **Stress** (−50 % CA) | 710 k€ | 200 k€ | −100 k€ |

> [!warning] Scénario stress : si le CA est de 50 % inférieur aux prévisions, la trésorerie devient négative en An N+2. Action : réduction d'équipe et recentrage sur le B2B.

## 🔗 Liens

- [[Compte de Résultat Prévisionnel]] · [[Hypothèses Financières]]
- [[Cases 3 - Coûts et Revenus]]
- [[MOC]]
