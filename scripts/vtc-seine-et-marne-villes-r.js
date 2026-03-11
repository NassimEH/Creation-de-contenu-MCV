/**
 * Communes de Seine-et-Marne (77) dont le nom commence par R.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_SEINE_ET_MARNE_VILLES_R = [
  { name: "Rampillon", codeInsee: "77383", cp: "77370", canton: "Nangis", interco: "CC Brie Nangissienne", population: 833, lat: 48.54972, lng: 3.06583, superficie: 23.17 },
  { name: "Réau", codeInsee: "77384", cp: "77550", canton: "Combs-la-Ville", interco: "CA Grand Paris Sud Seine Essonne Sénart", population: 2045, lat: 48.61028, lng: 2.62444, superficie: 13.35 },
  { name: "Rebais", codeInsee: "77385", cp: "77510", canton: "Coulommiers", interco: "CC des Deux Morin", population: 2291, lat: 48.84750, lng: 3.23278, superficie: 11.11 },
  { name: "Recloses", codeInsee: "77386", cp: "77760", canton: "Fontainebleau", interco: "CA du Pays de Fontainebleau", population: 624, lat: 48.34639, lng: 2.64167, superficie: 9.36 },
  { name: "Remauville", codeInsee: "77387", cp: "77710", canton: "Nemours", interco: "CC Moret Seine et Loing", population: 471, lat: 48.21111, lng: 2.82556, superficie: 10.83 },
  { name: "Reuil-en-Brie", codeInsee: "77388", cp: "77260", canton: "La Ferté-sous-Jouarre", interco: "CA Coulommiers Pays de Brie", population: 808, lat: 48.96083, lng: 3.14667, superficie: 5.88 },
  { name: "La Rochette", codeInsee: "77389", cp: "77000", canton: "Melun", interco: "CA Melun Val de Seine", population: 3919, lat: 48.52306, lng: 2.65972, superficie: 5.86 },
  { name: "Roissy-en-Brie", codeInsee: "77390", cp: "77680", canton: "Pontault-Combault", interco: "CA Paris - Vallée de la Marne", population: 23521, lat: 48.79056, lng: 2.65194, superficie: 13.75 },
  { name: "Rouilly", codeInsee: "77391", cp: "77160", canton: "Provins", interco: "CC du Provinois", population: 495, lat: 48.59222, lng: 3.27806, superficie: 7.78 },
  { name: "Rouvres", codeInsee: "77392", cp: "77230", canton: "Mitry-Mory", interco: "CA Roissy Pays de France", population: 1021, lat: 49.06167, lng: 2.71806, superficie: 4.20 },
  { name: "Rozay-en-Brie", codeInsee: "77393", cp: "77540", canton: "Fontenay-Trésigny", interco: "CC Val Briard", population: 2840, lat: 48.68389, lng: 2.95917, superficie: 3.15 },
  { name: "Rubelles", codeInsee: "77394", cp: "77950", canton: "Melun", interco: "CA Melun Val de Seine", population: 3450, lat: 48.56111, lng: 2.68028, superficie: 3.92 },
  { name: "Rumont", codeInsee: "77395", cp: "77760", canton: "Fontainebleau", interco: "CC Pays de Nemours", population: 126, lat: 48.26556, lng: 2.49806, superficie: 6.60 },
  { name: "Rupéreux", codeInsee: "77396", cp: "77560", canton: "Provins", interco: "CC du Provinois", population: 102, lat: 48.63639, lng: 3.32944, superficie: 6.28 },
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
