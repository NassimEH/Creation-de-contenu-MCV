/**
 * Contenu SEO pour la page "Application mobile" / "L'app mobile" (réservation VTC via l'app MonChauffeurVIP).
 * Corrige les retours Yoast : keyphrase, méta, images, liens internes/externes, longueur du texte.
 */

const SITE_SLUG_BASE = "/nos-secteurs";
const FOCUS_KEYPHRASE = "application VTC mobile";
const SEO_TITLE = "Application VTC mobile | Réservation chauffeur privé – MonChauffeurVIP";
const META_DESCRIPTION = "Application VTC mobile : réservez votre chauffeur privé depuis votre smartphone. iOS et Android. Rapide et sécurisé. MonChauffeurVIP.";

const IMAGE_URL = "https://monchauffeurvipv3.netopsia.eu/wp-content/uploads/2026/02/Image-dillustration-MCV-pour-LK-et-reseaux-sociaux.png";
const IMAGE_ALT = "Application VTC mobile MonChauffeurVIP – Réservation chauffeur privé sur smartphone";

/** Slug recommandé pour que l’expression clé apparaisse dans l’URL (Yoast). */
export const APP_MOBILE_SLUG = "application-vtc-mobile";

function getContent() {
  return `
<h1>Application VTC mobile : réservez votre chauffeur privé en quelques clics</h1>

<p><strong>Application VTC mobile</strong> : vous recherchez un chauffeur VTC premium fiable et disponible 24h/24&nbsp;? Réservez directement depuis votre téléphone avec l'application MonChauffeurVIP. Profitez d'un trajet confortable, sécurisé et rapide, où que vous soyez en Île-de-France, en quelques clics seulement. Votre chauffeur privé est à portée de main.</p>

<p>Que vous soyez sur iPhone ou Android, notre application VTC mobile vous permet de choisir votre adresse de prise en charge et votre destination, de voir le tarif à l'avance et de suivre l'arrivée de votre chauffeur en temps réel. Par ailleurs, nous couvrons l'ensemble de nos secteurs : Paris, aéroports Charles de Gaulle et Orly, gares parisiennes et grande couronne. Ainsi, vous bénéficiez du même service haut de gamme partout où vous allez.</p>

<figure class="wp-block-image" style="max-width: 560px; margin: 1em auto;"><img src="${IMAGE_URL}" alt="${IMAGE_ALT}" title="Application VTC mobile – MonChauffeurVIP" loading="lazy" style="width: 100%; height: auto; display: block;" /></figure>

<h2>Disponible sur iPhone et Android</h2>

<p>Profitez de l'expérience MonChauffeurVIP directement sur votre iPhone grâce à notre application iOS. Réservez votre VTC haut de gamme en quelques clics, suivez l'arrivée de votre chauffeur en temps réel et bénéficiez d'un service sécurisé, rapide et confortable. L'application MonChauffeurVIP iOS rend vos trajets privés simples, efficaces et toujours à portée de main.</p>

<p>Sur Android, la même application VTC mobile est disponible : téléchargez-la depuis le <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">Google Play Store</a> et réservez votre chauffeur en toute simplicité. Que vous ayez besoin d'un transfert aéroport, d'une course en ville ou d'un trajet entre deux adresses dans nos secteurs, tout se fait depuis votre smartphone. De plus, le prix est indiqué avant validation : pas de mauvaise surprise à l'arrivée.</p>

<h3>Pourquoi utiliser notre application VTC mobile</h3>

<p>Choisir notre application VTC mobile, c'est gagner du temps et de la sérénité. En effet, vous réservez à tout moment, 24h/24 et 7j/7, sans avoir à appeler. Vous recevez une confirmation immédiate et pouvez joindre votre chauffeur le jour du trajet. Par ailleurs, la géolocalisation vous permet de suivre son arrivée en temps réel. Ainsi, plus besoin de vous demander où il est : vous savez exactement quand il sera là.</p>

<p>Notre objectif est d'offrir une expérience de trajet confortable, sécurisée et ponctuelle. Avec l'application VTC mobile MonChauffeurVIP, vous avez accès au même service premium que sur notre site : chauffeurs professionnels, véhicules récents et climatisés, tarifs transparents. Que vous soyez à Paris, en proche banlieue ou en grande couronne, réservez en quelques secondes et voyagez l'esprit tranquille.</p>

<h3>Réserver en quelques clics</h3>

<p>La réservation est simple : ouvrez l'application, indiquez votre adresse de prise en charge (ou utilisez votre position), saisissez la destination, choisissez la date et l'heure si besoin, puis validez. Vous voyez le tarif avant de confirmer. Pour les transferts vers l'<a href="${SITE_SLUG_BASE}/vtc-aeroport-charles-de-gaulle/">aéroport Charles de Gaulle</a> ou l'<a href="${SITE_SLUG_BASE}/vtc-aeroport-orly/">aéroport d'Orly</a>, ou vers les gares comme la <a href="${SITE_SLUG_BASE}/vtc-gare-du-nord/">Gare du Nord</a> ou la <a href="${SITE_SLUG_BASE}/vtc-gare-de-lyon/">Gare de Lyon</a>, l'application vous guide comme pour toute autre course. Découvrez aussi nos <a href="${SITE_SLUG_BASE}/">secteurs d'intervention</a> et notre <a href="${SITE_SLUG_BASE}/vtc-paris/">service VTC à Paris</a>.</p>

<p>Téléchargez l'application MonChauffeurVIP sur l'<a href="https://www.apple.com/fr/app-store/" target="_blank" rel="noopener noreferrer">App Store</a> (iPhone et iPad) ou sur le Google Play Store (Android). Une fois l'application VTC mobile installée, vous pouvez réserver votre premier trajet en quelques clics. Votre chauffeur privé premium n'a jamais été aussi proche.</p>
`.trim().replace(/\n{3,}/g, "\n\n");
}

export function getAppMobilePageData() {
  return {
    focusKeyphrase: FOCUS_KEYPHRASE,
    seoTitle: SEO_TITLE,
    metaDescription: META_DESCRIPTION,
    slug: APP_MOBILE_SLUG,
    content: getContent(),
  };
}
