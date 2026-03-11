/**
 * Générateur de contenu SEO pour les pages VTC transfert gare (7 gares SNCF à Paris).
 */

import { GARES_PARIS } from "./vtc-gares-paris-data.js";

const SITE_SLUG_BASE = "/nos-secteurs";

function escapeHtml(s) {
  if (!s) return "";
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function focusKeyphrase(gare) {
  return `VTC ${gare.name}`;
}

function metaDescription(gare) {
  const kw = focusKeyphrase(gare);
  let text = `${kw} : transfert chauffeur privé à ${gare.address}. Prise en charge ou dépôt 24h/24. Réservation simple, tarifs transparents.`;
  if (text.length > 156) text = text.slice(0, 153) + "...";
  return text;
}

function otherGaresForLinks(gare) {
  return GARES_PARIS.filter((g) => g.slug !== gare.slug).slice(0, 2);
}

function generateContent(gare) {
  const kw = focusKeyphrase(gare);
  const linkParis = `${SITE_SLUG_BASE}/vtc-paris/`;
  const linkCDG = `${SITE_SLUG_BASE}/vtc-aeroport-charles-de-gaulle/`;
  const linkOrly = `${SITE_SLUG_BASE}/vtc-aeroport-orly/`;
  const others = otherGaresForLinks(gare);
  const otherLinks = others.map((g) => `<a href="${SITE_SLUG_BASE}/${g.slug}/">VTC ${g.name}</a>`).join(", ");
  const extSNCF = "https://www.sncf.com";

  const intro = `
<p><strong>${kw}</strong> : vous avez un train à prendre ou vous arrivez en gare et vous cherchez un chauffeur privé pour vous emmener à destination&nbsp;? Nous assurons vos transferts depuis ou vers la ${gare.name}, à toute heure. Que vous partiez tôt le matin ou que vous arriviez en soirée, notre service est disponible pour une prise en charge ou un dépôt à l'adresse de la gare. Par ailleurs, nous nous adaptons à vos horaires de train et garantissons ponctualité et confort.</p>
<p>Le service est opérationnel 24h/24 et 7j/7. Nous vous déposons devant la gare ou nous vous y récupérons à l'heure convenue ; le prix est indiqué à l'avance, sans mauvaise surprise. Ainsi, vous pouvez réserver en toute confiance.</p>
`;

  const blocPratique = `
<h2>${gare.name} : infos pratiques</h2>
<p>Vous vous demandez quelle gare choisir pour votre voyage&nbsp;? Voici les informations utiles pour la ${gare.name}&nbsp;:</p>
<ul>
<li><strong>Adresse</strong> : ${gare.address}</li>
<li><strong>Horaires</strong> : ${gare.horaires}</li>
<li><strong>Provenance des trains</strong> : ${gare.provenance}</li>
</ul>
<p>Un chauffeur privé vous évite le stress du métro ou du stationnement : prise en charge à votre domicile ou dépôt devant la gare, aide aux bagages si besoin. De plus, nous suivons le trafic en temps réel pour respecter vos horaires de train.</p>
`;

  const IMAGE_URL = "https://monchauffeurvipv3.netopsia.eu/wp-content/uploads/2026/02/vtc-gares-paris.webp";
  const imgBlock = `<figure class="wp-block-image" style="max-width: 560px; margin: 1em auto;"><img src="${IMAGE_URL}" alt="${escapeHtml(kw)} – Transfert chauffeur privé" title="${escapeHtml(kw)} – Prise en charge et dépôt en gare" loading="lazy" style="width: 100%; height: auto; display: block;" /></figure>`;

  const sectionService = `
<h2>Service ${kw}</h2>
<p>Notre offre de transport avec chauffeur privé à la ${gare.name} s'adresse aux voyageurs et aux professionnels. En effet, chaque course est assurée par un chauffeur expérimenté ; les véhicules sont climatisés et entretenus pour un trajet confortable. Vous voyagez ainsi dans les meilleures conditions, que ce soit pour rejoindre la gare avant votre train ou pour rentrer chez vous après votre arrivée.</p>

<h3>Prise en charge et dépôt</h3>
<p>Nous nous déplaçons à votre adresse (domicile, hôtel, bureau) pour vous conduire à la ${gare.name}, ou nous vous attendons à la sortie de la gare pour vous emmener à destination. La ponctualité est au cœur de notre engagement : nous adaptons les itinéraires au trafic pour respecter vos horaires. Par ailleurs, nous proposons des véhicules adaptés aux bagages.</p>

<h3>Réservation et tarification</h3>
<p>Vous réservez en ligne en quelques clics et recevez une confirmation immédiate. Le tarif est indiqué à l'avance ; un devis clair vous est envoyé avant toute validation. Ainsi, vous réservez en toute transparence.</p>
`;

  const sectionPourquoi = `
<h2>Pourquoi choisir notre ${kw}</h2>
<p>Choisir notre service, c'est opter pour un transfert serein vers ou depuis la ${gare.name}. Nous nous engageons sur la ponctualité et le confort ; notre offre répond aux besoins des particuliers comme des professionnels.</p>

<ul>
<li><strong>Chauffeurs professionnels</strong> : formés, discrets et à l'écoute.</li>
<li><strong>Ponctualité</strong> : suivi du trafic, prise en charge à l'heure convenue.</li>
<li><strong>Véhicules confortables</strong> : berlines et VTC récents, climatisés.</li>
<li><strong>Service 24h/24</strong> : réservation possible à toute heure, même pour les trains tôt le matin ou tard le soir.</li>
<li><strong>Tarifs transparents</strong> : prix fixé à la réservation.</li>
</ul>
`;

  const sectionTrajets = `
<h2>Trajets depuis ou vers la ${gare.name}</h2>
<p>Depuis la ${gare.name}, nos clients réservent notamment des transferts vers Paris, les aéroports ou d'autres gares. Nous assurons chaque course avec le même niveau de qualité.</p>

<h3>${kw} et aéroport Charles de Gaulle</h3>
<p>Vous enchaînez train et avion&nbsp;? Un chauffeur privé entre la ${gare.name} et l'aéroport Roissy-Charles de Gaulle vous fait gagner du temps. Nous adaptons l'heure de prise en charge à votre train et à votre vol. <a href="${linkCDG}">Réservez votre VTC vers l'aéroport Charles de Gaulle</a>.</p>

<h3>${kw} et aéroport d'Orly</h3>
<p>De la ${gare.name} à l'aéroport d'Orly (ou inversement), nous assurons le transfert en toute sérénité. Idéal pour les correspondances train–avion. Consultez notre <a href="${linkOrly}">page transfert VTC Orly</a>.</p>

<h3>Entre gares parisiennes</h3>
<p>Vous devez passer d'une gare à une autre (par exemple pour une correspondance)&nbsp;? Nous pouvons vous conduire de la ${gare.name} vers la Gare de Lyon, la Gare du Nord, Saint-Lazare ou toute autre gare. Réservez à l'avance pour garantir votre prise en charge.</p>
`;

  const faqItems = [
    { q: `Quel est le prix d'un transfert ${kw} ?`, a: `Le tarif dépend du trajet (adresse de prise en charge, destination) et du type de véhicule. Nous appliquons des tarifs transparents : le prix est indiqué à la réservation. Les transferts gare sont proposés sur devis.` },
    { q: `Peut-on réserver un ${kw} à l'avance ?`, a: `Oui. Vous pouvez réserver plusieurs jours ou semaines à l'avance. La réservation en ligne est disponible 24h/24. Pour les trains tôt le matin ou en soirée, nous conseillons de réserver à l'avance.` },
    { q: `Où exactement me dépose le chauffeur à la ${gare.name} ?`, a: `Nous nous arrangeons pour une prise en charge ou un dépôt au plus près de l'entrée de la gare, en fonction des accès et du trafic. Votre chauffeur vous indiquera le point de rendez-vous précis.` },
    { q: `Le service est-il disponible pour les trains très tôt le matin ?`, a: `Oui. Notre service est disponible 24h/24 et 7j/7. Que vous ayez un train à 5h ou à minuit, nous pouvons organiser votre transfert. Réservez en ligne ou par téléphone.` },
  ];

  const sectionFaq = `
<h2>FAQ ${kw}</h2>
<p>Retrouvez les réponses aux questions les plus fréquentes sur notre service de transfert à la ${gare.name}.</p>
<p><strong>${escapeHtml(faqItems[0].q)}</strong></p>
<p>${faqItems[0].a}</p>
<p><strong>${escapeHtml(faqItems[1].q)}</strong></p>
<p>${faqItems[1].a}</p>
<p><strong>${escapeHtml(faqItems[2].q)}</strong></p>
<p>${faqItems[2].a}</p>
<p><strong>${escapeHtml(faqItems[3].q)}</strong></p>
<p>${faqItems[3].a}</p>
`;

  const conclusion = `
<p>Que vous partiez de la ${gare.name} ou que vous y arriviez, notre service <strong>${kw}</strong> est à votre disposition pour tous vos transferts : domicile–gare, gare–aéroport, ou entre gares. Chauffeurs professionnels, véhicules confortables, tarifs transparents et réservation simple : nous mettons tout en œuvre pour votre sérénité. Contactez-nous et réservez en quelques clics.</p>
`;

  const internalLinksBlock = `
<p>Découvrez aussi notre <a href="${linkParis}">page VTC Paris</a>, ${otherLinks}, ainsi que nos pages <a href="${linkCDG}">VTC aéroport Charles de Gaulle</a> et <a href="${linkOrly}">VTC aéroport Orly</a>. Les 7 gares SNCF à Paris (Nord, Est, Saint-Lazare, Lyon, Austerlitz, Montparnasse, Bercy) sont accessibles avec notre flotte.</p>
`;

  const externalLinksBlock = `
<p>Pour les horaires et les destinations des trains, consultez le <a href="${extSNCF}" target="_blank" rel="noopener noreferrer">site de la SNCF</a>.</p>
`;

  const fullContent = [
    `<h1>${kw}</h1>`,
    intro.trim(),
    blocPratique.trim(),
    imgBlock,
    sectionService.trim(),
    sectionPourquoi.trim(),
    sectionTrajets.trim(),
    internalLinksBlock.trim(),
    sectionFaq.trim(),
    conclusion.trim(),
    externalLinksBlock.trim(),
  ]
    .join("\n\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  return fullContent;
}

export function getPageData(gare) {
  return {
    focusKeyphrase: focusKeyphrase(gare),
    seoTitle: focusKeyphrase(gare),
    metaDescription: metaDescription(gare),
    slug: gare.slug,
    content: generateContent(gare),
  };
}

export function getAllPagesData() {
  return GARES_PARIS.map((gare) => ({
    gare,
    ...getPageData(gare),
  }));
}
