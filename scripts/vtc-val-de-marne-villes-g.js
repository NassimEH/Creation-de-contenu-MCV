/**
 * Communes du Val-de-Marne (94) dont le nom commence par G.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_VAL_DE_MARNE_VILLES_G = [
  { name: "Gentilly", codeInsee: "94037", cp: "94250", canton: "Le Kremlin-Bicêtre", interco: "Métropole du Grand Paris", population: 18883, lat: 48.81500, lng: 2.33833, superficie: 1.13 },
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
