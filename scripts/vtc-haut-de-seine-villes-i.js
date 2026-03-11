/**
 * Communes des Hauts-de-Seine (92) dont le nom commence par I.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_HAUT_DE_SEINE_VILLES_I = [
  { name: "Issy-les-Moulineaux", codeInsee: "92040", cp: "92130", canton: "Issy-les-Moulineaux", interco: "Métropole du Grand Paris", population: 67695, lat: 48.82444, lng: 2.27167, superficie: 4.15 },
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
