/**
 * Communes du Val-de-Marne (94) dont le nom commence par K (Le Kremlin-Bicêtre).
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_VAL_DE_MARNE_VILLES_K = [
  { name: "Le Kremlin-Bicêtre", codeInsee: "94043", cp: "94270", canton: "Le Kremlin-Bicêtre", interco: "Métropole du Grand Paris", population: 23678, lat: 48.81083, lng: 2.35667, superficie: 1.53 },
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
