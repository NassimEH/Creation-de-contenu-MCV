/**
 * Communes de Seine-et-Marne (77) dont le nom commence par M.
 * Même structure que villes-a à villes-l pour les pages VTC [Ville].
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_SEINE_ET_MARNE_VILLES_M = [
  { name: "Machault", codeInsee: "77266", cp: "77133", canton: "Nangis", interco: "CC Brie des Rivières et Châteaux", population: 790, lat: 48.45528, lng: 2.83028, superficie: 16.29 },
  { name: "La Madeleine-sur-Loing", codeInsee: "77267", cp: "77570", canton: "Nemours", interco: "CC Gâtinais Val de Loing", population: 351, lat: 48.20333, lng: 2.70667, superficie: 6.15 },
  { name: "Magny-le-Hongre", codeInsee: "77268", cp: "77700", canton: "Serris", interco: "CA Val d'Europe Agglomération", population: 9058, lat: 48.86306, lng: 2.81333, superficie: 4.62 },
  { name: "Maincy", codeInsee: "77269", cp: "77950", canton: "Melun", interco: "CA Melun Val de Seine", population: 1833, lat: 48.55028, lng: 2.70111, superficie: 10.27 },
  { name: "Maisoncelles-en-Brie", codeInsee: "77270", cp: "77580", canton: "Coulommiers", interco: "CA Coulommiers Pays de Brie", population: 967, lat: 48.86333, lng: 2.99222, superficie: 13.67 },
  { name: "Maisoncelles-en-Gâtinais", codeInsee: "77271", cp: "77570", canton: "Nemours", interco: "CC Gâtinais Val de Loing", population: 139, lat: 48.18722, lng: 2.62556, superficie: 8.58 },
  { name: "Maison-Rouge", codeInsee: "77272", cp: "77370", canton: "Provins", interco: "CC du Provinois", population: 853, lat: 48.55889, lng: 3.15056, superficie: 13.89 },
  { name: "Marchémoret", codeInsee: "77273", cp: "77230", canton: "Mitry-Mory", interco: "CC Plaines et Monts de France", population: 614, lat: 49.04972, lng: 2.77167, superficie: 7.05 },
  { name: "Marcilly", codeInsee: "77274", cp: "77139", canton: "La Ferté-sous-Jouarre", interco: "CC du Pays de l'Ourcq", population: 463, lat: 49.03611, lng: 2.88194, superficie: 6.93 },
  { name: "Les Marêts", codeInsee: "77275", cp: "77560", canton: "Provins", interco: "CC du Provinois", population: 154, lat: 48.67083, lng: 3.31333, superficie: 5.30 },
  { name: "Mareuil-lès-Meaux", codeInsee: "77276", cp: "77100", canton: "Claye-Souilly", interco: "CA du Pays de Meaux", population: 3313, lat: 48.92583, lng: 2.86000, superficie: 7.30 },
  { name: "Marles-en-Brie", codeInsee: "77277", cp: "77610", canton: "Fontenay-Trésigny", interco: "CC Val Briard", population: 1889, lat: 48.72833, lng: 2.87944, superficie: 12.85 },
  { name: "Marolles-en-Brie", codeInsee: "77278", cp: "77120", canton: "Coulommiers", interco: "CA Coulommiers Pays de Brie", population: 413, lat: 48.77806, lng: 3.16500, superficie: 9.16 },
  { name: "Marolles-sur-Seine", codeInsee: "77279", cp: "77130", canton: "Montereau-Fault-Yonne", interco: "CC Pays de Montereau", population: 1793, lat: 48.38528, lng: 3.03194, superficie: 20.33 },
  { name: "Mary-sur-Marne", codeInsee: "77280", cp: "77440", canton: "La Ferté-sous-Jouarre", interco: "CC du Pays de l'Ourcq", population: 1135, lat: 49.01444, lng: 3.02944, superficie: 2.29 },
  { name: "Mauperthuis", codeInsee: "77281", cp: "77120", canton: "Coulommiers", interco: "CA Coulommiers Pays de Brie", population: 487, lat: 48.76861, lng: 3.03944, superficie: 1.97 },
  { name: "Mauregard", codeInsee: "77282", cp: "77990", canton: "Mitry-Mory", interco: "CA Roissy Pays de France", population: 351, lat: 49.03250, lng: 2.58167, superficie: 8.69 },
  { name: "May-en-Multien", codeInsee: "77283", cp: "77145", canton: "La Ferté-sous-Jouarre", interco: "CC du Pays de l'Ourcq", population: 884, lat: 49.07250, lng: 3.02361, superficie: 19.10 },
  { name: "Meaux", codeInsee: "77284", cp: "77100", canton: "Meaux", interco: "CA du Pays de Meaux", population: 56659, lat: 48.95889, lng: 2.88778, superficie: 14.98 },
  { name: "Le Mée-sur-Seine", codeInsee: "77285", cp: "77350", canton: "Savigny-le-Temple", interco: "CA Melun Val de Seine", population: 19527, lat: 48.53333, lng: 2.62889, superficie: 5.55 },
  { name: "Meigneux", codeInsee: "77286", cp: "77520", canton: "Provins", interco: "CC Bassée-Montois", population: 234, lat: 48.51167, lng: 3.10556, superficie: 7.81 },
  { name: "Meilleray", codeInsee: "77287", cp: "77320", canton: "Coulommiers", interco: "CC des Deux Morin", population: 505, lat: 48.79028, lng: 3.42611, superficie: 7.83 },
  { name: "Melun", codeInsee: "77288", cp: "77000", canton: "Melun", interco: "CA Melun Val de Seine", population: 43685, lat: 48.54056, lng: 2.65722, superficie: 7.75 },
  { name: "Melz-sur-Seine", codeInsee: "77289", cp: "77171", canton: "Provins", interco: "CC du Provinois", population: 346, lat: 48.49805, lng: 3.41806, superficie: 18.49 },
  { name: "Méry-sur-Marne", codeInsee: "77290", cp: "77730", canton: "La Ferté-sous-Jouarre", interco: "CA Coulommiers Pays de Brie", population: 683, lat: 48.96639, lng: 3.19944, superficie: 5.67 },
  { name: "Le Mesnil-Amelot", codeInsee: "77291", cp: "77990", canton: "Mitry-Mory", interco: "CA Roissy Pays de France", population: 992, lat: 49.01667, lng: 2.59472, superficie: 9.85 },
  { name: "Messy", codeInsee: "77292", cp: "77410", canton: "Claye-Souilly", interco: "CC Plaines et Monts de France", population: 1204, lat: 48.96695, lng: 2.70250, superficie: 10.37 },
  { name: "Misy-sur-Yonne", codeInsee: "77293", cp: "77130", canton: "Montereau-Fault-Yonne", interco: "CC Pays de Montereau", population: 857, lat: 48.36000, lng: 3.09194, superficie: 6.19 },
  { name: "Mitry-Mory", codeInsee: "77294", cp: "77290", canton: "Mitry-Mory", interco: "CA Roissy Pays de France", population: 20393, lat: 48.98333, lng: 2.61778, superficie: 29.93 },
  { name: "Moisenay", codeInsee: "77295", cp: "77950", canton: "Nangis", interco: "CC Brie des Rivières et Châteaux", population: 1363, lat: 48.56278, lng: 2.73611, superficie: 8.70 },
  { name: "Moissy-Cramayel", codeInsee: "77296", cp: "77550", canton: "Combs-la-Ville", interco: "CA Grand Paris Sud Seine Essonne Sénart", population: 18498, lat: 48.62722, lng: 2.59444, superficie: 14.30 },
  { name: "Mondreville", codeInsee: "77297", cp: "77570", canton: "Nemours", interco: "CC Gâtinais Val de Loing", population: 330, lat: 48.14194, lng: 2.61056, superficie: 20.25 },
  { name: "Mons-en-Montois", codeInsee: "77298", cp: "77520", canton: "Provins", interco: "CC Bassée-Montois", population: 445, lat: 48.48889, lng: 3.14722, superficie: 6.25 },
  { name: "Montceaux-lès-Meaux", codeInsee: "77300", cp: "77470", canton: "La Ferté-sous-Jouarre", interco: "CA du Pays de Meaux", population: 646, lat: 48.94278, lng: 2.98722, superficie: 4.67 },
  { name: "Montceaux-lès-Provins", codeInsee: "77301", cp: "77151", canton: "Provins", interco: "CC du Provinois", population: 321, lat: 48.69417, lng: 3.43944, superficie: 15.41 },
  { name: "Montcourt-Fromonville", codeInsee: "77302", cp: "77140", canton: "Nemours", interco: "CC Pays de Nemours", population: 1908, lat: 48.30472, lng: 2.70444, superficie: 8.09 },
  { name: "Montdauphin", codeInsee: "77303", cp: "77320", canton: "Coulommiers", interco: "CC des Deux Morin", population: 237, lat: 48.85194, lng: 3.42833, superficie: 9.87 },
  { name: "Montenils", codeInsee: "77304", cp: "77320", canton: "Coulommiers", interco: "CC des Deux Morin", population: 30, lat: 48.84389, lng: 3.47750, superficie: 5.26 },
  { name: "Montereau-Fault-Yonne", codeInsee: "77305", cp: "77130", canton: "Montereau-Fault-Yonne", interco: "CC Pays de Montereau", population: 21840, lat: 48.38528, lng: 2.95083, superficie: 9.13 },
  { name: "Montereau-sur-le-Jard", codeInsee: "77306", cp: "77950", canton: "Melun", interco: "CA Melun Val de Seine", population: 498, lat: 48.59167, lng: 2.66972, superficie: 11.41 },
  { name: "Montévrain", codeInsee: "77307", cp: "77144", canton: "Lagny-sur-Marne", interco: "CA Marne et Gondoire", population: 14847, lat: 48.87500, lng: 2.74500, superficie: 5.50 },
  { name: "Montgé-en-Goële", codeInsee: "77308", cp: "77230", canton: "Mitry-Mory", interco: "CC Plaines et Monts de France", population: 724, lat: 49.02806, lng: 2.74833, superficie: 11.50 },
  { name: "Monthyon", codeInsee: "77309", cp: "77122", canton: "Claye-Souilly", interco: "CA du Pays de Meaux", population: 1747, lat: 49.00694, lng: 2.82778, superficie: 12.12 },
  { name: "Montigny-le-Guesdier", codeInsee: "77310", cp: "77480", canton: "Provins", interco: "CC Bassée-Montois", population: 302, lat: 48.38333, lng: 3.25556, superficie: 7.83 },
  { name: "Montigny-Lencoup", codeInsee: "77311", cp: "77520", canton: "Provins", interco: "CC Bassée-Montois", population: 1362, lat: 48.45278, lng: 3.06417, superficie: 20.84 },
  { name: "Montigny-sur-Loing", codeInsee: "77312", cp: "77690", canton: "Nemours", interco: "CC Moret Seine et Loing", population: 2634, lat: 48.33361, lng: 2.74500, superficie: 9.13 },
  { name: "Montmachoux", codeInsee: "77313", cp: "77940", canton: "Nemours", interco: "CC Pays de Montereau", population: 228, lat: 48.31805, lng: 2.99250, superficie: 4.50 },
  { name: "Montolivet", codeInsee: "77314", cp: "77320", canton: "Coulommiers", interco: "CC des Deux Morin", population: 251, lat: 48.83000, lng: 3.44028, superficie: 16.39 },
  { name: "Montry", codeInsee: "77315", cp: "77450", canton: "Serris", interco: "CA Val d'Europe Agglomération", population: 3872, lat: 48.88833, lng: 2.82722, superficie: 2.83 },
  { name: "Moret-Loing-et-Orvanne", codeInsee: "77316", cp: "77250", canton: "Montereau-Fault-Yonne", interco: "CC Moret Seine et Loing", population: 12576, lat: 48.37139, lng: 2.81444, superficie: 4.95 },
  { name: "Mormant", codeInsee: "77317", cp: "77720", canton: "Nangis", interco: "CC Brie Nangissienne", population: 5280, lat: 48.60806, lng: 2.89167, superficie: 16.48 },
  { name: "Mortcerf", codeInsee: "77318", cp: "77163", canton: "Fontenay-Trésigny", interco: "CC Val Briard", population: 1405, lat: 48.79028, lng: 2.91750, superficie: 17.72 },
  { name: "Mortery", codeInsee: "77319", cp: "77160", canton: "Provins", interco: "CC du Provinois", population: 139, lat: 48.59917, lng: 3.26111, superficie: 13.12 },
  { name: "Mouroux", codeInsee: "77320", cp: "77120", canton: "Coulommiers", interco: "CA Coulommiers Pays de Brie", population: 5869, lat: 48.82222, lng: 3.03806, superficie: 16.76 },
  { name: "Mousseaux-lès-Bray", codeInsee: "77321", cp: "77480", canton: "Provins", interco: "CC Bassée-Montois", population: 672, lat: 48.41083, lng: 3.22917, superficie: 8.68 },
  { name: "Moussy-le-Neuf", codeInsee: "77322", cp: "77230", canton: "Mitry-Mory", interco: "CA Roissy Pays de France", population: 3255, lat: 49.06333, lng: 2.60444, superficie: 14.78 },
  { name: "Moussy-le-Vieux", codeInsee: "77323", cp: "77230", canton: "Mitry-Mory", interco: "CA Roissy Pays de France", population: 1475, lat: 49.04500, lng: 2.62583, superficie: 7.21 },
  { name: "Mouy-sur-Seine", codeInsee: "77325", cp: "77480", canton: "Provins", interco: "CC Bassée-Montois", population: 357, lat: 48.41972, lng: 3.24194, superficie: 8.62 },
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
