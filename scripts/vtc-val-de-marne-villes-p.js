/**
 * Communes du Val-de-Marne (94) dont le nom commence par P.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_VAL_DE_MARNE_VILLES_P = [
  { name: "Périgny", codeInsee: "94056", cp: "94520", canton: "Plateau briard", interco: "Métropole du Grand Paris", population: 2744, lat: 48.69556, lng: 2.55056, superficie: 2.75 },
  { name: "Le Perreux-sur-Marne", codeInsee: "94058", cp: "94170", canton: "Nogent-sur-Marne", interco: "Métropole du Grand Paris", population: 34654, lat: 48.84111, lng: 2.50528, superficie: 3.96 },
  { name: "Le Plessis-Trévise", codeInsee: "94059", cp: "94420", canton: "Villiers-sur-Marne", interco: "Métropole du Grand Paris", population: 21096, lat: 48.81250, lng: 2.56694, superficie: 4.35 },
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
