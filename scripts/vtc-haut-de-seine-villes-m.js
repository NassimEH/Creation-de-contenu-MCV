/**
 * Communes des Hauts-de-Seine (92) dont le nom commence par M.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_HAUT_DE_SEINE_VILLES_M = [
  { name: "Malakoff", codeInsee: "92046", cp: "92240", canton: "Montrouge", interco: "Métropole du Grand Paris", population: 30183, lat: 48.81694, lng: 2.29444, superficie: 2.06 },
  { name: "Marnes-la-Coquette", codeInsee: "92047", cp: "92430", canton: "Saint-Cloud", interco: "Métropole du Grand Paris", population: 1758, lat: 48.83055, lng: 2.17917, superficie: 3.49 },
  { name: "Meudon", codeInsee: "92048", cp: "92190", canton: "Meudon", interco: "Métropole du Grand Paris", population: 46722, lat: 48.81222, lng: 2.23333, superficie: 9.96 },
  { name: "Montrouge", codeInsee: "92049", cp: "92120", canton: "Montrouge", interco: "Métropole du Grand Paris", population: 46273, lat: 48.81611, lng: 2.32083, superficie: 2.14 },
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
