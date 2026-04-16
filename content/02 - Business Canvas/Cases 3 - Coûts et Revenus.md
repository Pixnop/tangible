---
tags: [business-canvas, cases-3, livrable-3, sprint-3]
statut: en-cours
sprint: 3
priorité: haute
---

# 🟩 Cases 3 du Business Canvas — Coûts & Revenus

> [!info] Livrable 3 (Sprint 3 — 16 avril matin)
> La **mécanique financière** qui rend le modèle viable.

## 💸 Structure des coûts

> *« Quels sont les coûts les plus importants ? Quelles ressources/activités coûtent le plus ? »*

### Nature : modèle **value-driven** (qualité premium) avec composante cost-driven sur l'infra (P2P pour réduire CDN).

### Coûts fixes (annuels, Phase 2)

| Poste | Montant estimé | Commentaire |
|-------|----------------|-------------|
| 👥 Salaires (15 ETP · ~60k€ chargé moyen) | **~900 k€** | Devs, produit, support |
| 🏢 Bureaux + hosting infra de base | ~60 k€ | Petit espace Paris/Montpellier + cloud de coord |
| ⛓️ Transactions blockchain (L2 Polygon) | ~10 k€ | À faible coût par tx |
| 🧮 Outils SaaS (dev, analytics, support) | ~30 k€ | Figma, Linear, Sentry, etc. |
| ⚖️ Légal / conformité (RGPD, contrats studios) | ~40 k€ | Conseil droit IP/contrats |
| 🛡️ Audits sécurité annuels | ~25 k€ | Pentest + audit crypto |
| 📣 Marketing / acquisition | **~150 k€** | Content, YouTube, SEO |
| **Total fixe / an** | **~1,2 M€** | |

### Coûts variables

| Poste | Variation | Commentaire |
|-------|-----------|-------------|
| 💳 Frais de paiement | ~1,4% + 0,25€/tx | Stripe / crypto |
| 🌐 CDN fallback (hors P2P) | ~0,01€/GB | IPFS+P2P réduit à ~20% du trafic CDN |
| 📁 Stockage master | ~0,02€/GB/mois | Stockage froid films masters |
| 💰 Royalties studios | 70% du CA par film | Le gros du « coût variable » |
| 🐧 Rémunération seeders | 10% du CA par film | Distribution P2P |

### Économies d'échelle
- Coût P2P **diminue** avec la base utilisateurs (effet réseau positif)
- Coût blockchain fixe ~indépendant du volume
- Marketing profite du **bouche-à-oreille communautaire**

## 💰 Sources de revenus

> *« Pour quelle valeur nos clients sont-ils prêts à payer ? Comment préfèrent-ils payer ? »*

### R1 — Commission sur vente initiale (flux principal, Phase 1+)

| Prix TTC | Répartition |
|----------|-------------|
| Ex : **10€ HD** | Studio **7€** · Tangible **2€** · Seeders **1€** |
| Ex : **15€ 4K** | Studio 10,50€ · Tangible 3€ · Seeders 1,50€ |

Types de prix : **fixe par qualité + bundles -20%**.

### R2 — Commission sur revente (marché secondaire, Phase 3)

| Prix revente | Répartition |
|--------------|-------------|
| Ex : **8€** | Vendeur **6,40€** · Studio (royalty) **1,20€** · Tangible **0,40€** |

Dynamique : prix libre (cap éventuel à 80% du prix d'achat initial).

### R3 — Abonnement optionnel « Tangible Pass » (Phase 2+)

- **8€ / mois**
- Accès catalogue rotatif (50 films/mois tournants)
- −15% sur achats définitifs
- Avant-premières indé
- Cible : usage mixte « flux + collection »

### R4 — Licence SDK B2B (Phase 3)

- Licence API/SDK pour distributeurs, studios, plateformes tierces
- Forfait annuel : 5–50 k€/an selon volume
- Commission 1% sur les transactions passant par le SDK

### R5 — Services annexes (Phase 3+)
- Ingestion haute qualité pour studios (digitalisation / encoding)
- Statistiques détaillées aux ayants droit
- API watermark forensique pour anti-piratage tiers

## 📊 Mix de revenus cible (Année 3)

```
Vente initiale .................. 65 %
Revente (marché secondaire) ....   8 %
Tangible Pass ...................  18 %
Licence SDK B2B .................   7 %
Services annexes ................   2 %
```

## 🧾 Hypothèses financières clés

Détail → [[Hypothèses Financières]]

- Année 1 : 8 000 utilisateurs actifs, ACV ~25 €/user → CA **~200 k€**
- Année 2 : 45 000 utilisateurs, ACV ~35€ → CA **~1,6 M€**
- Année 3 : 150 000 utilisateurs, ACV ~45€ → CA **~6,7 M€**

## 🔗 Liens

- [[Business Model Canvas]] · [[Hypothèses Financières]]
- [[Compte de Résultat Prévisionnel]] · [[Plan de Trésorerie 3 ans]]
- [[Cases 1 - Offre Relation Segments]] · [[Cases 2 - Activités Partenaires Ressources Canaux]]
- [[MOC]]
