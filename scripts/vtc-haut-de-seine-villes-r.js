/**
 * Communes des Hauts-de-Seine (92) dont le nom commence par R.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_HAUT_DE_SEINE_VILLES_R = [
  { name: "Rueil-Malmaison", codeInsee: "92063", cp: "92500", canton: "Rueil-Malmaison", interco: "Métropole du Grand Paris", population: 80842, lat: 48.87167, lng: 2.19278, superficie: 14.63 },
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
