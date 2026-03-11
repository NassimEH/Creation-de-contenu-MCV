/**
 * Communes du Val-d'Oise (95) dont le nom commence par W.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_VAL_DOISE_VILLES_W = [
  { name: "Wy-dit-Joli-Village", codeInsee: "95690", cp: "95420", canton: "Vauréal", interco: "CC du Vexin-Val de Seine", population: 329, lat: 49.10389, lng: 1.835, superficie: 8.44 },
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
