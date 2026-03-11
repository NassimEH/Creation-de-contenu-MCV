/**
 * Communes des Yvelines (78) dont le nom commence par H.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_YVELINES_VILLES_H = [
  { name: "Hardricourt", codeInsee: "78299", cp: "78250", canton: "Les Mureaux", interco: "CU Grand Paris Seine et Oise", population: 2498, lat: 49.00694, lng: 1.89611, superficie: 3.38 },
  { name: "Hargeville", codeInsee: "78300", cp: "78790", canton: "Bonnières-sur-Seine", interco: "CU Grand Paris Seine et Oise", population: 424, lat: 48.89028, lng: 1.74528, superficie: 6.98 },
  { name: "La Hauteville", codeInsee: "78302", cp: "78113", canton: "Bonnières-sur-Seine", interco: "CC du Pays Houdanais (CCPH)", population: 165, lat: 48.70417, lng: 1.61833, superficie: 4.89 },
  { name: "Herbeville", codeInsee: "78305", cp: "78580", canton: "Aubergenville", interco: "CC Gally Mauldre", population: 232, lat: 48.90556, lng: 1.88750, superficie: 6.48 },
  { name: "Hermeray", codeInsee: "78307", cp: "78125", canton: "Rambouillet", interco: "CA Rambouillet Territoires", population: 958, lat: 48.63778, lng: 1.67556, superficie: 18.44 },
  { name: "Houdan", codeInsee: "78310", cp: "78550", canton: "Bonnières-sur-Seine", interco: "CC du Pays Houdanais (CCPH)", population: 3716, lat: 48.79028, lng: 1.60111, superficie: 10.43 },
  { name: "Houilles", codeInsee: "78311", cp: "78800", canton: "Houilles", interco: "CA Saint Germain Boucles de Seine", population: 33617, lat: 48.92722, lng: 2.17833, superficie: 4.47 },
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
