---
tags: [technique, roadmap, planning]
statut: en-cours
sprint: 2
priorité: moyenne
---

# 🛣️ Roadmap Technique — Tangible

## 🗺️ Vue d'ensemble

```mermaid
gantt
    title Roadmap Tangible — 24 mois
    dateFormat YYYY-MM
    axisFormat %b %y

    section Phase 1 — MVP Player
    Player desktop (Win/Mac/Linux)    :active, p1a, 2026-01, 4M
    Bibliothèque locale chiffrée       :p1b, 2026-02, 3M
    Import + TMDB metadata             :p1c, 2026-03, 2M
    Onboarding 50 films indé           :p1d, 2026-05, 2M

    section Phase 2 — Store + Mobile
    Store intégré + paiement           :p2a, 2026-07, 3M
    Certificats blockchain L2          :p2b, 2026-08, 3M
    P2P / IPFS production              :p2c, 2026-09, 3M
    Apps iOS / Android                 :p2d, 2026-10, 4M
    Watermark forensique               :p2e, 2026-11, 3M

    section Phase 3 — Marché + B2B
    Marché secondaire + royalties      :p3a, 2027-01, 4M
    Partenariats studios majors        :p3b, 2027-03, 6M
    Tangible Pass                      :p3c, 2027-04, 2M
    SDK / API B2B                      :p3d, 2027-06, 4M

    section Phase 4 — Scale
    Apps Smart TV                       :p4a, 2028-01, 4M
    Catalogue 50k+ titres              :p4b, 2028-03, 12M
    Contenu exclusif                   :p4c, 2028-06, 6M
    Expansion internationale           :p4d, 2028-09, 9M
```

## 📍 Phase 1 — 0-6 mois — MVP Player

### Objectif
Un **player local premium** qui fait mieux que Jellyfin côté UX, avec une boutique initiale minimale.

### Livrables
- ✅ Player desktop **Windows / macOS / Linux** (Tauri)
- ✅ Bibliothèque locale **chiffrée** (AES-256-GCM, SQLCipher)
- ✅ Import fichiers existants + récupération métadonnées **TMDB**
- ✅ Authentification biométrique (Webauthn)
- ✅ Profils (dont enfants) + contrôle parental
- ✅ Lecture 4K HDR + sous-titres + multi-audio
- ✅ Cast Chromecast / AirPlay / DLNA
- ✅ Onboarding 50 films indépendants achetables en standalone
- ✅ Site vitrine + landing page

### Jalons techniques
- M+2 : Architecture crypto validée en audit
- M+4 : Alpha fermée (100 users)
- M+6 : Bêta publique + 50 films indé disponibles

## 📍 Phase 2 — 6-12 mois — Store + Mobile

### Objectif
Transformer l'outil local en **véritable plateforme de distribution**.

### Livrables
- 🛒 Store intégré avec paiement (CB + crypto)
- 🧾 Certificats de propriété on-chain (Polygon L2)
- 🌐 Réseau P2P / IPFS en production + fallback CDN
- 📱 Apps iOS + Android (React Native)
- 💧 Watermarking forensique frame-level en TEE
- 🔐 Programme bug bounty public

### Jalons techniques
- M+9 : Smart contracts audités
- M+10 : Premier achat on-chain en prod
- M+12 : 5 000 utilisateurs actifs

## 📍 Phase 3 — 12-24 mois — Marché + B2B

### Objectif
Activer les **relais de croissance** : revente, studios majors, B2B.

### Livrables
- ♻️ Marché secondaire + royalties automatiques
- 🎬 Signatures studios majors (au moins 2 sur 5 visés)
- 🎫 Tangible Pass (abonnement optionnel)
- 🛠️ SDK / API B2B pour distributeurs et plateformes tierces
- 📊 Dashboard ayants droit (stats en temps réel)

### Jalons
- M+18 : Revente fonctionnelle + 100 transactions/semaine
- M+20 : 1ère major signée
- M+24 : 50 000 utilisateurs actifs, ARR > 1 M€

## 📍 Phase 4 — 24+ mois — Scale

### Objectif
Passer **mainstream** et **international**.

### Livrables
- 📺 Apps Smart TV (Samsung Tizen, LG webOS, Android TV)
- 📚 Catalogue 50 000+ titres
- 🎞️ Contenu exclusif (acquisitions, docs, indé premium)
- 🌍 Expansion internationale (UE → US → Asie)

## 🔄 Pipeline de release

```mermaid
graph LR
    A[Dev] --> B[Tests unitaires]
    B --> C[Tests intégration]
    C --> D[Audit sécurité continu]
    D --> E[Staging]
    E --> F[Beta publique]
    F --> G[Production]
    G --> H[Monitoring OTel]
    H -.feedback.-> A
```

## 🔗 Liens

- [[Architecture Technique]] · [[Sécurité]]
- [[Tangible - Description]] · [[Hypothèses Financières]]
- [[MOC]]
