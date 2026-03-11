/**
 * Communes des Hauts-de-Seine (92) dont le nom commence par A.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_HAUT_DE_SEINE_VILLES_A = [
  { name: "Antony", codeInsee: "92002", cp: "92160", canton: "Antony", interco: "Métropole du Grand Paris", population: 64026, lat: 48.75306, lng: 2.29833, superficie: 9.60 },
  { name: "Asnières-sur-Seine", codeInsee: "92004", cp: "92600", canton: "Asnières-sur-Seine", interco: "Métropole du Grand Paris", population: 91457, lat: 48.91250, lng: 2.28139, superficie: 4.86 },
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
