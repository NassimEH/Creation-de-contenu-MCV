/**
 * Communes des Yvelines (78) dont le nom commence par S.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_YVELINES_VILLES_S = [
  { name: "Sailly", codeInsee: "78536", cp: "78440", canton: "Limay", interco: "CU Grand Paris Seine et Oise", population: 335, lat: 49.04000, lng: 1.80222, superficie: 5.45 },
  { name: "Saint-Arnoult-en-Yvelines", codeInsee: "78537", cp: "78730", canton: "Rambouillet", interco: "CA Rambouillet Territoires", population: 5854, lat: 48.57250, lng: 1.94056, superficie: 12.77 },
  { name: "Saint-Cyr-l'École", codeInsee: "78545", cp: "78210", canton: "Saint-Cyr-l'École", interco: "CA Versailles Grand Parc (CAVGP)", population: 20451, lat: 48.80167, lng: 2.06278, superficie: 5.09 },
  { name: "Saint-Forget", codeInsee: "78548", cp: "78720", canton: "Maurepas", interco: "CC de la Haute Vallée de Chevreuse", population: 445, lat: 48.70444, lng: 2.01194, superficie: 6.07 },
  { name: "Saint-Germain-de-la-Grange", codeInsee: "78550", cp: "78640", canton: "Aubergenville", interco: "CC Cœur d'Yvelines", population: 1842, lat: 48.83528, lng: 1.89917, superficie: 5.30 },
  { name: "Saint-Germain-en-Laye", codeInsee: "78551", cp: "78100", canton: "Saint-Germain-en-Laye", interco: "CA Saint Germain Boucles de Seine", population: 45286, lat: 48.89528, lng: 2.08917, superficie: 49.35 },
  { name: "Saint-Hilarion", codeInsee: "78557", cp: "78125", canton: "Rambouillet", interco: "CA Rambouillet Territoires", population: 988, lat: 48.62083, lng: 1.73361, superficie: 14.36 },
  { name: "Saint-Illiers-la-Ville", codeInsee: "78558", cp: "78980", canton: "Bonnières-sur-Seine", interco: "CC Les Portes de l'Ile de France", population: 356, lat: 48.97639, lng: 1.54028, superficie: 6.69 },
  { name: "Saint-Illiers-le-Bois", codeInsee: "78559", cp: "78980", canton: "Bonnières-sur-Seine", interco: "CC Les Portes de l'Ile de France", population: 448, lat: 48.95944, lng: 1.50806, superficie: 4.44 },
  { name: "Saint-Lambert", codeInsee: "78561", cp: "78470", canton: "Maurepas", interco: "CC de la Haute Vallée de Chevreuse", population: 448, lat: 48.73278, lng: 2.02083, superficie: 6.59 },
  { name: "Saint-Léger-en-Yvelines", codeInsee: "78562", cp: "78610", canton: "Rambouillet", interco: "CA Rambouillet Territoires", population: 1462, lat: 48.72083, lng: 1.76694, superficie: 35.09 },
  { name: "Saint-Martin-de-Bréthencourt", codeInsee: "78564", cp: "78660", canton: "Rambouillet", interco: "CA Rambouillet Territoires", population: 688, lat: 48.50917, lng: 1.93000, superficie: 16.67 },
  { name: "Saint-Martin-des-Champs", codeInsee: "78565", cp: "78790", canton: "Bonnières-sur-Seine", interco: "CC du Pays Houdanais (CCPH)", population: 304, lat: 48.88139, lng: 1.71889, superficie: 6.21 },
  { name: "Saint-Martin-la-Garenne", codeInsee: "78567", cp: "78520", canton: "Limay", interco: "CU Grand Paris Seine et Oise", population: 947, lat: 49.04083, lng: 1.69056, superficie: 15.91 },
  { name: "Saint-Nom-la-Bretèche", codeInsee: "78571", cp: "78860", canton: "Verneuil-sur-Seine", interco: "CC Gally Mauldre", population: 4877, lat: 48.85750, lng: 2.01861, superficie: 11.84 },
  { name: "Saint-Rémy-l'Honoré", codeInsee: "78576", cp: "78690", canton: "Aubergenville", interco: "CC Cœur d'Yvelines", population: 1689, lat: 48.75694, lng: 1.88222, superficie: 10.27 },
  { name: "Saint-Rémy-lès-Chevreuse", codeInsee: "78575", cp: "78470", canton: "Maurepas", interco: "CC de la Haute Vallée de Chevreuse", population: 7747, lat: 48.70972, lng: 2.06861, superficie: 9.88 },
  { name: "Sainte-Mesme", codeInsee: "78569", cp: "78730", canton: "Rambouillet", interco: "CA Rambouillet Territoires", population: 910, lat: 48.53167, lng: 1.96222, superficie: 8.35 },
  { name: "Sartrouville", codeInsee: "78586", cp: "78500", canton: "Sartrouville", interco: "CA Saint Germain Boucles de Seine", population: 51570, lat: 48.93722, lng: 2.16444, superficie: 8.46 },
  { name: "Saulx-Marchais", codeInsee: "78588", cp: "78650", canton: "Aubergenville", interco: "CC Cœur d'Yvelines", population: 956, lat: 48.84167, lng: 1.83556, superficie: 2.20 },
  { name: "Senlisse", codeInsee: "78590", cp: "78720", canton: "Maurepas", interco: "CC de la Haute Vallée de Chevreuse", population: 509, lat: 48.68917, lng: 1.98389, superficie: 8.14 },
  { name: "Septeuil", codeInsee: "78591", cp: "78790", canton: "Bonnières-sur-Seine", interco: "CC du Pays Houdanais (CCPH)", population: 2234, lat: 48.89417, lng: 1.68167, superficie: 9.46 },
  { name: "Soindres", codeInsee: "78597", cp: "78200", canton: "Bonnières-sur-Seine", interco: "CU Grand Paris Seine et Oise", population: 731, lat: 48.95750, lng: 1.67444, superficie: 5.23 },
  { name: "Sonchamp", codeInsee: "78601", cp: "78120", canton: "Rambouillet", interco: "CA Rambouillet Territoires", population: 1664, lat: 48.57583, lng: 1.87750, superficie: 46.45 },
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
