/**
 * Générateur de contenu SEO pour les pages VTC des communes de l'Essonne (91).
 * Mêmes règles que 77/78 : expression clé, méta 140–156, une image, H2/H3, tournures naturelles, intro personnalisée, code postal.
 */

import { VTC_ESSONNE_VILLES_A } from "./vtc-essonne-villes-a.js";
import { VTC_ESSONNE_VILLES_B } from "./vtc-essonne-villes-b.js";
import { VTC_ESSONNE_VILLES_C } from "./vtc-essonne-villes-c.js";
import { VTC_ESSONNE_VILLES_D } from "./vtc-essonne-villes-d.js";
import { VTC_ESSONNE_VILLES_E } from "./vtc-essonne-villes-e.js";
import { VTC_ESSONNE_VILLES_F } from "./vtc-essonne-villes-f.js";
import { VTC_ESSONNE_VILLES_G } from "./vtc-essonne-villes-g.js";
import { VTC_ESSONNE_VILLES_I } from "./vtc-essonne-villes-i.js";
import { VTC_ESSONNE_VILLES_J } from "./vtc-essonne-villes-j.js";
import { VTC_ESSONNE_VILLES_L } from "./vtc-essonne-villes-l.js";
import { VTC_ESSONNE_VILLES_M } from "./vtc-essonne-villes-m.js";
import { VTC_ESSONNE_VILLES_N } from "./vtc-essonne-villes-n.js";
import { VTC_ESSONNE_VILLES_O } from "./vtc-essonne-villes-o.js";
import { VTC_ESSONNE_VILLES_P } from "./vtc-essonne-villes-p.js";
import { VTC_ESSONNE_VILLES_Q } from "./vtc-essonne-villes-q.js";
import { VTC_ESSONNE_VILLES_R } from "./vtc-essonne-villes-r.js";
import { VTC_ESSONNE_VILLES_S } from "./vtc-essonne-villes-s.js";
import { VTC_ESSONNE_VILLES_T } from "./vtc-essonne-villes-t.js";
import { VTC_ESSONNE_VILLES_U } from "./vtc-essonne-villes-u.js";
import { VTC_ESSONNE_VILLES_V } from "./vtc-essonne-villes-v.js";
import { VTC_ESSONNE_VILLES_W } from "./vtc-essonne-villes-w.js";
import { VTC_ESSONNE_VILLES_Y } from "./vtc-essonne-villes-y.js";

const ALL_COMMUNES = [
  ...VTC_ESSONNE_VILLES_A,
  ...VTC_ESSONNE_VILLES_B,
  ...VTC_ESSONNE_VILLES_C,
  ...VTC_ESSONNE_VILLES_D,
  ...VTC_ESSONNE_VILLES_E,
  ...VTC_ESSONNE_VILLES_F,
  ...VTC_ESSONNE_VILLES_G,
  ...VTC_ESSONNE_VILLES_I,
  ...VTC_ESSONNE_VILLES_J,
  ...VTC_ESSONNE_VILLES_L,
  ...VTC_ESSONNE_VILLES_M,
  ...VTC_ESSONNE_VILLES_N,
  ...VTC_ESSONNE_VILLES_O,
  ...VTC_ESSONNE_VILLES_P,
  ...VTC_ESSONNE_VILLES_Q,
  ...VTC_ESSONNE_VILLES_R,
  ...VTC_ESSONNE_VILLES_S,
  ...VTC_ESSONNE_VILLES_T,
  ...VTC_ESSONNE_VILLES_U,
  ...VTC_ESSONNE_VILLES_V,
  ...VTC_ESSONNE_VILLES_W,
  ...VTC_ESSONNE_VILLES_Y,
];

const SITE_SLUG_BASE = "/nos-secteurs";

function escapeHtml(s) {
  if (!s) return "";
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function focusKeyphrase(commune) {
  return `Chauffeur privé VTC ${commune.name}`;
}

function seoTitle(commune) {
  return focusKeyphrase(commune);
}

function metaDescription(commune) {
  const kw = focusKeyphrase(commune);
  let text = `${kw} : chauffeur privé à ${commune.name} (${commune.cp || "91"}), transferts aéroports et gares. Réservation simple, 24h/24.`;
  if (text.length < 140) text += " Réservez en quelques clics.";
  if (text.length > 156) text = text.slice(0, 153) + "...";
  return text;
}

function otherCommunesForLinks(commune) {
  return ALL_COMMUNES.filter((c) => c.slug !== commune.slug).slice(0, 2);
}

/** Gares à mentionner selon le canton / l'interco (Essonne 91). */
function getGaresLabel(commune) {
  const c = (commune.canton || "").toLowerCase();
  const i = (commune.interco || "").toLowerCase();
  if (c.includes("etampes") || c.includes("étampes") || i.includes("etampois")) return "gares d'Étampes ou de Paris";
  if (c.includes("dourdan") || i.includes("limours") || i.includes("dourdannais")) return "gares de Dourdan ou de Paris";
  if (c.includes("arpajon") || i.includes("coeur d'essonne")) return "gares d'Arpajon ou de Paris";
  if (c.includes("athis-mons") || i.includes("grand paris")) return "gares d'Athis-Mons ou de Paris";
  if (c.includes("mennecy") || i.includes("val d'essonne") || i.includes("2 vallées")) return "gares de Mennecy ou de Corbeil";
  if (c.includes("longjumeau") || i.includes("paris-saclay")) return "gares de Longjumeau ou de Paris";
  if (c.includes("gif") || i.includes("versailles grand parc")) return "gares de Gif-sur-Yvette ou de Paris";
  if (c.includes("ris-orangis") || i.includes("grand paris sud") || i.includes("sénart")) return "gares de Ris-Orangis ou de Paris";
  if (c.includes("yerres")) return "gares d'Yerres ou de Paris";
  if (c.includes("épinay")) return "gares de Brunoy ou de Paris";
  if (i.includes("yerres")) return "gares de Brunoy ou de Paris";
  if (c.includes("brétigny")) return "gares de Brétigny-sur-Orge ou de Paris";
  if (c.includes("brunoy")) return "gares de Brunoy ou de Paris";
  if (c.includes("corbeil")) return "gares de Corbeil-Essonnes ou de Paris";
  if (c.includes("vigneux")) return "gares de Vigneux ou de Paris";
  if (c.includes("draveil")) return "gares de Draveil ou de Paris";
  if (c.includes("massy")) return "gares de Massy ou de Paris";
  if (c.includes("ulis")) return "gares des Ulis ou de Paris";
  if (c.includes("viry")) return "gares de Viry-Châtillon ou de Paris";
  if (c.includes("evry") || c.includes("évry")) return "gares d'Évry ou de Paris";
  if (c.includes("palaiseau")) return "gares de Palaiseau ou de Paris";
  if (c.includes("savigny") && c.includes("orge")) return "gares de Savigny-sur-Orge ou de Paris";
  if (c.includes("sainte-geneviève") || c.includes("geneviève") || c.includes("geneve")) return "gares de Sainte-Geneviève-des-Bois ou de Paris";
  if (c.includes("montgeron")) return "gares de Montgeron ou de Paris";
  return "gares de Paris ou de Corbeil";
}

function getZoneIntro(commune) {
  const name = commune.name;
  const canton = commune.canton || "";
  const pop = commune.population || 0;
  if (pop >= 5000) return `du centre de ${name} ou des communes voisines`;
  if (pop >= 1000) return `de ${name} ou d'une commune alentour du canton de ${canton}`;
  return `de ${name} ou des environs du canton de ${canton}`;
}

function generateContent(commune) {
  const kw = focusKeyphrase(commune);
  const cp = commune.cp ? ` (${commune.cp})` : "";
  const loc = `à ${commune.name}${cp}`;
  const locCourt = commune.name;
  const gares = getGaresLabel(commune);
  const zoneIntro = getZoneIntro(commune);
  const district = commune.canton;

  const linkParis = `${SITE_SLUG_BASE}/vtc-paris/`;
  const linkCDG = `${SITE_SLUG_BASE}/vtc-aeroport-charles-de-gaulle/`;
  const linkOrly = `${SITE_SLUG_BASE}/vtc-aeroport-orly/`;
  const linkGareNord = `${SITE_SLUG_BASE}/vtc-gare-du-nord/`;
  const others = otherCommunesForLinks(commune);

  const extParis = "https://www.paris.fr";
  const extCDG = "https://www.parisaeroport.fr";

  const intro = `
<p><strong>${kw}</strong> : vous cherchez un chauffeur privé fiable et disponible à toute heure&nbsp;? Nous vous accompagnons ${loc} et dans le canton de ${district} pour vos déplacements professionnels, transferts aéroport ou gare, et trajets en Île-de-France. Que vous partiez ${zoneIntro}, notre flotte et nos chauffeurs garantissent ponctualité et confort. Par ailleurs, nous nous adaptons à vos horaires et à votre destination, avec une réservation simple et des tarifs transparents. En optant pour un VTC ou un chauffeur privé plutôt qu'un taxi classique, vous connaissez le tarif à l'avance et réservez à la date et à l'heure qui vous conviennent.</p>
<p>Le service est opérationnel 24h/24 et 7j/7, avec un suivi en temps réel pour chaque course. Nous mettons tout en œuvre pour un trajet serein, que ce soit vers l'aéroport Charles de Gaulle, Orly, les ${gares} ou tout autre point. Côté prix, tout est indiqué à l'avance : ainsi, vous pouvez réserver en toute confiance. Que vous ayez besoin d'un transfert tôt le matin, en soirée ou en pleine nuit, notre équipe est à votre disposition.</p>
`;

  const IMAGE_URL = "https://monchauffeurvipv3.netopsia.eu/wp-content/uploads/2026/02/vtc-essonne.webp";
  const imgBlock = `<figure class="wp-block-image" style="max-width: 560px; margin: 1em auto;"><img src="${IMAGE_URL}" alt="${escapeHtml(kw)} – Chauffeur privé et véhicule confortable" title="${escapeHtml(kw)} – Service de transport avec chauffeur" loading="lazy" style="width: 100%; height: auto; display: block;" /></figure>`;

  const sectionAlternativeTaxi = `
<h2>Alternative taxi à ${locCourt}${cp}</h2>
<p>Vous cherchez une <strong>alternative taxi</strong> à ${locCourt}${cp}&nbsp;? Notre service <strong>${kw}</strong> associe le confort d'un chauffeur privé et la simplicité d'un VTC, avec une réservation en ligne et un tarif annoncé à l'avance. Ainsi, vous évitez les incertitudes et vous planifiez vos trajets en toute sérénité. Contrairement à un taxi pris sur le pas de la porte, le VTC se réserve à l'avance : vous choisissez l'heure et le lieu de prise en charge, et le prix affiché ne varie pas sauf modification du trajet. De plus, vous bénéficiez d'un suivi en temps réel et d'un véhicule dédié, souvent plus confortable qu'un taxi pour les trajets longs ou professionnels.</p>
`;

  const sectionService = `
<h2>Service ${kw}</h2>
<p>Notre offre de transport avec chauffeur privé à ${locCourt}${cp} et dans le secteur de ${district} s'adresse aux particuliers comme aux professionnels. En effet, chaque course est assurée par un chauffeur expérimenté, formé aux bonnes pratiques du service VTC ; les véhicules sont régulièrement entretenus et climatisés pour un trajet confortable. C'est aussi une option pertinente en complément d'un taxi, notamment si vous souhaitez réserver à l'avance. Vous voyagez ainsi dans les meilleures conditions.</p>

<h3>Ponctualité et couverture de la zone</h3>
<p>La ponctualité est au cœur de notre engagement : nous suivons le trafic en temps réel et adaptons les itinéraires pour respecter vos horaires, notamment pour les transferts aéroports ou gares. Que vous habitiez ou travailliez à ${locCourt}, dans le canton de ${district} ou aux environs, nous nous déplaçons à votre adresse. De plus, nous couvrons aussi les communes voisines.</p>

<h3>Réservation et tarification</h3>
<p>Vous réservez en ligne en quelques clics, recevez une confirmation immédiate et pouvez joindre directement votre chauffeur le jour du trajet. Côté tarif, pas de mauvaise surprise : le prix est indiqué à l'avance et un devis clair vous est envoyé avant toute validation, pour que vous puissiez réserver en toute transparence. Que vous préfériez un VTC, un chauffeur privé ou une alternative au taxi pour vos déplacements à ${locCourt}, la même qualité de service s'applique.</p>
`;

  const sectionVtcVsTaxi = `
<h2>VTC et taxi : quelle différence à ${locCourt}&nbsp;?</h2>
<p>À ${locCourt}${cp}, vous pouvez opter pour un taxi traditionnel ou pour notre service de <strong>chauffeur privé VTC</strong>. La principale différence réside dans la réservation : le taxi se prend souvent à la demande (rue ou station), alors que le VTC se réserve à l'avance en ligne ou par téléphone. Ainsi, vous connaissez le prix avant le trajet, vous évitez les mauvaises surprises et vous organisez vos déplacements à l'heure près. Par ailleurs, nos véhicules sont dédiés à votre course : pas de partage avec d'autres passagers, un confort adapté aux trajets professionnels ou aux transferts aéroport avec bagages.</p>
<p>Pour les trajets vers les aéroports (Charles de Gaulle, Orly) ou les gares (${gares}), réserver un VTC plutôt qu'un taxi au dernier moment vous garantit une prise en charge à l'heure et un tarif fixe. De plus, nous assurons les départs tôt le matin et les retours en soirée, 24h/24 et 7j/7. En résumé, le VTC et le chauffeur privé conviennent particulièrement à ceux qui souhaitent planifier à l'avance et voyager dans un cadre serein.</p>
`;

  const sectionPourquoi = `
<h2>Pourquoi choisir notre ${kw}</h2>
<p>Choisir notre service, c'est opter pour un transport privé de qualité, adapté aux déplacements dans l'Essonne et en Île-de-France. En effet, nous nous engageons sur la ponctualité et le confort ; de plus, notre offre répond aux besoins des particuliers comme des professionnels.</p>

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
<p>Que vous ayez besoin d'un transfert aéroport, d'un transfert gare ou d'une course depuis ${locCourt}, notre équipe est à votre disposition. N'hésitez pas à nous contacter pour vous accompagner en toute sérénité : vous bénéficiez d'un interlocuteur unique pour tous vos déplacements.</p>
`;

  const sectionTrajets = `
<h2>Trajets ${kw} les plus demandés</h2>
<p>Depuis ${locCourt} et le canton de ${district}, nos clients réservent notamment les trajets suivants. Par ailleurs, nous assurons chaque course avec le même niveau de qualité et de ponctualité, et tous nos transferts sont effectués avec le même soin.</p>

<h3>${kw} vers l'aéroport Charles de Gaulle</h3>
<p>Le transfert vers l'aéroport Paris-Charles de Gaulle (Roissy) depuis ${locCourt} est l'un de nos trajets les plus réservés. La distance depuis l'Essonne varie selon votre commune ; le temps de trajet dépend du trafic. Un chauffeur privé vous évite le stress des transports en commun : prise en charge à votre adresse, aide aux bagages et trajet direct jusqu'au terminal.</p>
<p><a href="${linkCDG}">Réservez votre VTC vers l'aéroport Charles de Gaulle</a> en quelques clics. Toutefois, nous vous conseillons de prévoir une marge en cas de trafic dense.</p>

<h3>${kw} vers l'aéroport d'Orly</h3>
<p>L'aéroport d'Orly est accessible en transport avec chauffeur depuis ${locCourt}. Ainsi, nous adaptons l'heure de prise en charge à votre vol et assurons un suivi en temps réel. D'ailleurs, ce transfert est idéal pour les départs tôt le matin ou les retours en soirée.</p>
<p>Consultez notre <a href="${linkOrly}">page dédiée au transfert VTC Orly</a> pour plus d'informations, et n'hésitez pas à nous appeler pour un devis personnalisé.</p>

<h3>Transfert vers la Gare du Nord</h3>
<p>La Gare du Nord est un point de passage obligé pour de nombreux déplacements (TGV, Eurostar). Un chauffeur privé jusqu'à la Gare du Nord vous garantit une arrivée à l'heure, sans vous soucier du stationnement. Par ailleurs, nous proposons des véhicules adaptés aux bagages.</p>
<p>Découvrez notre <a href="${linkGareNord}">service VTC Gare du Nord</a> et réservez votre transfert en avance. Nous assurons aussi les départs tôt le matin pour les premiers trains.</p>

<h3>Trajets professionnels et événements depuis ${locCourt}</h3>
<p>Depuis ${locCourt}${cp}, nous assurons également les déplacements professionnels (rendez-vous clients, séminaires, déplacements entre sites) et les trajets pour événements (mariages, anniversaires, soirées). Contrairement à un taxi pris à la hâte, la réservation d'un VTC ou d'un chauffeur privé permet de planifier l'heure et le lieu de prise en charge, avec un véhicule propre et discret. Par ailleurs, pour les trajets longue distance vers d'autres départements ou régions, nous pouvons vous proposer un devis sur mesure. N'hésitez pas à nous contacter pour toute demande spécifique.</p>
`;

  const sectionDeplacements = `
<h2>${kw} pour tous vos déplacements</h2>
<p>Notre service couvre l'ensemble de vos besoins en transport privé, que vous soyez particulier ou professionnel. Ainsi, nous nous adaptons à chaque situation : déplacements du quotidien comme trajets occasionnels. En outre, que vous soyez à ${locCourt} ou ailleurs en Île-de-France, la même qualité est au rendez-vous.</p>

<h3>Types de missions</h3>
<p>Voici les usages les plus fréquents de notre flotte :</p>
<ul>
<li><strong>Transport professionnel</strong> : déplacements entre rendez-vous, accueil de clients, gares et aéroports.</li>
<li><strong>Tourisme</strong> : visites, déplacements entre hôtels et sites culturels.</li>
<li><strong>Transferts hôtels</strong> : prise en charge ou dépôt à l'hôtel, avec ou sans bagages.</li>
<li><strong>Événements privés</strong> : mariages, séminaires, soirées ; véhicules soignés et chauffeurs discrets.</li>
<li><strong>Trajets longue distance</strong> : déplacements vers d'autres villes ou régions sur demande.</li>
</ul>

<h3>Disponibilité et réservation</h3>
<p>Que vous résidiez à ${locCourt} ou dans une commune voisine, notre flotte est disponible. De plus, vous pouvez réserver dès maintenant pour un trajet confortable et sécurisé ; nous restons joignables 24h/24. Par conséquent, vous n'avez plus à vous soucier de l'organisation de vos déplacements.</p>
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
<p>Pour les transferts aéroport ou gare, nous recommandons de réserver à l'avance. De plus, vous pouvez modifier ou annuler selon nos conditions générales. Réservez dès maintenant pour profiter d'un trajet confortable ; en cas de question, notre équipe reste à votre écoute.</p>
`;

  const sectionConseilsReservation = `
<h2>Conseils pour réserver votre chauffeur privé ou VTC à ${locCourt}</h2>
<p>Pour tirer le meilleur parti de notre service <strong>${kw}</strong>, voici quelques recommandations. D'abord, pour les transferts vers l'aéroport Charles de Gaulle ou Orly, réservez au moins 24 à 48 heures à l'avance, surtout en période de vacances ou les jours fériés. Ainsi, vous êtes assuré d'avoir un véhicule à l'heure souhaitée et vous évitez le stress de la dernière minute. Par ailleurs, indiquez toujours votre numéro de vol et l'heure d'embarquement : nous adaptons l'heure de prise en charge en fonction des recommandations des aéroports.</p>
<p>Pour les trajets vers les gares (${gares}), la réservation à l'avance est également conseillée aux heures de pointe. Si vous voyagez en groupe ou avec des bagages encombrants, précisez-le au moment de la réservation afin que nous vous proposions le véhicule adapté. Enfin, en cas d'imprévu (retard de train, annulation de vol), contactez-nous au plus tôt : nous faisons notre possible pour ajuster la course. Ces conseils valent que vous habitiez ${locCourt}, dans le canton de ${district} ou dans une commune voisine de l'Essonne.</p>
`;

  const sectionCouverture = `
<h2>Couverture et secteur d'intervention à ${locCourt}${cp}</h2>
<p>Notre service de chauffeur privé et VTC couvre ${locCourt}${cp} et l'ensemble du canton de ${district}, ainsi que les communes environnantes de l'Essonne. Nous nous déplaçons à votre adresse, que vous soyez en centre-ville ou dans un quartier plus excentré : pas besoin de vous rendre à un point de rendez-vous fixe. La zone de prise en charge inclut notamment les secteurs desservis par les ${gares}, les axes routiers principaux et les zones d'activité. Ainsi, que vous partiez du cœur de ${locCourt} ou d'une commune limitrophe, vous bénéficiez du même niveau de service.</p>
<p>Pour les trajets au départ ou à l'arrivée de ${locCourt}, nous assurons les courses vers Paris, vers les aéroports d'Île-de-France et vers les autres départements de la grande couronne (Yvelines, Hauts-de-Seine, Val-de-Marne, etc.) sur demande. Notre objectif est de vous offrir une alternative fiable au taxi et aux transports en commun, avec un tarif transparent et un chauffeur professionnel à votre disposition 24h/24.</p>
`;

  const sectionQuandReserver = `
<h2>Quand réserver un VTC ou un taxi à ${locCourt}&nbsp;?</h2>
<p>Vous pouvez réserver notre service <strong>${kw}</strong> à tout moment, y compris la veille ou le jour même pour une course dans l'heure. Toutefois, pour les transferts aéroport (Charles de Gaulle, Orly), nous conseillons de réserver au moins 24 à 48 h à l'avance, surtout tôt le matin ou en soirée. Pour les trajets vers les gares aux heures de pointe (départs en semaine, vendredi soir), anticiper permet de garantir la disponibilité d'un véhicule. En période de fêtes ou d'événements (salons, concerts), réservez plusieurs jours à l'avance.</p>
<p>Pour une course en ville ou un trajet professionnel depuis ${locCourt}, la réservation le jour même est souvent possible. Notre plateforme et notre équipe restent disponibles 24h/24 : vous pouvez donc organiser votre déplacement à tout moment, que vous préfériez un VTC, un chauffeur privé ou une alternative au taxi pour vos trajets dans l'Essonne et en Île-de-France.</p>
`;

  const faqItems = [
    { q: `Quel est le prix d'un ${kw} ?`, a: `Le tarif dépend du trajet (distance, durée) et du type de véhicule. Nous appliquons des tarifs transparents : le prix est indiqué à la réservation et ne change pas sauf modification de la course. Par ailleurs, les transferts vers les aéroports et les gares sont proposés à prix fixe sur devis. Vous évitez ainsi les surprises que l'on peut avoir avec un taxi en heure de pointe.` },
    { q: `Peut-on réserver un ${kw} à l'avance ?`, a: `Oui. Vous pouvez réserver plusieurs jours ou semaines à l'avance. La réservation en ligne est disponible 24h/24 et vous recevez une confirmation immédiate. Pour les transferts aéroport et les jours fériés, nous conseillons toutefois de réserver à l'avance.` },
    { q: `Les chauffeurs sont-ils disponibles 24h/24 ?`, a: `Oui. Notre service est disponible 24h/24 et 7j/7. Ainsi, que vous ayez un vol tôt le matin ou un train en soirée, nous pouvons organiser votre prise en charge. Réservez en ligne ou par téléphone à tout moment.` },
    { q: `Faites-vous les transferts vers les aéroports ?`, a: `Oui. Nous assurons les transferts vers l'aéroport Paris-Charles de Gaulle (Roissy) et l'aéroport d'Orly : prise en charge à votre adresse, aide aux bagages et trajet direct jusqu'au terminal. D'ailleurs, ce service est idéal pour éviter le stress et les retards.` },
    { q: `Quels véhicules sont disponibles pour un ${kw} ?`, a: `Nous proposons des berlines et VTC confortables, climatisés et adaptés à la ville et aux trajets aéroport. De même, selon vos besoins (nombre de passagers, bagages), nous pouvons vous orienter vers le véhicule le plus adapté. Tous nos véhicules sont récents et entretenus.` },
    { q: `Quelle est la différence entre un VTC et un taxi à ${locCourt} ?`, a: `Le VTC se réserve à l'avance (en ligne ou par téléphone) et le tarif est fixé avant la course. Le taxi peut être pris à la demande (rue ou station) et le prix dépend du compteur. Avec notre service de chauffeur privé VTC, vous connaissez le coût à l'avance, vous choisissez l'heure de prise en charge et vous bénéficiez d'un véhicule dédié. Idéal pour les transferts aéroport, gare ou les trajets professionnels.` },
    { q: `Puis-je annuler ou modifier une réservation ?`, a: `Oui. Les conditions d'annulation et de modification dépendent du délai avant le trajet. Nous vous invitons à consulter nos conditions générales ou à nous contacter pour toute modification. En cas de changement d'horaire de vol ou de train, prévenez-nous au plus tôt pour que nous puissions adapter la course.` },
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
<p>Que vous habitiez ou travailliez ${loc}, notre service <strong>${kw}</strong> est à votre disposition pour tous vos déplacements : transferts aéroports (Charles de Gaulle, Orly), transferts gare (Gare du Nord, Gare de Lyon…), courses en ville ou trajets longue distance. En résumé, chauffeurs professionnels, véhicules confortables, tarifs transparents et réservation simple : nous mettons tout en œuvre pour votre sérénité. Que vous préfériez un VTC, un chauffeur privé ou une alternative au taxi à ${locCourt}${cp}, la même qualité de service s'applique. Par conséquent, contactez votre chauffeur privé et réservez en quelques clics ; nous restons à votre écoute pour toute demande.</p>
`;

  const otherLinks = others.map((c) => `<a href="${SITE_SLUG_BASE}/${c.slug}/">VTC ${c.name}</a>`).join(", ");
  const internalLinksBlock = `
<p>Découvrez aussi notre <a href="${linkParis}">page VTC Paris</a>, ${otherLinks}, ainsi que nos pages dédiées aux <a href="${linkCDG}">transferts VTC aéroport Charles de Gaulle</a> et <a href="${linkOrly}">transferts VTC aéroport Orly</a>. De plus, n'hésitez pas à parcourir notre site pour trouver la formule adaptée à votre zone.</p>
`;

  const externalLinksBlock = `
<p>Pour en savoir plus sur la région, consultez le <a href="${extParis}" target="_blank" rel="noopener noreferrer">site officiel de la Ville de Paris</a>. Par ailleurs, pour les horaires et terminaux des aéroports, voir le <a href="${extCDG}" target="_blank" rel="noopener noreferrer">site de Paris Aéroport</a>.</p>
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
    sectionConseilsReservation.trim(),
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

export function getPageData(commune) {
  return {
    focusKeyphrase: focusKeyphrase(commune),
    seoTitle: seoTitle(commune),
    metaDescription: metaDescription(commune),
    slug: commune.slug,
    content: generateContent(commune),
  };
}

export function getAllPagesData() {
  return ALL_COMMUNES.map((commune) => ({
    commune,
    ...getPageData(commune),
  }));
}
