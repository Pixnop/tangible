---
tags: [technique, architecture, stack]
statut: en-cours
sprint: 2
priorité: moyenne
---

# 🏗️ Architecture Technique — Tangible

## 🗺️ Vue d'ensemble

```mermaid
graph TB
    subgraph Client["📱 Client (Player + Store)"]
        UI[UI - Tauri/Electron]
        Crypto[Crypto Engine AES-256-GCM]
        P2P[P2P / IPFS Node]
        TEE[TEE Decrypt Frame-by-Frame]
        Lib[Bibliothèque locale chiffrée]
    end

    subgraph Backend["☁️ Backend Tangible"]
        API[API Gateway]
        Auth[Auth biométrique + pub key]
        Catalog[Service Catalogue]
        Payment[Service Paiement]
        Watermark[Service Watermark forensique]
        Meta[Service Métadonnées]
    end

    subgraph Blockchain["⛓️ Blockchain L2 Polygon"]
        Cert[Smart Contract Certificats]
        Royalty[Smart Contract Royalties]
        Resale[Smart Contract Marché revente]
    end

    subgraph External["🌐 Externe"]
        TMDB[TMDB / IMDB]
        Stripe[Stripe / Crypto Processors]
        CDN[CDN Fallback]
        Seeders[Seeders P2P rémunérés]
        Studios[Studios - Ingestion]
    end

    UI --> API
    UI --> Lib
    Lib --> Crypto
    Crypto --> TEE
    UI --> P2P
    P2P <--> Seeders
    P2P <-.fallback.-> CDN

    API --> Auth
    API --> Catalog
    API --> Payment
    Catalog --> Meta
    Meta --> TMDB
    Payment --> Stripe
    Payment --> Royalty

    Auth --> Cert
    Catalog --> Watermark
    Watermark --> Studios

    Cert --> Resale
    Resale --> Royalty
```

## 🧱 Stack technique

### Client (Player + Store)

| Couche | Techno | Raison |
|--------|--------|--------|
| Desktop shell | **Tauri** (Rust + WebView) | Léger, sécurisé, multi-OS |
| Mobile | **React Native** / **Kotlin Multiplatform** | Code partagé iOS/Android |
| UI | **React / TypeScript** | Écosystème, productivité |
| Lecture vidéo | **libmpv** / **FFmpeg** | 4K HDR Dolby Vision, sous-titres |
| Cast | **libmicrodns**, **UPnP**, **AirPlay libs** | Chromecast/AirPlay/DLNA |
| Crypto | **libsodium**, **OpenSSL** (AES-256-GCM) | Standards audités |
| TEE | **Intel SGX**, **ARM TrustZone** (mobile) | Isolation hardware |
| P2P | **libp2p** / **IPFS** (go-ipfs embarqué) | Décentralisé, résilient |
| Stockage local | **SQLite** (chiffré avec SQLCipher) | Léger, fiable |

### Backend

| Couche | Techno | Raison |
|--------|--------|--------|
| API Gateway | **Go** (net/http + chi) | Performance, concurrence |
| Services | **Go** microservices | Découpe fonctionnelle |
| Base de données | **PostgreSQL** (principale) + **Redis** (cache) | Robustesse + vitesse |
| Message bus | **NATS** | Légèreté, performance |
| Auth | **OIDC + Webauthn** (biométrie) + clés publiques | Sans mot de passe |
| Stockage master | **S3** (chiffré) / **Filebase** (IPFS) | Hybride coût/perf |
| Watermarking | **FFmpeg** + pipeline proprio TEE | Marquage à la volée |
| Observability | **OpenTelemetry** + **Grafana** | Standard moderne |

### Blockchain

| Couche | Techno | Raison |
|--------|--------|--------|
| L2 | **Polygon PoS** | Coûts faibles, EVM-compatible |
| Smart contracts | **Solidity** + Foundry | Écosystème mature |
| Oracles | **Chainlink** | Prix crypto, données externes |
| Wallet users | **Account Abstraction** (ERC-4337) | UX sans seed phrase |

## 🔄 Flux d'un achat

```mermaid
sequenceDiagram
    actor U as Utilisateur
    participant C as Client Tangible
    participant API as Backend API
    participant PAY as Stripe/Crypto
    participant BC as Blockchain L2
    participant P2P as Réseau P2P

    U->>C: Clique "Acheter 4K" (13 €)
    C->>API: Requête achat (film_id, quality, pub_key)
    API->>PAY: Crée paiement
    U->>PAY: Valide paiement
    PAY-->>API: Paiement confirmé
    API->>BC: Mint certificat (owner=pub_key, film_id, hash_master)
    BC-->>API: Tx hash + licence_id
    API->>P2P: Annonce disponibilité fichier chiffré (clé = f(pub_key, licence_id))
    API-->>C: licence_id + tx_hash + clés découpées
    C->>P2P: Télécharge film chiffré (AES-256-GCM)
    P2P-->>C: Fichier chiffré local
    C->>C: Stocke dans bibliothèque chiffrée
    Note over C,BC: Plus tard — lecture offline
    U->>C: Lance lecture
    C->>C: Vérifie certificat (signature blockchain en cache)
    C->>C: TEE déchiffre frame par frame
    C-->>U: Lecture 4K HDR
```

## 🔁 Flux d'une revente (marché secondaire)

```mermaid
sequenceDiagram
    actor V as Vendeur
    actor A as Acheteur
    participant C1 as Client Vendeur
    participant API as Backend
    participant BC as Blockchain
    participant C2 as Client Acheteur

    V->>C1: Met en vente (prix 8€)
    C1->>API: Ordre de revente
    API->>BC: Enregistre offre publique
    A->>API: Trouve & accepte l'offre
    A->>API: Paie 8€
    API->>BC: Exécute transfert licence + split automatique
    BC-->>BC: Vendeur 6,40 € / Studio 1,20 € / Tangible 0,40 €
    BC->>C1: Révoque certificat vendeur
    BC->>C2: Mint certificat acheteur
    C1->>C1: Efface fichier chiffré local
    C2->>P2P: Télécharge fichier chiffré
```

## 🧩 Modèle de données principal

```mermaid
erDiagram
    USER ||--o{ LICENSE : possède
    USER {
        string pub_key PK
        string email
        date created_at
    }
    LICENSE ||--|| FILM : pour
    LICENSE {
        string licence_id PK
        string owner_pub_key FK
        string film_id FK
        string quality
        string tx_hash
        date acquired_at
        bool revoked
    }
    FILM {
        string film_id PK
        string title
        string studio_id FK
        string master_hash
        int year
    }
    STUDIO ||--o{ FILM : produit
    STUDIO {
        string studio_id PK
        string name
        string royalty_addr
    }
    LICENSE ||--o{ RESALE_OFFER : peut_générer
    RESALE_OFFER {
        string offer_id PK
        string licence_id FK
        decimal price
        string status
    }
```

## 🔗 Liens

- [[Sécurité]] · [[Roadmap Technique]]
- [[Tangible - Description]] · [[Prototype et Maquettes]]
- [[MOC]]
