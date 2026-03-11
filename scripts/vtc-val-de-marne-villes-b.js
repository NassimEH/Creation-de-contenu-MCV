/**
 * Communes du Val-de-Marne (94) dont le nom commence par B.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_VAL_DE_MARNE_VILLES_B = [
  { name: "Boissy-Saint-Léger", codeInsee: "94004", cp: "94470", canton: "Plateau briard", interco: "Métropole du Grand Paris", population: 17335, lat: 48.74972, lng: 2.51611, superficie: 8.88 },
  { name: "Bonneuil-sur-Marne", codeInsee: "94011", cp: "94380", canton: "Saint-Maur-des-Fossés-2", interco: "Métropole du Grand Paris", population: 18340, lat: 48.77555, lng: 2.48528, superficie: 5.57 },
  { name: "Bry-sur-Marne", codeInsee: "94015", cp: "94360", canton: "Villiers-sur-Marne", interco: "Métropole du Grand Paris", population: 18095, lat: 48.84361, lng: 2.51722, superficie: 3.32 },
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
