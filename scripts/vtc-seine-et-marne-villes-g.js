/**
 * Communes de Seine-et-Marne (77) dont le nom commence par G.
 * Même structure que villes-a à villes-f pour les pages VTC [Ville].
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_SEINE_ET_MARNE_VILLES_G = [
  { name: "Garentreville", codeInsee: "77200", cp: "77890", canton: "Nemours", interco: "CC Pays de Nemours", population: 123, lat: 48.23556, lng: 2.54917, superficie: 6.45 },
  { name: "Gastins", codeInsee: "77201", cp: "77370", canton: "Nangis", interco: "CC Brie Nangissienne", population: 722, lat: 48.62944, lng: 3.02167, superficie: 15.00 },
  { name: "La Genevraye", codeInsee: "77202", cp: "77690", canton: "Nemours", interco: "CC Moret Seine et Loing", population: 827, lat: 48.31972, lng: 2.74667, superficie: 13.34 },
  { name: "Germigny-l'Évêque", codeInsee: "77203", cp: "77910", canton: "La Ferté-sous-Jouarre", interco: "CA du Pays de Meaux", population: 1350, lat: 48.99194, lng: 2.94528, superficie: 11.69 },
  { name: "Germigny-sous-Coulombs", codeInsee: "77204", cp: "77840", canton: "La Ferté-sous-Jouarre", interco: "CC du Pays de l'Ourcq", population: 203, lat: 49.06361, lng: 3.15972, superficie: 6.54 },
  { name: "Gesvres-le-Chapitre", codeInsee: "77205", cp: "77165", canton: "Claye-Souilly", interco: "CA du Pays de Meaux", population: 146, lat: 49.04389, lng: 2.85222, superficie: 4.25 },
  { name: "Giremoutiers", codeInsee: "77206", cp: "77120", canton: "Coulommiers", interco: "CA Coulommiers Pays de Brie", population: 186, lat: 48.84306, lng: 3.03056, superficie: 6.00 },
  { name: "Gironville", codeInsee: "77207", cp: "77890", canton: "Nemours", interco: "CC Gâtinais Val de Loing", population: 161, lat: 48.18583, lng: 2.52861, superficie: 13.73 },
  { name: "Gouaix", codeInsee: "77208", cp: "77114", canton: "Provins", interco: "CC Bassée-Montois", population: 1320, lat: 48.48444, lng: 3.29556, superficie: 14.15 },
  { name: "Gouvernes", codeInsee: "77209", cp: "77400", canton: "Lagny-sur-Marne", interco: "CA Marne et Gondoire", population: 1175, lat: 48.86056, lng: 2.69167, superficie: 2.74 },
  { name: "La Grande-Paroisse", codeInsee: "77210", cp: "77130", canton: "Montereau-Fault-Yonne", interco: "CC Pays de Montereau", population: 2899, lat: 48.38694, lng: 2.89778, superficie: 29.02 },
  { name: "Grandpuits-Bailly-Carrois", codeInsee: "77211", cp: "77720", canton: "Nangis", interco: "CC Brie Nangissienne", population: 1014, lat: 48.58500, lng: 2.96611, superficie: 24.57 },
  { name: "Gravon", codeInsee: "77212", cp: "77118", canton: "Provins", interco: "CC Bassée-Montois", population: 158, lat: 48.39833, lng: 3.12028, superficie: 7.58 },
  { name: "Gressy", codeInsee: "77214", cp: "77410", canton: "Claye-Souilly", interco: "CA Roissy Pays de France", population: 803, lat: 48.96556, lng: 2.67389, superficie: 3.35 },
  { name: "Gretz-Armainvilliers", codeInsee: "77215", cp: "77220", canton: "Ozoir-la-Ferrière", interco: "CC Les Portes Briardes Entre Villes et Forêts", population: 8682, lat: 48.74083, lng: 2.73222, superficie: 13.59 },
  { name: "Grez-sur-Loing", codeInsee: "77216", cp: "77880", canton: "Nemours", interco: "CC Pays de Nemours", population: 1457, lat: 48.31694, lng: 2.69111, superficie: 13.11 },
  { name: "Grisy-Suisnes", codeInsee: "77217", cp: "77166", canton: "Fontenay-Trésigny", interco: "CC Brie des Rivières et Châteaux", population: 2848, lat: 48.68528, lng: 2.66861, superficie: 18.25 },
  { name: "Grisy-sur-Seine", codeInsee: "77218", cp: "77480", canton: "Provins", interco: "CC Bassée-Montois", population: 115, lat: 48.43889, lng: 3.32000, superficie: 6.61 },
  { name: "Guérard", codeInsee: "77219", cp: "77580", canton: "Fontenay-Trésigny", interco: "CA Coulommiers Pays de Brie", population: 2669, lat: 48.82361, lng: 2.95917, superficie: 19.81 },
  { name: "Guercheville", codeInsee: "77220", cp: "77760", canton: "Fontainebleau", interco: "CC Pays de Nemours", population: 272, lat: 48.25917, lng: 2.55806, superficie: 9.17 },
  { name: "Guermantes", codeInsee: "77221", cp: "77600", canton: "Lagny-sur-Marne", interco: "CA Marne et Gondoire", population: 1151, lat: 48.85472, lng: 2.70417, superficie: 1.27 },
  { name: "Guignes", codeInsee: "77222", cp: "77390", canton: "Nangis", interco: "CC Brie des Rivières et Châteaux", population: 4434, lat: 48.63722, lng: 2.79750, superficie: 5.73 },
  { name: "Gurcy-le-Châtel", codeInsee: "77223", cp: "77520", canton: "Provins", interco: "CC Bassée-Montois", population: 563, lat: 48.47028, lng: 3.09194, superficie: 12.78 },
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
