---
tags: [financier, hypothèses, livrable-3, sprint-3]
statut: en-cours
sprint: 3
priorité: haute
---

# 🧮 Hypothèses Financières

> [!info]
> Base chiffrée pour [[Compte de Résultat Prévisionnel]] et [[Plan de Trésorerie 3 ans]].
> Modèle révisé : 5 → 7 → 12 personnes · salaire brut 35 k€ · JEI + CIR

## 📈 Croissance utilisateurs & CA

| Année | Utilisateurs actifs | Dépense moyenne/an | CA Tangible |
|------:|--------------------:|-------------------:|------------:|
| 2026 | 5 000 | 30 € | 150 000 € |
| 2027 | 25 000 | 40 € | 1 000 000 € |
| 2028 | 70 000 | 50 € | 3 500 000 € |

### Justification
- **5 000 users Y1** : phase de lancement, catalogue limité (50 films indé), peu de notoriété
- **×5 users Y2** : bouche-à-oreille, catalogue élargi, ouverture mobile
- **×3 users Y3** : pénétration grand public, premières signatures avec studios majors
- **ACV croissant** : montée en gamme du catalogue + abonnement Pass + marché secondaire actif

## 💰 Structure des revenus

| Source | An N | An N+1 | An N+2 | Taux |
|--------|-----:|-------:|-------:|------|
| Commission vente Store | 127 k€ | 850 k€ | 2 975 k€ | 85 % du CA |
| Tangible Pass (8 €/mois) | 15 k€ | 100 k€ | 350 k€ | 10 % du CA |
| Marché secondaire (5 %) | 8 k€ | 50 k€ | 175 k€ | 5 % du CA |
| **Total CA** | **150 k€** | **1 000 k€** | **3 500 k€** | 100 % |

> [!note] Royalties studios = 70 % du CA An N, 65 % An N+1, 60 % An N+2 (négociations en volume)

## 👥 Équipe & masse salariale

| Année | Effectif | Salaire brut moyen | Coût chargé (JEI) | Masse salariale |
|------:|:--------:|-------------------:|------------------:|----------------:|
| 2026 | 5 personnes | 35 000 € | 35 000 € | 175 000 € |
| 2027 | 7 personnes (+2) | 35 000 € | 35 000 € | 245 000 € |
| 2028 | ~12 personnes (+5) | 35 000 € | 35 000 € | ~420 000 € |

> [!tip] **JEI (Jeune Entreprise Innovante)**
> Exonération totale des cotisations patronales → coût chargé ≈ salaire brut.
> Économie : 75 k€ An N · 105 k€ An N+1 · 180 k€ An N+2.

**Composition équipe An N (5 personnes) :**
2 fondateurs (dev + produit) · 1 développeur back · 1 designer/UX · 1 responsable partenariats studios

## 🏭 Charges détaillées

| Poste | An N | An N+1 | An N+2 |
|-------|-----:|-------:|-------:|
| Royalties studios | 105 k€ | 650 k€ | 2 100 k€ |
| Frais de personnel (JEI) | 175 k€ | 245 k€ | 420 k€ |
| Publicité & marketing | 40 k€ | 100 k€ | 200 k€ |
| Légal & conformité | 20 k€ | 30 k€ | 60 k€ |
| Services & infra (VPS, IPFS, outils) | 12 k€ | 35 k€ | 200 k€ |
| Ateliers & événements | 2 k€ | 15 k€ | 40 k€ |
| Amortissements | 8 k€ | 25 k€ | 80 k€ |
| **Total charges** | **369 k€** | **1 108 k€** | **3 110 k€** |

> [!note] Infra légère en An N : l'application tourne sur la machine du client (pas de CDN coûteux). Les 12 k€ couvrent VPS, nœuds IPFS et outils de développement.

## 🤝 Aides de l'état

| Dispositif | An N | An N+1 | An N+2 | Principe |
|-----------|-----:|-------:|-------:|---------|
| **JEI** (exonération patronale) | 75 k€ | 105 k€ | 180 k€ | Économie sur charges patronales |
| **CIR** (Crédit Impôt Recherche, 30 %) | 44 k€ | 63 k€ | 100 k€ | Remboursable même en perte |
| **Total aides** | **119 k€** | **168 k€** | **280 k€** | |

## 🎯 Seuil de rentabilité

- **Seuil opérationnel** : début An N+2 (2028)
- **An N+1** : quasi à l'équilibre (déficit résiduel −45 k€, soit −4 k€/mois)
- **Utilisateurs nécessaires** : ~25 000 actifs à 40 €/an moyen

## 📊 Ratios clés

| Indicateur | 2026 | 2027 | 2028 |
|-----------|:----:|:----:|:----:|
| Marge brute | 30 % | 35 % | 40 % |
| Masse salariale / CA | 117 % | 25 % | 12 % |
| Déficit mensuel | 14 k€ | 4 k€ | — |
| CIR / charges totales | 12 % | 6 % | 3 % |

## ⚠️ Risques financiers

| Risque | Probabilité | Impact | Mitigation |
|--------|:-----------:|:------:|------------|
| Refus studios majors | Haute | Fort | Démarrer avec films indépendants, prouver la traction |
| Échec de la levée de croissance | Moyenne | Fort | Réduction équipe, focus B2B |
| Concurrence grandes plateformes | Moyenne | Fort | Avance technologique + communauté + open source |
| Cadre légal revente numérique | Faible | Moyen | Veille juridique + lobbying |

## 🔗 Liens

- [[Compte de Résultat Prévisionnel]] · [[Plan de Trésorerie 3 ans]]
- [[Cases 3 - Coûts et Revenus]]
- [[SWOT]] · [[MOC]]
