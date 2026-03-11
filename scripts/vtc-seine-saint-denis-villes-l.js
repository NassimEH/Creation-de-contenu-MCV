/**
 * Communes de Seine-Saint-Denis (93) dont le nom commence par L.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_SEINE_SAINT_DENIS_VILLES_L = [
  { name: "Les Lilas", codeInsee: "93045", cp: "93260", canton: "Bagnolet", interco: "Métropole du Grand Paris", population: 23262, lat: 48.88083, lng: 2.42333, superficie: 1.26 },
  { name: "Livry-Gargan", codeInsee: "93046", cp: "93190", canton: "Livry-Gargan", interco: "Métropole du Grand Paris", population: 46507, lat: 48.92028, lng: 2.52083, superficie: 7.35 },
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
