/**
 * Communes des Yvelines (78) dont le nom commence par R.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_YVELINES_VILLES_R = [
  { name: "Raizeux", codeInsee: "78516", cp: "78125", canton: "Rambouillet", interco: "CA Rambouillet Territoires", population: 990, lat: 48.62361, lng: 1.68417, superficie: 10.37 },
  { name: "Rambouillet", codeInsee: "78517", cp: "78120", canton: "Rambouillet", interco: "CA Rambouillet Territoires", population: 27145, lat: 48.64944, lng: 1.82556, superficie: 35.98 },
  { name: "Rennemoulin", codeInsee: "78518", cp: "78590", canton: "Saint-Cyr-l'École", interco: "CA Versailles Grand Parc (CAVGP)", population: 107, lat: 48.83556, lng: 2.04472, superficie: 2.22 },
  { name: "Richebourg", codeInsee: "78520", cp: "78550", canton: "Bonnières-sur-Seine", interco: "CC du Pays Houdanais (CCPH)", population: 1571, lat: 48.82389, lng: 1.63917, superficie: 10.70 },
  { name: "Rochefort-en-Yvelines", codeInsee: "78522", cp: "78730", canton: "Rambouillet", interco: "CA Rambouillet Territoires", population: 897, lat: 48.58528, lng: 1.98944, superficie: 12.75 },
  { name: "Rolleboise", codeInsee: "78528", cp: "78270", canton: "Bonnières-sur-Seine", interco: "CU Grand Paris Seine et Oise", population: 351, lat: 49.01861, lng: 1.60917, superficie: 3.21 },
  { name: "Rosay", codeInsee: "78530", cp: "78790", canton: "Bonnières-sur-Seine", interco: "CC du Pays Houdanais (CCPH)", population: 386, lat: 48.91667, lng: 1.67833, superficie: 4.52 },
  { name: "Rosny-sur-Seine", codeInsee: "78531", cp: "78710", canton: "Mantes-la-Jolie", interco: "CU Grand Paris Seine et Oise", population: 7041, lat: 48.99944, lng: 1.63000, superficie: 19.23 },
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
