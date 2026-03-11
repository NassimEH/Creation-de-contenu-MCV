/**
 * Communes des Yvelines (78) dont le nom commence par N.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_YVELINES_VILLES_N = [
  { name: "Les Mureaux", codeInsee: "78440", cp: "78130", canton: "Les Mureaux", interco: "CU Grand Paris Seine et Oise", population: 34151, lat: 48.98750, lng: 1.91722, superficie: 12.42 },
  { name: "Neauphle-le-Château", codeInsee: "78442", cp: "78640", canton: "Aubergenville", interco: "CC Cœur d'Yvelines", population: 3295, lat: 48.81500, lng: 1.90167, superficie: 2.20 },
  { name: "Neauphle-le-Vieux", codeInsee: "78443", cp: "78640", canton: "Aubergenville", interco: "CC Cœur d'Yvelines", population: 924, lat: 48.81611, lng: 1.86361, superficie: 7.65 },
  { name: "Neauphlette", codeInsee: "78444", cp: "78980", canton: "Bonnières-sur-Seine", interco: "CC Les Portes de l'Ile de France", population: 872, lat: 48.93278, lng: 1.52417, superficie: 9.83 },
  { name: "Nézel", codeInsee: "78451", cp: "78410", canton: "Aubergenville", interco: "CU Grand Paris Seine et Oise", population: 1111, lat: 48.94361, lng: 1.83667, superficie: 1.33 },
  { name: "Noisy-le-Roi", codeInsee: "78455", cp: "78590", canton: "Verneuil-sur-Seine", interco: "CA Versailles Grand Parc (CAVGP)", population: 7597, lat: 48.84555, lng: 2.06444, superficie: 5.60 },
  { name: "Notre-Dame-de-la-Mer", codeInsee: "78320", cp: "78270", canton: "Bonnières-sur-Seine", interco: "CC Les Portes de l'Ile de France", population: 734, lat: 49.03500, lng: 1.54639, superficie: 3.65 },
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
