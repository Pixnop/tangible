---
tags: [stratégie, go-to-market, niche, enseignement]
statut: en-cours
sprint: 3
priorité: haute
---

# 🎯 Niches & Go-To-Market — Par où commencer ?

> [!tldr] Hypothèse de niche de départ
> **L'enseignement supérieur et secondaire** est le terrain d'atterrissage optimal : budget institutionnel, besoin structurel non servi, concurrence vieillissante, alignement éthique fort, et tête de pont vers le B2C cinéphile ensuite.

## 🧭 Pourquoi pas le B2C cinéphile dès le départ ?

Le cœur de cible long terme reste le cinéphile exigeant (voir [[Cases 1 - Offre Relation Segments]]), mais attaquer le B2C grand public dès la Phase 1 expose à 3 risques :

1. **Coût d'acquisition** : CAC de 40-80 €/utilisateur sur marché saturé (Netflix, Prime, Disney+).
2. **Catalogue minimal** : 50 films indé ≠ promesse crédible pour un consommateur habitué aux 10 000 titres des SVOD.
3. **Effet réseau absent** : pas de viralité tant que < 10 k users actifs.

L'**enseignement** permet de construire :
- du **revenu récurrent** prévisible (licences annuelles établissement)
- une **crédibilité institutionnelle** (CNC, Canopé, universités) qui légitime auprès des majors en Phase 3
- un **catalogue éducatif** pré-négocié (ADAV) qui se transpose ensuite en catalogue grand public
- une **preuve technique** en conditions réelles (offline, chiffré, profils multiples) avant scale

## 📊 Segmentation de la niche enseignement

| Sous-segment | Taille FR | Budget annuel / entité | Point d'entrée | Priorité |
|---|---|---|---|---|
| **Universités — filières cinéma/audiovisuel** | ~45 formations | 5-20 k€ / an | Dir. département | ★★★ |
| **Lycées — option cinéma-audiovisuel** | 185 lycées | 1-3 k€ / an | Enseignant coordinateur | ★★ |
| **Collèges — EMI / classes cinéma** | ~1 000 projets/an | 500-2 000 € | Canopé / Clemi | ★★ |
| **Bibliothèques / Médiathèques** | 16 500 | 2-10 k€ / an | Dir. culturelle | ★★ |
| **Écoles privées supérieures** (ESRA, EICAR, 3IS) | ~30 | 10-30 k€ / an | Dir. pédagogique | ★★★ |
| **Ciné-clubs / associations** | ~3 000 | 200-800 € | Fédération (CinéMaTB, Tënk) | ★ |
| **Formations continues cinéma** | variable | 500-5 000 € | Organismes privés | ★ |

**SOM Phase 0 (M+1 à M+9)** : pilote gratuit × 5 établissements → conversion payante × 20 → ARR ~150 k€

**SOM An 2** : 200 établissements × ARR moyen 8 k€ = **1,6 M€**

## 🎯 Douleurs de la niche enseignement (vérifiées entretiens à mener)

> [!todo] Protocole sondage à lancer — cible 30 répondants, 8 semi-directifs
> Questions → [[Étude de Marché]]

### Douleur 1 — Droits et conformité
- Projeter un film en classe requiert une licence institutionnelle. L'ADAV gère mais sur DVD (vieillissant) ou plateforme VOD lourde.
- Netflix Education n'existe pas en France. iTunes refuse les licences institutionnelles.
- **Tangible** : certificat de licence vérifiable offline, pas de cloud dependency, conforme RGPD.

### Douleur 2 — Continuité pédagogique
- Hors établissement, pas d'accès aux films achetés. Enseignant qui prépare son cours chez lui = zone grise.
- Coupure internet = pas de projection possible.
- **Tangible** : lecture hors-ligne, profils enseignants multi-appareils, fichier possédé.

### Douleur 3 — Analyse filmique
- Pas d'outil moderne pour annoter, chapitrer, sous-titrer pédagogiquement les films en classe.
- Les enseignants bricolent avec VLC + papier + diapos.
- **Tangible v1.1** (Phase 0.5) : module Annotations — chapitres, notes temporisées, comparaison 2 plans côte à côte, export séquences en PDF/vidéo courte (dans les limites du droit de citation pédagogique).

### Douleur 4 — Archives et patrimoine
- Beaucoup de films pédagogiques deviennent inaccessibles (ayants droit disparus, supports morts).
- Les médiathèques perdent des collections numériques à chaque migration de plateforme.
- **Tangible** : fichier local + certificat = archive pérenne que l'établissement possède vraiment.

## 🪜 Go-to-Market Phase 0 (mois 1-9)

### Mois 1-3 — Fondations
- 3 entretiens qualitatifs par sous-segment (15 au total)
- Contact ADAV + Canopé (lettre d'intérêt)
- **Pilote ancrage IUT Montpellier-Sète** (MMI + Informatique) — convention signée avec la direction des études, accès à ~300 étudiants MMI comme testeurs qualifiés et base de témoignage institutionnel
- Pilote prévu avec 1 autre université test + 2 lycées (réseau fondateurs)
- Développement module « licence établissement » (profils illimités par domaine email)

### Mois 4-6 — Pilote gratuit
- 5 établissements pilotes, catalogue initial 50 films (dont 10 films domaine public restaurés gratuits)
- Feedback loop hebdomadaire avec enseignants
- Publication témoignages / cas d'usage
- Premier dossier CNC (FAIA ou aide à l'innovation)

### Mois 7-9 — Conversion payante
- Contrats annuels 5-15 k€ avec les 5 pilotes
- Présence aux **Rencontres Clemi** (mars) et **Salon du livre** (mars-avril)
- Pitch à Canopé pour marque blanche académique
- Objectif : 20 établissements signés, ARR 150 k€

### Mois 10-12 — Scale niche
- Ouverture bibliothèques / médiathèques
- Signature ADAV (si en bonne voie) ou fallback distribution indé
- Présence à **Educatec-Educatice** (novembre)
- Objectif : 60 établissements, ARR 480 k€

## 💰 Pricing proposé pour la niche

| Formule | Cible | Prix | Inclus |
|---|---|---|---|
| **Classe** | Enseignant seul | 49 €/an | 1 profil, 5 films achetés sur l'année, annotations |
| **Établissement Starter** | Collège / petit lycée | 2 400 €/an | 30 profils enseignants, 100 films bouquet, module annotations |
| **Établissement Pro** | Lycée avec option cinéma | 6 000 €/an | 100 profils, 500 films, module séquençage, API ENT |
| **Université / École sup.** | Département cinéma | 12 000-25 000 €/an | Profils illimités par domaine, catalogue pro complet, priorité requêtes films |
| **Campus (multi-établissement)** | Rectorat / groupe universitaire | sur devis | Déploiement académique, support dédié |

Les 10 % de commission sur l'achat au film restent en plus (mais désactivables en licence Campus).

## 🚀 De la niche au mainstream — Transition Phase 2-3

Une fois la niche éducation établie (An 2 : 200 établissements, 1,5 M€ ARR), la transition vers le B2C grand public devient naturelle :

1. **Catalogue** : les distributeurs qui nous fournissent l'éducation nous ouvrent leurs catalogues grand public.
2. **Crédibilité** : les étudiants/lycéens deviennent prescripteurs familiaux (« papa, ce film je l'ai sur Tangible »).
3. **Revenue mix** : 40 % B2B éducation + 60 % B2C à horizon An 3.
4. **Preuve anti-piratage** : l'usage éducatif démontre aux majors que notre DRM souverain fonctionne.

## 🪞 Niches alternatives évaluées et écartées (pour l'instant)

| Niche | Pourquoi écartée |
|---|---|
| **Professionnels audiovisuel** (monteurs, étalonneurs) | Marché trop fragmenté, forte loyauté aux outils existants (Frame.io). |
| **Cinéphiles 40+ ex-collectionneurs DVD** | Segment fort mais dispersé, CAC élevé, pas de « lieu » collectif. |
| **Gamers PC patriotes du fichier local** | Cross-over possible mais culture différente (Steam, GOG sont déjà la référence). |
| **Associations de quartier / MJC** | Budget trop faible, décisions lentes. À réactiver en Phase 2 via bibliothèques. |
| **Distribution festival / VOD premium** | Concurrence Mubi, Tënk bien installée. À revisiter Phase 3. |

## 📌 Critères de décision « on persiste ou on pivote »

À M+9, validation niche si :
- ≥ 15 établissements signés payants
- NPS enseignants ≥ 40
- Au moins 1 lettre d'intérêt Canopé ou académie
- ARR ≥ 100 k€ avec CAC < 6 mois de revenu

Sinon → pivot vers niche bibliothèques seule, ou accélération B2C avec levée Série A anticipée.

## 🔗 Liens

- [[Cases 1 - Offre Relation Segments]]
- [[Cases 2 - Activités Partenaires Ressources Canaux]]
- [[Partenaires Potentiels]]
- [[Étude de Marché]]
- [[Roadmap Technique]]
- [[SWOT]]
- [[MOC]]
