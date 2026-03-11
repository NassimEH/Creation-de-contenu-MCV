/**
 * Communes du Val-d'Oise (95) dont le nom commence par N.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_VAL_DOISE_VILLES_N = [
  { name: "Nerville-la-Forêt", codeInsee: "95445", cp: "95590", canton: "L'Isle-Adam", interco: "CC de la Vallée de l'Oise et des Trois Forêts", population: 779, lat: 49.08861, lng: 2.27778, superficie: 6.71 },
  { name: "Nesles-la-Vallée", codeInsee: "95446", cp: "95690", canton: "Saint-Ouen-l'Aumône", interco: "CC Sausseron Impressionnistes", population: 1823, lat: 49.12806, lng: 2.17139, superficie: 13.57 },
  { name: "Neuilly-en-Vexin", codeInsee: "95447", cp: "95640", canton: "Pontoise", interco: "CC Vexin Centre", population: 238, lat: 49.1675, lng: 1.97722, superficie: 2.97 },
  { name: "Neuville-sur-Oise", codeInsee: "95450", cp: "95000", canton: "Cergy-2", interco: "CA de Cergy-Pontoise", population: 2089, lat: 49.01333, lng: 2.06306, superficie: 4.28 },
  { name: "Nointel", codeInsee: "95452", cp: "95590", canton: "L'Isle-Adam", interco: "CC du Haut Val d'Oise", population: 887, lat: 49.12778, lng: 2.2925, superficie: 3.06 },
  { name: "Noisy-sur-Oise", codeInsee: "95456", cp: "95270", canton: "L'Isle-Adam", interco: "CC du Haut Val d'Oise", population: 582, lat: 49.135, lng: 2.33167, superficie: 3.78 },
  { name: "Nucourt", codeInsee: "95459", cp: "95420", canton: "Pontoise", interco: "CC Vexin Centre", population: 719, lat: 49.15889, lng: 1.85444, superficie: 7.81 },
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
