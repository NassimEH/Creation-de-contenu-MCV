/**
 * Générateur de contenu SEO pour les pages VTC Paris et arrondissements.
 * Conforme Yoast : expression clé en intro, titre, méta, sous-titres, images avec alt, densité ~6–12, mots de transition.
 */

import { VTC_PARIS_ZONES } from "./vtc-paris-zones.js";

const SITE_SLUG_BASE = "/nos-secteurs";

function escapeHtml(s) {
  if (!s) return "";
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Expression clé principale = titre SEO (exactement). */
function focusKeyphrase(zone) {
  return zone.id === "paris" ? "VTC Paris" : `VTC ${zone.name}`;
}

function seoTitle(zone) {
  return focusKeyphrase(zone);
}

/**
 * Méta description 140–156 caractères (visibilité SERP entière), expression clé au début.
 */
function metaDescription(zone) {
  const kw = focusKeyphrase(zone);
  const loc = zone.id === "paris" ? "à Paris" : `dans le ${zone.name}`;
  let text = `${kw} : chauffeur privé ${loc}, transferts aéroports et gares. Réservation simple, 24h/24.`;
  if (text.length < 140) text += " Réservez en quelques clics.";
  if (text.length > 156) text = text.slice(0, 153) + "...";
  return text;
}

function generateContent(zone) {
  const kw = focusKeyphrase(zone);
  const loc = zone.id === "paris" ? "à Paris" : `dans le ${zone.name} arrondissement (${zone.district})`;
  const locCourt = zone.id === "paris" ? "Paris" : zone.name;
  const quartiers = zone.quartiers.slice(0, 3).join(", ");
  const monuments = zone.monuments.slice(0, 3).join(", ");
  const gares = zone.gares.length ? zone.gares.slice(0, 2).join(" et ") : "gares parisiennes";
  const metros = zone.metros.slice(0, 2).join(", ");

  const linkParis = `${SITE_SLUG_BASE}/vtc-paris/`;
  const linkCDG = `${SITE_SLUG_BASE}/vtc-aeroport-charles-de-gaulle/`;
  const linkOrly = `${SITE_SLUG_BASE}/vtc-aeroport-orly/`;
  const linkGareNord = `${SITE_SLUG_BASE}/vtc-gare-du-nord/`;
  const linkParis10 = `${SITE_SLUG_BASE}/vtc-paris-10/`;
  const linkParis15 = `${SITE_SLUG_BASE}/vtc-paris-15/`;

  const extParis = "https://www.paris.fr";
  const extCDG = "https://www.parisaeroport.fr";

  // Intro : expression clé dès la première phrase ; tournures naturelles et fluides.
  const intro = `
<p><strong>${kw}</strong> : vous cherchez un chauffeur privé fiable et disponible à toute heure&nbsp;? Nous vous accompagnons ${loc} pour vos déplacements professionnels, transferts aéroport ou gare, et trajets en ville. Que vous soyez aux abords de ${quartiers} ou près de lieux emblématiques comme ${monuments}, notre flotte et nos chauffeurs garantissent ponctualité et confort. Par ailleurs, nous nous adaptons à vos horaires et à votre destination, avec une réservation simple et des tarifs transparents.</p>
<p>Le service est opérationnel 24h/24 et 7j/7, avec un suivi en temps réel pour chaque course. Nous mettons tout en œuvre pour un trajet serein, que ce soit vers l'aéroport Charles de Gaulle, Orly, la ${gares} ou tout autre point de Paris et d'Île-de-France. Côté prix, tout est indiqué à l'avance : ainsi, vous pouvez réserver en toute confiance.</p>
`;

  // Une seule image par page (serveur WordPress), bonnes pratiques : alt avec expression clé, title, lazy, taille raisonnable.
  const IMAGE_URL = "https://monchauffeurvipv3.netopsia.eu/wp-content/uploads/2026/02/vtc-essonne.webp";
  const imgBlock = `<figure class="wp-block-image" style="max-width: 560px; margin: 1em auto;"><img src="${IMAGE_URL}" alt="${escapeHtml(kw)} – Chauffeur privé et véhicule confortable" title="${escapeHtml(kw)} – Service de transport avec chauffeur" loading="lazy" style="width: 100%; height: auto; display: block;" /></figure>`;

  const sectionService = `
<h2>Service ${kw}</h2>
<p>Notre offre de transport avec chauffeur privé ${loc} s'adresse aux particuliers comme aux professionnels. En effet, chaque course est assurée par un chauffeur expérimenté, formé aux bonnes pratiques du service VTC et à la conduite en milieu urbain ; les véhicules sont régulièrement entretenus et climatisés pour un trajet confortable, été comme hiver. Vous voyagez ainsi dans les meilleures conditions.</p>

<h3>Ponctualité et couverture de la zone</h3>
<p>La ponctualité est au cœur de notre engagement : nous suivons le trafic en temps réel et adaptons les itinéraires pour respecter vos horaires, notamment pour les transferts aéroports ou gares. Que vous habitiez ou travailliez près de ${metros}, dans le secteur de ${quartiers}, ou à proximité de ${monuments}, nous nous déplaçons à votre adresse pour une prise en charge à domicile ou au bureau. De plus, nous couvrons aussi les environs immédiats.</p>

<h3>Un maillage complet du secteur</h3>
<p>Les axes tels que ${zone.rues.slice(0, 2).join(" ou ")} et les quartiers de ${zone.quartiers.join(", ")} sont parfaitement desservis par notre flotte. Que vous partiez d'un ${zone.hotels[0]} ou d'un lieu plus excentré, votre chauffeur vous attend avec un véhicule propre et climatisé. Nous couvrons l'ensemble du secteur : pas besoin de vous déplacer jusqu'à un point de rendez-vous.</p>

<h3>Réservation et tarification</h3>
<p>Vous réservez en ligne en quelques clics, recevez une confirmation immédiate et pouvez joindre directement votre chauffeur le jour du trajet. Côté tarif, pas de mauvaise surprise : le prix est indiqué à l'avance et ne varie pas sauf si vous modifiez le trajet. Un devis clair vous est envoyé avant toute validation, pour que vous puissiez réserver en toute transparence.</p>
`;

  const sectionPourquoi = `
<h2>Pourquoi choisir notre ${kw}</h2>
<p>Choisir notre service, c'est opter pour un transport privé de qualité, adapté aux déplacements à Paris et en région parisienne. En effet, nous nous engageons sur la ponctualité et le confort ; de plus, notre offre répond aux besoins des particuliers comme des professionnels.</p>

<h3>Nos atouts</h3>
<p>Voici ce qui fait la différence au quotidien :</p>
<ul>
<li><strong>Chauffeurs professionnels</strong> : formés, discrets et à l'écoute de vos besoins.</li>
<li><strong>Ponctualité</strong> : suivi du trafic et prise en charge à l'heure convenue.</li>
<li><strong>Véhicules confortables</strong> : berlines et VTC récents, climatisés et propres.</li>
<li><strong>Service disponible 24h/24</strong> : réservation possible à toute heure pour un trajet le jour même ou à l'avance.</li>
<li><strong>Réservation simple</strong> : en ligne ou par téléphone, en quelques clics.</li>
<li><strong>Tarifs transparents</strong> : prix fixé à la réservation, pas de surprise à l'arrivée.</li>
</ul>

<h3>Un service adapté à vos besoins</h3>
<p>Que vous ayez besoin d'un transfert aéroport, d'un transfert gare ou d'une course en ville depuis ${locCourt}, notre équipe est à votre disposition. N'hésitez pas à nous contacter pour vous accompagner en toute sérénité : vous bénéficiez d'un interlocuteur unique pour tous vos déplacements.</p>
`;

  const sectionTrajets = `
<h2>Trajets ${kw} les plus demandés</h2>
<p>Depuis ${quartiers} et les environs de ${monuments}, nos clients réservent notamment les trajets suivants. Par ailleurs, nous assurons chaque course avec le même niveau de qualité et de ponctualité, et tous nos transferts sont effectués avec le même soin.</p>

<h3>${kw} vers l'aéroport Charles de Gaulle</h3>
<p>Le transfert vers l'aéroport Paris-Charles de Gaulle (Roissy) est l'un de nos trajets les plus réservés. Depuis le ${zone.district}, la distance est d'environ 25 à 30 km selon votre point de prise en charge ; le temps de trajet varie en général entre 35 et 55 minutes selon le trafic. Un chauffeur privé vous évite le stress des transports en commun et du stationnement : prise en charge à votre adresse, aide aux bagages et trajet direct jusqu'au terminal.</p>
<p><a href="${linkCDG}">Réservez votre VTC vers l'aéroport Charles de Gaulle</a> en quelques clics et voyagez l'esprit tranquille. Toutefois, nous vous conseillons de prévoir une marge en cas de trafic dense.</p>

<h3>${kw} vers l'aéroport d'Orly</h3>
<p>L'aéroport d'Orly est facilement accessible en transport avec chauffeur depuis ${locCourt}. La distance depuis le centre de Paris est d'environ 15 à 20 km ; le trajet prend en moyenne 25 à 45 minutes. Ainsi, nous adaptons l'heure de prise en charge à votre vol et assurons un suivi en temps réel pour respecter vos contraintes. D'ailleurs, ce transfert est idéal pour les départs tôt le matin ou les retours en soirée.</p>
<p>Consultez notre <a href="${linkOrly}">page dédiée au transfert VTC Orly</a> pour plus d'informations et réserver. N'hésitez pas à nous appeler pour un devis personnalisé.</p>

<h3>Transfert vers la Gare du Nord</h3>
<p>La Gare du Nord, l'une des gares les plus fréquentées d'Europe, est un point de passage obligé pour de nombreux déplacements (TGV, Eurostar, trains régionaux). Un chauffeur privé jusqu'à la Gare du Nord vous garantit une arrivée à l'heure, sans vous soucier du stationnement ou des correspondances. Par ailleurs, nous proposons des véhicules adaptés aux bagages et aux familles.</p>
<p>Découvrez notre <a href="${linkGareNord}">service VTC Gare du Nord</a> et réservez votre transfert en avance pour les jours de forte affluence. Nous assurons aussi les départs tôt le matin pour les premiers trains.</p>
`;

  const sectionDeplacements = `
<h2>${kw} pour tous vos déplacements</h2>
<p>Notre service couvre l'ensemble de vos besoins en transport privé, que vous soyez particulier ou professionnel. Ainsi, nous nous adaptons à chaque situation : déplacements du quotidien comme trajets occasionnels. En outre, que vous soyez à ${locCourt} ou ailleurs en Île-de-France, la même qualité est au rendez-vous.</p>

<h3>Types de missions</h3>
<p>Voici les usages les plus fréquents de notre flotte :</p>
<ul>
<li><strong>Transport professionnel</strong> : déplacements entre rendez-vous, accueil de clients, déplacements vers les gares et aéroports.</li>
<li><strong>Tourisme</strong> : visites de ${monuments}, déplacements entre hôtels et sites culturels.</li>
<li><strong>Transferts hôtels</strong> : prise en charge ou dépôt à l'hôtel, avec ou sans bagages.</li>
<li><strong>Événements privés</strong> : mariages, séminaires, soirées ; véhicules soignés et chauffeurs discrets.</li>
<li><strong>Trajets longue distance</strong> : déplacements vers d'autres villes ou régions sur demande.</li>
</ul>

<h3>Disponibilité et réservation</h3>
<p>Que vous résidiez près de ${metros} ou dans un quartier plus résidentiel, notre flotte est disponible. De plus, vous pouvez réserver dès maintenant pour un trajet confortable et sécurisé ; nous restons joignables 24h/24 pour toute demande. Par conséquent, vous n'avez plus à vous soucier de l'organisation de vos déplacements.</p>
`;

  const sectionReserver = `
<h2>Réserver votre ${kw}</h2>
<p>Réserver un chauffeur privé est simple et rapide : en effet, la procédure ne prend que quelques minutes et notre plateforme est disponible 24h/24. Voici les étapes à suivre :</p>

<h3>Les étapes en détail</h3>
<ol>
<li>D'abord, indiquez votre adresse de prise en charge (à ${locCourt} ou ailleurs en Île-de-France) et votre destination.</li>
<li>Ensuite, choisissez la date et l'heure souhaitées ; notre service est disponible 24h/24.</li>
<li>Puis, validez votre réservation : vous recevez une confirmation avec les coordonnées de votre chauffeur.</li>
<li>Enfin, le jour du trajet, votre chauffeur vous attend à l'heure et au lieu convenus.</li>
</ol>

<h3>Conseils pratiques</h3>
<p>Pour les transferts aéroport ou gare, nous recommandons de réserver à l'avance, surtout aux heures de pointe. De plus, vous pouvez modifier ou annuler selon nos conditions générales. Réservez dès maintenant pour profiter d'un trajet confortable et sans stress ; en cas de question, notre équipe reste à votre écoute.</p>
`;

  const faqItems = [
    {
      q: `Quel est le prix d'un ${kw} ?`,
      a: `Le tarif dépend du trajet (distance, durée) et du type de véhicule. Nous appliquons des tarifs transparents : le prix est indiqué à la réservation et ne change pas sauf modification de la course. Par ailleurs, les transferts vers les aéroports (Charles de Gaulle, Orly) et les gares sont proposés à prix fixe sur devis.`,
    },
    {
      q: `Peut-on réserver un ${kw} à l'avance ?`,
      a: `Oui. Vous pouvez réserver plusieurs jours ou semaines à l'avance. La réservation en ligne est disponible 24h/24, avec une confirmation immédiate et la possibilité de contacter votre chauffeur le jour du trajet. Pour les transferts aéroport et les jours fériés, nous conseillons toutefois de réserver à l'avance.`,
    },
    {
      q: `Les chauffeurs sont-ils disponibles 24h/24 ?`,
      a: `Oui. Notre service est disponible 24h/24 et 7j/7. Ainsi, que vous ayez un vol tôt le matin, un train en soirée ou un déplacement professionnel à toute heure, nous pouvons organiser votre prise en charge. Réservez en ligne ou par téléphone à tout moment.`,
    },
    {
      q: `Faites-vous les transferts vers les aéroports ?`,
      a: `Oui. Nous assurons les transferts vers l'aéroport Paris-Charles de Gaulle (Roissy) et l'aéroport d'Orly : prise en charge à votre adresse, aide aux bagages et trajet direct jusqu'au terminal. Les tarifs sont communiqués à la réservation. D'ailleurs, ce service est idéal pour éviter le stress et les retards.`,
    },
    {
      q: `Quels véhicules sont disponibles pour un ${kw} ?`,
      a: `Nous proposons des berlines et VTC confortables, climatisés et adaptés à la ville et aux trajets aéroport. De même, selon vos besoins (nombre de passagers, bagages), nous pouvons vous orienter vers le véhicule le plus adapté. Tous nos véhicules sont récents et entretenus pour un transport premium.`,
    },
  ];

  const sectionFaq = `
<h2>FAQ ${kw}</h2>
<p>Retrouvez les réponses aux questions les plus fréquentes sur notre service de chauffeur privé ${loc}. Ainsi, vous pourrez réserver en toute connaissance de cause. N'hésitez pas à nous contacter pour toute précision.</p>

<h3>Tarifs et réservation</h3>
<p><strong>${escapeHtml(faqItems[0].q)}</strong></p>
<p>${faqItems[0].a}</p>
<p><strong>${escapeHtml(faqItems[1].q)}</strong></p>
<p>${faqItems[1].a}</p>

<h3>Disponibilité et transferts</h3>
<p><strong>${escapeHtml(faqItems[2].q)}</strong></p>
<p>${faqItems[2].a}</p>
<p><strong>${escapeHtml(faqItems[3].q)}</strong></p>
<p>${faqItems[3].a}</p>

<h3>Véhicules</h3>
<p><strong>${escapeHtml(faqItems[4].q)}</strong></p>
<p>${faqItems[4].a}</p>
`;

  const conclusion = `
<p>Que vous habitiez ou travailliez ${loc}, notre service <strong>${kw}</strong> est à votre disposition pour tous vos déplacements : transferts aéroports (Charles de Gaulle, Orly), transferts gare (Gare du Nord, Gare de Lyon, Gare Montparnasse…), courses en ville ou trajets longue distance. En résumé, chauffeurs professionnels, véhicules confortables, tarifs transparents et réservation simple : nous mettons tout en œuvre pour votre sérénité. Par conséquent, contactez votre chauffeur privé et réservez en quelques clics ; nous restons à votre écoute pour toute demande.</p>
`;

  const internalLinksBlock = `
<p>Découvrez aussi notre <a href="${linkParis}">page VTC Paris</a>, nos services <a href="${linkParis10}">VTC Paris 10</a> et <a href="${linkParis15}">VTC Paris 15</a>, ainsi que nos pages dédiées aux <a href="${linkCDG}">transferts VTC aéroport Charles de Gaulle</a> et <a href="${linkOrly}">transferts VTC aéroport Orly</a>. N'hésitez pas à parcourir notre site pour trouver la formule adaptée à votre zone.</p>
`;

  const externalLinksBlock = `
<p>Pour en savoir plus sur les équipements et accès à Paris, consultez le <a href="${extParis}" target="_blank" rel="noopener noreferrer">site officiel de la Ville de Paris</a>. Par ailleurs, pour les horaires et terminaux des aéroports, voir le <a href="${extCDG}" target="_blank" rel="noopener noreferrer">site de Paris Aéroport</a>.</p>
`;

  const fullContent = [
    `<h1>${kw}</h1>`,
    intro.trim(),
    imgBlock,
    sectionService.trim(),
    sectionPourquoi.trim(),
    sectionTrajets.trim(),
    internalLinksBlock.trim(),
    sectionDeplacements.trim(),
    sectionReserver.trim(),
    sectionFaq.trim(),
    conclusion.trim(),
    externalLinksBlock.trim(),
  ]
    .join("\n\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  return fullContent;
}

export function getPageData(zone) {
  return {
    focusKeyphrase: focusKeyphrase(zone),
    seoTitle: seoTitle(zone),
    metaDescription: metaDescription(zone),
    slug: zone.slug,
    content: generateContent(zone),
  };
}

export function getAllPagesData() {
  return VTC_PARIS_ZONES.map((zone) => ({
    zone,
    ...getPageData(zone),
  }));
}
