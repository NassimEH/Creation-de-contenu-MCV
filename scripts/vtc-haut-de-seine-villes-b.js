/**
 * Communes des Hauts-de-Seine (92) dont le nom commence par B.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_HAUT_DE_SEINE_VILLES_B = [
  { name: "Bagneux", codeInsee: "92007", cp: "92220", canton: "Bagneux", interco: "Métropole du Grand Paris", population: 43647, lat: 48.79639, lng: 2.31056, superficie: 4.11 },
  { name: "Bois-Colombes", codeInsee: "92009", cp: "92270", canton: "Colombes-2", interco: "Métropole du Grand Paris", population: 29376, lat: 48.92028, lng: 2.27111, superficie: 1.94 },
  { name: "Boulogne-Billancourt", codeInsee: "92012", cp: "92100", canton: "Boulogne-Billancourt", interco: "Métropole du Grand Paris", population: 120205, lat: 48.83972, lng: 2.24222, superficie: 6.16 },
  { name: "Bourg-la-Reine", codeInsee: "92014", cp: "92340", canton: "Bagneux", interco: "Métropole du Grand Paris", population: 21140, lat: 48.78028, lng: 2.31694, superficie: 1.78 },
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
