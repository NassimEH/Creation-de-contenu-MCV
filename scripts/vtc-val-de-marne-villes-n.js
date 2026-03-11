/**
 * Communes du Val-de-Marne (94) dont le nom commence par N.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_VAL_DE_MARNE_VILLES_N = [
  { name: "Nogent-sur-Marne", codeInsee: "94052", cp: "94130", canton: "Nogent-sur-Marne", interco: "Métropole du Grand Paris", population: 32998, lat: 48.83833, lng: 2.48333, superficie: 2.79 },
  { name: "Noiseau", codeInsee: "94053", cp: "94880", canton: "Plateau briard", interco: "Métropole du Grand Paris", population: 4619, lat: 48.77667, lng: 2.55111, superficie: 4.58 },
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
