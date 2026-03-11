/**
 * Communes des Yvelines (78) dont le nom commence par F.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_YVELINES_VILLES_F = [
  { name: "La Falaise", codeInsee: "78230", cp: "78410", canton: "Limay", interco: "CU Grand Paris Seine et Oise", population: 616, lat: 48.94389, lng: 1.83194, superficie: 3.02 },
  { name: "Favrieux", codeInsee: "78231", cp: "78200", canton: "Bonnières-sur-Seine", interco: "CU Grand Paris Seine et Oise", population: 159, lat: 48.94417, lng: 1.64361, superficie: 3.22 },
  { name: "Feucherolles", codeInsee: "78233", cp: "78810", canton: "Verneuil-sur-Seine", interco: "CC Gally Mauldre", population: 3038, lat: 48.87305, lng: 1.97361, superficie: 13.19 },
  { name: "Flacourt", codeInsee: "78234", cp: "78200", canton: "Bonnières-sur-Seine", interco: "CU Grand Paris Seine et Oise", population: 185, lat: 48.92805, lng: 1.64750, superficie: 4.36 },
  { name: "Flexanville", codeInsee: "78236", cp: "78910", canton: "Aubergenville", interco: "CC Cœur d'Yvelines", population: 572, lat: 48.85389, lng: 1.73694, superficie: 8.96 },
  { name: "Flins-Neuve-Église", codeInsee: "78237", cp: "78790", canton: "Bonnières-sur-Seine", interco: "CC du Pays Houdanais (CCPH)", population: 160, lat: 48.89167, lng: 1.57972, superficie: 1.21 },
  { name: "Flins-sur-Seine", codeInsee: "78238", cp: "78410", canton: "Aubergenville", interco: "CU Grand Paris Seine et Oise", population: 2436, lat: 48.96417, lng: 1.87306, superficie: 8.77 },
  { name: "Follainville-Dennemont", codeInsee: "78239", cp: "78520", canton: "Limay", interco: "CU Grand Paris Seine et Oise", population: 2178, lat: 49.02111, lng: 1.71528, superficie: 9.74 },
  { name: "Fontenay-le-Fleury", codeInsee: "78242", cp: "78330", canton: "Saint-Cyr-l'École", interco: "CA Versailles Grand Parc (CAVGP)", population: 13640, lat: 48.81528, lng: 2.05000, superficie: 5.65 },
  { name: "Fontenay-Mauvoisin", codeInsee: "78245", cp: "78200", canton: "Bonnières-sur-Seine", interco: "CU Grand Paris Seine et Oise", population: 449, lat: 48.96417, lng: 1.65167, superficie: 3.29 },
  { name: "Fontenay-Saint-Père", codeInsee: "78246", cp: "78440", canton: "Limay", interco: "CU Grand Paris Seine et Oise", population: 955, lat: 49.02639, lng: 1.75333, superficie: 13.08 },
  { name: "Freneuse", codeInsee: "78255", cp: "78840", canton: "Bonnières-sur-Seine", interco: "CC Les Portes de l'Ile de France", population: 4299, lat: 49.04806, lng: 1.60250, superficie: 10.48 },
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
