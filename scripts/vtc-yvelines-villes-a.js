/**
 * Communes des Yvelines (78) dont le nom commence par A.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_YVELINES_VILLES_A = [
  { name: "Ablis", codeInsee: "78003", cp: "78660", canton: "Rambouillet", interco: "CA Rambouillet Territoires", population: 3814, lat: 48.51667, lng: 1.83417, superficie: 26.24 },
  { name: "Achères", codeInsee: "78005", cp: "78260", canton: "Poissy", interco: "CU Grand Paris Seine et Oise", population: 21663, lat: 48.96194, lng: 2.07111, superficie: 9.57 },
  { name: "Adainville", codeInsee: "78006", cp: "78113", canton: "Bonnières-sur-Seine", interco: "CC du Pays Houdanais (CCPH)", population: 647, lat: 48.72278, lng: 1.65306, superficie: 10.21 },
  { name: "Aigremont", codeInsee: "78007", cp: "78240", canton: "Saint-Germain-en-Laye", interco: "CA Saint Germain Boucles de Seine", population: 1082, lat: 48.90194, lng: 2.01917, superficie: 3.01 },
  { name: "Allainville", codeInsee: "78009", cp: "78660", canton: "Rambouillet", interco: "CA Rambouillet Territoires", population: 281, lat: 48.45611, lng: 1.89694, superficie: 16.30 },
  { name: "Les Alluets-le-Roi", codeInsee: "78010", cp: "78580", canton: "Verneuil-sur-Seine", interco: "CU Grand Paris Seine et Oise", population: 1332, lat: 48.91389, lng: 1.91972, superficie: 7.40 },
  { name: "Andelu", codeInsee: "78013", cp: "78770", canton: "Aubergenville", interco: "CC Gally Mauldre", population: 527, lat: 48.88000, lng: 1.82500, superficie: 4.02 },
  { name: "Andrésy", codeInsee: "78015", cp: "78570", canton: "Conflans-Sainte-Honorine", interco: "CU Grand Paris Seine et Oise", population: 13663, lat: 48.98222, lng: 2.05889, superficie: 6.94 },
  { name: "Arnouville-lès-Mantes", codeInsee: "78020", cp: "78790", canton: "Bonnières-sur-Seine", interco: "CU Grand Paris Seine et Oise", population: 940, lat: 48.91111, lng: 1.73361, superficie: 9.86 },
  { name: "Aubergenville", codeInsee: "78029", cp: "78410", canton: "Aubergenville", interco: "CU Grand Paris Seine et Oise", population: 12540, lat: 48.95972, lng: 1.85528, superficie: 9.12 },
  { name: "Auffargis", codeInsee: "78030", cp: "78610", canton: "Rambouillet", interco: "CA Rambouillet Territoires", population: 1967, lat: 48.70222, lng: 1.88694, superficie: 17.48 },
  { name: "Auffreville-Brasseuil", codeInsee: "78031", cp: "78930", canton: "Bonnières-sur-Seine", interco: "CU Grand Paris Seine et Oise", population: 669, lat: 48.95611, lng: 1.71139, superficie: 2.28 },
  { name: "Aulnay-sur-Mauldre", codeInsee: "78033", cp: "78126", canton: "Aubergenville", interco: "CU Grand Paris Seine et Oise", population: 1159, lat: 48.93083, lng: 1.84083, superficie: 2.23 },
  { name: "Auteuil", codeInsee: "78034", cp: "78770", canton: "Aubergenville", interco: "CC Cœur d'Yvelines", population: 1005, lat: 48.84167, lng: 1.81861, superficie: 4.38 },
  { name: "Autouillet", codeInsee: "78036", cp: "78770", canton: "Aubergenville", interco: "CC Cœur d'Yvelines", population: 655, lat: 48.84972, lng: 1.80444, superficie: 5.14 },
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
