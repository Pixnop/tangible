---
tags: [stratégie, concurrence, veille, livrable-1, livrable-2]
statut: en-cours
sprint: 2
priorité: haute
---

# 🕵️ Veille Concurrentielle

## 🎯 Cartographie des concurrents

```
                     Propriété réelle
                           ▲
                           │
                 Blu-ray   │   ★ TANGIBLE
                  physique │
                           │
    Archivage ─────────────┼───────────── Consommation facile
                           │
                 Jellyfin  │   iTunes / G. Play
                  (local)  │    (achat fictif)
                           │   Netflix / Disney+
                           │   (streaming abo)
                           ▼
                    Accès loué
```

**Axes d'analyse** :
- **Vertical** : degré de propriété réelle vs. accès loué
- **Horizontal** : facilité d'archivage vs. facilité de consommation mainstream

## 🥊 Concurrents directs

### 🍎 Apple iTunes / Apple TV
| Critère | Évaluation |
|---------|-----------|
| Propriété | ❌ Licence révocable (films ont déjà disparu des bibliothèques iTunes) |
| DRM | 🔒 FairPlay, verrou Apple total |
| Offline | ⚠️ Oui mais dans écosystème Apple |
| Revente | ❌ Impossible |
| Prix | 9,99 – 19,99 € |
| Part de marché EU | Dominant sur achat |
| **Vulnérabilité** | Vendor lock-in Apple, pas de revente, licences retirables |

### 🟢 Google Play Films / YouTube Movies
Idem Apple : achat fictif, DRM Widevine, dépendance Google, pas de revente.
**Vulnérabilité** : Google a déjà fermé des services (Play Livres partiellement, Music). Confiance faible.

### 🟣 Vudu / Fandango at Home
| Critère | Évaluation |
|---------|-----------|
| Propriété | ⚠️ « Ownership » via Movies Anywhere |
| Offline | ⚠️ Oui mais DRM |
| Marché | US uniquement principalement |
| **Vulnérabilité** | Couverture géographique limitée, DRM lourd |

### 🟡 Microsoft Movies & TV — **arrêté pour achat en 2021** ✨
Cas d'école : Microsoft a arrêté la vente de films en 2021 → les utilisateurs se retrouvent avec un catalogue gelé sans option d'export. **Preuve vivante du problème que Tangible résout.**

## 🎬 Concurrents indirects — Streaming SVOD

| Service | Abonnés monde | Prix FR | Modèle |
|---------|--------------|---------|--------|
| Netflix | ~260 M | 7,99 – 21,99 €/mois | Abonnement, pas de propriété |
| Disney+ | ~150 M | 8,99 – 13,99 €/mois | Abonnement |
| Amazon Prime Video | ~200 M (inclus Prime) | 6,99 €/mois | Abonnement + achat/location |
| Apple TV+ | ~50 M | 9,99 €/mois | Abonnement contenu original |
| Max (ex-HBO) | ~100 M | 5,99 – 13,99 €/mois | Abonnement |

**Angle d'attaque Tangible** : empilement d'abonnements (~300€/an), films retirés, surveillance data, impossibilité de conserver.

### Cas concrets de retraits médiatisés
- **Disney+** a retiré plusieurs originaux fin 2023 pour raisons fiscales (ex. *Willow*, *Crater*)
- **HBO Max** a supprimé *Westworld* S4 du catalogue
- **Netflix** voit régulièrement des films partir en fin de licence

## 🛠️ Concurrents indirects — Media centers libres

### 🐧 Jellyfin (open source)
| Critère | Évaluation |
|---------|-----------|
| Coût | Gratuit |
| Qualité UX | ⚠️ Technique, setup complexe |
| Boutique intégrée | ❌ Aucune |
| Propriété certifiée | ❌ Aucune preuve formelle |
| **Vulnérabilité** | Tech-friendly only, pas de boutique légale |

### 🟧 Plex
| Critère | Évaluation |
|---------|-----------|
| Coût | Freemium (Plex Pass ~5€/mois) |
| UX | ✅ Bonne |
| Boutique intégrée | ⚠️ Plex TV/films gratuits avec pub, pas d'achat pérenne |
| **Vulnérabilité** | Sert du contenu tiers, pas d'achat définitif garanti |

### 📦 Kodi
Open source, puissant, mais interface complexe et pas de boutique.

## 🆚 Tableau différenciation

| Critère | Tangible | iTunes | Netflix | Jellyfin |
|---------|:--------:|:------:|:-------:|:--------:|
| Achat définitif | ✅ | ⚠️ (licence) | ❌ | ❌ |
| Téléchargement local | ✅ | ⚠️ (DRM) | ⚠️ (temp) | ✅ |
| Certificat propriété | ✅ ⛓️ | ❌ | ❌ | ❌ |
| Revente possible | ✅ | ❌ | ❌ | ❌ |
| Hors-ligne à vie | ✅ | ❌ | ❌ | ✅ |
| Media center complet | ✅ | ⚠️ | ❌ | ✅ |
| Catalogue légal | ✅ | ✅ | ✅ | ❌ |
| Pas de vendor lock | ✅ | ❌ | ❌ | ✅ |
| Conçu pour le grand public | ✅ | ✅ | ✅ | ❌ |

→ **Tangible = la seule ligne à 100% ✅**

## 🚧 Barrières à l'entrée

- Négociation licences studios (relations long terme)
- Maîtrise technique (crypto, TEE, P2P)
- Confiance utilisateurs (sécurité, pérennité)
- Effet de réseau (plus d'utilisateurs = plus de seeders = coût infra bas)

## 🔗 Liens

- [[5 Forces de Porter]] · [[SWOT]] · [[Losange de Kapferer]]
- [[Objections et Réponses]]
- [[MOC]]
