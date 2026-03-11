/**
 * Communes du Val-d'Oise (95) dont le nom commence par H.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_VAL_DOISE_VILLES_H = [
  { name: "Haravilliers", codeInsee: "95298", cp: "95640", canton: "Pontoise", interco: "CC Vexin Centre", population: 582, lat: 49.17278, lng: 2.05583, superficie: 11.03 },
  { name: "Haute-Isle", codeInsee: "95301", cp: "95780", canton: "Vauréal", interco: "CC du Vexin-Val de Seine", population: 291, lat: 49.08444, lng: 1.66056, superficie: 2.52 },
  { name: "le Heaulme", codeInsee: "95303", cp: "95640", canton: "Pontoise", interco: "CC Vexin Centre", population: 206, lat: 49.165, lng: 2.00083, superficie: 1.92 },
  { name: "Hédouville", codeInsee: "95304", cp: "95690", canton: "Saint-Ouen-l'Aumône", interco: "CC Sausseron Impressionnistes", population: 280, lat: 49.15139, lng: 2.16972, superficie: 5.27 },
  { name: "Herblay", codeInsee: "95306", cp: "95220", canton: "Herblay-sur-Seine", interco: "CA Val Parisis", population: 31818, lat: 48.99389, lng: 2.16028, superficie: 12.63 },
  { name: "Hérouville", codeInsee: "95308", cp: "95300", canton: "Saint-Ouen-l'Aumône", interco: "CC Sausseron Impressionnistes", population: 569, lat: 49.10056, lng: 2.13306, superficie: 8.49 },
  { name: "Hodent", codeInsee: "95309", cp: "95420", canton: "Vauréal", interco: "CC du Vexin-Val de Seine", population: 225, lat: 49.14472, lng: 1.77, superficie: 4.43 },
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
