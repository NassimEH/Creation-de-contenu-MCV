---
name: mcv-website-rules
description: Règles et conventions du projet MCVWebsite (publication SEO VTC sur WordPress). À appliquer systématiquement : contenu 2500 mots min, titre/H1 "Chauffeur privé VTC [ville]", H2 "Alternative taxi", usage du mot taxi, Yoast, API WordPress, scripts publish/update.
---

# Règles du projet MCVWebsite

À suivre en permanence pour tout travail sur ce dépôt.

## Langue

- **Répondre toujours en français** dans les échanges et les commentaires de code utiles au projet.

## Contexte du site

- **Site** : WordPress `https://monchauffeurvipv3.netopsia.eu/`
- **Pages cibles** : sous `/nos-secteurs/`, parent slug `nos-secteurs`
- **Identifiants** : dans `.env` (`WORDPRESS_URL`, `WORDPRESS_USER`, `WORDPRESS_APP_PASSWORD`)
- **Service** : chauffeur privé 24h/24 et 7j/7, déplacements urbains, transferts aéroports/gares, trajets longue distance.

## Longueur du contenu

- **Minimum 2500 mots** par page (communes, Paris, gares, app mobile, nos secteurs). Rallonger de façon pertinente : sections supplémentaires (VTC vs taxi, conseils réservation, couverture zone, quand réserver, FAQ étoffée), paragraphes développés, tout en restant utile pour le SEO et l’utilisateur.

## Titres et H1

- **Titre SEO** : commence par l’expression clé. Forme : **Chauffeur privé VTC [Ville]** (ex. « Chauffeur privé VTC Paris », « Chauffeur privé VTC Évry-Courcouronnes »). Ne pas utiliser uniquement « VTC [Ville] ».
- **H1** : **Chauffeur privé VTC [Ville]** (même forme que le titre SEO). Pas de « Chauffeur privé 24h/24 » seul dans le titre.

## H2 « Alternative taxi »

- **Sur toutes les pages** : inclure un **H2** de type **« Alternative taxi à [ville] »** (ou « Alternative taxi à [nom de la gare] » pour les pages gares). Un paragraphe au minimum qui présente le service comme une alternative au taxi (réservation à l’avance, tarif connu, confort chauffeur privé / VTC).

## Usage du mot « taxi »

- Utiliser le mot **taxi** dans les textes en plus de **chauffeur privé** et **VTC**, de façon naturelle (ex. « en complément d’un taxi », « alternative au taxi », « plutôt qu’un taxi »). Le mot taxi est important pour le référencement ; ne pas sur-optimiser.

## Zones et pages

- **Paris et arrondissements** : slugs `vtc-paris`, `vtc-paris-1` … `vtc-paris-20`. Données dans `vtc-paris-zones.js`, contenu dans `generate-vtc-content.js`. La **page Paris principale** (`vtc-paris`) est enrichie à **3000+ mots** (sections dédiées : capitale, 7 gares, CDG/Orly, quartiers d'affaires/tourisme, VTC vs taxi) pour un SEO ultra compétitif. Publication : `publish-vtc-paris-pages.js` (crée uniquement les pages manquantes), mise à jour : `update-vtc-paris-pages.js`.
- **Communes par département** : 77 (Seine-et-Marne), 78 (Yvelines), 91 (Essonne), 92 (Hauts-de-Seine), 93 (Seine-Saint-Denis), 94 (Val-de-Marne), 95 (Val-d'Oise). Chaque département a ses fichiers de données `vtc-*-villes-*.js` et son générateur `generate-vtc-*-content.js`, plus scripts publish/update dédiés.
- **Gares Paris** : 7 gares SNCF (Nord, Est, Saint-Lazare, Lyon, Austerlitz, Montparnasse, Bercy). Données dans `vtc-gares-paris-data.js`, contenu dans `generate-vtc-gares-paris-content.js`.
- **Métropoles** : Lyon, Marseille, Toulouse, Bordeaux, Lille, Nice, Nantes, Strasbourg, Montpellier, Rennes, Grenoble. Données dans `vtc-metropoles-data.js`, contenu dans `generate-vtc-metropoles-content.js` (2500+ mots, SEO, alternative taxi). Slugs : `vtc-lyon`, `vtc-marseille`, etc. Publication : `publish-vtc-metropoles-pages.js`, mise à jour : `update-vtc-metropoles-pages.js`.
- **Pages spéciales** : « Nos secteurs » (parente), « App mobile » (slug `application-vtc-mobile`). Contenu dans `generate-nos-secteurs-page-content.js` et `generate-app-mobile-page-content.js`.
- **Pages hub** (maillage interne et mots-clés) : « Chauffeur privé aéroport » (slug `chauffeur-prive-aeroport`), « Chauffeur privé gares » (`chauffeur-prive-gares`), « Chauffeur privé Île-de-France » (`chauffeur-prive-ile-de-france`). Contenu dans `generate-hub-aeroport-content.js`, `generate-hub-gares-content.js`, `generate-hub-ile-de-france-content.js`. Publication et mise à jour : `publish-hub-pages.js` (crée si absent, met à jour sinon).
- Chaque page **unique**, références locales (quartiers/canton, monuments, secteur).

## Expression clé et densité

- **Mot-clé principal** : **Chauffeur privé VTC [Ville]** (ou équivalent pour gares / app mobile).
- **Densité** : entre **1 % et 1,5 %** du contenu total. Ne pas sur-optimiser.
- **Zones obligatoires** : titre SEO, H1, introduction, au moins un sous-titre H2 ou H3, conclusion, méta description, slug, alt des images.

## Méta description

- **Longueur** : **140–156 caractères** pour une visibilité entière dans les SERP.
- **Contenu** : inclure l’**expression clé principale** au début et inciter au clic.

## Sous-titres et lisibilité

- **Répartition** : aucune section ne doit dépasser **~300 mots** sans être séparée par un sous-titre. Utiliser H2/H3 (et H4 si besoin).
- **Expression clé dans H2/H3** : l’utiliser dans plusieurs sous-titres, mais **pas plus de 75 %** des H2/H3 (éviter la sur-optimisation Yoast). Varier avec « Service », « Alternative taxi », « Pourquoi nous choisir », « Trajets », « FAQ », etc.
- Structure claire : H1 → H2 → H3, paragraphes courts, listes à puces.

## Mots de transition

- **Objectif** : au moins **~25–30 %** des phrases contiennent un mot de transition. Utiliser : Ainsi, Par ailleurs, En effet, De plus, En outre, Toutefois, Par conséquent, D’ailleurs, Notamment, etc.

## Langage naturel et fluidité

- **Éviter le ton robotique** : tournures directes et humaines, professionnelles. Connecteurs intégrés au fil du texte plutôt qu’accumulés en tête de phrase.

## Structure type des pages (2500 mots min)

- **Intro** : expression clé dans les deux premières phrases, rappel du secteur (ville, canton, code postal si commune).
- **H2** : Alternative taxi à [ville] ; Service ; Pourquoi nous choisir ; Trajets les plus demandés ; (optionnel) VTC et taxi : quelle différence ; Conseils pour réserver ; Couverture / secteur d’intervention ; Pour tous vos déplacements ; Comment réserver ; FAQ ; Conclusion.
- **H3** : sous-sections (Ponctualité, Réservation et tarifs, CDG, Orly, Gare du Nord, Types de missions, Étapes, etc.).
- **FAQ** : plusieurs questions utiles (prix, réservation à l’avance, 24h/24, transferts aéroports, véhicules, annulation, etc.).
- **Conclusion** : rappel du service, appel à l’action.
- **Liens internes** : VTC Paris, aéroports CDG/Orly, Gare du Nord, autres communes/secteurs.
- **Liens externes** : au moins 1–2 vers sites d’autorité (ville de Paris, aéroports, SNCF selon le cas).
- **SEO local** : **Code postal** dans l’intro, section Service et méta description (ex. « à [Ville] (91xxx) ») ; **ne pas** le mettre dans le titre SEO ni dans le H1. Quartiers, cantons, gares selon zone. Gares mentionnées selon canton/interco (ex. « gares d’Étampes ou de Paris »).

## Images

- **Une image par page** (URL selon département ou page). Alt et title avec expression clé ou synonymes. `loading="lazy"`, max-width 560px, centrée. Une seule insertion après l’intro.

## Scripts et API

- **API** : `wordpress-api.js` — création/mise à jour sous parent `nos-secteurs`, envoi Yoast (`_yoast_wpseo_focuskw`, `_yoast_wpseo_metadesc`, `_yoast_wpseo_title` pour les pages qui le nécessitent). `getPageIdBySlugGlobal` pour les pages racine (ex. app mobile).
- **Mise à jour en masse** : `npm run update-vtc-pages`, `update-vtc-essonne`, etc. Pour appliquer un nouveau contenu (ex. 2500 mots) sur toutes les pages existantes, lancer les scripts `update-*` correspondants.

## Bonnes pratiques

- Échapper le HTML dans les attributs (alt, title) via `escapeHtml()`.
- Objectif : pages optimisées pour le référencement naturel, bonnes pratiques Yoast, lisibilité et UX, maximisation des conversions.
