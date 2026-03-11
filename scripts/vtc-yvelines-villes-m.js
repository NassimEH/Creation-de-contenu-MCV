/**
 * Communes des Yvelines (78) dont le nom commence par M.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_YVELINES_VILLES_M = [
  { name: "Magnanville", codeInsee: "78354", cp: "78200", canton: "Mantes-la-Jolie", interco: "CU Grand Paris Seine et Oise", population: 6389, lat: 48.96722, lng: 1.68417, superficie: 4.26 },
  { name: "Magny-les-Hameaux", codeInsee: "78356", cp: "78114", canton: "Maurepas", interco: "CA de Saint Quentin en Yvelines", population: 9353, lat: 48.74389, lng: 2.06083, superficie: 16.67 },
  { name: "Maisons-Laffitte", codeInsee: "78358", cp: "78600", canton: "Sartrouville", interco: "CA Saint Germain Boucles de Seine", population: 22855, lat: 48.94806, lng: 2.14139, superficie: 6.95 },
  { name: "Mantes-la-Jolie", codeInsee: "78361", cp: "78200", canton: "Mantes-la-Jolie", interco: "CU Grand Paris Seine et Oise", population: 44246, lat: 48.99361, lng: 1.71111, superficie: 9.46 },
  { name: "Mantes-la-Ville", codeInsee: "78362", cp: "78711", canton: "Mantes-la-Jolie", interco: "CU Grand Paris Seine et Oise", population: 21874, lat: 48.97333, lng: 1.71000, superficie: 6.34 },
  { name: "Marcq", codeInsee: "78364", cp: "78770", canton: "Aubergenville", interco: "CC Cœur d'Yvelines", population: 790, lat: 48.86250, lng: 1.81694, superficie: 4.80 },
  { name: "Mareil-le-Guyon", codeInsee: "78366", cp: "78490", canton: "Aubergenville", interco: "CC Cœur d'Yvelines", population: 413, lat: 48.79083, lng: 1.85361, superficie: 4.12 },
  { name: "Mareil-Marly", codeInsee: "78367", cp: "78750", canton: "Saint-Germain-en-Laye", interco: "CA Saint Germain Boucles de Seine", population: 3984, lat: 48.88278, lng: 2.07611, superficie: 1.75 },
  { name: "Mareil-sur-Mauldre", codeInsee: "78368", cp: "78124", canton: "Aubergenville", interco: "CC Gally Mauldre", population: 1743, lat: 48.89278, lng: 1.86333, superficie: 4.35 },
  { name: "Marly-le-Roi", codeInsee: "78372", cp: "78160", canton: "Chatou", interco: "CA Saint Germain Boucles de Seine", population: 16619, lat: 48.86806, lng: 2.09167, superficie: 6.67 },
  { name: "Maule", codeInsee: "78380", cp: "78580", canton: "Aubergenville", interco: "CC Gally Mauldre", population: 6100, lat: 48.90861, lng: 1.85111, superficie: 17.33 },
  { name: "Maulette", codeInsee: "78381", cp: "78550", canton: "Bonnières-sur-Seine", interco: "CC du Pays Houdanais (CCPH)", population: 1054, lat: 48.79250, lng: 1.62222, superficie: 7.93 },
  { name: "Maurecourt", codeInsee: "78382", cp: "78780", canton: "Conflans-Sainte-Honorine", interco: "CA de Cergy-Pontoise", population: 4399, lat: 48.99778, lng: 2.06333, superficie: 3.70 },
  { name: "Maurepas", codeInsee: "78383", cp: "78310", canton: "Maurepas", interco: "CA de Saint Quentin en Yvelines", population: 19960, lat: 48.76778, lng: 1.92056, superficie: 8.48 },
  { name: "Médan", codeInsee: "78384", cp: "78670", canton: "Verneuil-sur-Seine", interco: "CU Grand Paris Seine et Oise", population: 1305, lat: 48.95389, lng: 1.99417, superficie: 2.93 },
  { name: "Ménerville", codeInsee: "78385", cp: "78200", canton: "Bonnières-sur-Seine", interco: "CC Les Portes de l'Ile de France", population: 218, lat: 48.95389, lng: 1.60417, superficie: 3.47 },
  { name: "Méré", codeInsee: "78389", cp: "78490", canton: "Aubergenville", interco: "CC Cœur d'Yvelines", population: 1695, lat: 48.78917, lng: 1.81972, superficie: 10.56 },
  { name: "Méricourt", codeInsee: "78391", cp: "78270", canton: "Bonnières-sur-Seine", interco: "CU Grand Paris Seine et Oise", population: 378, lat: 49.03695, lng: 1.62889, superficie: 2.46 },
  { name: "Le Mesnil-le-Roi", codeInsee: "78396", cp: "78600", canton: "Sartrouville", interco: "CA Saint Germain Boucles de Seine", population: 6340, lat: 48.94194, lng: 2.13278, superficie: 3.75 },
  { name: "Le Mesnil-Saint-Denis", codeInsee: "78397", cp: "78320", canton: "Maurepas", interco: "CC de la Haute Vallée de Chevreuse", population: 7103, lat: 48.74389, lng: 1.96278, superficie: 9.05 },
  { name: "Les Mesnuls", codeInsee: "78398", cp: "78490", canton: "Aubergenville", interco: "CC Cœur d'Yvelines", population: 893, lat: 48.75889, lng: 1.83806, superficie: 6.60 },
  { name: "Meulan-en-Yvelines", codeInsee: "78401", cp: "78250", canton: "Les Mureaux", interco: "CU Grand Paris Seine et Oise", population: 8996, lat: 49.00583, lng: 1.91139, superficie: 3.48 },
  { name: "Mézières-sur-Seine", codeInsee: "78402", cp: "78970", canton: "Limay", interco: "CU Grand Paris Seine et Oise", population: 3874, lat: 48.95972, lng: 1.79333, superficie: 10.82 },
  { name: "Mézy-sur-Seine", codeInsee: "78403", cp: "78250", canton: "Les Mureaux", interco: "CU Grand Paris Seine et Oise", population: 2261, lat: 49.00222, lng: 1.88167, superficie: 4.80 },
  { name: "Millemont", codeInsee: "78404", cp: "78940", canton: "Aubergenville", interco: "CC Cœur d'Yvelines", population: 278, lat: 48.80972, lng: 1.74639, superficie: 5.83 },
  { name: "Milon-la-Chapelle", codeInsee: "78406", cp: "78470", canton: "Maurepas", interco: "CC de la Haute Vallée de Chevreuse", population: 292, lat: 48.72778, lng: 2.05167, superficie: 3.06 },
  { name: "Mittainville", codeInsee: "78407", cp: "78125", canton: "Rambouillet", interco: "CA Rambouillet Territoires", population: 650, lat: 48.67083, lng: 1.64500, superficie: 10.67 },
  { name: "Moisson", codeInsee: "78410", cp: "78840", canton: "Bonnières-sur-Seine", interco: "CC Les Portes de l'Ile de France", population: 913, lat: 49.07306, lng: 1.66944, superficie: 10.06 },
  { name: "Mondreville", codeInsee: "78413", cp: "78980", canton: "Bonnières-sur-Seine", interco: "CC du Pays Houdanais (CCPH)", population: 390, lat: 48.90361, lng: 1.55361, superficie: 4.46 },
  { name: "Montainville", codeInsee: "78415", cp: "78124", canton: "Aubergenville", interco: "CC Gally Mauldre", population: 560, lat: 48.88278, lng: 1.86389, superficie: 4.83 },
  { name: "Montalet-le-Bois", codeInsee: "78416", cp: "78440", canton: "Limay", interco: "CU Grand Paris Seine et Oise", population: 321, lat: 49.04528, lng: 1.82722, superficie: 3.03 },
  { name: "Montchauvet", codeInsee: "78417", cp: "78790", canton: "Bonnières-sur-Seine", interco: "CC du Pays Houdanais (CCPH)", population: 285, lat: 48.89278, lng: 1.63139, superficie: 8.06 },
  { name: "Montesson", codeInsee: "78418", cp: "78360", canton: "Houilles", interco: "CA Saint Germain Boucles de Seine", population: 14606, lat: 48.93000, lng: 2.13944, superficie: 7.39 },
  { name: "Montfort-l'Amaury", codeInsee: "78420", cp: "78490", canton: "Aubergenville", interco: "CC Cœur d'Yvelines", population: 2790, lat: 48.77722, lng: 1.80917, superficie: 5.75 },
  { name: "Montigny-le-Bretonneux", codeInsee: "78423", cp: "78180", canton: "Montigny-le-Bretonneux", interco: "CA de Saint Quentin en Yvelines", population: 32150, lat: 48.77167, lng: 2.02806, superficie: 7.27 },
  { name: "Morainvilliers", codeInsee: "78431", cp: "78630", canton: "Verneuil-sur-Seine", interco: "CU Grand Paris Seine et Oise", population: 3102, lat: 48.92889, lng: 1.93778, superficie: 7.51 },
  { name: "Mousseaux-sur-Seine", codeInsee: "78437", cp: "78270", canton: "Bonnières-sur-Seine", interco: "CU Grand Paris Seine et Oise", population: 680, lat: 49.04333, lng: 1.65139, superficie: 7.27 },
  { name: "Mulcent", codeInsee: "78439", cp: "78790", canton: "Bonnières-sur-Seine", interco: "CC du Pays Houdanais (CCPH)", population: 117, lat: 48.87917, lng: 1.65278, superficie: 3.83 },
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
