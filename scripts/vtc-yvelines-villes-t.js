/**
 * Communes des Yvelines (78) dont le nom commence par T.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_YVELINES_VILLES_T = [
  { name: "Tacoignières", codeInsee: "78605", cp: "78910", canton: "Bonnières-sur-Seine", interco: "CC du Pays Houdanais (CCPH)", population: 1194, lat: 48.83472, lng: 1.67556, superficie: 3.21 },
  { name: "Le Tartre-Gaudran", codeInsee: "78606", cp: "78113", canton: "Bonnières-sur-Seine", interco: "CC du Pays Houdanais (CCPH)", population: 37, lat: 48.69972, lng: 1.59750, superficie: 4.37 },
  { name: "Le Tertre-Saint-Denis", codeInsee: "78608", cp: "78980", canton: "Bonnières-sur-Seine", interco: "CU Grand Paris Seine et Oise", population: 129, lat: 48.93861, lng: 1.60722, superficie: 2.87 },
  { name: "Tessancourt-sur-Aubette", codeInsee: "78609", cp: "78250", canton: "Les Mureaux", interco: "CU Grand Paris Seine et Oise", population: 971, lat: 49.02444, lng: 1.92139, superficie: 4.46 },
  { name: "Thiverval-Grignon", codeInsee: "78615", cp: "78850", canton: "Plaisir", interco: "CC Cœur d'Yvelines", population: 1102, lat: 48.84945, lng: 1.91722, superficie: 11.37 },
  { name: "Thoiry", codeInsee: "78616", cp: "78770", canton: "Aubergenville", interco: "CC Cœur d'Yvelines", population: 1432, lat: 48.86667, lng: 1.79861, superficie: 7.13 },
  { name: "Tilly", codeInsee: "78618", cp: "78790", canton: "Bonnières-sur-Seine", interco: "CC du Pays Houdanais (CCPH)", population: 529, lat: 48.88278, lng: 1.57778, superficie: 7.75 },
  { name: "Toussus-le-Noble", codeInsee: "78620", cp: "78117", canton: "Maurepas", interco: "CA Versailles Grand Parc (CAVGP)", population: 1176, lat: 48.74667, lng: 2.11306, superficie: 4.01 },
  { name: "Trappes", codeInsee: "78621", cp: "78190", canton: "Trappes", interco: "CA de Saint Quentin en Yvelines", population: 34276, lat: 48.77722, lng: 2.00861, superficie: 13.72 },
  { name: "Le Tremblay-sur-Mauldre", codeInsee: "78623", cp: "78490", canton: "Aubergenville", interco: "CC Cœur d'Yvelines", population: 956, lat: 48.77861, lng: 1.87806, superficie: 6.06 },
  { name: "Triel-sur-Seine", codeInsee: "78624", cp: "78510", canton: "Verneuil-sur-Seine", interco: "CU Grand Paris Seine et Oise", population: 12386, lat: 48.97139, lng: 2.00944, superficie: 13.77 },
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
