/**
 * Communes de Seine-et-Marne (77) dont le nom commence par J.
 * Même structure que villes-a à villes-i pour les pages VTC [Ville].
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_SEINE_ET_MARNE_VILLES_J = [
  { name: "Jablines", codeInsee: "77234", cp: "77450", canton: "Lagny-sur-Marne", interco: "CA Marne et Gondoire", population: 665, lat: 48.91694, lng: 2.76194, superficie: 8.03 },
  { name: "Jaignes", codeInsee: "77235", cp: "77440", canton: "La Ferté-sous-Jouarre", interco: "CC du Pays de l'Ourcq", population: 320, lat: 48.99083, lng: 3.05361, superficie: 10.15 },
  { name: "Jaulnes", codeInsee: "77236", cp: "77480", canton: "Provins", interco: "CC Bassée-Montois", population: 346, lat: 48.41778, lng: 3.27361, superficie: 15.94 },
  { name: "Jossigny", codeInsee: "77237", cp: "77600", canton: "Torcy", interco: "CA Marne et Gondoire", population: 639, lat: 48.83805, lng: 2.75306, superficie: 9.65 },
  { name: "Jouarre", codeInsee: "77238", cp: "77640", canton: "La Ferté-sous-Jouarre", interco: "CA Coulommiers Pays de Brie", population: 4262, lat: 48.92750, lng: 3.12889, superficie: 42.45 },
  { name: "Jouy-le-Châtel", codeInsee: "77239", cp: "77970", canton: "Provins", interco: "CC du Provinois", population: 1581, lat: 48.66722, lng: 3.12972, superficie: 37.74 },
  { name: "Jouy-sur-Morin", codeInsee: "77240", cp: "77320", canton: "Coulommiers", interco: "CC des Deux Morin", population: 2221, lat: 48.79528, lng: 3.27250, superficie: 18.51 },
  { name: "Juilly", codeInsee: "77241", cp: "77230", canton: "Mitry-Mory", interco: "CA Roissy Pays de France", population: 2031, lat: 49.01250, lng: 2.70694, superficie: 7.74 },
  { name: "Jutigny", codeInsee: "77242", cp: "77650", canton: "Provins", interco: "CC Bassée-Montois", population: 542, lat: 48.49861, lng: 3.23333, superficie: 4.48 },
].map((c) => ({
  ...c,
  slug: slugFromName(c.name),
  district: c.canton,
  quartiers: ["Centre du village", "Environs", c.canton],
  monuments: ["église", "mairie", "centre du village"],
  gares: [],
  rues: ["centre du village", "axes principaux"],
  hotels: ["établissements du secteur"],
}));
