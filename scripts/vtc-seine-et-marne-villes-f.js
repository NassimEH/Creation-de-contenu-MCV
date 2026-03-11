/**
 * Communes de Seine-et-Marne (77) dont le nom commence par F.
 * Même structure que villes-a à villes-e pour les pages VTC [Ville].
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_SEINE_ET_MARNE_VILLES_F = [
  { name: "Faremoutiers", codeInsee: "77176", cp: "77515", canton: "Fontenay-Trésigny", interco: "CA Coulommiers Pays de Brie", population: 3035, lat: 48.79972, lng: 2.99778, superficie: 10.87 },
  { name: "Favières", codeInsee: "77177", cp: "77220", canton: "Ozoir-la-Ferrière", interco: "CC Val Briard", population: 1293, lat: 48.76306, lng: 2.77528, superficie: 28.50 },
  { name: "Faÿ-lès-Nemours", codeInsee: "77178", cp: "77167", canton: "Nemours", interco: "CC Pays de Nemours", population: 498, lat: 48.23250, lng: 2.68583, superficie: 7.89 },
  { name: "Féricy", codeInsee: "77179", cp: "77133", canton: "Nangis", interco: "CC Brie des Rivières et Châteaux", population: 613, lat: 48.45944, lng: 2.80139, superficie: 9.39 },
  { name: "Férolles-Attilly", codeInsee: "77180", cp: "77150", canton: "Ozoir-la-Ferrière", interco: "CC Les Portes Briardes Entre Villes et Forêts", population: 1251, lat: 48.73222, lng: 2.62833, superficie: 12.81 },
  { name: "Ferrières-en-Brie", codeInsee: "77181", cp: "77164", canton: "Ozoir-la-Ferrière", interco: "CA Marne et Gondoire", population: 3887, lat: 48.82306, lng: 2.70833, superficie: 6.14 },
  { name: "La Ferté-Gaucher", codeInsee: "77182", cp: "77320", canton: "Coulommiers", interco: "CC des Deux Morin", population: 4762, lat: 48.78250, lng: 3.30528, superficie: 17.43 },
  { name: "La Ferté-sous-Jouarre", codeInsee: "77183", cp: "77260", canton: "La Ferté-sous-Jouarre", interco: "CA Coulommiers Pays de Brie", population: 10004, lat: 48.95028, lng: 3.12750, superficie: 10.05 },
  { name: "Flagy", codeInsee: "77184", cp: "77940", canton: "Nemours", interco: "CC Moret Seine et Loing", population: 594, lat: 48.31167, lng: 2.92194, superficie: 7.21 },
  { name: "Fleury-en-Bière", codeInsee: "77185", cp: "77930", canton: "Fontainebleau", interco: "CA du Pays de Fontainebleau", population: 683, lat: 48.45111, lng: 2.54917, superficie: 14.03 },
  { name: "Fontaine-Fourches", codeInsee: "77187", cp: "77480", canton: "Provins", interco: "CC Bassée-Montois", population: 578, lat: 48.41222, lng: 3.39556, superficie: 12.05 },
  { name: "Fontaine-le-Port", codeInsee: "77188", cp: "77590", canton: "Nangis", interco: "CC Brie des Rivières et Châteaux", population: 1014, lat: 48.48611, lng: 2.76389, superficie: 8.30 },
  { name: "Fontainebleau", codeInsee: "77186", cp: "77300", canton: "Fontainebleau", interco: "CA du Pays de Fontainebleau", population: 15787, lat: 48.40805, lng: 2.69944, superficie: 172.81 },
  { name: "Fontains", codeInsee: "77190", cp: "77370", canton: "Nangis", interco: "CC Brie Nangissienne", population: 261, lat: 48.52583, lng: 3.00278, superficie: 14.33 },
  { name: "Fontenailles", codeInsee: "77191", cp: "77370", canton: "Nangis", interco: "CC Brie Nangissienne", population: 1090, lat: 48.55639, lng: 2.95556, superficie: 27.52 },
  { name: "Fontenay-Trésigny", codeInsee: "77192", cp: "77610", canton: "Fontenay-Trésigny", interco: "CC Val Briard", population: 5887, lat: 48.70750, lng: 2.86417, superficie: 22.03 },
  { name: "Forfry", codeInsee: "77193", cp: "77165", canton: "Claye-Souilly", interco: "CA du Pays de Meaux", population: 240, lat: 49.05722, lng: 2.84889, superficie: 5.79 },
  { name: "Forges", codeInsee: "77194", cp: "77130", canton: "Montereau-Fault-Yonne", interco: "CC Pays de Montereau", population: 432, lat: 48.41833, lng: 2.96111, superficie: 13.24 },
  { name: "Fouju", codeInsee: "77195", cp: "77390", canton: "Nangis", interco: "CC Brie des Rivières et Châteaux", population: 631, lat: 48.58556, lng: 2.77806, superficie: 7.83 },
  { name: "Fresnes-sur-Marne", codeInsee: "77196", cp: "77410", canton: "Claye-Souilly", interco: "CC Plaines et Monts de France", population: 947, lat: 48.93750, lng: 2.74111, superficie: 7.56 },
  { name: "Frétoy", codeInsee: "77197", cp: "77320", canton: "Provins", interco: "CC du Provinois", population: 173, lat: 48.70389, lng: 3.19889, superficie: 6.65 },
  { name: "Fromont", codeInsee: "77198", cp: "77760", canton: "Fontainebleau", interco: "CC Pays de Nemours", population: 230, lat: 48.25472, lng: 2.50278, superficie: 10.63 },
  { name: "Fublaines", codeInsee: "77199", cp: "77470", canton: "La Ferté-sous-Jouarre", interco: "CA du Pays de Meaux", population: 1381, lat: 48.93750, lng: 2.93639, superficie: 5.51 },
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
