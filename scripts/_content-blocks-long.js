/**
 * Blocs de contenu réutilisables pour atteindre 2500+ mots par page (communes).
 * Utilisé par les générateurs 77, 78, 91, 92, 93, 94, 95.
 * @param {Object} ctx - { locCourt, cp, district, gares, kw, loc, departmentName }
 */

export function getSectionVtcVsTaxi(ctx) {
  const { locCourt, cp = "", gares, kw } = ctx;
  return `
<h2>VTC et taxi : quelle différence à ${locCourt}&nbsp;?</h2>
<p>À ${locCourt}${cp}, vous pouvez opter pour un taxi traditionnel ou pour notre service de <strong>chauffeur privé VTC</strong>. La principale différence réside dans la réservation : le taxi se prend souvent à la demande (rue ou station), alors que le VTC se réserve à l'avance en ligne ou par téléphone. Ainsi, vous connaissez le prix avant le trajet, vous évitez les mauvaises surprises et vous organisez vos déplacements à l'heure près. Par ailleurs, nos véhicules sont dédiés à votre course : pas de partage avec d'autres passagers, un confort adapté aux trajets professionnels ou aux transferts aéroport avec bagages.</p>
<p>Pour les trajets vers les aéroports (Charles de Gaulle, Orly) ou les gares (${gares}), réserver un VTC plutôt qu'un taxi au dernier moment vous garantit une prise en charge à l'heure et un tarif fixe. De plus, nous assurons les départs tôt le matin et les retours en soirée, 24h/24 et 7j/7. En résumé, le VTC et le chauffeur privé conviennent particulièrement à ceux qui souhaitent planifier à l'avance et voyager dans un cadre serein.</p>
`.trim();
}

export function getSectionConseilsReservation(ctx) {
  const { locCourt, district, gares, kw } = ctx;
  return `
<h2>Conseils pour réserver votre chauffeur privé ou VTC à ${locCourt}</h2>
<p>Pour tirer le meilleur parti de notre service <strong>${kw}</strong>, voici quelques recommandations. D'abord, pour les transferts vers l'aéroport Charles de Gaulle ou Orly, réservez au moins 24 à 48 heures à l'avance, surtout en période de vacances ou les jours fériés. Ainsi, vous êtes assuré d'avoir un véhicule à l'heure souhaitée et vous évitez le stress de la dernière minute. Par ailleurs, indiquez toujours votre numéro de vol et l'heure d'embarquement : nous adaptons l'heure de prise en charge en fonction des recommandations des aéroports.</p>
<p>Pour les trajets vers les gares (${gares}), la réservation à l'avance est également conseillée aux heures de pointe. Si vous voyagez en groupe ou avec des bagages encombrants, précisez-le au moment de la réservation afin que nous vous proposions le véhicule adapté. Enfin, en cas d'imprévu (retard de train, annulation de vol), contactez-nous au plus tôt : nous faisons notre possible pour ajuster la course. Ces conseils valent que vous habitiez ${locCourt}, dans le canton de ${district} ou dans une commune voisine.</p>
`.trim();
}

export function getSectionCouverture(ctx) {
  const { locCourt, cp = "", district, gares, kw, departmentName } = ctx;
  return `
<h2>Couverture et secteur d'intervention à ${locCourt}${cp}</h2>
<p>Notre service de chauffeur privé et VTC couvre ${locCourt}${cp} et l'ensemble du canton de ${district}, ainsi que les communes environnantes du ${departmentName}. Nous nous déplaçons à votre adresse, que vous soyez en centre-ville ou dans un quartier plus excentré : pas besoin de vous rendre à un point de rendez-vous fixe. La zone de prise en charge inclut notamment les secteurs desservis par les ${gares}, les axes routiers principaux et les zones d'activité. Ainsi, que vous partiez du cœur de ${locCourt} ou d'une commune limitrophe, vous bénéficiez du même niveau de service.</p>
<p>Pour les trajets au départ ou à l'arrivée de ${locCourt}, nous assurons les courses vers Paris, vers les aéroports d'Île-de-France et vers les autres départements de la grande couronne sur demande. Notre objectif est de vous offrir une alternative fiable au taxi et aux transports en commun, avec un tarif transparent et un chauffeur professionnel à votre disposition 24h/24.</p>
`.trim();
}

export function getSectionQuandReserver(ctx) {
  const { locCourt, cp = "", kw, departmentName } = ctx;
  return `
<h2>Quand réserver un VTC ou un taxi à ${locCourt}&nbsp;?</h2>
<p>Vous pouvez réserver notre service <strong>${kw}</strong> à tout moment, y compris la veille ou le jour même pour une course dans l'heure. Toutefois, pour les transferts aéroport (Charles de Gaulle, Orly), nous conseillons de réserver au moins 24 à 48 h à l'avance, surtout tôt le matin ou en soirée. Pour les trajets vers les gares aux heures de pointe (départs en semaine, vendredi soir), anticiper permet de garantir la disponibilité d'un véhicule. En période de fêtes ou d'événements (salons, concerts), réservez plusieurs jours à l'avance.</p>
<p>Pour une course en ville ou un trajet professionnel depuis ${locCourt}, la réservation le jour même est souvent possible. Notre plateforme et notre équipe restent disponibles 24h/24 : vous pouvez donc organiser votre déplacement à tout moment, que vous préfériez un VTC, un chauffeur privé ou une alternative au taxi pour vos trajets dans votre secteur et en Île-de-France.</p>
`.trim();
}

export function getSectionTrajetsPro(ctx) {
  const { locCourt, cp = "", kw } = ctx;
  return `
<h3>Trajets professionnels et événements depuis ${locCourt}</h3>
<p>Depuis ${locCourt}${cp}, nous assurons également les déplacements professionnels (rendez-vous clients, séminaires, déplacements entre sites) et les trajets pour événements (mariages, anniversaires, soirées). Contrairement à un taxi pris à la hâte, la réservation d'un VTC ou d'un chauffeur privé permet de planifier l'heure et le lieu de prise en charge, avec un véhicule propre et discret. Par ailleurs, pour les trajets longue distance vers d'autres départements ou régions, nous pouvons vous proposer un devis sur mesure. N'hésitez pas à nous contacter pour toute demande spécifique.</p>
`.trim();
}

export function getFaqExtraItems(ctx) {
  const { kw, locCourt } = ctx;
  return [
    { q: `Quelle est la différence entre un VTC et un taxi à ${locCourt} ?`, a: `Le VTC se réserve à l'avance (en ligne ou par téléphone) et le tarif est fixé avant la course. Le taxi peut être pris à la demande (rue ou station) et le prix dépend du compteur. Avec notre service de chauffeur privé VTC, vous connaissez le coût à l'avance, vous choisissez l'heure de prise en charge et vous bénéficiez d'un véhicule dédié. Idéal pour les transferts aéroport, gare ou les trajets professionnels.` },
    { q: `Puis-je annuler ou modifier une réservation ?`, a: `Oui. Les conditions d'annulation et de modification dépendent du délai avant le trajet. Nous vous invitons à consulter nos conditions générales ou à nous contacter pour toute modification. En cas de changement d'horaire de vol ou de train, prévenez-nous au plus tôt pour que nous puissions adapter la course.` },
  ];
}
