---
tags: [business-canvas, cases-2, livrable-2, sprint-3]
statut: en-cours
sprint: 3
priorité: haute
---

# 🟨 Cases 2 du Business Canvas — Activités · Ressources · Partenaires · Canaux

> [!info] Livrable 2 (Sprint 3 — 16 avril matin)
> L'**infrastructure opérationnelle** qui sert l'offre définie en [[Cases 1 - Offre Relation Segments|Cases 1]].

## ⚙️ Activités clés

> *« Que faut-il faire pour livrer l'offre, maintenir la relation, toucher les canaux, générer les revenus ? »*

### Production (développement)
- 💻 **Développement Player** (desktop Win/Mac/Linux, puis mobile iOS/Android)
- 🛒 **Développement Store** (catalogue, paiement, téléchargement)
- 🔐 **R&D sécurité** : chiffrement AES-256-GCM, TEE, watermark forensique, biométrie
- ⛓️ **Smart contracts** certificats de propriété + royalties automatiques
- 🌐 **Infrastructure P2P / IPFS** pour distribution

### Plateforme (opérations continues)
- 🎞️ **Curation catalogue** — négociation licences, contrôle qualité encodes
- 🧾 **Gestion des certificats** et vérifications on-chain
- 🛡️ **Sécurité continue** : audits, pentests, patches
- 🧑‍💻 **Support client** L1/L2
- 📈 **Marketing / acquisition** : content, SEO, partenariats YouTube

### Résolution de problèmes
- 🎬 Ingestion des films (transcoding multi-qualité)
- 🔍 Enquêtes sur les fuites via watermark forensique

## 📦 Ressources clés

> *« Quelles ressources sont nécessaires pour produire la proposition de valeur et atteindre les clients ? »*

### Ressources intellectuelles
- 🧠 Code propriétaire (player, store, crypto-layer)
- 🎫 Brevets potentiels sur watermarking frame-level en TEE
- 🏷️ **Marque Tangible** et identité graphique
- 📚 Catalogue (licences négociées)

### Ressources humaines (cible Phase 2 — 15 ETP)

| Rôle | Nombre |
|------|--------|
| CEO + CTO (fondateurs) | 2 |
| Devs backend / crypto | 3 |
| Devs frontend (player, store) | 3 |
| Devs mobile | 2 |
| Ingénieur sécurité / TEE | 1 |
| Product / UX | 1 |
| Content / catalogue / partenariats studios | 1 |
| Marketing / growth | 1 |
| Support / community | 1 |

### Ressources physiques / techniques
- ☁️ Infrastructure cloud hybride (coord. P2P + fallback CDN)
- 📀 Nœuds IPFS + seeders partenaires
- ⛓️ Intégration blockchain (probablement Polygon ou Solana pour coûts bas)

### Ressources financières
- 💰 **Amorçage** : 500 k€ (bootstrap + love money + BPI)
- 💰 **Série A (Phase 2)** : 3–5 M€ pour accélération

## 🤝 Partenaires clés

> *« Qui sont nos partenaires ? Qui sont nos fournisseurs ? Quelles ressources/activités externalisées ? »*

| Partenaire | Type | Rôle |
|------------|------|------|
| 🎬 **Studios indépendants** (Gaumont, ARP, mk2, A24…) | Fournisseurs catalogue | Fournir les films Phase 1 |
| 🎥 **Studios majors** (cible Phase 3) | Fournisseurs catalogue | Volume, blockbusters |
| 🗂️ **TMDB / IMDB / Wikidata** | Fournisseurs données | Métadonnées automatiques |
| 🌐 **Réseaux CDN / IPFS** (Cloudflare, Filebase) | Infra distribution | Fallback + coord P2P |
| 💳 **Stripe / Lemonway / processeurs crypto** | Paiement | Collecte et splits automatiques |
| ⛓️ **Polygon / Chainlink** | Blockchain | Certificats + oracles royalties |
| 🐧 **Seeders P2P rémunérés** (communauté) | Distribution | Partager bande passante contre 10% |
| 🛡️ **Labos sécurité / auditeurs** | Partenaires techniques | Audits, certifications |
| 🎞️ **Festivals indé** (Sundance, Annecy, Clermont) | Canaux promotion | Visibilité catalogue indé |
| 📺 **Créateurs YouTube cinéphilie** (Le Fossoyeur, In the Mood, etc.) | Canaux marketing | Sponsoring / placements |

### Motivations partenariales
- **Optimisation** : externaliser le CDN plutôt que construire
- **Réduction des risques** : diversifier les sources de catalogue
- **Acquisition de ressources** : métadonnées, blockchain, paiements

## 🛣️ Canaux de distribution

> *« Par quels canaux nos segments veulent-ils être atteints ? Comment s'intègrent-ils à leurs routines ? »*

### Phases canal (AIDA)

| Phase | Canal |
|-------|-------|
| **Notoriété** | YouTube cinéphile sponsorisé, articles presse spécialisée (Première, Les Inrocks, Numerama), SEO (« Netflix a retiré X ») |
| **Évaluation** | Site vitrine + démos, comparatifs vs iTunes/Jellyfin |
| **Achat** | Téléchargement direct site officiel, App Store / Play Store, Store Flatpak Linux |
| **Livraison** | Réseau P2P + CDN de fallback, téléchargement chiffré |
| **Après-vente** | Email + Discord communautaire + FAQ, newsletter nouveautés |

### Canaux propres vs partenaires

- **Propres** : site, app, support, newsletter
- **Partenaires** : App Store, Play Store, Flathub, YouTubeurs, presse

### Rentabilité par canal (hypothèses)
- SEO organique : meilleur ROI long terme
- YouTube cinéphile : ROI moyen terme, fort alignement marque
- Ads Meta/Google : à activer seulement après PMF validé

## 🔗 Liens

- [[Business Model Canvas]]
- [[Cases 1 - Offre Relation Segments]] · [[Cases 3 - Coûts et Revenus]]
- [[Partenaires Potentiels]] — **cartographie détaillée** avec criticité, phase et porte d'entrée
- [[Niches et Go-To-Market]] — niche de départ (enseignement) et stratégie d'atterrissage
- [[5 Forces de Porter]] · [[SWOT]]
- [[Architecture Technique]] · [[Roadmap Technique]]
- [[MOC]]
