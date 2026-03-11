/**
 * Communes des Yvelines (78) dont le nom commence par V.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_YVELINES_VILLES_V = [
  { name: "Vaux-sur-Seine", codeInsee: "78638", cp: "78740", canton: "Les Mureaux", interco: "CU Grand Paris Seine et Oise", population: 5143, lat: 49.00694, lng: 1.96194, superficie: 8.45 },
  { name: "Vélizy-Villacoublay", codeInsee: "78640", cp: "78140", canton: "Versailles-2", interco: "CA Versailles Grand Parc (CAVGP)", population: 22481, lat: 48.78806, lng: 2.17444, superficie: 8.96 },
  { name: "Verneuil-sur-Seine", codeInsee: "78642", cp: "78480", canton: "Verneuil-sur-Seine", interco: "CU Grand Paris Seine et Oise", population: 16112, lat: 48.98111, lng: 1.97333, superficie: 9.65 },
  { name: "Vernouillet", codeInsee: "78643", cp: "78540", canton: "Verneuil-sur-Seine", interco: "CU Grand Paris Seine et Oise", population: 9953, lat: 48.97389, lng: 1.98639, superficie: 6.68 },
  { name: "La Verrière", codeInsee: "78644", cp: "78320", canton: "Trappes", interco: "CA de Saint Quentin en Yvelines", population: 6142, lat: 48.75555, lng: 1.95611, superficie: 1.80 },
  { name: "Versailles", codeInsee: "78646", cp: "78000", canton: "Versailles", interco: "CA Versailles Grand Parc (CAVGP)", population: 83918, lat: 48.80695, lng: 2.13667, superficie: 26.05 },
  { name: "Vert", codeInsee: "78647", cp: "78930", canton: "Bonnières-sur-Seine", interco: "CU Grand Paris Seine et Oise", population: 852, lat: 48.94111, lng: 1.69083, superficie: 3.74 },
  { name: "Le Vésinet", codeInsee: "78650", cp: "78110", canton: "Chatou", interco: "CA Saint Germain Boucles de Seine", population: 15712, lat: 48.88889, lng: 2.13167, superficie: 5.00 },
  { name: "Vicq", codeInsee: "78653", cp: "78490", canton: "Aubergenville", interco: "CC Cœur d'Yvelines", population: 391, lat: 48.81611, lng: 1.83611, superficie: 4.50 },
  { name: "Vieille-Église-en-Yvelines", codeInsee: "78655", cp: "78125", canton: "Rambouillet", interco: "CA Rambouillet Territoires", population: 618, lat: 48.67000, lng: 1.87528, superficie: 9.78 },
  { name: "La Villeneuve-en-Chevrie", codeInsee: "78668", cp: "78270", canton: "Bonnières-sur-Seine", interco: "CC Les Portes de l'Ile de France", population: 662, lat: 49.01444, lng: 1.52889, superficie: 11.75 },
  { name: "Villennes-sur-Seine", codeInsee: "78672", cp: "78670", canton: "Verneuil-sur-Seine", interco: "CU Grand Paris Seine et Oise", population: 5792, lat: 48.93806, lng: 1.99528, superficie: 5.03 },
  { name: "Villepreux", codeInsee: "78674", cp: "78450", canton: "Saint-Cyr-l'École", interco: "CA de Saint Quentin en Yvelines", population: 11568, lat: 48.83444, lng: 2.01306, superficie: 10.39 },
  { name: "Villette", codeInsee: "78677", cp: "78930", canton: "Bonnières-sur-Seine", interco: "CC du Pays Houdanais (CCPH)", population: 537, lat: 48.92750, lng: 1.69417, superficie: 4.68 },
  { name: "Villiers-le-Mahieu", codeInsee: "78681", cp: "78770", canton: "Aubergenville", interco: "CC Cœur d'Yvelines", population: 872, lat: 48.86139, lng: 1.77361, superficie: 6.88 },
  { name: "Villiers-Saint-Frédéric", codeInsee: "78683", cp: "78640", canton: "Aubergenville", interco: "CC Cœur d'Yvelines", population: 3231, lat: 48.82056, lng: 1.89278, superficie: 5.08 },
  { name: "Viroflay", codeInsee: "78686", cp: "78220", canton: "Versailles-2", interco: "CA Versailles Grand Parc (CAVGP)", population: 16943, lat: 48.80806, lng: 2.17222, superficie: 3.47 },
  { name: "Voisins-le-Bretonneux", codeInsee: "78688", cp: "78960", canton: "Maurepas", interco: "CA de Saint Quentin en Yvelines", population: 10740, lat: 48.75917, lng: 2.05167, superficie: 3.64 },
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
