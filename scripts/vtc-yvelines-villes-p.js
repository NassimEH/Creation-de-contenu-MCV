/**
 * Communes des Yvelines (78) dont le nom commence par P.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_YVELINES_VILLES_P = [
  { name: "Paray-Douaville", codeInsee: "78478", cp: "78660", canton: "Rambouillet", interco: "CA Rambouillet Territoires", population: 216, lat: 48.46472, lng: 1.87806, superficie: 10.18 },
  { name: "Le Pecq", codeInsee: "78481", cp: "78230", canton: "Saint-Germain-en-Laye", interco: "CA Saint Germain Boucles de Seine", population: 15858, lat: 48.89417, lng: 2.11556, superficie: 2.94 },
  { name: "Perdreauville", codeInsee: "78484", cp: "78200", canton: "Bonnières-sur-Seine", interco: "CU Grand Paris Seine et Oise", population: 669, lat: 48.96611, lng: 1.62750, superficie: 11.32 },
  { name: "Le Perray-en-Yvelines", codeInsee: "78486", cp: "78610", canton: "Rambouillet", interco: "CA Rambouillet Territoires", population: 6515, lat: 48.69500, lng: 1.85472, superficie: 13.40 },
  { name: "Plaisir", codeInsee: "78490", cp: "78370", canton: "Plaisir", interco: "CA de Saint Quentin en Yvelines", population: 31971, lat: 48.81667, lng: 1.94778, superficie: 17.75 },
  { name: "Poigny-la-Forêt", codeInsee: "78497", cp: "78125", canton: "Rambouillet", interco: "CA Rambouillet Territoires", population: 930, lat: 48.67528, lng: 1.75444, superficie: 23.62 },
  { name: "Poissy", codeInsee: "78498", cp: "78300", canton: "Poissy", interco: "CU Grand Paris Seine et Oise", population: 40792, lat: 48.93139, lng: 2.04972, superficie: 13.00 },
  { name: "Ponthévrard", codeInsee: "78499", cp: "78730", canton: "Rambouillet", interco: "CA Rambouillet Territoires", population: 700, lat: 48.55139, lng: 1.91278, superficie: 2.63 },
  { name: "Porcheville", codeInsee: "78501", cp: "78440", canton: "Limay", interco: "CU Grand Paris Seine et Oise", population: 3167, lat: 48.97055, lng: 1.78000, superficie: 4.63 },
  { name: "Le Port-Marly", codeInsee: "78502", cp: "78560", canton: "Chatou", interco: "CA Saint Germain Boucles de Seine", population: 5583, lat: 48.87861, lng: 2.10889, superficie: 1.43 },
  { name: "Prunay-en-Yvelines", codeInsee: "78506", cp: "78660", canton: "Rambouillet", interco: "CA Rambouillet Territoires", population: 820, lat: 48.52750, lng: 1.79611, superficie: 27.20 },
  { name: "Prunay-le-Temple", codeInsee: "78505", cp: "78910", canton: "Bonnières-sur-Seine", interco: "CC du Pays Houdanais (CCPH)", population: 410, lat: 48.86222, lng: 1.67361, superficie: 6.54 },
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
