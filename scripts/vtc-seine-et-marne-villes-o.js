/**
 * Communes de Seine-et-Marne (77) dont le nom commence par O.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_SEINE_ET_MARNE_VILLES_O = [
  { name: "Obsonville", codeInsee: "77342", cp: "77890", canton: "Nemours", interco: "CC Gâtinais Val de Loing", population: 120, lat: 48.21667, lng: 2.56111, superficie: 7.03 },
  { name: "Ocquerre", codeInsee: "77343", cp: "77440", canton: "La Ferté-sous-Jouarre", interco: "CC du Pays de l'Ourcq", population: 376, lat: 49.03750, lng: 3.05944, superficie: 10.07 },
  { name: "Oissery", codeInsee: "77344", cp: "77178", canton: "Claye-Souilly", interco: "CC Plaines et Monts de France", population: 2488, lat: 49.06972, lng: 2.81889, superficie: 15.17 },
  { name: "Orly-sur-Morin", codeInsee: "77345", cp: "77750", canton: "Coulommiers", interco: "CC des Deux Morin", population: 660, lat: 48.90445, lng: 3.23028, superficie: 5.90 },
  { name: "Les Ormes-sur-Voulzie", codeInsee: "77347", cp: "77134", canton: "Provins", interco: "CC Bassée-Montois", population: 862, lat: 48.46278, lng: 3.22861, superficie: 12.26 },
  { name: "Ormesson", codeInsee: "77348", cp: "77167", canton: "Nemours", interco: "CC Pays de Nemours", population: 244, lat: 48.24333, lng: 2.65472, superficie: 3.77 },
  { name: "Othis", codeInsee: "77349", cp: "77280", canton: "Mitry-Mory", interco: "CA Roissy Pays de France", population: 6741, lat: 49.07556, lng: 2.67611, superficie: 13.04 },
  { name: "Ozoir-la-Ferrière", codeInsee: "77350", cp: "77330", canton: "Ozoir-la-Ferrière", interco: "CC Les Portes Briardes Entre Villes et Forêts", population: 20969, lat: 48.76167, lng: 2.67278, superficie: 15.66 },
  { name: "Ozouer-le-Voulgis", codeInsee: "77352", cp: "77390", canton: "Fontenay-Trésigny", interco: "CC Brie des Rivières et Châteaux", population: 2002, lat: 48.66028, lng: 2.77472, superficie: 11.31 },
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
