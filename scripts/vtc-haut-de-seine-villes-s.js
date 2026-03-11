/**
 * Communes des Hauts-de-Seine (92) dont le nom commence par S.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_HAUT_DE_SEINE_VILLES_S = [
  { name: "Saint-Cloud", codeInsee: "92064", cp: "92210", canton: "Saint-Cloud", interco: "Métropole du Grand Paris", population: 29859, lat: 48.84833, lng: 2.21111, superficie: 7.52 },
  { name: "Sceaux", codeInsee: "92071", cp: "92330", canton: "Châtenay-Malabry", interco: "Métropole du Grand Paris", population: 20740, lat: 48.77806, lng: 2.29750, superficie: 3.69 },
  { name: "Sèvres", codeInsee: "92072", cp: "92310", canton: "Boulogne-Billancourt-2", interco: "Métropole du Grand Paris", population: 22782, lat: 48.82361, lng: 2.21444, superficie: 3.93 },
  { name: "Suresnes", codeInsee: "92073", cp: "92150", canton: "Nanterre-2", interco: "Métropole du Grand Paris", population: 48932, lat: 48.87056, lng: 2.22472, superficie: 3.78 },
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
