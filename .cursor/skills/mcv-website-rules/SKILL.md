---
name: mcv-website-rules
description: Règles et conventions du projet MCVWebsite (publication SEO VTC sur WordPress). À appliquer systématiquement pour tout travail sur ce repo : contenu, Yoast, API WordPress, scripts publish/update. Contenu 1200-1800 mots, densité 1-1.5%, méta 140-160, lisibilité, SEO local.
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

## Zones et pages

- **Paris et arrondissements** : première page VTC Paris, puis Paris 1er à 20e (Louvre, Bourse, Temple, etc.). Slugs : `vtc-paris`, `vtc-paris-1`, … `vtc-paris-20`. Données dans `vtc-paris-zones.js`, contenu dans `generate-vtc-content.js`. Publication : `publish-vtc-paris-pages.js`, mise à jour : `update-vtc-paris-pages.js` (`npm run publish-vtc-pages`, `npm run update-vtc-pages`).
- **Communes Seine-et-Marne (77 – toutes)** : pages VTC par commune. Données dans `vtc-seine-et-marne-villes-a.js` à `vtc-seine-et-marne-villes-y.js` (A à Y, tout le 77), contenu dans `generate-vtc-communes-content.js`. Publication : `publish-vtc-communes-pages.js`, mise à jour : `update-vtc-communes-pages.js` (`npm run publish-vtc-communes`, `npm run update-vtc-communes`). **Mêmes règles SEO** que les pages Paris (une image, méta 140–156, expression clé dans H2/H3, **langage naturel et fluide**, **mots de transition ~25–30 %**). **Publier toujours directement** les nouvelles villes après ajout dans les fichiers de données.
- **Communes Yvelines (78)** : pages VTC par commune (villes en A, B, …). Données dans `vtc-yvelines-villes-a.js`, `vtc-yvelines-villes-b.js`, etc. Contenu dans `generate-vtc-yvelines-content.js` (références « Yvelines », « 78 », gares selon canton 78). Publication : `publish-vtc-yvelines-pages.js`, mise à jour : `update-vtc-yvelines-pages.js` (`npm run publish-vtc-yvelines`, `npm run update-vtc-yvelines`). Mêmes règles SEO que 77.
- **Communes Essonne (91)** : pages VTC par commune (villes en A, B, …). Données dans `vtc-essonne-villes-a.js`, `vtc-essonne-villes-b.js`, etc. Contenu dans `generate-vtc-essonne-content.js` (références « Essonne », « 91 », gares selon canton 91 : Étampes, Dourdan, Arpajon, Mennecy, Gif, etc.). Publication : `publish-vtc-essonne-pages.js`, mise à jour : `update-vtc-essonne-pages.js` (`npm run publish-vtc-essonne`, `npm run update-vtc-essonne`). Mêmes règles SEO que 77/78.
- Chaque page **unique**, références locales (quartiers/canton, monuments, secteur).

## Titres (pas de "Chauffeur privé 24h/24")

- **Titre SEO** : commence par l’expression clé, **50–60 caractères max**. Forme : **VTC [Ville]** uniquement (ex. « VTC Paris », « VTC Paris 15 »). Ne pas ajouter « Chauffeur privé disponible 24h/24 ».
- **H1** : **VTC [Ville]** uniquement (ex. `<h1>VTC Paris</h1>`, `<h1>VTC Paris 10</h1>`).

## Expression clé et densité

- **Mot-clé principal** : « VTC [Ville] » (ex. VTC Paris, VTC Paris 10).
- **Densité** : entre **1 % et 1,5 %** du contenu total. Ne pas sur-optimiser : si Yoast indique un maximum (ex. 41 occurrences pour la longueur du texte), rester en dessous.
- **Zones obligatoires** : titre SEO, H1, introduction, au moins un sous-titre H2 ou H3, conclusion, méta description, slug, alt des images (si images).

## Méta description

- **Longueur** : **140–156 caractères** pour une visibilité entière dans les SERP (Yoast : au-delà de 156, la méta peut être tronquée).
- **Contenu** : inclure l’**expression clé principale** au début et inciter au clic. Toujours renseigner une méta.

## Sous-titres et lisibilité

- **Répartition** : aucune section ne doit dépasser **~300 mots** sans être séparée par un sous-titre. Ajouter des H3 (ou H4) pour découper les longs blocs.
- **Expression clé dans H2/H3** : utiliser l’**expression clé ou des synonymes** (chauffeur privé, service VTC) dans **plusieurs** sous-titres H2 et H3 pour le SEO (ex. « Service VTC [Ville] », « Pourquoi choisir notre VTC [Ville] », « Trajets VTC [Ville] les plus demandés », « FAQ VTC [Ville] »). Éviter à la fois trop peu (Yoast : « utilisez davantage ») et plus de 75 % (sur-optimisation).
- Structure claire : H1 → H2 → H3, paragraphes courts, listes à puces, espaces entre blocs.

## Mots de transition

- **Objectif** : au moins **~25–30 %** des phrases contiennent un mot de transition (Yoast recommande plus que 11,7 %). Utiliser : Ainsi, Par ailleurs, En effet, De plus, En outre, Toutefois, En revanche, Par conséquent, D’ailleurs, Notamment, En conclusion, De même, Pour cela, Finalement, D’autre part, etc.

## Langage naturel et fluidité

- **Éviter le ton robotique** : ne pas enchaîner des connecteurs logiques en début de phrase (ex. « En revanche… Par conséquent… Finalement »). Préférer des tournures directes et humaines tout en restant professionnelles.
- **Exemples** : « Côté tarif, pas de mauvaise surprise » ; « Vous réservez en ligne en quelques clics, recevez une confirmation immédiate » ; « Nous couvrons aussi les communes voisines ». Connecteurs intégrés au fil du texte (notamment, toutefois, ainsi) plutôt qu’accumulés en tête de phrase. Conserver le même volume d’information et une densité de mots de liaison suffisante pour Yoast, tout en rendant le texte **fluide et agréable à lire**.

## Structure type des pages

- **Intro** : 150–200 mots, expression clé dans les deux premières phrases.
- **H2** : Service (transport chauffeur, ponctualité, confort) ; Pourquoi nous choisir (atouts) ; Trajets les plus demandés ; Pour tous vos déplacements ; Comment réserver ; FAQ.
- **H3** : sous-sections (ex. Ponctualité et zone, Réservation et tarifs, CDG, Orly, Gare du Nord, Types de missions, Étapes, Tarifs et réservation, etc.).
- **FAQ** : questions utiles (prix, réservation à l’avance, 24h/24, transferts aéroports, véhicules). Plusieurs Q/R.
- **Conclusion** : rappel du service, appel à l’action.
- **Liens internes** : VTC Paris, VTC aéroport CDG/Orly, VTC Gare du Nord, autres arrondissements.
- **Liens externes** : au moins 1–2 vers sites d’autorité (ville de Paris, aéroports).
- **Mots-clés secondaires** : chauffeur privé, transport privé, service VTC, réservation VTC, transfert aéroport/gare, véhicule avec chauffeur, transport premium, chauffeur professionnel — intégrés naturellement.
- **SEO local** : quartiers, rues, monuments, musées, parcs, hôtels, gares, lieux touristiques, distances aéroports, temps de trajet, axes routiers. **Code postal** : rappeler le code postal de la commune dans l’intro, dans la section Service et dans la méta description (ex. « à [Ville] (77xxx) » / « (78xxx) ») pour le référencement local ; **ne pas** le mettre dans le titre SEO ni dans le H1. **Pages communes 77** : personnaliser l’intro (pas de listes génériques « Centre du village, Environs, église, mairie »). Gares mentionnées selon canton/interco (ex. Meaux → « gares de Meaux ou de Paris »). Zone de prise en charge selon la commune et la population (ex. « du centre de X ou des communes voisines » pour les plus grosses, « de X ou des environs du canton de Y » pour les plus petites).
- **CTAs** : Réservez votre VTC, Contactez votre chauffeur, Planifiez votre transfert, Profitez d’un trajet confortable.

## Longueur et mise en forme

- **1200–1800 mots minimum** par page. Français naturel, professionnel, rassurant.
- Paragraphes courts, listes à puces, titres et sous-titres clairs, sections distinctes. Pas de gros blocs de texte.

## Images

- **Une seule image par page**, déjà hébergée sur le serveur WordPress.
- **URL fixe** : `https://monchauffeurvipv3.netopsia.eu/wp-content/uploads/2026/02/vtc-essonne.webp`
- **Bonnes pratiques** :
  - **alt** : expression clé + courte description (ex. « {expression clé} – Chauffeur privé et véhicule confortable »), avec `escapeHtml()` sur la clé.
  - **title** : cohérent avec l’alt (ex. « {expression clé} – Service de transport avec chauffeur »).
  - **loading="lazy"**
  - **Présentation** : max-width 560px, centrée (`margin: 1em auto`), responsive (`width: 100%; height: auto`).
- **Emplacement** : une seule insertion, après l’intro (avant la première section H2). Pas d’autre image dans le contenu.

## Scripts et API

- **Paris** : génération `generate-vtc-content.js` (zones `vtc-paris-zones.js`). Publication `publish-vtc-paris-pages.js`, mise à jour `update-vtc-paris-pages.js`. Commandes : `npm run publish-vtc-pages`, `npm run update-vtc-pages`.
- **Communes 77** : génération `generate-vtc-communes-content.js` (données `vtc-seine-et-marne-villes-a.js` à `vtc-seine-et-marne-villes-y.js`). Publication `publish-vtc-communes-pages.js`, mise à jour `update-vtc-communes-pages.js`. Commandes : `npm run publish-vtc-communes`, `npm run update-vtc-communes`.
- **Communes 78 (Yvelines)** : génération `generate-vtc-yvelines-content.js` (données `vtc-yvelines-villes-a.js`, `vtc-yvelines-villes-b.js`, …). Publication `publish-vtc-yvelines-pages.js`, mise à jour `update-vtc-yvelines-pages.js`. Commandes : `npm run publish-vtc-yvelines`, `npm run update-vtc-yvelines`.
- **API** : `wordpress-api.js` — création/mise à jour sous parent `nos-secteurs`, envoi Yoast (`_yoast_wpseo_focuskw`, `_yoast_wpseo_metadesc`).

## Bonnes pratiques

- Échapper le HTML dans les attributs (alt, title) via `escapeHtml()` pour la clé.
- Vérifier que la méta description est bien envoyée et affichée (éviter « Aucune méta-description spécifiée »).
- Objectif : pages optimisées pour le référencement naturel (Google 2026), bonnes pratiques Yoast/RankMath, excellente lisibilité et UX, maximisation des conversions.
