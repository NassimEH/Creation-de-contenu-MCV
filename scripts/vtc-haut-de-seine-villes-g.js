/**
 * Communes des Hauts-de-Seine (92) dont le nom commence par G.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_HAUT_DE_SEINE_VILLES_G = [
  { name: "Garches", codeInsee: "92033", cp: "92380", canton: "Saint-Cloud", interco: "Métropole du Grand Paris", population: 17705, lat: 48.84528, lng: 2.18528, superficie: 2.74 },
  { name: "La Garenne-Colombes", codeInsee: "92035", cp: "92250", canton: "Colombes-2", interco: "Métropole du Grand Paris", population: 29828, lat: 48.90889, lng: 2.25250, superficie: 1.79 },
  { name: "Gennevilliers", codeInsee: "92036", cp: "92230", canton: "Gennevilliers", interco: "Métropole du Grand Paris", population: 50874, lat: 48.92861, lng: 2.30028, superficie: 11.63 },
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
