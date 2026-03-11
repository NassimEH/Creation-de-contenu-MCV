/**
 * Communes des Hauts-de-Seine (92) dont le nom commence par V.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_HAUT_DE_SEINE_VILLES_V = [
  { name: "Vanves", codeInsee: "92075", cp: "92170", canton: "Clamart", interco: "Métropole du Grand Paris", population: 28507, lat: 48.82417, lng: 2.28917, superficie: 1.55 },
  { name: "Vaucresson", codeInsee: "92076", cp: "92420", canton: "Saint-Cloud", interco: "Métropole du Grand Paris", population: 8506, lat: 48.84333, lng: 2.15472, superficie: 3.03 },
  { name: "Ville-d'Avray", codeInsee: "92077", cp: "92410", canton: "Saint-Cloud", interco: "Métropole du Grand Paris", population: 10871, lat: 48.82806, lng: 2.19083, superficie: 3.69 },
  { name: "Villeneuve-la-Garenne", codeInsee: "92078", cp: "92390", canton: "Gennevilliers", interco: "Métropole du Grand Paris", population: 25566, lat: 48.93472, lng: 2.32861, superficie: 3.20 },
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
