/**
 * Communes de Seine-et-Marne (77) dont le nom commence par A.
 * Données pour les pages VTC [Ville] : canton, interco, références locales.
 * Colonnes source : nom, code insee, CP, ?, canton, interco, population, lat, long, ?, superficie.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_SEINE_ET_MARNE_VILLES_A = [
  { name: "Amillis", codeInsee: "77002", cp: "77120", canton: "Coulommiers", interco: "CA Coulommiers Pays de Brie", population: 821, lat: 48.74028, lng: 3.13056, superficie: 20.26 },
  { name: "Amponville", codeInsee: "77003", cp: "77760", canton: "Fontainebleau", interco: "CC Pays de Nemours", population: 351, lat: 48.27889, lng: 2.52944, superficie: 11.94 },
  { name: "Andrezel", codeInsee: "77004", cp: "77390", canton: "Nangis", interco: "CC Brie des Rivières et Châteaux", population: 324, lat: 48.61111, lng: 2.81361, superficie: 8.10 },
  { name: "Annet-sur-Marne", codeInsee: "77005", cp: "77410", canton: "Claye-Souilly", interco: "CC Plaines et Monts de France", population: 3329, lat: 48.92694, lng: 2.71972, superficie: 13.10 },
  { name: "Arbonne-la-Forêt", codeInsee: "77006", cp: "77630", canton: "Fontainebleau", interco: "CA du Pays de Fontainebleau", population: 1007, lat: 48.41361, lng: 2.56444, superficie: 15.01 },
  { name: "Argentières", codeInsee: "77007", cp: "77390", canton: "Nangis", interco: "CC Brie des Rivières et Châteaux", population: 352, lat: 48.65445, lng: 2.87028, superficie: 2.57 },
  { name: "Armentières-en-Brie", codeInsee: "77008", cp: "77440", canton: "La Ferté-sous-Jouarre", interco: "CC du Pays de l'Ourcq", population: 1196, lat: 48.97833, lng: 3.02056, superficie: 7.28 },
  { name: "Arville", codeInsee: "77009", cp: "77890", canton: "Nemours", interco: "CC Gâtinais Val de Loing", population: 140, lat: 48.18694, lng: 2.54972, superficie: 11.36 },
  { name: "Aubepierre-Ozouer-le-Repos", codeInsee: "77010", cp: "77720", canton: "Nangis", interco: "CC Brie Nangissienne", population: 965, lat: 48.63083, lng: 2.88722, superficie: 26.83 },
  { name: "Aufferville", codeInsee: "77011", cp: "77570", canton: "Nemours", interco: "CC Gâtinais Val de Loing", population: 482, lat: 48.21417, lng: 2.61000, superficie: 17.76 },
  { name: "Augers-en-Brie", codeInsee: "77012", cp: "77560", canton: "Provins", interco: "CC du Provinois", population: 275, lat: 48.68028, lng: 3.35861, superficie: 13.42 },
  { name: "Aulnoy", codeInsee: "77013", cp: "77120", canton: "Coulommiers", interco: "CA Coulommiers Pays de Brie", population: 363, lat: 48.84167, lng: 3.09611, superficie: 14.27 },
  { name: "Avon", codeInsee: "77014", cp: "77210", canton: "Fontainebleau", interco: "CA du Pays de Fontainebleau", population: 13357, lat: 48.40583, lng: 2.72028, superficie: 3.83 },
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
