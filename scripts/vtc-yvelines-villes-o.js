/**
 * Communes des Yvelines (78) dont le nom commence par O.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_YVELINES_VILLES_O = [
  { name: "Oinville-sur-Montcient", codeInsee: "78460", cp: "78250", canton: "Limay", interco: "CU Grand Paris Seine et Oise", population: 1113, lat: 49.02778, lng: 1.85056, superficie: 3.86 },
  { name: "Orcemont", codeInsee: "78464", cp: "78125", canton: "Rambouillet", interco: "CA Rambouillet Territoires", population: 983, lat: 48.58667, lng: 1.81222, superficie: 10.60 },
  { name: "Orgerus", codeInsee: "78465", cp: "78910", canton: "Bonnières-sur-Seine", interco: "CC du Pays Houdanais (CCPH)", population: 2484, lat: 48.83972, lng: 1.70111, superficie: 14.47 },
  { name: "Orgeval", codeInsee: "78466", cp: "78630", canton: "Verneuil-sur-Seine", interco: "CU Grand Paris Seine et Oise", population: 7092, lat: 48.92139, lng: 1.97556, superficie: 15.46 },
  { name: "Orphin", codeInsee: "78470", cp: "78125", canton: "Rambouillet", interco: "CA Rambouillet Territoires", population: 879, lat: 48.57806, lng: 1.78250, superficie: 16.64 },
  { name: "Orsonville", codeInsee: "78472", cp: "78660", canton: "Rambouillet", interco: "CA Rambouillet Territoires", population: 325, lat: 48.47778, lng: 1.83583, superficie: 9.75 },
  { name: "Orvilliers", codeInsee: "78474", cp: "78910", canton: "Bonnières-sur-Seine", interco: "CC du Pays Houdanais (CCPH)", population: 935, lat: 48.85833, lng: 1.64500, superficie: 5.90 },
  { name: "Osmoy", codeInsee: "78475", cp: "78910", canton: "Bonnières-sur-Seine", interco: "CC du Pays Houdanais (CCPH)", population: 407, lat: 48.86306, lng: 1.71750, superficie: 2.59 },
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
