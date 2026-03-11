/**
 * Communes de Seine-Saint-Denis (93) dont le nom commence par N.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_SEINE_SAINT_DENIS_VILLES_N = [
  { name: "Neuilly-Plaisance", codeInsee: "93049", cp: "93360", canton: "Villemomble", interco: "Métropole du Grand Paris", population: 21914, lat: 48.86278, lng: 2.50167, superficie: 3.41 },
  { name: "Neuilly-sur-Marne", codeInsee: "93050", cp: "93330", canton: "Gagny", interco: "Métropole du Grand Paris", population: 38799, lat: 48.85944, lng: 2.53333, superficie: 7.00 },
  { name: "Noisy-le-Grand", codeInsee: "93051", cp: "93160", canton: "Noisy-le-Grand", interco: "Métropole du Grand Paris", population: 71632, lat: 48.85000, lng: 2.55250, superficie: 13.03 },
  { name: "Noisy-le-Sec", codeInsee: "93053", cp: "93130", canton: "Bobigny", interco: "Métropole du Grand Paris", population: 45915, lat: 48.89278, lng: 2.46250, superficie: 5.11 },
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
