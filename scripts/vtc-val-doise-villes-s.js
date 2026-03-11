/**
 * Communes du Val-d'Oise (95) dont le nom commence par S.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_VAL_DOISE_VILLES_S = [
  { name: "Sagy", codeInsee: "95535", cp: "95450", canton: "Vauréal", interco: "CC Vexin Centre", population: 1100, lat: 49.04889, lng: 1.95444, superficie: 10.56 },
  { name: "Saint-Brice-sous-Forêt", codeInsee: "95539", cp: "95350", canton: "Deuil-la-Barre", interco: "CA Plaine Vallée", population: 15209, lat: 48.99805, lng: 2.35389, superficie: 6.01 },
  { name: "Saint-Clair-sur-Epte", codeInsee: "95541", cp: "95770", canton: "Vauréal", interco: "CC du Vexin-Val de Seine", population: 979, lat: 49.20917, lng: 1.68194, superficie: 12.35 },
  { name: "Saint-Cyr-en-Arthies", codeInsee: "95543", cp: "95510", canton: "Vauréal", interco: "CC du Vexin-Val de Seine", population: 237, lat: 49.06055, lng: 1.74417, superficie: 3.87 },
  { name: "Saint-Gervais", codeInsee: "95554", cp: "95420", canton: "Vauréal", interco: "CC du Vexin-Val de Seine", population: 883, lat: 49.16917, lng: 1.77139, superficie: 13.49 },
  { name: "Saint-Gratien", codeInsee: "95555", cp: "95210", canton: "Argenteuil-1", interco: "CA Plaine Vallée", population: 21297, lat: 48.97472, lng: 2.28667, superficie: 2.73 },
  { name: "Saint-Leu-la-Forêt", codeInsee: "95563", cp: "95320", canton: "Domont", interco: "CA Val Parisis", population: 16047, lat: 49.01444, lng: 2.24389, superficie: 5.31 },
  { name: "Saint-Martin-du-Tertre", codeInsee: "95566", cp: "95270", canton: "Fosses", interco: "CC Carnelle Pays-de-France", population: 2662, lat: 49.10695, lng: 2.34861, superficie: 11.74 },
  { name: "Saint-Ouen-l'Aumône", codeInsee: "95572", cp: "95310", canton: "Saint-Ouen-l'Aumône", interco: "CA de Cergy-Pontoise", population: 25614, lat: 49.04194, lng: 2.11222, superficie: 13.94 },
  { name: "Saint-Prix", codeInsee: "95574", cp: "95390", canton: "Domont", interco: "CA Plaine Vallée", population: 7588, lat: 49.00917, lng: 2.26278, superficie: 7.91 },
  { name: "Saint-Witz", codeInsee: "95580", cp: "95470", canton: "Goussainville", interco: "CA Roissy Pays de France", population: 2511, lat: 49.09195, lng: 2.56889, superficie: 7.56 },
  { name: "Sannois", codeInsee: "95582", cp: "95110", canton: "Argenteuil-1", interco: "CA Val Parisis", population: 26772, lat: 48.97472, lng: 2.25583, superficie: 4.78 },
  { name: "Santeuil", codeInsee: "95584", cp: "95640", canton: "Pontoise", interco: "CC Vexin Centre", population: 660, lat: 49.12528, lng: 1.95444, superficie: 5.35 },
  { name: "Sarcelles", codeInsee: "95585", cp: "95200", canton: "Sarcelles", interco: "CA Roissy Pays de France", population: 58576, lat: 48.99972, lng: 2.3775, superficie: 8.4 },
  { name: "Seraincourt", codeInsee: "95592", cp: "95450", canton: "Vauréal", interco: "CC Vexin Centre", population: 1310, lat: 49.03556, lng: 1.86806, superficie: 11.33 },
  { name: "Seugy", codeInsee: "95594", cp: "95270", canton: "Fosses", interco: "CC Carnelle Pays-de-France", population: 1039, lat: 49.11945, lng: 2.39333, superficie: 1.7 },
  { name: "Soisy-sous-Montmorency", codeInsee: "95598", cp: "95230", canton: "Montmorency", interco: "CA Plaine Vallée", population: 18068, lat: 48.98778, lng: 2.30111, superficie: 3.96 },
  { name: "Survilliers", codeInsee: "95604", cp: "95470", canton: "Goussainville", interco: "CA Roissy Pays de France", population: 4154, lat: 49.09667, lng: 2.54333, superficie: 5.41 },
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
