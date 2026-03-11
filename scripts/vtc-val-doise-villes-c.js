/**
 * Communes du Val-d'Oise (95) dont le nom commence par C.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_VAL_DOISE_VILLES_C = [
  { name: "Cergy", codeInsee: "95127", cp: "95000", canton: "Cergy", interco: "CA de Cergy-Pontoise", population: 69578, lat: 49.03389, lng: 2.06306, superficie: 14.56 },
  { name: "Champagne-sur-Oise", codeInsee: "95134", cp: "95660", canton: "L'Isle-Adam", interco: "CC du Haut Val d'Oise", population: 5022, lat: 49.13306, lng: 2.23167, superficie: 9.41 },
  { name: "Charmont", codeInsee: "95141", cp: "95420", canton: "Vauréal", interco: "CC du Vexin-Val de Seine", population: 33, lat: 49.13528, lng: 1.79111, superficie: 3.86 },
  { name: "Chars", codeInsee: "95142", cp: "95750", canton: "Pontoise", interco: "CC Vexin Centre", population: 2017, lat: 49.15944, lng: 1.94083, superficie: 16.93 },
  { name: "Châtenay-en-France", codeInsee: "95144", cp: "95190", canton: "Fosses", interco: "CC Carnelle Pays-de-France", population: 73, lat: 49.06556, lng: 2.45778, superficie: 3.17 },
  { name: "Chaumontel", codeInsee: "95149", cp: "95270", canton: "Fosses", interco: "CC Carnelle Pays-de-France", population: 3340, lat: 49.12278, lng: 2.4325, superficie: 4.2 },
  { name: "Chaussy", codeInsee: "95150", cp: "95710", canton: "Vauréal", interco: "CC du Vexin-Val de Seine", population: 634, lat: 49.12111, lng: 1.6925, superficie: 14.82 },
  { name: "Chauvry", codeInsee: "95151", cp: "95560", canton: "Domont", interco: "CC de la Vallée de l'Oise et des Trois Forêts", population: 297, lat: 49.05333, lng: 2.26667, superficie: 5.04 },
  { name: "Chennevières-lès-Louvres", codeInsee: "95154", cp: "95380", canton: "Goussainville", interco: "CA Roissy Pays de France", population: 294, lat: 49.04445, lng: 2.55194, superficie: 4.63 },
  { name: "Chérence", codeInsee: "95157", cp: "95510", canton: "Vauréal", interco: "CC du Vexin-Val de Seine", population: 128, lat: 49.08889, lng: 1.67694, superficie: 8.66 },
  { name: "Cléry-en-Vexin", codeInsee: "95166", cp: "95420", canton: "Vauréal", interco: "CC Vexin Centre", population: 467, lat: 49.1275, lng: 1.84111, superficie: 5.1 },
  { name: "Commeny", codeInsee: "95169", cp: "95450", canton: "Pontoise", interco: "CC Vexin Centre", population: 648, lat: 49.12667, lng: 1.89194, superficie: 4.77 },
  { name: "Condécourt", codeInsee: "95170", cp: "95450", canton: "Vauréal", interco: "CC Vexin Centre", population: 557, lat: 49.04028, lng: 1.94333, superficie: 6.99 },
  { name: "Cormeilles-en-Parisis", codeInsee: "95176", cp: "95240", canton: "Franconville", interco: "CA Val Parisis", population: 27086, lat: 48.97361, lng: 2.19861, superficie: 8.52 },
  { name: "Cormeilles-en-Vexin", codeInsee: "95177", cp: "95830", canton: "Pontoise", interco: "CC Vexin Centre", population: 1294, lat: 49.11528, lng: 2.02028, superficie: 9.58 },
  { name: "Courcelles-sur-Viosne", codeInsee: "95181", cp: "95650", canton: "Pontoise", interco: "CC Vexin Centre", population: 307, lat: 49.075, lng: 2.00472, superficie: 3.65 },
  { name: "Courdimanche", codeInsee: "95183", cp: "95800", canton: "Vauréal", interco: "CA de Cergy-Pontoise", population: 7111, lat: 49.03472, lng: 2.00139, superficie: 5.63 },
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
