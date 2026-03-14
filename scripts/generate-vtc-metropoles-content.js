/**
 * Générateur de contenu SEO pour les pages VTC des plus grandes métropoles françaises (hors Paris).
 * 2500 mots minimum, ultra SEO, H2 Alternative taxi, usage naturel du mot taxi.
 * Conforme aux normes du projet (skill mcv-website-rules).
 */

import { METROPOLES_FRANCE } from "./vtc-metropoles-data.js";

const SITE_SLUG_BASE = "/nos-secteurs";
const IMAGE_BASE = "https://monchauffeurvipv3.netopsia.eu/wp-content/uploads/2026/02";

function escapeHtml(s) {
  if (!s) return "";
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function focusKeyphrase(m) {
  return `Chauffeur privé VTC ${m.name}`;
}

function seoTitle(m) {
  return focusKeyphrase(m);
}

function metaDescription(m) {
  const kw = focusKeyphrase(m);
  let text = `${kw} : chauffeur privé à ${m.name} (${m.cp}), transferts aéroport et gares. Réservation simple, 24h/24.`;
  if (text.length > 156) text = text.slice(0, 153) + "...";
  return text;
}

function otherMetropolesForLinks(m) {
  return METROPOLES_FRANCE.filter((x) => x.slug !== m.slug).slice(0, 3);
}

function generateContent(m) {
  const kw = focusKeyphrase(m);
  const cp = ` (${m.cp})`;
  const loc = `à ${m.name}${cp}`;
  const linkParis = `${SITE_SLUG_BASE}/vtc-paris/`;
  const linkCDG = `${SITE_SLUG_BASE}/vtc-aeroport-charles-de-gaulle/`;
  const linkOrly = `${SITE_SLUG_BASE}/vtc-aeroport-orly/`;
  const linkGareNord = `${SITE_SLUG_BASE}/vtc-gare-du-nord/`;
  const linkAeroportLocal = m.aeroportSlug ? `${SITE_SLUG_BASE}/${m.aeroportSlug}/` : null;
  const others = otherMetropolesForLinks(m);
  const otherLinks = others.map((x) => `<a href="${SITE_SLUG_BASE}/${x.slug}/">VTC ${x.name}</a>`).join(", ");

  const intro = `
<p><strong>${kw}</strong> : vous cherchez un chauffeur privé fiable et disponible à toute heure&nbsp;? Nous vous accompagnons ${loc} et dans la métropole pour vos déplacements professionnels, transferts aéroport ou gare, et trajets en ville. ${m.name} est ${m.population} ; que vous soyez aux abords de ${m.quartiers} ou en déplacement vers l'aéroport ${m.aeroport} ou la ${m.gares}, notre flotte et nos chauffeurs garantissent ponctualité et confort. Par ailleurs, nous nous adaptons à vos horaires et à votre destination, avec une réservation simple et des tarifs transparents. En optant pour un VTC ou un chauffeur privé plutôt qu'un taxi classique, vous connaissez le tarif à l'avance et réservez à la date et à l'heure qui vous conviennent.</p>
<p>Le service est opérationnel 24h/24 et 7j/7, avec un suivi en temps réel pour chaque course. Nous mettons tout en œuvre pour un trajet serein, que ce soit vers l'aéroport, la gare ou tout autre point de ${m.name} et de la région ${m.region}. Côté prix, tout est indiqué à l'avance : ainsi, vous pouvez réserver en toute confiance. Que vous ayez besoin d'un transfert tôt le matin, en soirée ou en pleine nuit, notre équipe est à votre disposition.</p>
`;

  const imgUrl = `${IMAGE_BASE}/${m.image || "vtc-essonne.webp"}`;
  const imgBlock = `<figure class="wp-block-image" style="max-width: 560px; margin: 1em auto;"><img src="${imgUrl}" alt="${escapeHtml(kw)} – Chauffeur privé et véhicule confortable" title="${escapeHtml(kw)} – Service de transport avec chauffeur" loading="lazy" style="width: 100%; height: auto; display: block;" /></figure>`;

  const sectionAlternativeTaxi = `
<h2>Alternative taxi à ${m.name}${cp}</h2>
<p>Vous cherchez une <strong>alternative taxi</strong> à ${m.name}${cp}&nbsp;? Notre service <strong>${kw}</strong> associe le confort d'un chauffeur privé et la simplicité d'un VTC, avec une réservation en ligne et un tarif annoncé à l'avance. Ainsi, vous évitez les incertitudes et vous planifiez vos trajets en toute sérénité. Contrairement à un taxi pris sur le pas de la porte, le VTC se réserve à l'avance : vous choisissez l'heure et le lieu de prise en charge, et le prix affiché ne varie pas sauf modification du trajet. De plus, vous bénéficiez d'un suivi en temps réel et d'un véhicule dédié, souvent plus confortable qu'un taxi pour les trajets longs ou les transferts aéroport vers ${m.aeroport}.</p>
`;

  const sectionService = `
<h2>Service ${kw}</h2>
<p>Notre offre de transport avec chauffeur privé à ${m.name}${cp} et dans la métropole s'adresse aux particuliers comme aux professionnels. En effet, chaque course est assurée par un chauffeur expérimenté, formé aux bonnes pratiques du service VTC ; les véhicules sont régulièrement entretenus et climatisés pour un trajet confortable. C'est aussi une option pertinente en complément d'un taxi, notamment si vous souhaitez réserver à l'avance. Vous voyagez ainsi dans les meilleures conditions.</p>

<h3>Ponctualité et couverture de la zone</h3>
<p>La ponctualité est au cœur de notre engagement : nous suivons le trafic en temps réel et adaptons les itinéraires pour respecter vos horaires, notamment pour les transferts aéroport ou gare. Que vous habitiez ou travailliez à ${m.name}, dans les quartiers de ${m.quartiers} ou en périphérie, nous nous déplaçons à votre adresse. De plus, nous couvrons aussi les communes de la métropole.</p>

<h3>Réservation et tarification</h3>
<p>Vous réservez en ligne en quelques clics, recevez une confirmation immédiate et pouvez joindre directement votre chauffeur le jour du trajet. Côté tarif, pas de mauvaise surprise : le prix est indiqué à l'avance et un devis clair vous est envoyé avant toute validation. Que vous préfériez un VTC, un chauffeur privé ou une alternative au taxi pour vos déplacements à ${m.name}, la même qualité de service s'applique.</p>
`;

  const sectionVtcVsTaxi = `
<h2>VTC et taxi : quelle différence à ${m.name}&nbsp;?</h2>
<p>À ${m.name}${cp}, vous pouvez opter pour un taxi traditionnel ou pour notre service de <strong>chauffeur privé VTC</strong>. La principale différence réside dans la réservation : le taxi se prend souvent à la demande (rue ou station), alors que le VTC se réserve à l'avance en ligne ou par téléphone. Ainsi, vous connaissez le prix avant le trajet, vous évitez les mauvaises surprises et vous organisez vos déplacements à l'heure près. Par ailleurs, nos véhicules sont dédiés à votre course : pas de partage avec d'autres passagers, un confort adapté aux trajets professionnels ou aux transferts aéroport avec bagages.</p>
<p>Pour les trajets vers l'aéroport ${m.aeroport} ou les gares (${m.gares}), réserver un VTC plutôt qu'un taxi au dernier moment vous garantit une prise en charge à l'heure et un tarif fixe. De plus, nous assurons les départs tôt le matin et les retours en soirée, 24h/24 et 7j/7. En résumé, le VTC et le chauffeur privé conviennent particulièrement à ceux qui souhaitent planifier à l'avance et voyager dans un cadre serein.</p>
`;

  const sectionPourquoi = `
<h2>Pourquoi choisir notre ${kw}</h2>
<p>Choisir notre service, c'est opter pour un transport privé de qualité, adapté aux déplacements à ${m.name} et en région ${m.region}. En effet, nous nous engageons sur la ponctualité et le confort ; de plus, notre offre répond aux besoins des particuliers comme des professionnels.</p>

<h3>Nos atouts</h3>
<p>Voici ce qui fait la différence au quotidien :</p>
<ul>
<li><strong>Chauffeurs professionnels</strong> : formés, discrets et à l'écoute de vos besoins.</li>
<li><strong>Ponctualité</strong> : suivi du trafic et prise en charge à l'heure convenue.</li>
<li><strong>Véhicules confortables</strong> : berlines et VTC récents, climatisés et propres.</li>
<li><strong>Service disponible 24h/24</strong> : réservation possible à toute heure.</li>
<li><strong>Réservation simple</strong> : en ligne ou par téléphone, en quelques clics.</li>
<li><strong>Tarifs transparents</strong> : prix fixé à la réservation, pas de surprise à l'arrivée.</li>
</ul>

<h3>Un service adapté à vos besoins</h3>
<p>Que vous ayez besoin d'un transfert aéroport (${m.aeroport}), d'un transfert gare (${m.gares}) ou d'une course en ville depuis ${m.name}, notre équipe est à votre disposition. N'hésitez pas à nous contacter pour vous accompagner en toute sérénité : vous bénéficiez d'un interlocuteur unique pour tous vos déplacements.</p>
`;

  const sectionTrajets = `
<h2>Trajets ${kw} les plus demandés</h2>
<p>Depuis ${m.name} et la métropole, nos clients réservent notamment les trajets suivants. Par ailleurs, nous assurons chaque course avec le même niveau de qualité et de ponctualité.</p>

<h3>${kw} vers l'aéroport ${m.aeroport}</h3>
<p>Le transfert vers l'aéroport ${m.aeroport} depuis ${m.name} est l'un de nos trajets les plus réservés. Un chauffeur privé vous évite le stress des navettes ou des transports en commun : prise en charge à votre adresse, aide aux bagages et trajet direct jusqu'au terminal. ${linkAeroportLocal ? `Consultez notre <a href="${linkAeroportLocal}">page dédiée au transfert VTC ${m.aeroport}</a> pour plus d'informations.` : "Nous vous conseillons de réserver à l'avance, surtout pour les vols tôt le matin ou en soirée."}</p>

<h3>${kw} vers les gares (${m.gares})</h3>
<p>Les gares de ${m.name} (${m.gares}) sont des points de passage obligés pour de nombreux déplacements (TGV, trains régionaux). Un chauffeur privé jusqu'à la gare vous garantit une arrivée à l'heure, sans vous soucier du stationnement. Par ailleurs, nous proposons des véhicules adaptés aux bagages.</p>

<h3>Trajets vers Paris et longue distance</h3>
<p>Nous assurons également les trajets entre ${m.name} et Paris, ainsi que les déplacements vers d'autres métropoles ou régions sur demande. La réservation à l'avance permet de garantir la disponibilité et un tarif transparent. Découvrez notre <a href="${linkParis}">page VTC Paris</a>, nos pages <a href="${linkCDG}">VTC aéroport Charles de Gaulle</a> et <a href="${linkOrly}">VTC aéroport Orly</a> pour les transferts en Île-de-France.</p>

<h3>Trajets professionnels et événements depuis ${m.name}</h3>
<p>Depuis ${m.name}${cp}, nous assurons les déplacements professionnels (rendez-vous clients, séminaires, déplacements entre sites) et les trajets pour événements (mariages, anniversaires, soirées). Contrairement à un taxi pris à la hâte, la réservation d'un VTC ou d'un chauffeur privé permet de planifier l'heure et le lieu de prise en charge, avec un véhicule propre et discret. Pour les trajets longue distance, nous pouvons vous proposer un devis sur mesure.</p>
`;

  const sectionConseils = `
<h2>Conseils pour réserver votre chauffeur privé ou VTC à ${m.name}</h2>
<p>Pour tirer le meilleur parti de notre service <strong>${kw}</strong>, voici quelques recommandations. D'abord, pour les transferts vers l'aéroport ${m.aeroport}, réservez au moins 24 à 48 heures à l'avance, surtout en période de vacances ou les jours fériés. Ainsi, vous êtes assuré d'avoir un véhicule à l'heure souhaitée. Par ailleurs, indiquez toujours votre numéro de vol et l'heure d'embarquement : nous adaptons l'heure de prise en charge en fonction des recommandations des aéroports.</p>
<p>Pour les trajets vers les gares (${m.gares}), la réservation à l'avance est également conseillée aux heures de pointe. Si vous voyagez en groupe ou avec des bagages encombrants, précisez-le au moment de la réservation. En cas d'imprévu (retard de train, annulation de vol), contactez-nous au plus tôt. Ces conseils valent que vous habitiez ${m.name}, dans les quartiers de ${m.quartiers} ou dans une commune de la métropole.</p>
`;

  const sectionCouverture = `
<h2>Couverture et secteur d'intervention à ${m.name}${cp}</h2>
<p>Notre service de chauffeur privé et VTC couvre ${m.name}${cp} et l'ensemble de la métropole, notamment les secteurs de ${m.quartiers}, les axes routiers principaux et les zones d'activité. Nous nous déplaçons à votre adresse, que vous soyez en centre-ville ou en périphérie : pas besoin de vous rendre à un point de rendez-vous fixe. Ainsi, que vous partiez du cœur de ${m.name} ou d'une commune limitrophe, vous bénéficiez du même niveau de service.</p>
<p>Pour les trajets au départ ou à l'arrivée de ${m.name}, nous assurons les courses vers l'aéroport ${m.aeroport}, vers la ${m.gares}, vers Paris et vers les autres régions sur demande. Notre objectif est de vous offrir une alternative fiable au taxi et aux transports en commun, avec un tarif transparent et un chauffeur professionnel à votre disposition 24h/24.</p>
`;

  const sectionQuandReserver = `
<h2>Quand réserver un VTC ou un taxi à ${m.name}&nbsp;?</h2>
<p>Vous pouvez réserver notre service <strong>${kw}</strong> à tout moment, y compris la veille ou le jour même pour une course dans l'heure. Toutefois, pour les transferts vers l'aéroport ${m.aeroport}, nous conseillons de réserver au moins 24 à 48 h à l'avance, surtout tôt le matin ou en soirée. Pour les trajets vers les gares aux heures de pointe, anticiper permet de garantir la disponibilité d'un véhicule. En période de fêtes ou d'événements (salons, congrès), réservez plusieurs jours à l'avance.</p>
<p>Pour une course en ville ou un trajet professionnel depuis ${m.name}, la réservation le jour même est souvent possible. Notre plateforme et notre équipe restent disponibles 24h/24 : vous pouvez donc organiser votre déplacement à tout moment, que vous préfériez un VTC, un chauffeur privé ou une alternative au taxi pour vos trajets à ${m.name} et en ${m.region}.</p>
`;

  const sectionDeplacements = `
<h2>${kw} pour tous vos déplacements</h2>
<p>Notre service couvre l'ensemble de vos besoins en transport privé à ${m.name}, que vous soyez particulier ou professionnel. Ainsi, nous nous adaptons à chaque situation : déplacements du quotidien comme trajets occasionnels. En outre, que vous soyez dans le centre (${m.quartiers}) ou en périphérie, la même qualité est au rendez-vous.</p>

<h3>Types de missions</h3>
<p>Voici les usages les plus fréquents de notre flotte à ${m.name} :</p>
<ul>
<li><strong>Transport professionnel</strong> : déplacements entre rendez-vous, accueil de clients, gares et aéroport ${m.aeroport}.</li>
<li><strong>Tourisme</strong> : visites, déplacements entre hôtels et sites culturels.</li>
<li><strong>Transferts hôtels</strong> : prise en charge ou dépôt à l'hôtel, avec ou sans bagages.</li>
<li><strong>Événements privés</strong> : mariages, séminaires, soirées ; véhicules soignés et chauffeurs discrets.</li>
<li><strong>Trajets longue distance</strong> : déplacements vers Paris, d'autres métropoles ou régions sur demande.</li>
</ul>

<h3>Disponibilité</h3>
<p>Que vous résidiez à ${m.name} ou dans une commune de la métropole, notre flotte est disponible. Vous pouvez réserver dès maintenant pour un trajet confortable et sécurisé ; nous restons joignables 24h/24. Par conséquent, vous n'avez plus à vous soucier de l'organisation de vos déplacements.</p>
`;

  const sectionReserver = `
<h2>Réserver votre ${kw}</h2>
<p>Réserver un chauffeur privé est simple et rapide : la procédure ne prend que quelques minutes et notre plateforme est disponible 24h/24. Voici les étapes à suivre :</p>

<h3>Les étapes en détail</h3>
<ol>
<li>Indiquez votre adresse de prise en charge (à ${m.name} ou ailleurs) et votre destination.</li>
<li>Choisissez la date et l'heure souhaitées ; notre service est disponible 24h/24.</li>
<li>Validez votre réservation : vous recevez une confirmation avec les coordonnées de votre chauffeur.</li>
<li>Le jour du trajet, votre chauffeur vous attend à l'heure et au lieu convenus.</li>
</ol>

<h3>Conseils pratiques</h3>
<p>Pour les transferts aéroport ou gare, nous recommandons de réserver à l'avance. Vous pouvez modifier ou annuler selon nos conditions générales. Réservez dès maintenant pour profiter d'un trajet confortable ; en cas de question, notre équipe reste à votre écoute.</p>
`;

  const faqItems = [
    { q: `Quel est le prix d'un ${kw} ?`, a: `Le tarif dépend du trajet (distance, durée) et du type de véhicule. Nous appliquons des tarifs transparents : le prix est indiqué à la réservation et ne change pas sauf modification de la course. Les transferts vers l'aéroport ${m.aeroport} et les gares sont proposés à prix fixe sur devis. Vous évitez ainsi les surprises que l'on peut avoir avec un taxi en heure de pointe.` },
    { q: `Peut-on réserver un ${kw} à l'avance ?`, a: `Oui. Vous pouvez réserver plusieurs jours ou semaines à l'avance. La réservation en ligne est disponible 24h/24 et vous recevez une confirmation immédiate. Pour les transferts aéroport et les jours fériés, nous conseillons toutefois de réserver à l'avance.` },
    { q: `Les chauffeurs sont-ils disponibles 24h/24 ?`, a: `Oui. Notre service est disponible 24h/24 et 7j/7. Ainsi, que vous ayez un vol tôt le matin ou un train en soirée, nous pouvons organiser votre prise en charge. Réservez en ligne ou par téléphone à tout moment.` },
    { q: `Faites-vous les transferts vers l'aéroport ${m.aeroport} ?`, a: `Oui. Nous assurons les transferts vers l'aéroport ${m.aeroport} : prise en charge à votre adresse, aide aux bagages et trajet direct jusqu'au terminal. Ce service est idéal pour éviter le stress et les retards.` },
    { q: `Quels véhicules sont disponibles pour un ${kw} ?`, a: `Nous proposons des berlines et VTC confortables, climatisés et adaptés à la ville et aux trajets aéroport. Selon vos besoins (nombre de passagers, bagages), nous pouvons vous orienter vers le véhicule le plus adapté. Tous nos véhicules sont récents et entretenus.` },
    { q: `Quelle est la différence entre un VTC et un taxi à ${m.name} ?`, a: `Le VTC se réserve à l'avance (en ligne ou par téléphone) et le tarif est fixé avant la course. Le taxi peut être pris à la demande (rue ou station) et le prix dépend du compteur. Avec notre service de chauffeur privé VTC, vous connaissez le coût à l'avance et vous bénéficiez d'un véhicule dédié. Idéal pour les transferts aéroport, gare ou les trajets professionnels.` },
    { q: `Puis-je annuler ou modifier une réservation ?`, a: `Oui. Les conditions d'annulation et de modification dépendent du délai avant le trajet. Consultez nos conditions générales ou contactez-nous. En cas de changement d'horaire de vol ou de train, prévenez-nous au plus tôt pour que nous puissions adapter la course.` },
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

<h3>Véhicules et service</h3>
<p><strong>${escapeHtml(faqItems[4].q)}</strong></p>
<p>${faqItems[4].a}</p>
<p><strong>${escapeHtml(faqItems[5].q)}</strong></p>
<p>${faqItems[5].a}</p>
<p><strong>${escapeHtml(faqItems[6].q)}</strong></p>
<p>${faqItems[6].a}</p>
`;

  const conclusion = `
<p>Que vous habitiez ou travailliez ${loc}, notre service <strong>${kw}</strong> est à votre disposition pour tous vos déplacements : transferts aéroport (${m.aeroport}), transferts gare (${m.gares}), courses en ville ou trajets longue distance. En résumé, chauffeurs professionnels, véhicules confortables, tarifs transparents et réservation simple : nous mettons tout en œuvre pour votre sérénité. Que vous préfériez un VTC, un chauffeur privé ou une alternative au taxi à ${m.name}${cp}, la même qualité de service s'applique. Par conséquent, contactez votre chauffeur privé et réservez en quelques clics ; nous restons à votre écoute pour toute demande.</p>
`;

  const internalLinksBlock = `
<p>Découvrez aussi notre <a href="${linkParis}">page VTC Paris</a>, ${otherLinks}, ainsi que nos pages <a href="${linkCDG}">VTC aéroport Charles de Gaulle</a> et <a href="${linkOrly}">VTC aéroport Orly</a>. Pour vos transferts en gare, consultez notre <a href="${linkGareNord}">service VTC Gare du Nord</a>.</p>
`;

  const externalLinksBlock = `
<p>Pour en savoir plus sur la ville et les équipements, consultez le <a href="${m.siteUrl}" target="_blank" rel="noopener noreferrer">site officiel de ${m.name}</a>.</p>
`;

  const fullContent = [
    `<h1>${kw}</h1>`,
    intro.trim(),
    imgBlock,
    sectionAlternativeTaxi.trim(),
    sectionService.trim(),
    sectionVtcVsTaxi.trim(),
    sectionPourquoi.trim(),
    sectionTrajets.trim(),
    internalLinksBlock.trim(),
    sectionDeplacements.trim(),
    sectionReserver.trim(),
    sectionConseils.trim(),
    sectionCouverture.trim(),
    sectionQuandReserver.trim(),
    sectionFaq.trim(),
    conclusion.trim(),
    externalLinksBlock.trim(),
  ]
    .join("\n\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  return fullContent;
}

export function getPageData(metropole) {
  return {
    focusKeyphrase: focusKeyphrase(metropole),
    seoTitle: seoTitle(metropole),
    metaDescription: metaDescription(metropole),
    slug: metropole.slug,
    content: generateContent(metropole),
  };
}

export function getAllPagesData() {
  return METROPOLES_FRANCE.map((m) => ({
    metropole: m,
    ...getPageData(m),
  }));
}
