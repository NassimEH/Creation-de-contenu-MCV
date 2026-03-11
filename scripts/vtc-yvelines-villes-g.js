/**
 * Communes des Yvelines (78) dont le nom commence par G.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_YVELINES_VILLES_G = [
  { name: "Gaillon-sur-Montcient", codeInsee: "78261", cp: "78250", canton: "Les Mureaux", interco: "CU Grand Paris Seine et Oise", population: 691, lat: 49.02583, lng: 1.89333, superficie: 5.00 },
  { name: "Galluis", codeInsee: "78262", cp: "78490", canton: "Aubergenville", interco: "CC Cœur d'Yvelines", population: 1281, lat: 48.79611, lng: 1.79444, superficie: 4.52 },
  { name: "Gambais", codeInsee: "78263", cp: "78950", canton: "Aubergenville", interco: "CC Cœur d'Yvelines", population: 2513, lat: 48.77361, lng: 1.67417, superficie: 22.84 },
  { name: "Gambaiseuil", codeInsee: "78264", cp: "78490", canton: "Rambouillet", interco: "CA Rambouillet Territoires", population: 65, lat: 48.75667, lng: 1.73250, superficie: 19.22 },
  { name: "Garancières", codeInsee: "78265", cp: "78890", canton: "Aubergenville", interco: "CC Cœur d'Yvelines", population: 2577, lat: 48.82167, lng: 1.75861, superficie: 10.39 },
  { name: "Gargenville", codeInsee: "78267", cp: "78440", canton: "Limay", interco: "CU Grand Paris Seine et Oise", population: 7848, lat: 48.99083, lng: 1.81000, superficie: 8.62 },
  { name: "Gazeran", codeInsee: "78269", cp: "78125", canton: "Rambouillet", interco: "CA Rambouillet Territoires", population: 1337, lat: 48.63833, lng: 1.77389, superficie: 25.77 },
  { name: "Gommecourt", codeInsee: "78276", cp: "78270", canton: "Bonnières-sur-Seine", interco: "CC Les Portes de l'Ile de France", population: 621, lat: 49.07528, lng: 1.59556, superficie: 5.74 },
  { name: "Goupillières", codeInsee: "78278", cp: "78770", canton: "Aubergenville", interco: "CC Cœur d'Yvelines", population: 568, lat: 48.87917, lng: 1.76167, superficie: 5.67 },
  { name: "Goussonville", codeInsee: "78281", cp: "78930", canton: "Bonnières-sur-Seine", interco: "CU Grand Paris Seine et Oise", population: 643, lat: 48.91917, lng: 1.76639, superficie: 4.64 },
  { name: "Grandchamp", codeInsee: "78283", cp: "78113", canton: "Bonnières-sur-Seine", interco: "CC du Pays Houdanais (CCPH)", population: 302, lat: 48.71889, lng: 1.62139, superficie: 6.10 },
  { name: "Gressey", codeInsee: "78285", cp: "78550", canton: "Bonnières-sur-Seine", interco: "CC du Pays Houdanais (CCPH)", population: 539, lat: 48.83417, lng: 1.60944, superficie: 7.17 },
  { name: "Grosrouvre", codeInsee: "78289", cp: "78490", canton: "Aubergenville", interco: "CC Cœur d'Yvelines", population: 901, lat: 48.78305, lng: 1.76083, superficie: 12.62 },
  { name: "Guernes", codeInsee: "78290", cp: "78520", canton: "Limay", interco: "CU Grand Paris Seine et Oise", population: 1085, lat: 49.01056, lng: 1.63778, superficie: 8.54 },
  { name: "Guerville", codeInsee: "78291", cp: "78930", canton: "Bonnières-sur-Seine", interco: "CU Grand Paris Seine et Oise", population: 2088, lat: 48.94389, lng: 1.73417, superficie: 10.14 },
  { name: "Guitrancourt", codeInsee: "78296", cp: "78440", canton: "Limay", interco: "CU Grand Paris Seine et Oise", population: 642, lat: 49.00778, lng: 1.77806, superficie: 7.37 },
  { name: "Guyancourt", codeInsee: "78297", cp: "78280", canton: "Montigny-le-Bretonneux", interco: "CA de Saint Quentin en Yvelines", population: 29758, lat: 48.77194, lng: 2.07167, superficie: 13.30 },
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
