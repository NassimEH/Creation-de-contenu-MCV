/**
 * Communes du Val-d'Oise (95) dont le nom commence par O.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_VAL_DOISE_VILLES_O = [
  { name: "Omerville", codeInsee: "95462", cp: "95420", canton: "Vauréal", interco: "CC du Vexin-Val de Seine", population: 325, lat: 49.14111, lng: 1.72, superficie: 12.34 },
  { name: "Osny", codeInsee: "95476", cp: "95520", canton: "Cergy-1", interco: "CA de Cergy-Pontoise", population: 17471, lat: 49.05917, lng: 2.05611, superficie: 12.3 },
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
