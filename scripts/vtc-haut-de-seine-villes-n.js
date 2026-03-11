/**
 * Communes des Hauts-de-Seine (92) dont le nom commence par N.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_HAUT_DE_SEINE_VILLES_N = [
  { name: "Nanterre", codeInsee: "92050", cp: "92000", canton: "Nanterre", interco: "Métropole du Grand Paris", population: 98119, lat: 48.89056, lng: 2.20889, superficie: 12.22 },
  { name: "Neuilly-sur-Seine", codeInsee: "92051", cp: "92200", canton: "Neuilly-sur-Seine", interco: "Métropole du Grand Paris", population: 59200, lat: 48.88861, lng: 2.27083, superficie: 3.69 },
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
