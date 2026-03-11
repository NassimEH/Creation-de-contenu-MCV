/**
 * Communes des Yvelines (78) dont le nom commence par B.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_YVELINES_VILLES_B = [
  { name: "Bailly", codeInsee: "78043", cp: "78870", canton: "Le Chesnay-Rocquencourt", interco: "CA Versailles Grand Parc (CAVGP)", population: 3690, lat: 48.84278, lng: 2.08111, superficie: 6.57 },
  { name: "Bazainville", codeInsee: "78048", cp: "78550", canton: "Bonnières-sur-Seine", interco: "CC du Pays Houdanais (CCPH)", population: 1456, lat: 48.80333, lng: 1.67111, superficie: 11.99 },
  { name: "Bazemont", codeInsee: "78049", cp: "78580", canton: "Aubergenville", interco: "CC Gally Mauldre", population: 1712, lat: 48.92889, lng: 1.86528, superficie: 6.75 },
  { name: "Bazoches-sur-Guyonne", codeInsee: "78050", cp: "78490", canton: "Aubergenville", interco: "CC Cœur d'Yvelines", population: 697, lat: 48.77889, lng: 1.86056, superficie: 5.64 },
  { name: "Béhoust", codeInsee: "78053", cp: "78910", canton: "Aubergenville", interco: "CC Cœur d'Yvelines", population: 523, lat: 48.83028, lng: 1.72278, superficie: 5.39 },
  { name: "Bennecourt", codeInsee: "78057", cp: "78270", canton: "Bonnières-sur-Seine", interco: "CC Les Portes de l'Ile de France", population: 1792, lat: 49.04000, lng: 1.56583, superficie: 6.91 },
  { name: "Beynes", codeInsee: "78062", cp: "78650", canton: "Plaisir", interco: "CC Cœur d'Yvelines", population: 7635, lat: 48.85695, lng: 1.87333, superficie: 18.67 },
  { name: "Blaru", codeInsee: "78068", cp: "78270", canton: "Bonnières-sur-Seine", interco: "CC Les Portes de l'Ile de France", population: 886, lat: 49.04778, lng: 1.47972, superficie: 15.07 },
  { name: "Boinville-en-Mantois", codeInsee: "78070", cp: "78930", canton: "Bonnières-sur-Seine", interco: "CU Grand Paris Seine et Oise", population: 287, lat: 48.93000, lng: 1.75722, superficie: 4.96 },
  { name: "Boinville-le-Gaillard", codeInsee: "78071", cp: "78660", canton: "Rambouillet", interco: "CA Rambouillet Territoires", population: 601, lat: 48.49361, lng: 1.87167, superficie: 12.65 },
  { name: "Boinvilliers", codeInsee: "78072", cp: "78200", canton: "Bonnières-sur-Seine", interco: "CC du Pays Houdanais (CCPH)", population: 246, lat: 48.91806, lng: 1.66222, superficie: 3.58 },
  { name: "Bois-d'Arcy", codeInsee: "78073", cp: "78390", canton: "Saint-Cyr-l'École", interco: "CA Versailles Grand Parc (CAVGP)", population: 16225, lat: 48.80333, lng: 2.04000, superficie: 9.04 },
  { name: "Boissets", codeInsee: "78076", cp: "78910", canton: "Bonnières-sur-Seine", interco: "CC du Pays Houdanais (CCPH)", population: 291, lat: 48.86083, lng: 1.58472, superficie: 3.94 },
  { name: "La Boissière-École", codeInsee: "78077", cp: "78125", canton: "Rambouillet", interco: "CA Rambouillet Territoires", population: 748, lat: 48.68278, lng: 1.64528, superficie: 25.62 },
  { name: "Boissy-Mauvoisin", codeInsee: "78082", cp: "78200", canton: "Bonnières-sur-Seine", interco: "CC Les Portes de l'Ile de France", population: 638, lat: 48.96222, lng: 1.58000, superficie: 5.15 },
  { name: "Boissy-sans-Avoir", codeInsee: "78084", cp: "78490", canton: "Aubergenville", interco: "CC Cœur d'Yvelines", population: 614, lat: 48.82028, lng: 1.79444, superficie: 4.06 },
  { name: "Bonnelles", codeInsee: "78087", cp: "78830", canton: "Rambouillet", interco: "CA Rambouillet Territoires", population: 2211, lat: 48.61750, lng: 2.03028, superficie: 10.77 },
  { name: "Bonnières-sur-Seine", codeInsee: "78089", cp: "78270", canton: "Bonnières-sur-Seine", interco: "CC Les Portes de l'Ile de France", population: 5077, lat: 49.03500, lng: 1.58028, superficie: 7.87 },
  { name: "Bouafle", codeInsee: "78090", cp: "78410", canton: "Aubergenville", interco: "CU Grand Paris Seine et Oise", population: 2222, lat: 48.96556, lng: 1.89694, superficie: 6.97 },
  { name: "Bougival", codeInsee: "78092", cp: "78380", canton: "Le Chesnay-Rocquencourt", interco: "CA Versailles Grand Parc (CAVGP)", population: 9083, lat: 48.86528, lng: 2.14389, superficie: 2.82 },
  { name: "Bourdonné", codeInsee: "78096", cp: "78113", canton: "Bonnières-sur-Seine", interco: "CC du Pays Houdanais (CCPH)", population: 506, lat: 48.75583, lng: 1.66444, superficie: 10.96 },
  { name: "Breuil-Bois-Robert", codeInsee: "78104", cp: "78930", canton: "Bonnières-sur-Seine", interco: "CU Grand Paris Seine et Oise", population: 764, lat: 48.94528, lng: 1.71722, superficie: 3.83 },
  { name: "Bréval", codeInsee: "78107", cp: "78980", canton: "Bonnières-sur-Seine", interco: "CC Les Portes de l'Ile de France", population: 2031, lat: 48.94444, lng: 1.53417, superficie: 11.50 },
  { name: "Les Bréviaires", codeInsee: "78108", cp: "78610", canton: "Rambouillet", interco: "CA Rambouillet Territoires", population: 1326, lat: 48.70750, lng: 1.81306, superficie: 19.81 },
  { name: "Brueil-en-Vexin", codeInsee: "78113", cp: "78440", canton: "Limay", interco: "CU Grand Paris Seine et Oise", population: 667, lat: 49.02972, lng: 1.81889, superficie: 7.39 },
  { name: "Buc", codeInsee: "78117", cp: "78530", canton: "Versailles-2", interco: "CA Versailles Grand Parc (CAVGP)", population: 5868, lat: 48.77361, lng: 2.12750, superficie: 8.09 },
  { name: "Buchelay", codeInsee: "78118", cp: "78200", canton: "Mantes-la-Jolie", interco: "CU Grand Paris Seine et Oise", population: 3364, lat: 48.98028, lng: 1.67139, superficie: 4.96 },
  { name: "Bullion", codeInsee: "78120", cp: "78830", canton: "Rambouillet", interco: "CA Rambouillet Territoires", population: 1915, lat: 48.62194, lng: 1.99667, superficie: 21.32 },
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
