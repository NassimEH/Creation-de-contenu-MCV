/**
 * Générateur de contenu SEO pour les pages VTC transfert aéroport (grands aéroports français).
 * 2500 mots minimum par page, contenu ultra personnalisé par aéroport, H2 Alternative taxi, usage naturel du mot taxi.
 */

import { AEROPORTS_FRANCE } from "./vtc-aeroports-data.js";

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

function focusKeyphrase(a) {
  return `Chauffeur privé VTC ${a.nameShort}`;
}

function seoTitle(a) {
  return focusKeyphrase(a);
}

function metaDescription(a) {
  const kw = focusKeyphrase(a);
  let text = `${kw} : transfert aéroport ${a.nameDisplay}. Prise en charge ou dépôt 24h/24. Réservation simple, tarifs transparents.`;
  if (text.length > 156) text = text.slice(0, 153) + "...";
  return text;
}

function otherAirportsForLinks(a) {
  return AEROPORTS_FRANCE.filter((x) => x.slug !== a.slug).slice(0, 3);
}

function isParisRegion(a) {
  return a.region === "Île-de-France";
}

function generateContent(a) {
  const kw = focusKeyphrase(a);
  const linkParis = `${SITE_SLUG_BASE}/vtc-paris/`;
  const linkCDG = `${SITE_SLUG_BASE}/vtc-aeroport-charles-de-gaulle/`;
  const linkOrly = `${SITE_SLUG_BASE}/vtc-aeroport-orly/`;
  const linkGareNord = `${SITE_SLUG_BASE}/vtc-gare-du-nord/`;
  const others = otherAirportsForLinks(a);
  const otherLinks = others.map((x) => `<a href="${SITE_SLUG_BASE}/${x.slug}/">VTC ${x.nameShort}</a>`).join(", ");

  const intro = `
<p><strong>${kw}</strong> : vous cherchez un transfert fiable vers ou depuis l'<strong>${a.nameDisplay}</strong> (${a.iata})&nbsp;? Nous assurons vos transferts en chauffeur privé VTC à toute heure, avec prise en charge à votre adresse ou dépôt devant le terminal. Que vous partiez tôt le matin ou que vous arriviez en soirée, notre service est disponible 24h/24 et 7j/7. Par ailleurs, nous nous adaptons à vos horaires de vol et garantissons ponctualité et confort. En optant pour un VTC plutôt qu'un taxi pris à la hâte, vous connaissez le tarif à l'avance et réservez à la date et à l'heure qui vous conviennent.</p>
<p>Le transfert vers ou depuis ${a.name} (${a.city}, ${a.region}) est l'un de nos services les plus demandés. Nous vous déposons devant le hall de départ ou nous vous récupérons à la sortie des bagages ; le prix est indiqué à la réservation, sans mauvaise surprise. Ainsi, vous voyagez l'esprit tranquille, que vous soyez en déplacement professionnel, en vacances ou en transit. Que vous ayez un vol à l'aube ou une arrivée en pleine nuit, notre équipe est à votre disposition.</p>
`;

  const imgUrl = `${IMAGE_BASE}/${a.image || "vtc-essonne.webp"}`;
  const imgBlock = `<figure class="wp-block-image" style="max-width: 560px; margin: 1em auto;"><img src="${imgUrl}" alt="${escapeHtml(kw)} – Transfert aéroport ${a.nameShort}" title="${escapeHtml(kw)} – Prise en charge et dépôt ${a.nameDisplay}" loading="lazy" style="width: 100%; height: auto; display: block;" /></figure>`;

  const sectionAlternativeTaxi = `
<h2>Alternative taxi à l'aéroport ${a.nameShort}</h2>
<p>Vous cherchez une <strong>alternative au taxi</strong> pour vous rendre à l'<strong>${a.nameDisplay}</strong> ou en revenir&nbsp;? Notre service <strong>${kw}</strong> associe la simplicité d'un transfert porte-à-porte et le confort d'un chauffeur privé : réservation en ligne, tarif fixé à l'avance, suivi en temps réel et véhicule dédié. Ainsi, vous évitez les files d'attente au taxi et les incertitudes de prix. Contrairement à un taxi pris sur le pas de la porte, le VTC se réserve à l'avance : vous choisissez l'heure et le lieu de prise en charge, et le prix affiché ne varie pas sauf modification du trajet. De plus, pour les vols tôt le matin ou tard le soir, réserver un chauffeur privé vous garantit une prise en charge à l'heure, sans dépendre de la disponibilité des taxis.</p>
`;

  const sectionService = `
<h2>Service ${kw}</h2>
<p>Notre offre de transfert avec chauffeur privé vers l'<strong>${a.nameDisplay}</strong> s'adresse aux particuliers comme aux professionnels. Chaque course est assurée par un chauffeur expérimenté, formé aux bonnes pratiques du service VTC et à la conduite jusqu'aux terminaux ; les véhicules sont régulièrement entretenus et climatisés pour un trajet confortable. C'est aussi une option pertinente en complément d'un taxi, notamment lorsque vous souhaitez réserver à l'avance ou voyager avec des bagages encombrants. Vous voyagez ainsi dans les meilleures conditions.</p>

<h3>Prise en charge et dépôt à ${a.nameShort}</h3>
<p>Nous nous déplaçons à votre adresse (domicile, hôtel, bureau) pour vous conduire à l'aéroport ${a.nameShort}, ou nous vous attendons à la sortie des bagages pour vous emmener à destination. La ponctualité est au cœur de notre engagement : nous adaptons les itinéraires au trafic et nous tenons compte des retards de vol pour les arrivées. Par ailleurs, nous proposons des véhicules adaptés aux bagages et aux familles. Que vous voyagiez seul ou en groupe, nous vous garantissons un transfert serein.</p>

<h3>Réservation et tarification</h3>
<p>Vous réservez en ligne en quelques clics et recevez une confirmation immédiate avec les coordonnées de votre chauffeur. Le tarif est indiqué à l'avance ; un devis clair vous est envoyé avant toute validation. Ainsi, vous réservez en toute transparence, sans mauvaise surprise. Que vous préfériez un VTC, un chauffeur privé ou une alternative au taxi pour vos transferts vers ${a.nameShort}, la même qualité de service s'applique.</p>
`;

  const sectionVtcVsTaxi = `
<h2>VTC et taxi : quelle différence pour le transfert ${a.nameShort}&nbsp;?</h2>
<p>Pour vous rendre à l'<strong>${a.nameDisplay}</strong> ou en revenir, vous pouvez opter pour un taxi traditionnel ou pour notre service de <strong>chauffeur privé VTC</strong>. La principale différence réside dans la réservation : le taxi se prend souvent à la demande (file d'attente à l'aéroport ou appel de dernière minute), alors que le VTC se réserve à l'avance en ligne ou par téléphone. Ainsi, vous connaissez le prix avant le trajet, vous évitez les mauvaises surprises et vous organisez votre transfert à l'heure près. Par ailleurs, nos véhicules sont dédiés à votre course : pas de partage avec d'autres passagers, un confort adapté aux trajets avec bagages.</p>
<p>Pour les vols tôt le matin ou tard le soir, réserver un VTC plutôt qu'un taxi au dernier moment vous garantit une prise en charge à l'heure convenue et un tarif fixe. De plus, nous assurons les transferts 24h/24 et 7j/7. En résumé, le VTC et le chauffeur privé conviennent particulièrement à ceux qui souhaitent planifier à l'avance et voyager dans un cadre serein, que ce soit vers ${a.name} ou tout autre aéroport.</p>
`;

  const sectionInfosPratiques = `
<h2>${a.nameDisplay} : infos pratiques</h2>
<p>Pour bien préparer votre transfert, voici les informations utiles sur l'<strong>${a.nameDisplay}</strong> (${a.iata})&nbsp;:</p>
<ul>
<li><strong>Ville / situation</strong> : ${a.city}, ${a.region}.</li>
<li><strong>Adresse</strong> : ${a.address}.</li>
<li><strong>Terminaux</strong> : ${a.terminals}. Pensez à indiquer votre terminal ou votre vol lors de la réservation pour un dépôt au plus près.</li>
<li><strong>Destinations principales</strong> : ${a.destinations}.</li>
${isParisRegion(a) ? `<li><strong>Depuis Paris</strong> : ${a.distanceParis} ; temps de trajet typique ${a.tempsParis}.</li>` : ""}
</ul>
<p>Un chauffeur privé vous évite le stress des navettes ou du stationnement : prise en charge à votre domicile ou dépôt devant le terminal, aide aux bagages si besoin. De plus, nous suivons le trafic en temps réel pour respecter vos horaires de vol. Pour les horaires détaillés et les informations de vol, consultez le site officiel de l'aéroport.</p>
`;

  const sectionTrajets = `
<h2>Trajets depuis ou vers l'${a.nameDisplay}</h2>
<p>Depuis ou vers l'aéroport ${a.nameShort}, nos clients réservent notamment des transferts depuis leur domicile, leur hôtel ou leur lieu de travail. Nous assurons chaque course avec le même niveau de qualité et de ponctualité. Par ailleurs, nous couvrons les trajets depuis Paris et l'Île-de-France vers ${a.name}${isParisRegion(a) ? ", ainsi que les transferts entre aéroports (Charles de Gaulle, Orly)" : ""}.</p>

${isParisRegion(a) ? `
<h3>Transfert Paris – ${a.nameShort}</h3>
<p>Le transfert depuis Paris ou l'Île-de-France vers l'<strong>${a.nameDisplay}</strong> est l'un de nos trajets les plus réservés. La distance depuis le centre de Paris est de ${a.distanceParis} ; le temps de trajet varie selon l'heure et le trafic (${a.tempsParis}). Un chauffeur privé vous évite le stress des transports en commun et du stationnement : prise en charge à votre adresse, aide aux bagages et trajet direct jusqu'au terminal. Nous vous conseillons de prévoir une marge en cas de trafic dense, surtout aux heures de pointe.</p>

<h3>Transfert ${a.nameShort} – Paris</h3>
<p>À l'arrivée à ${a.nameShort}, nous vous attendons à la sortie des bagages (ou au point de rendez-vous convenu) et nous vous conduisons à votre adresse à Paris ou en Île-de-France. Indiquez-nous votre numéro de vol pour que nous adaptions l'heure de prise en charge en cas de retard. Ainsi, vous rentrez chez vous ou à l'hôtel en toute sérénité, sans attendre un taxi ou charger vos bagages dans les transports en commun.</p>
` : `
<h3>Transfert vers ou depuis ${a.city}</h3>
<p>Nous assurons les transferts entre l'<strong>${a.nameDisplay}</strong> et le centre de ${a.city}, les hôtels, les gares et les zones d'activité de la région. Que vous arriviez en vol domestique ou international, nous nous adaptons à votre horaire et à votre terminal. Un chauffeur privé vous évite le stress des navettes et des correspondances : prise en charge ou dépôt au plus près de votre terminal, aide aux bagages, trajet direct.</p>

<h3>Transferts longue distance</h3>
<p>Pour les trajets entre ${a.nameShort} et Paris ou une autre région, nous pouvons vous proposer un devis sur mesure. N'hésitez pas à nous contacter pour toute demande spécifique (groupe, bagages volumineux, horaire particulier). Si vous arrivez de Paris ou d'une autre région, le transfert en VTC depuis l'aéroport ${a.nameShort} vers le centre de ${a.city} ou vers votre hébergement est souvent le moyen le plus confortable de rejoindre votre destination. Nous nous adaptons à votre horaire d'atterrissage et à votre terminal. Pour les déplacements professionnels ou les séminaires dans la région ${a.region}, la réservation d'un chauffeur privé à l'avance garantit une prise en charge à l'heure et un trajet sans stress.</p>
`}

<h3>Lien avec les autres aéroports et gares</h3>
<p>Vous enchaînez deux aéroports ou un train et un avion&nbsp;? Nous assurons également les transferts entre aéroports (par exemple Charles de Gaulle et Orly) et entre les gares parisiennes et l'<strong>${a.nameDisplay}</strong>. Réservez à l'avance pour garantir votre prise en charge et éviter les mauvaises surprises. Découvrez nos pages <a href="${linkCDG}">VTC aéroport Charles de Gaulle</a> et <a href="${linkOrly}">VTC aéroport Orly</a> pour les transferts en Île-de-France.</p>
`;

  const sectionConseils = `
<h2>Conseils pour réserver votre transfert VTC vers ${a.nameShort}</h2>
<p>Pour tirer le meilleur parti de notre service <strong>${kw}</strong>, voici quelques recommandations. D'abord, réservez au moins 24 à 48 heures à l'avance pour les transferts vers l'aéroport, surtout en période de vacances ou les jours fériés. Ainsi, vous êtes assuré d'avoir un véhicule à l'heure souhaitée. Par ailleurs, indiquez toujours votre numéro de vol et l'heure d'embarquement (ou d'atterrissage) : nous adaptons l'heure de prise en charge en fonction des recommandations des aéroports (par exemple 2h avant un vol international).</p>
<p>Si vous voyagez en groupe ou avec des bagages encombrants, précisez-le au moment de la réservation afin que nous vous proposions le véhicule adapté. En cas d'imprévu (retard de vol, annulation), contactez-nous au plus tôt : nous faisons notre possible pour ajuster la course. Ces conseils valent que vous partiez de Paris, de l'Île-de-France ou de la région de ${a.city}.</p>
`;

  const sectionQuandReserver = `
<h2>Quand réserver un VTC ou un taxi pour ${a.nameShort}&nbsp;?</h2>
<p>Vous pouvez réserver notre service <strong>${kw}</strong> à tout moment, y compris la veille ou le jour même pour un transfert dans les heures qui suivent. Toutefois, pour les vols tôt le matin ou tard le soir, nous conseillons de réserver au moins 24 h à l'avance pour garantir la disponibilité. En période de fêtes ou d'événements (salons, vacances scolaires), réservez plusieurs jours à l'avance. Pour une arrivée à ${a.nameShort}, la réservation peut se faire dès que vous connaissez votre vol : nous adapterons l'heure de prise en charge en cas de retard.</p>
<p>Notre plateforme et notre équipe restent disponibles 24h/24 : vous pouvez donc organiser votre transfert à tout moment, que vous préfériez un VTC, un chauffeur privé ou une alternative au taxi pour vos trajets vers l'<strong>${a.nameDisplay}</strong>.</p>
`;

  const sectionPourquoi = `
<h2>Pourquoi choisir notre ${kw}</h2>
<p>Choisir notre service, c'est opter pour un transfert aéroport de qualité, adapté aux déplacements vers ${a.name} et la région ${a.region}. Nous nous engageons sur la ponctualité et le confort ; notre offre répond aux besoins des particuliers comme des professionnels. En effet, chaque chauffeur est formé aux spécificités des transferts aéroport (repérage des terminaux, gestion des retards de vol, aide aux bagages). De plus, nos véhicules sont propres, climatisés et conformes à la réglementation VTC.</p>

<h3>Nos atouts</h3>
<ul>
<li><strong>Chauffeurs professionnels</strong> : discrets, à l'écoute et ponctuels.</li>
<li><strong>Ponctualité</strong> : suivi du trafic et adaptation en cas de retard de vol.</li>
<li><strong>Véhicules confortables</strong> : berlines et VTC récents, climatisés, adaptés aux bagages.</li>
<li><strong>Service 24h/24</strong> : réservation possible à toute heure, même pour les vols de nuit.</li>
<li><strong>Tarifs transparents</strong> : prix fixé à la réservation, pas de surprise.</li>
<li><strong>Réservation simple</strong> : en ligne ou par téléphone, en quelques clics.</li>
</ul>
<p>Que vous voyagiez pour le travail ou pour les vacances, un transfert en chauffeur privé vers l'<strong>${a.nameDisplay}</strong> vous permet de partir ou d'arriver sereinement, sans dépendre d'un taxi ou des transports en commun. Par ailleurs, pour les familles et les groupes, le VTC offre un confort et une flexibilité souvent supérieurs au taxi.</p>
`;

  const sectionCouverture = `
<h2>Couverture et secteur pour le transfert ${a.nameShort}</h2>
<p>Notre service de chauffeur privé VTC couvre les transferts vers et depuis l'<strong>${a.nameDisplay}</strong> depuis Paris, l'Île-de-France et la région de ${a.city}. Nous nous déplaçons à votre adresse (domicile, hôtel, gare, lieu de travail) pour vous conduire à l'aéroport, ou nous vous attendons à la sortie des bagages pour vous emmener à destination. Ainsi, que vous habitiez le centre de ${a.city} ou une commune voisine, vous bénéficiez du même niveau de service.</p>
<p>Pour les trajets au départ ou à l'arrivée de ${a.nameShort}, nous assurons les courses vers les principales villes de la région et, sur demande, vers Paris ou d'autres aéroports. Notre objectif est de vous offrir une alternative fiable au taxi et aux navettes, avec un tarif transparent et un chauffeur professionnel à votre disposition 24h/24.</p>
`;

  const faqItems = [
    { q: `Quel est le prix d'un transfert ${kw} ?`, a: `Le tarif dépend du trajet (adresse de prise en charge, terminal) et du type de véhicule. Nous appliquons des tarifs transparents : le prix est indiqué à la réservation et ne change pas sauf modification du trajet. Les transferts vers l'aéroport ${a.nameShort} sont proposés sur devis. Vous évitez ainsi les surprises que l'on peut avoir avec un taxi en heure de pointe.` },
    { q: `Peut-on réserver un transfert vers ${a.nameShort} à l'avance ?`, a: `Oui. Vous pouvez réserver plusieurs jours ou semaines à l'avance. La réservation en ligne est disponible 24h/24 et vous recevez une confirmation immédiate. Pour les vols tôt le matin ou en période de forte affluence, nous conseillons de réserver à l'avance.` },
    { q: `Les chauffeurs sont-ils disponibles 24h/24 pour ${a.nameShort} ?`, a: `Oui. Notre service est disponible 24h/24 et 7j/7. Que vous ayez un vol à l'aube ou une arrivée en pleine nuit, nous pouvons organiser votre prise en charge ou votre dépôt à l'aéroport ${a.nameShort}. Réservez en ligne ou par téléphone à tout moment.` },
    { q: `Où me dépose le chauffeur à l'aéroport ${a.nameShort} ?`, a: `Nous vous déposons au plus près de votre terminal (${a.terminals}). Indiquez votre vol ou votre compagnie lors de la réservation pour que nous choisissions le point de dépôt le plus adapté. À l'arrivée, nous vous attendons à la sortie des bagages ou au point de rendez-vous convenu.` },
    { q: `Quels véhicules sont disponibles pour un transfert ${kw} ?`, a: `Nous proposons des berlines et VTC confortables, climatisés et adaptés aux trajets aéroport avec bagages. Selon vos besoins (nombre de passagers, bagages encombrants), nous pouvons vous orienter vers le véhicule le plus adapté. Tous nos véhicules sont récents et entretenus.` },
    { q: `Quelle est la différence entre un VTC et un taxi pour l'aéroport ${a.nameShort} ?`, a: `Le VTC se réserve à l'avance (en ligne ou par téléphone) et le tarif est fixé avant la course. Le taxi peut être pris à la demande (file à l'aéroport ou appel) et le prix dépend du compteur. Avec notre service de chauffeur privé VTC, vous connaissez le coût à l'avance, vous choisissez l'heure de prise en charge et vous bénéficiez d'un véhicule dédié. Idéal pour les transferts aéroport.` },
    { q: `Puis-je annuler ou modifier une réservation de transfert ?`, a: `Oui. Les conditions d'annulation et de modification dépendent du délai avant le trajet. Nous vous invitons à consulter nos conditions générales ou à nous contacter. En cas de changement d'horaire de vol, prévenez-nous au plus tôt pour que nous puissions adapter l'heure de prise en charge.` },
  ];

  const sectionFaq = `
<h2>FAQ ${kw}</h2>
<p>Retrouvez les réponses aux questions les plus fréquentes sur notre service de transfert vers l'<strong>${a.nameDisplay}</strong>. Ainsi, vous pourrez réserver en toute connaissance de cause. N'hésitez pas à nous contacter pour toute précision.</p>

<h3>Tarifs et réservation</h3>
<p><strong>${escapeHtml(faqItems[0].q)}</strong></p>
<p>${faqItems[0].a}</p>
<p><strong>${escapeHtml(faqItems[1].q)}</strong></p>
<p>${faqItems[1].a}</p>

<h3>Disponibilité et prise en charge</h3>
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
<p>Que vous partiez de ou vers l'<strong>${a.nameDisplay}</strong> (${a.iata}), notre service <strong>${kw}</strong> est à votre disposition pour tous vos transferts : prise en charge à domicile ou à l'hôtel, dépôt devant le terminal, ou attente à la sortie des bagages. En résumé, chauffeurs professionnels, véhicules confortables, tarifs transparents et réservation simple : nous mettons tout en œuvre pour votre sérénité. Que vous préfériez un VTC, un chauffeur privé ou une alternative au taxi pour vos trajets vers ${a.nameShort}, la même qualité de service s'applique. Par conséquent, contactez-nous et réservez en quelques clics ; nous restons à votre écoute pour toute demande.</p>
`;

  const internalLinksBlock = `
<p>Découvrez aussi notre <a href="${linkParis}">page VTC Paris</a>, ${otherLinks}, ainsi que nos pages <a href="${linkCDG}">VTC aéroport Charles de Gaulle</a> et <a href="${linkOrly}">VTC aéroport Orly</a>. Pour vos transferts en gare, consultez notre <a href="${linkGareNord}">service VTC Gare du Nord</a> et nos pages dédiées aux gares parisiennes.</p>
`;

  const externalLinksBlock = `
<p>Pour les horaires des vols, les terminaux et les informations pratiques, consultez le <a href="${a.siteUrl}" target="_blank" rel="noopener noreferrer">site officiel de l'${a.nameDisplay}</a>. ${isParisRegion(a) ? "Pour Charles de Gaulle et Orly, voir également le site <a href=\"https://www.parisaeroport.fr\" target=\"_blank\" rel=\"noopener noreferrer\">Paris Aéroport</a>." : ""}</p>
`;

  const fullContent = [
    `<h1>${kw}</h1>`,
    intro.trim(),
    imgBlock,
    sectionAlternativeTaxi.trim(),
    sectionService.trim(),
    sectionVtcVsTaxi.trim(),
    sectionInfosPratiques.trim(),
    sectionTrajets.trim(),
    internalLinksBlock.trim(),
    sectionPourquoi.trim(),
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

export function getPageData(airport) {
  return {
    focusKeyphrase: focusKeyphrase(airport),
    seoTitle: seoTitle(airport),
    metaDescription: metaDescription(airport),
    slug: airport.slug,
    content: generateContent(airport),
  };
}

export function getAllPagesData() {
  return AEROPORTS_FRANCE.map((a) => ({
    airport: a,
    ...getPageData(a),
  }));
}
