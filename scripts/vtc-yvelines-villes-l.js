/**
 * Communes des Yvelines (78) dont le nom commence par L.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_YVELINES_VILLES_L = [
  { name: "Lainville-en-Vexin", codeInsee: "78329", cp: "78440", canton: "Limay", interco: "CU Grand Paris Seine et Oise", population: 807, lat: 49.05889, lng: 1.81861, superficie: 7.76 },
  { name: "Le Chesnay-Rocquencourt", codeInsee: "78158", cp: "78150", canton: "Le Chesnay-Rocquencourt", interco: "CA Versailles Grand Parc (CAVGP)", population: 31064, lat: 48.83055, lng: 2.12167, superficie: 4.30 },
  { name: "Lévis-Saint-Nom", codeInsee: "78334", cp: "78320", canton: "Maurepas", interco: "CC de la Haute Vallée de Chevreuse", population: 1610, lat: 48.72445, lng: 1.95472, superficie: 8.40 },
  { name: "Limay", codeInsee: "78335", cp: "78520", canton: "Limay", interco: "CU Grand Paris Seine et Oise", population: 17584, lat: 48.99667, lng: 1.73222, superficie: 11.64 },
  { name: "Limetz-Villez", codeInsee: "78337", cp: "78270", canton: "Bonnières-sur-Seine", interco: "CC Les Portes de l'Ile de France", population: 2067, lat: 49.06139, lng: 1.55028, superficie: 9.53 },
  { name: "Les Loges-en-Josas", codeInsee: "78343", cp: "78350", canton: "Versailles-2", interco: "CA Versailles Grand Parc (CAVGP)", population: 1655, lat: 48.76556, lng: 2.14167, superficie: 2.48 },
  { name: "Lommoye", codeInsee: "78344", cp: "78270", canton: "Bonnières-sur-Seine", interco: "CC Les Portes de l'Ile de France", population: 643, lat: 48.99445, lng: 1.51444, superficie: 9.59 },
  { name: "Longnes", codeInsee: "78346", cp: "78980", canton: "Bonnières-sur-Seine", interco: "CC du Pays Houdanais (CCPH)", population: 1582, lat: 48.92139, lng: 1.58833, superficie: 13.98 },
  { name: "Longvilliers", codeInsee: "78349", cp: "78730", canton: "Rambouillet", interco: "CA Rambouillet Territoires", population: 498, lat: 48.57861, lng: 1.99194, superficie: 14.13 },
  { name: "Louveciennes", codeInsee: "78350", cp: "78430", canton: "Le Chesnay-Rocquencourt", interco: "CA Saint Germain Boucles de Seine", population: 7744, lat: 48.86306, lng: 2.11417, superficie: 5.42 },
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
