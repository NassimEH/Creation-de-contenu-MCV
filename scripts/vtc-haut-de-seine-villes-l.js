/**
 * Communes des Hauts-de-Seine (92) dont le nom commence par L.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_HAUT_DE_SEINE_VILLES_L = [
  { name: "Levallois-Perret", codeInsee: "92044", cp: "92300", canton: "Levallois-Perret", interco: "Métropole du Grand Paris", population: 68412, lat: 48.89639, lng: 2.29028, superficie: 2.39 },
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
