---
tags: [technique, roadmap, planning]
statut: en-cours
sprint: 3
priorité: haute
---

# 🛣️ Roadmap Technique — Tangible

> [!tldr] Stratégie d'exécution
> **Phase 0** : atterrissage sur la niche enseignement (cf. [[Niches et Go-To-Market]]) — 9 mois pour prouver le modèle.
> **Phase 1** : extension catalogue et ouverture B2C cinéphile — 6 mois.
> **Phase 2-3** : monétisation complète (Store, blockchain, mobile, majors) — 18 mois.
> **Phase 4** : scale mainstream et international — 12+ mois.

## 🗺️ Vue d'ensemble 36 mois

```mermaid
gantt
    title Roadmap Tangible — 36 mois
    dateFormat YYYY-MM
    axisFormat %b %y

    section Phase 0 — Pilote Enseignement
    Player desktop (Win/Mac/Linux)    :active, p0a, 2026-05, 3M
    Bibliothèque locale chiffrée       :p0b, 2026-06, 2M
    Licence établissement (SSO + profils) :p0c, 2026-07, 3M
    Module annotations pédagogiques     :p0d, 2026-08, 3M
    Pilote 5 établissements             :p0e, 2026-09, 3M
    Conversion payante (20 étab.)       :p0f, 2026-11, 3M

    section Phase 1 — Catalogue et B2C
    Store desktop + paiement CB         :p1a, 2027-01, 3M
    Onboarding catalogue indé FR (500 films) :p1b, 2027-02, 4M
    Cast Chromecast / AirPlay / DLNA   :p1c, 2027-02, 2M
    Watermark forensique (MVP)         :p1d, 2027-03, 3M
    Bêta publique B2C                   :p1e, 2027-05, 2M

    section Phase 2 — Certificats et Mobile
    Certificats blockchain L2 (Polygon) :p2a, 2027-07, 3M
    Réseau P2P / IPFS production        :p2b, 2027-08, 3M
    Apps iOS / Android (Tauri mobile)   :p2c, 2027-08, 5M
    Watermark forensique TEE            :p2d, 2027-09, 3M
    Programme bug bounty                 :p2e, 2027-10, 2M

    section Phase 3 — Marché secondaire et B2B
    Marché secondaire + royalties       :p3a, 2028-01, 4M
    Partenariats studios majors         :p3b, 2028-03, 6M
    Tangible Pass                       :p3c, 2028-04, 2M
    SDK / API B2B                       :p3d, 2028-06, 4M

    section Phase 4 — Scale
    Apps Smart TV                       :p4a, 2028-11, 4M
    Catalogue 50k+ titres              :p4b, 2029-01, 12M
    Expansion internationale           :p4c, 2029-06, 9M
```

## 📍 Phase 0 — Mois 0-9 — Pilote Enseignement

> Voir [[Niches et Go-To-Market]] pour la stratégie commerciale.

### Objectif
Prouver la **traction B2B éducation** avec 20 établissements payants et 150 k€ ARR avant d'attaquer le grand public.

### Livrables techniques

#### Module 1 — Player desktop minimum (M+0 → M+4)
- Tauri 2 (Rust + Web) pour Windows, macOS, Linux
- Bibliothèque locale chiffrée **AES-256-GCM** + SQLCipher
- Import fichiers existants + récupération métadonnées **TMDB**
- Lecture 4K HDR, sous-titres SRT/VTT/ASS, multi-audio
- Profils utilisateur (dont profils enseignants)
- Authentification biométrique (WebAuthn)

#### Module 2 — Licence établissement (M+2 → M+5)
- SSO SAML / OIDC (intégration ENT, rectorats, universités)
- Domaines email whitelistés par établissement
- Provisioning SCIM pour profils en masse
- Certificat de licence vérifiable offline (JWT signé + horodatage)
- Dashboard admin établissement (usage, films consultés, renouvellements)

#### Module 3 — Annotations pédagogiques (M+4 → M+7)
- Chapitrage enseignant (définir séquences pour TD)
- Notes temporisées (commentaire sur un timecode)
- Comparaison 2 plans côte à côte (split screen)
- Export séquence courte (≤ 30 s pour citation pédagogique, watermarké)
- Partage de notes entre profils d'un même établissement

#### Module 4 — Onboarding catalogue éducatif (M+5 → M+9)
- 50 films catalogue de démarrage (10 domaine public restaurés + 40 négociés)
- Fiches pédagogiques pré-remplies (niveau, programme, objectifs)
- Mapping avec programmes officiels Education Nationale (fonctionnalité v2)

### Jalons de validation

| Mois | Critère technique | Critère business |
|---|---|---|
| M+2 | Architecture crypto auditée (cabinet externe) | 3 lettres d'intérêt établissement |
| M+4 | Alpha fermée — 20 users internes | Contact formel ADAV + Canopé |
| M+6 | Bêta pilote — 5 établissements | 1er contrat pilote gratuit signé |
| M+9 | v1.0 stable + annotations | **20 établissements payants, ARR ≥ 100 k€** |

### Stack technique Phase 0
- **Front player** : Tauri 2 + React 19 + Vite, Redux Toolkit pour l'état
- **Backend player** : Rust (crypto, file I/O, vidéo pipeline GStreamer/FFmpeg)
- **Backend SaaS** (licences, métadonnées) : Go + PostgreSQL + Redis
- **SSO** : Keycloak ou Auth0 selon coût
- **Infra** : Scaleway (FR, RGPD) + Cloudflare R2 pour fichiers sources
- **CI/CD** : GitHub Actions + signature binaires (Apple notarization, Windows SmartScreen)

### Go/No-Go M+9
Voir critères [[Niches et Go-To-Market#📌 Critères de décision « on persiste ou on pivote »]].

## 📍 Phase 1 — Mois 9-15 — Catalogue et B2C cinéphile

### Objectif
Ouvrir le **B2C** avec un catalogue crédible (500+ films indé) et la fonctionnalité Store complète.

### Livrables techniques
- 🛒 **Store intégré** : paiement CB via Stripe, paiement crypto via Ramp (option)
- 🎞️ Onboarding catalogue indé FR (Diaphana, Ad Vitam, Haut et Court, Pyramide, Le Pacte, Memento)
- 🌐 Cast **Chromecast / AirPlay / DLNA**
- 💧 Watermark forensique MVP (CPU, visible en analyse frame)
- 📢 Site vitrine B2C + SEO (« Netflix a retiré X », comparatifs)
- 📩 Newsletter nouveautés + Discord communautaire

### Jalons
- M+12 : Store en prod, 1er achat B2C
- M+13 : 500 films disponibles à l'achat
- M+15 : **5 000 utilisateurs actifs B2C + 40 établissements B2B**

### Levée Série A
Ouverture dossier à M+10, cible 3-5 M€ à closer M+15 pour financer Phase 2.

## 📍 Phase 2 — Mois 15-24 — Certificats et Mobile

### Objectif
Transformer Tangible en **plateforme de propriété** avec certificats blockchain et apps mobiles.

### Livrables techniques
- ⛓️ Certificats de propriété **on-chain Polygon L2** (smart contracts audités)
- 🌐 Réseau **P2P / IPFS** en production (coord CDN Cloudflare + seeders incentivés)
- 📱 Apps **iOS + Android** (Tauri mobile ou React Native selon perf)
- 💧 **Watermarking forensique en TEE** (frame-level, imperceptible)
- 🔐 Programme bug bounty public (HackerOne ou Intigriti)
- 🔄 Migration progressive des users Phase 0-1 vers certificats on-chain

### Jalons
- M+18 : Smart contracts audités (Trail of Bits ou Least Authority)
- M+20 : 1er achat on-chain en prod
- M+22 : Apps iOS + Android sur stores
- M+24 : **25 000 utilisateurs actifs + 100 établissements + 1 M€ ARR**

## 📍 Phase 3 — Mois 24-36 — Marché secondaire et B2B

### Objectif
Activer les **relais de croissance** : revente, studios majors, SDK distributeur.

### Livrables techniques
- ♻️ **Marché secondaire** : revente P2P avec royalties automatiques aux ayants droit (typiquement 10-20 % du prix de revente)
- 🎫 **Tangible Pass** : abonnement optionnel pour remises + accès anticipé
- 🛠️ **SDK / API B2B** : permettre à des distributeurs tiers (cinémas, festivals) d'utiliser la couche propriété Tangible
- 📊 Dashboard **ayants droit** (stats temps réel, revenus, territoires)
- 🎬 Intégration catalogue majors (Studiocanal en priorité)

### Jalons business
- M+28 : Marché secondaire en prod, 100+ reventes/semaine
- M+30 : 1ère major signée (Studiocanal visé)
- M+36 : **50 000 utilisateurs + 300 établissements + ARR > 3 M€**

## 📍 Phase 4 — Mois 36+ — Scale mainstream et international

### Objectif
Passer **grand public** et **international**.

### Livrables
- 📺 Apps **Smart TV** (Samsung Tizen, LG webOS, Android TV)
- 📚 Catalogue **50 000+ titres** (majors US + catalogue international)
- 🌍 Expansion UE (DE, ES, IT) → US → Asie
- 🎞️ Contenu **exclusif** (acquisitions, docs indé, restaurations)
- 🏫 Programme **Tangible Campus** international

## 🔄 Pipeline de release

```mermaid
graph LR
    A[Dev] --> B[Tests unitaires]
    B --> C[Tests intégration]
    C --> D[Audit sécurité continu]
    D --> E[Staging]
    E --> F[Beta privée]
    F --> G[Beta publique]
    G --> H[Production]
    H --> I[Monitoring OTel + Sentry]
    I -.feedback.-> A
```

### Cadence
- **Patches** (fix sécurité) : < 48 h
- **Mineures** : toutes les 2 semaines
- **Majeures** : tous les trimestres

## 📦 Dépendances externes critiques

| Dépendance | Risque | Mitigation |
|---|---|---|
| Polygon L2 disponibilité | ★★ | Abstraction du layer blockchain, fallback Arbitrum |
| Apple notarization | ★★ | Process validé Phase 0, compte Enterprise |
| Catalogue distributeurs | ★★★ | Voir [[Partenaires Potentiels]] — 3 sources alternatives par segment |
| Audit sécurité | ★★★ | Pré-réserver créneau 6 mois avant |
| Subventions CNC / BPI | ★★ | Dossiers lancés dès M+3 |

## 🔗 Liens

- [[Architecture Technique]] · [[Sécurité]]
- [[Niches et Go-To-Market]] · [[Partenaires Potentiels]]
- [[Tangible - Description]] · [[Hypothèses Financières]]
- [[Cases 2 - Activités Partenaires Ressources Canaux]]
- [[MOC]]
