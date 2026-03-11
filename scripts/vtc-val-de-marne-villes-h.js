/**
 * Communes du Val-de-Marne (94) dont le nom commence par H (L'Haÿ-les-Roses).
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_VAL_DE_MARNE_VILLES_H = [
  { name: "L'Haÿ-les-Roses", codeInsee: "94038", cp: "94240", canton: "L'Haÿ-les-Roses", interco: "Métropole du Grand Paris", population: 31338, lat: 48.77694, lng: 2.33778, superficie: 3.68 },
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
