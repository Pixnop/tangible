---
tags: [concept, description, produit]
statut: en-cours
sprint: 1
priorité: haute
---

# 🎬 Tangible — Description complète du projet

> [!quote] Slogan
> 🇫🇷 **« Ne louez plus votre passion. Possédez-la. »**
> 🇬🇧 **« Don't rent your passion. Own it. »**

> [!quote] Pitch une-ligne
> **Tangible** redonne aux spectateurs la **propriété réelle** de leurs films numériques : achetés, téléchargés, chiffrés localement, lisibles à vie — indépendamment de toute plateforme.

## 🧭 Contexte & problème

Les services de streaming par abonnement (Netflix, Disney+, Amazon Prime) ont déguisé la location en accès « illimité ». Mais :
- Les films **disparaissent** régulièrement des catalogues (retraits stratégiques, fins de licences).
- « Acheter » sur iTunes/Google Play ne garantit **rien** : la licence est révocable, dépend du vendor, aucun export n'est possible.
- Le consommateur n'a aucune **propriété réelle** de ce qu'il consomme.
- Le streaming répété d'un même contenu a un **coût énergétique** bien supérieur à un téléchargement unique.

## 💡 Solution : les deux piliers de Tangible

### 1️⃣ Tangible Player — Media Center local

> Un lecteur multimédia personnel, complet et élégant.

- 📚 Bibliothèque personnelle — import des fichiers existants
- 🎞️ Métadonnées automatiques (TMDB / IMDB) : affiches, synopsis, casting
- 🗂️ Organisation par collections, genres, années
- 👨‍👩‍👧 Profils multiples, **profils enfants protégés**
- 🎥 Lecture haute qualité : **4K HDR, Dolby Vision, sous-titres, multi-audio**
- 📺 Cast vers Chromecast / AirPlay / DLNA
- 🔐 Authentification biométrique
- 🚫 **100% hors-ligne** après téléchargement

### 2️⃣ Tangible Store — Boutique intégrée

> Une vraie boutique où **acheter = posséder**.

- 🎬 Catalogue en **achat définitif** (indépendants d'abord, studios ensuite)
- 🧾 **Certificat de propriété cryptographique** pour chaque achat (blockchain)
- 🔄 **Marché secondaire** : revente de licences, royalties automatiques aux ayants droit (15%)
- 💳 Paiement CB / Crypto / TangibleCredits
- 🌐 Distribution via **réseau P2P / IPFS**

## 🛡️ Sécurité multicouche

Voir détail → [[Sécurité]]

1. **Chiffrement AES-256-GCM** des fichiers
2. **Biométrie locale** (clé dérivée de l'identité)
3. **Certificat de propriété blockchain** (preuve vérifiable offline)
4. **Déchiffrement frame-by-frame en TEE** (jamais le film entier en RAM)
5. **Watermark forensique** (chaque copie unique et traçable)

## 💰 Modèle économique

Détail → [[Cases 3 - Coûts et Revenus]]

| Source | Répartition |
|--------|-------------|
| **Commission vente initiale** (20%) | Studio 70% · Tangible 20% · Seeders P2P 10% |
| **Commission revente** (5%) | Vendeur 80% · Studio 15% · Tangible 5% |
| **Tangible Pass** (7,99€/mois, optionnel) | Catalogue rotatif + réductions |
| **Licence SDK tiers** (B2B) | Accès API / intégration partenaires |

### Prix utilisateur
| Qualité | Prix |
|---------|------|
| SD | 5 – 8 € |
| HD | 8 – 12 € |
| 4K | 12 – 18 € |
| Bundles | −20% |

## 🎯 Cibles

Détail → [[Cases 1 - Offre Relation Segments]]

- 🎞️ **Cinéphiles** lassés de voir des films disparaître des plateformes
- 🗂️ **Collectionneurs numériques** voulant une vidéothèque pérenne
- ⚖️ **Défenseurs d'un numérique responsable** où *acheter = posséder*
- 👨‍👩‍👧 **Familles** voulant un media center simple et sécurisé

## 🌱 Angle numérique responsable

> [!important] Argument clé pour le jury Scrum'Innov
> - 🛑 Lutte contre l'**obsolescence** des contenus (films retirés des plateformes)
> - ⚖️ Droit de **propriété numérique réelle** vs location déguisée
> - 🌐 Alternative aux **GAFAM** et à la concentration du streaming
> - ♻️ **Économie circulaire numérique** via marché de revente
> - 🔌 **Réduction du streaming répétitif** : on re-streame un film 10× au lieu d'un téléchargement unique

## 🥊 Concurrents

Détail → [[Veille Concurrentielle]]

| Type | Exemples | Limite |
|------|----------|--------|
| **Direct achat** | iTunes / Apple TV, Google Play Films, Vudu | DRM propriétaire, pas de revente, dépendance vendor |
| **Indirect streaming** | Netflix, Disney+, Amazon Prime | Pas de propriété, catalogue instable |
| **Media centers libres** | Jellyfin, Plex, Kodi | Pas de boutique légale intégrée |

**Différenciation Tangible** : seule plateforme combinant **media center local + boutique légale + propriété réelle + revente**.

## 🛣️ Roadmap

Détail → [[Roadmap Technique]]

| Phase | Durée | Objectifs |
|-------|-------|-----------|
| **Phase 1** | 0–6 mois | Player desktop (Win/Mac/Linux), bibliothèque locale, chiffrement, 50 films indépendants |
| **Phase 2** | 6–12 mois | Store intégré, certificats de propriété, P2P, apps mobiles, watermarking |
| **Phase 3** | 12–24 mois | Marché secondaire, partenariats studios, Tangible Pass, SDK/API |
| **Phase 4** | 24 mois+ | Smart TV, 50 000+ titres, contenu exclusif, international |

## 🔗 Liens

- [[Proposition de Valeur]] · [[Slogan et Identité]] · [[Prototype et Maquettes]]
- [[Business Model Canvas]] · [[Losange de Kapferer]]
- [[Architecture Technique]] · [[Sécurité]]
- [[MOC]]
