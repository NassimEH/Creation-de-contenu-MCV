/**
 * Communes des Hauts-de-Seine (92) dont le nom commence par F.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_HAUT_DE_SEINE_VILLES_F = [
  { name: "Fontenay-aux-Roses", codeInsee: "92032", cp: "92260", canton: "Châtillon", interco: "Métropole du Grand Paris", population: 24586, lat: 48.79000, lng: 2.29194, superficie: 2.53 },
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
