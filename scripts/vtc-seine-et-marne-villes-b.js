/**
 * Communes de Seine-et-Marne (77) dont le nom commence par B.
 * Même structure que villes-a pour les pages VTC [Ville].
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_SEINE_ET_MARNE_VILLES_B = [
  { name: "Baby", codeInsee: "77015", cp: "77480", canton: "Provins", interco: "CC Bassée-Montois", population: 112, lat: 48.39722, lng: 3.34194, superficie: 4.14 },
  { name: "Bagneaux-sur-Loing", codeInsee: "77016", cp: "77167", canton: "Nemours", interco: "CC Pays de Nemours", population: 1582, lat: 48.22889, lng: 2.70556, superficie: 5.35 },
  { name: "Bailly-Romainvilliers", codeInsee: "77018", cp: "77700", canton: "Serris", interco: "CA Val d'Europe Agglomération", population: 7049, lat: 48.84028, lng: 2.81139, superficie: 7.99 },
  { name: "Balloy", codeInsee: "77019", cp: "77118", canton: "Provins", interco: "CC Bassée-Montois", population: 351, lat: 48.39722, lng: 3.14722, superficie: 13.42 },
  { name: "Bannost-Villegagnon", codeInsee: "77020", cp: "77970", canton: "Provins", interco: "CC du Provinois", population: 658, lat: 48.67805, lng: 3.19250, superficie: 19.51 },
  { name: "Barbey", codeInsee: "77021", cp: "77130", canton: "Montereau-Fault-Yonne", interco: "CC Pays de Montereau", population: 151, lat: 48.36500, lng: 3.05694, superficie: 4.34 },
  { name: "Barbizon", codeInsee: "77022", cp: "77630", canton: "Fontainebleau", interco: "CA du Pays de Fontainebleau", population: 1265, lat: 48.44695, lng: 2.60278, superficie: 5.38 },
  { name: "Barcy", codeInsee: "77023", cp: "77910", canton: "Claye-Souilly", interco: "CA du Pays de Meaux", population: 375, lat: 49.01778, lng: 2.88111, superficie: 7.04 },
  { name: "Bassevelle", codeInsee: "77024", cp: "77750", canton: "La Ferté-sous-Jouarre", interco: "CA Coulommiers Pays de Brie", population: 385, lat: 48.92833, lng: 3.28778, superficie: 17.52 },
  { name: "Bazoches-lès-Bray", codeInsee: "77025", cp: "77118", canton: "Provins", interco: "CC Bassée-Montois", population: 889, lat: 48.39944, lng: 3.18917, superficie: 22.68 },
  { name: "Beauchery-Saint-Martin", codeInsee: "77026", cp: "77560", canton: "Provins", interco: "CC du Provinois", population: 374, lat: 48.61500, lng: 3.40417, superficie: 27.81 },
  { name: "Beaumont-du-Gâtinais", codeInsee: "77027", cp: "77890", canton: "Nemours", interco: "CC Gâtinais Val de Loing", population: 1136, lat: 48.13611, lng: 2.47556, superficie: 16.62 },
  { name: "Beautheil-Saints", codeInsee: "77433", cp: "77120", canton: "Coulommiers", interco: "CA Coulommiers Pays de Brie", population: 2064, lat: 48.75861, lng: 3.05083, superficie: 20.06 },
  { name: "Beauvoir", codeInsee: "77029", cp: "77390", canton: "Nangis", interco: "CC Brie des Rivières et Châteaux", population: 185, lat: 48.64528, lng: 2.86417, superficie: 3.98 },
  { name: "Bellot", codeInsee: "77030", cp: "77510", canton: "Coulommiers", interco: "CC des Deux Morin", population: 776, lat: 48.85722, lng: 3.31917, superficie: 16.29 },
  { name: "Bernay-Vilbert", codeInsee: "77031", cp: "77540", canton: "Fontenay-Trésigny", interco: "CC Val Briard", population: 991, lat: 48.67694, lng: 2.93833, superficie: 16.91 },
  { name: "Beton-Bazoches", codeInsee: "77032", cp: "77320", canton: "Provins", interco: "CC du Provinois", population: 912, lat: 48.70167, lng: 3.24500, superficie: 18.08 },
  { name: "Bezalles", codeInsee: "77033", cp: "77970", canton: "Provins", interco: "CC du Provinois", population: 224, lat: 48.67833, lng: 3.24389, superficie: 2.69 },
  { name: "Blandy", codeInsee: "77034", cp: "77115", canton: "Nangis", interco: "CC Brie des Rivières et Châteaux", population: 769, lat: 48.56583, lng: 2.78250, superficie: 14.06 },
  { name: "Blennes", codeInsee: "77035", cp: "77940", canton: "Nemours", interco: "CC Pays de Montereau", population: 546, lat: 48.25722, lng: 3.02417, superficie: 20.36 },
  { name: "Bois-le-Roi", codeInsee: "77037", cp: "77590", canton: "Nangis", interco: "CA du Pays de Fontainebleau", population: 6026, lat: 48.46972, lng: 2.70639, superficie: 6.92 },
  { name: "Boisdon", codeInsee: "77036", cp: "77970", canton: "Provins", interco: "CC du Provinois", population: 135, lat: 48.68444, lng: 3.22500, superficie: 4.33 },
  { name: "Boissettes", codeInsee: "77038", cp: "77350", canton: "Savigny-le-Temple", interco: "CA Melun Val de Seine", population: 432, lat: 48.52139, lng: 2.61056, superficie: 1.60 },
  { name: "Boissise-la-Bertrand", codeInsee: "77039", cp: "77350", canton: "Savigny-le-Temple", interco: "CA Melun Val de Seine", population: 1194, lat: 48.52750, lng: 2.58861, superficie: 7.82 },
  { name: "Boissise-le-Roi", codeInsee: "77040", cp: "77310", canton: "Saint-Fargeau-Ponthierry", interco: "CA Melun Val de Seine", population: 3828, lat: 48.52806, lng: 2.57306, superficie: 7.06 },
  { name: "Boissy-aux-Cailles", codeInsee: "77041", cp: "77760", canton: "Fontainebleau", interco: "CA du Pays de Fontainebleau", population: 274, lat: 48.31944, lng: 2.50389, superficie: 16.31 },
  { name: "Boissy-le-Châtel", codeInsee: "77042", cp: "77169", canton: "Coulommiers", interco: "CA Coulommiers Pays de Brie", population: 3313, lat: 48.82083, lng: 3.13861, superficie: 9.94 },
  { name: "Boitron", codeInsee: "77043", cp: "77750", canton: "Coulommiers", interco: "CC des Deux Morin", population: 326, lat: 48.89611, lng: 3.26167, superficie: 5.11 },
  { name: "Bombon", codeInsee: "77044", cp: "77720", canton: "Nangis", interco: "CC Brie des Rivières et Châteaux", population: 936, lat: 48.57361, lng: 2.85944, superficie: 15.01 },
  { name: "Bougligny", codeInsee: "77045", cp: "77570", canton: "Nemours", interco: "CC Gâtinais Val de Loing", population: 730, lat: 48.19500, lng: 2.65750, superficie: 16.38 },
  { name: "Boulancourt", codeInsee: "77046", cp: "77760", canton: "Fontainebleau", interco: "CC Pays de Nemours", population: 341, lat: 48.25750, lng: 2.43500, superficie: 6.47 },
  { name: "Bouleurs", codeInsee: "77047", cp: "77580", canton: "Serris", interco: "CA Coulommiers Pays de Brie", population: 1731, lat: 48.88278, lng: 2.90778, superficie: 8.16 },
  { name: "Bourron-Marlotte", codeInsee: "77048", cp: "77780", canton: "Fontainebleau", interco: "CA du Pays de Fontainebleau", population: 2782, lat: 48.33944, lng: 2.70083, superficie: 11.28 },
  { name: "Boutigny", codeInsee: "77049", cp: "77470", canton: "Serris", interco: "CA du Pays de Meaux", population: 850, lat: 48.92000, lng: 2.93028, superficie: 9.85 },
  { name: "Bransles", codeInsee: "77050", cp: "77620", canton: "Nemours", interco: "CC Gâtinais Val de Loing", population: 529, lat: 48.15167, lng: 2.83333, superficie: 13.84 },
  { name: "Bray-sur-Seine", codeInsee: "77051", cp: "77480", canton: "Provins", interco: "CC Bassée-Montois", population: 2378, lat: 48.41556, lng: 3.24111, superficie: 2.05 },
  { name: "Bréau", codeInsee: "77052", cp: "77720", canton: "Nangis", interco: "CC Brie Nangissienne", population: 371, lat: 48.56139, lng: 2.87917, superficie: 1.33 },
  { name: "Brie-Comte-Robert", codeInsee: "77053", cp: "77170", canton: "Combs-la-Ville", interco: "CC l'Orée de la Brie", population: 18999, lat: 48.69111, lng: 2.61167, superficie: 19.91 },
  { name: "La Brosse-Montceaux", codeInsee: "77054", cp: "77940", canton: "Montereau-Fault-Yonne", interco: "CC Pays de Montereau", population: 736, lat: 48.34306, lng: 3.02083, superficie: 12.07 },
  { name: "Brou-sur-Chantereine", codeInsee: "77055", cp: "77177", canton: "Villeparisis", interco: "CA Paris - Vallée de la Marne", population: 5094, lat: 48.88278, lng: 2.63250, superficie: 4.42 },
  { name: "Burcy", codeInsee: "77056", cp: "77890", canton: "Fontainebleau", interco: "CC Pays de Nemours", population: 148, lat: 48.23833, lng: 2.52250, superficie: 6.98 },
  { name: "Bussières", codeInsee: "77057", cp: "77750", canton: "La Ferté-sous-Jouarre", interco: "CA Coulommiers Pays de Brie", population: 573, lat: 48.92194, lng: 3.23472, superficie: 8.32 },
  { name: "Bussy-Saint-Georges", codeInsee: "77058", cp: "77600", canton: "Torcy", interco: "CA Marne et Gondoire", population: 26334, lat: 48.84222, lng: 2.69833, superficie: 15.15 },
  { name: "Bussy-Saint-Martin", codeInsee: "77059", cp: "77600", canton: "Torcy", interco: "CA Marne et Gondoire", population: 728, lat: 48.85000, lng: 2.69250, superficie: 2.47 },
  { name: "Buthiers", codeInsee: "77060", cp: "77760", canton: "Fontainebleau", interco: "CC Pays de Nemours", population: 771, lat: 48.27500, lng: 2.43000, superficie: 12.50 },
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
