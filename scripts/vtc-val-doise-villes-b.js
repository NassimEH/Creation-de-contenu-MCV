/**
 * Communes du Val-d'Oise (95) dont le nom commence par B.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_VAL_DOISE_VILLES_B = [
  { name: "Baillet-en-France", codeInsee: "95042", cp: "95560", canton: "Domont", interco: "CC Carnelle Pays-de-France", population: 1947, lat: 49.06083, lng: 2.29972, superficie: 8.06 },
  { name: "Banthelu", codeInsee: "95046", cp: "95420", canton: "Vauréal", interco: "CC du Vexin-Val de Seine", population: 148, lat: 49.12583, lng: 1.81556, superficie: 8.19 },
  { name: "Beauchamp", codeInsee: "95051", cp: "95250", canton: "Taverny", interco: "CA Val Parisis", population: 9506, lat: 49.01444, lng: 2.19667, superficie: 3.05 },
  { name: "Beaumont-sur-Oise", codeInsee: "95052", cp: "95260", canton: "L'Isle-Adam", interco: "CC du Haut Val d'Oise", population: 9931, lat: 49.14167, lng: 2.29056, superficie: 5.81 },
  { name: "le Bellay-en-Vexin", codeInsee: "95054", cp: "95750", canton: "Pontoise", interco: "CC Vexin Centre", population: 219, lat: 49.15167, lng: 1.8875, superficie: 5.16 },
  { name: "Bellefontaine", codeInsee: "95055", cp: "95270", canton: "Fosses", interco: "CC Carnelle Pays-de-France", population: 471, lat: 49.09722, lng: 2.46667, superficie: 7.57 },
  { name: "Belloy-en-France", codeInsee: "95056", cp: "95270", canton: "Fosses", interco: "CC Carnelle Pays-de-France", population: 2239, lat: 49.08805, lng: 2.37083, superficie: 9.54 },
  { name: "Bernes-sur-Oise", codeInsee: "95058", cp: "95340", canton: "L'Isle-Adam", interco: "CC du Haut Val d'Oise", population: 2703, lat: 49.15861, lng: 2.30194, superficie: 5.51 },
  { name: "Berville", codeInsee: "95059", cp: "95810", canton: "Pontoise", interco: "CC Vexin Centre", population: 370, lat: 49.18972, lng: 2.07167, superficie: 8.6 },
  { name: "Bessancourt", codeInsee: "95060", cp: "95550", canton: "Taverny", interco: "CA Val Parisis", population: 8521, lat: 49.03695, lng: 2.21667, superficie: 6.38 },
  { name: "Béthemont-la-Forêt", codeInsee: "95061", cp: "95840", canton: "Domont", interco: "CC de la Vallée de l'Oise et des Trois Forêts", population: 426, lat: 49.0525, lng: 2.25222, superficie: 3.75 },
  { name: "Bezons", codeInsee: "95063", cp: "95870", canton: "Argenteuil-3", interco: "CA Saint Germain Boucles de Seine", population: 34314, lat: 48.93083, lng: 2.20833, superficie: 4.18 },
  { name: "Boisemont", codeInsee: "95074", cp: "95000", canton: "Cergy-2", interco: "CA de Cergy-Pontoise", population: 883, lat: 49.02389, lng: 2.0075, superficie: 2.02 },
  { name: "Boissy-l'Aillerie", codeInsee: "95078", cp: "95650", canton: "Pontoise", interco: "CC Vexin Centre", population: 2114, lat: 49.07722, lng: 2.03167, superficie: 5.72 },
  { name: "Bonneuil-en-France", codeInsee: "95088", cp: "95500", canton: "Villiers-le-Bel", interco: "CA Roissy Pays de France", population: 1179, lat: 48.97556, lng: 2.43222, superficie: 4.79 },
  { name: "Bouffémont", codeInsee: "95091", cp: "95570", canton: "Domont", interco: "CA Plaine Vallée", population: 6565, lat: 49.04222, lng: 2.2975, superficie: 4.58 },
  { name: "Bouqueval", codeInsee: "95094", cp: "95720", canton: "Villiers-le-Bel", interco: "CA Roissy Pays de France", population: 306, lat: 49.02306, lng: 2.42556, superficie: 2.85 },
  { name: "Bray-et-Lû", codeInsee: "95101", cp: "95710", canton: "Vauréal", interco: "CC du Vexin-Val de Seine", population: 957, lat: 49.13889, lng: 1.66278, superficie: 3.71 },
  { name: "Bréançon", codeInsee: "95102", cp: "95640", canton: "Pontoise", interco: "CC Vexin Centre", population: 425, lat: 49.14194, lng: 2.02278, superficie: 10.71 },
  { name: "Brignancourt", codeInsee: "95110", cp: "95640", canton: "Pontoise", interco: "CC Vexin Centre", population: 243, lat: 49.13694, lng: 1.94472, superficie: 3.11 },
  { name: "Bruyères-sur-Oise", codeInsee: "95116", cp: "95820", canton: "L'Isle-Adam", interco: "CC du Haut Val d'Oise", population: 4907, lat: 49.15694, lng: 2.33111, superficie: 8.88 },
  { name: "Buhy", codeInsee: "95119", cp: "95770", canton: "Vauréal", interco: "CC du Vexin-Val de Seine", population: 327, lat: 49.19472, lng: 1.6925, superficie: 7.01 },
  { name: "Butry-sur-Oise", codeInsee: "95120", cp: "95430", canton: "Saint-Ouen-l'Aumône", interco: "CC Sausseron Impressionnistes", population: 2242, lat: 49.08444, lng: 2.19722, superficie: 2.81 },
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
