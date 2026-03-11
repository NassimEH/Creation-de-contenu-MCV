/**
 * Communes du Val-de-Marne (94) dont le nom commence par M.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_VAL_DE_MARNE_VILLES_M = [
  { name: "Maisons-Alfort", codeInsee: "94046", cp: "94700", canton: "Maisons-Alfort", interco: "Métropole du Grand Paris", population: 57422, lat: 48.80667, lng: 2.43750, superficie: 5.32 },
  { name: "Mandres-les-Roses", codeInsee: "94047", cp: "94520", canton: "Plateau briard", interco: "Métropole du Grand Paris", population: 4876, lat: 48.70111, lng: 2.54306, superficie: 3.40 },
  { name: "Marolles-en-Brie", codeInsee: "94048", cp: "94440", canton: "Plateau briard", interco: "Métropole du Grand Paris", population: 4685, lat: 48.73333, lng: 2.55222, superficie: 4.53 },
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
