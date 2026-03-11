/**
 * Communes de Seine-et-Marne (77) dont le nom commence par D.
 * Même structure que villes-a / villes-b / villes-c pour les pages VTC [Ville].
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_SEINE_ET_MARNE_VILLES_D = [
  { name: "Dagny", codeInsee: "77151", cp: "77320", canton: "Coulommiers", interco: "CA Coulommiers Pays de Brie", population: 293, lat: 48.71778, lng: 3.17278, superficie: 7.83 },
  { name: "Dammarie-les-Lys", codeInsee: "77152", cp: "77190", canton: "Saint-Fargeau-Ponthierry", interco: "CA Melun Val de Seine", population: 23252, lat: 48.52722, lng: 2.64000, superficie: 10.36 },
  { name: "Dammartin-en-Goële", codeInsee: "77153", cp: "77230", canton: "Mitry-Mory", interco: "CA Roissy Pays de France", population: 11508, lat: 49.05333, lng: 2.67944, superficie: 9.08 },
  { name: "Dammartin-sur-Tigeaux", codeInsee: "77154", cp: "77163", canton: "Fontenay-Trésigny", interco: "CA Coulommiers Pays de Brie", population: 1268, lat: 48.81750, lng: 2.92333, superficie: 9.05 },
  { name: "Dampmart", codeInsee: "77155", cp: "77400", canton: "Lagny-sur-Marne", interco: "CA Marne et Gondoire", population: 3655, lat: 48.88667, lng: 2.73583, superficie: 5.93 },
  { name: "Darvault", codeInsee: "77156", cp: "77140", canton: "Nemours", interco: "CC Pays de Nemours", population: 946, lat: 48.27056, lng: 2.73611, superficie: 7.80 },
  { name: "Dhuisy", codeInsee: "77157", cp: "77440", canton: "La Ferté-sous-Jouarre", interco: "CC du Pays de l'Ourcq", population: 330, lat: 49.03944, lng: 3.16139, superficie: 8.06 },
  { name: "Diant", codeInsee: "77158", cp: "77940", canton: "Nemours", interco: "CC Pays de Montereau", population: 196, lat: 48.28083, lng: 2.99306, superficie: 11.14 },
  { name: "Donnemarie-Dontilly", codeInsee: "77159", cp: "77520", canton: "Provins", interco: "CC Bassée-Montois", population: 2726, lat: 48.47583, lng: 3.12722, superficie: 12.06 },
  { name: "Dormelles", codeInsee: "77161", cp: "77130", canton: "Nemours", interco: "CC Moret Seine et Loing", population: 803, lat: 48.31583, lng: 2.90139, superficie: 12.86 },
  { name: "Doue", codeInsee: "77162", cp: "77510", canton: "Coulommiers", interco: "CC des Deux Morin", population: 1119, lat: 48.86555, lng: 3.16472, superficie: 20.04 },
  { name: "Douy-la-Ramée", codeInsee: "77163", cp: "77139", canton: "La Ferté-sous-Jouarre", interco: "CC du Pays de l'Ourcq", population: 388, lat: 49.06611, lng: 2.88250, superficie: 7.92 },
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
