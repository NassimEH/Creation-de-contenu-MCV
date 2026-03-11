/**
 * Communes du Val-d'Oise (95) dont le nom commence par A.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_VAL_DOISE_VILLES_A = [
  { name: "Ableiges", codeInsee: "95002", cp: "95450", canton: "Pontoise", interco: "CC Vexin Centre", population: 1109, lat: 49.08861, lng: 1.98222, superficie: 7.88 },
  { name: "Aincourt", codeInsee: "95008", cp: "95510", canton: "Vauréal", interco: "CC du Vexin-Val de Seine", population: 870, lat: 49.0725, lng: 1.77361, superficie: 10.09 },
  { name: "Ambleville", codeInsee: "95011", cp: "95710", canton: "Vauréal", interco: "CC du Vexin-Val de Seine", population: 390, lat: 49.15, lng: 1.69944, superficie: 8.02 },
  { name: "Amenucourt", codeInsee: "95012", cp: "95510", canton: "Vauréal", interco: "CC du Vexin-Val de Seine", population: 208, lat: 49.10639, lng: 1.64083, superficie: 8.8 },
  { name: "Andilly", codeInsee: "95014", cp: "95580", canton: "Montmorency", interco: "CA Plaine Vallée", population: 2691, lat: 49.00333, lng: 2.29972, superficie: 2.75 },
  { name: "Argenteuil", codeInsee: "95018", cp: "95100", canton: "Argenteuil", interco: "Métropole du Grand Paris", population: 107135, lat: 48.95972, lng: 2.23972, superficie: 17.36 },
  { name: "Arnouville-lès-Gonesse", codeInsee: "95019", cp: "95400", canton: "Garges-lès-Gonesse", interco: "CA Roissy Pays de France", population: 14898, lat: 48.9925, lng: 2.41694, superficie: 2.92 },
  { name: "Arronville", codeInsee: "95023", cp: "95810", canton: "Pontoise", interco: "CC Sausseron Impressionnistes", population: 619, lat: 49.17972, lng: 2.115, superficie: 16.03 },
  { name: "Arthies", codeInsee: "95024", cp: "95420", canton: "Vauréal", interco: "CC du Vexin-Val de Seine", population: 267, lat: 49.09555, lng: 1.79167, superficie: 7.42 },
  { name: "Asnières-sur-Oise", codeInsee: "95026", cp: "95270", canton: "L'Isle-Adam", interco: "CC Carnelle Pays-de-France", population: 3128, lat: 49.13139, lng: 2.35667, superficie: 14.2 },
  { name: "Attainville", codeInsee: "95028", cp: "95570", canton: "Fosses", interco: "CA Plaine Vallée", population: 1834, lat: 49.05611, lng: 2.34694, superficie: 7.24 },
  { name: "Auvers-sur-Oise", codeInsee: "95039", cp: "95430", canton: "Saint-Ouen-l'Aumône", interco: "CC Sausseron Impressionnistes", population: 6820, lat: 49.07083, lng: 2.16972, superficie: 12.82 },
  { name: "Avernes", codeInsee: "95040", cp: "95450", canton: "Vauréal", interco: "CC Vexin Centre", population: 866, lat: 49.085, lng: 1.87389, superficie: 12.52 },
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
