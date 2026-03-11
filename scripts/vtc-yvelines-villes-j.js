/**
 * Communes des Yvelines (78) dont le nom commence par J.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_YVELINES_VILLES_J = [
  { name: "Jambville", codeInsee: "78317", cp: "78440", canton: "Limay", interco: "CU Grand Paris Seine et Oise", population: 777, lat: 49.04639, lng: 1.85444, superficie: 4.90 },
  { name: "Jouars-Pontchartrain", codeInsee: "78321", cp: "78760", canton: "Aubergenville", interco: "CC Cœur d'Yvelines", population: 5965, lat: 48.80222, lng: 1.90222, superficie: 9.81 },
  { name: "Jouy-en-Josas", codeInsee: "78322", cp: "78350", canton: "Versailles-2", interco: "CA Versailles Grand Parc (CAVGP)", population: 7985, lat: 48.77028, lng: 2.16750, superficie: 10.29 },
  { name: "Jouy-Mauvoisin", codeInsee: "78324", cp: "78200", canton: "Bonnières-sur-Seine", interco: "CU Grand Paris Seine et Oise", population: 564, lat: 48.97111, lng: 1.64694, superficie: 2.83 },
  { name: "Jumeauville", codeInsee: "78325", cp: "78580", canton: "Bonnières-sur-Seine", interco: "CU Grand Paris Seine et Oise", population: 624, lat: 48.91167, lng: 1.78833, superficie: 7.70 },
  { name: "Juziers", codeInsee: "78327", cp: "78820", canton: "Limay", interco: "CU Grand Paris Seine et Oise", population: 4040, lat: 48.99445, lng: 1.84528, superficie: 8.76 },
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
