/**
 * Contenu SEO pour la page "Nos secteurs" (parente sous laquelle sont listées les pages VTC par zone).
 * Corrige les retours Yoast : keyphrase, méta, images, liens internes/externes, longueur du texte.
 */

const SITE_SLUG_BASE = "/nos-secteurs";

const FOCUS_KEYPHRASE = "VTC nos secteurs";
const SEO_TITLE = "VTC nos secteurs | Chauffeur privé Île-de-France – MonChauffeurVIP";
const META_DESCRIPTION = "VTC nos secteurs : chauffeur privé 24h/24 en Île-de-France. Paris, aéroports, gares. Réservation simple, tarifs transparents. Découvrez nos secteurs.";

const IMAGE_URL = "https://monchauffeurvipv3.netopsia.eu/wp-content/uploads/2026/02/vtc-gares-paris.webp";
const IMAGE_ALT = "VTC nos secteurs – Chauffeur privé et transport haut de gamme en Île-de-France";

function getContent() {
  return `
<h1>VTC nos secteurs : chauffeur privé en Île-de-France</h1>

<p><strong>VTC nos secteurs</strong> : vous recherchez un chauffeur VTC professionnel, fiable et disponible 24h/24 et 7j/7&nbsp;? MonChauffeurVIP vous accompagne pour tous vos déplacements privés et professionnels, avec un service de transport haut de gamme adapté à vos besoins. Notre objectif&nbsp;: offrir une expérience de trajet confortable, sécurisée et ponctuelle dans l'ensemble de nos secteurs d'intervention.</p>

<p>Que vous soyez à Paris, en proche banlieue ou en grande couronne, nous couvrons l'Île-de-France avec la même exigence de qualité. Par ailleurs, nous assurons vos transferts vers les aéroports Charles de Gaulle et Orly, vers les gares parisiennes (Gare du Nord, Gare de Lyon, Saint-Lazare, etc.) et entre toutes nos zones. Ainsi, vous bénéficiez d'un interlocuteur unique pour tous vos déplacements.</p>

<figure class="wp-block-image" style="max-width: 560px; margin: 1em auto;"><img src="${IMAGE_URL}" alt="${IMAGE_ALT}" title="VTC nos secteurs – Réservation chauffeur privé" loading="lazy" style="width: 100%; height: auto; display: block;" /></figure>

<h2>Où intervenons-nous&nbsp;? Nos secteurs VTC</h2>

<p>Nos secteurs VTC couvrent l'ensemble de la région Île-de-France. Nous intervenons notamment&nbsp;:</p>

<ul>
<li><strong>À Paris</strong> et en proche couronne : consultez notre page <a href="${SITE_SLUG_BASE}/vtc-paris/">VTC Paris</a> pour les trajets dans la capitale.</li>
<li><strong>Vers les aéroports</strong> : <a href="${SITE_SLUG_BASE}/vtc-aeroport-charles-de-gaulle/">VTC aéroport Charles de Gaulle</a> et <a href="${SITE_SLUG_BASE}/vtc-aeroport-orly/">VTC aéroport Orly</a> pour vos transferts avion.</li>
<li><strong>Vers les gares SNCF</strong> : <a href="${SITE_SLUG_BASE}/vtc-gare-du-nord/">VTC Gare du Nord</a>, <a href="${SITE_SLUG_BASE}/vtc-gare-de-lyon/">VTC Gare de Lyon</a>, <a href="${SITE_SLUG_BASE}/vtc-gare-saint-lazare/">VTC Gare Saint-Lazare</a>, Gare de l'Est, Austerlitz, Montparnasse et Bercy.</li>
<li><strong>En grande couronne</strong> : Yvelines (78), Essonne (91), Hauts-de-Seine (92), Seine-Saint-Denis (93), Val-de-Marne (94), Val-d'Oise (95). Nous proposons des pages dédiées par département et par commune pour vous permettre de réserver un chauffeur privé au plus près de chez vous.</li>
</ul>

<h3>Pourquoi choisir notre service VTC dans nos secteurs</h3>

<p>Choisir MonChauffeurVIP, c'est bénéficier d'un chauffeur privé professionnel dans tous nos secteurs. En effet, nous nous engageons sur la ponctualité, le confort et la discrétion. De plus, nos véhicules sont récents, climatisés et entretenus. Vous réservez en ligne en quelques clics, avec un tarif indiqué à l'avance et une confirmation immédiate. Que ce soit pour un déplacement professionnel, un transfert aéroport ou gare, ou une course en ville, nous nous adaptons à vos besoins.</p>

<h3>Réserver un VTC dans nos secteurs</h3>

<p>La réservation est simple et disponible 24h/24. Indiquez votre adresse de prise en charge et votre destination, choisissez la date et l'heure, puis validez : vous recevez une confirmation avec les coordonnées de votre chauffeur. Pour les transferts aéroport ou les trajets en heure de pointe, nous recommandons de réserver à l'avance. Ainsi, vous voyagez en toute sérénité dans l'ensemble de nos secteurs d'intervention.</p>

<p>Pour en savoir plus sur les horaires et les destinations des trains en Île-de-France, vous pouvez consulter le <a href="https://www.sncf.com" target="_blank" rel="noopener noreferrer">site de la SNCF</a>. Pour les aéroports parisiens, les informations pratiques sont disponibles sur le <a href="https://www.parisaeroport.com" target="_blank" rel="noopener noreferrer">site Paris Aéroport</a>.</p>
`.trim().replace(/\n{3,}/g, "\n\n");
}

export function getNosSecteursPageData() {
  return {
    focusKeyphrase: FOCUS_KEYPHRASE,
    seoTitle: SEO_TITLE,
    metaDescription: META_DESCRIPTION,
    content: getContent(),
  };
}
