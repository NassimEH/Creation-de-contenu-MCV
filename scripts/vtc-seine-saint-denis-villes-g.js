/**
 * Communes de Seine-Saint-Denis (93) dont le nom commence par G.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_SEINE_SAINT_DENIS_VILLES_G = [
  { name: "Gagny", codeInsee: "93032", cp: "93220", canton: "Gagny", interco: "Métropole du Grand Paris", population: 40790, lat: 48.88445, lng: 2.53444, superficie: 6.96 },
  { name: "Gournay-sur-Marne", codeInsee: "93033", cp: "93460", canton: "Noisy-le-Grand", interco: "Métropole du Grand Paris", population: 7101, lat: 48.85972, lng: 2.57528, superficie: 1.66 },
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
