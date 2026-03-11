/**
 * Communes du Val-de-Marne (94) dont le nom commence par S.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_VAL_DE_MARNE_VILLES_S = [
  { name: "Saint-Mandé", codeInsee: "94067", cp: "94160", canton: "Vincennes", interco: "Métropole du Grand Paris", population: 21223, lat: 48.84528, lng: 2.41472, superficie: 0.89 },
  { name: "Saint-Maur-des-Fossés", codeInsee: "94068", cp: "94100", canton: "Saint-Maur-des-Fossés", interco: "Métropole du Grand Paris", population: 76010, lat: 48.79944, lng: 2.50500, superficie: 11.23 },
  { name: "Saint-Maurice", codeInsee: "94069", cp: "94410", canton: "Charenton-le-Pont", interco: "Métropole du Grand Paris", population: 14411, lat: 48.82222, lng: 2.42222, superficie: 1.43 },
  { name: "Santeny", codeInsee: "94070", cp: "94440", canton: "Plateau briard", interco: "Métropole du Grand Paris", population: 3958, lat: 48.72556, lng: 2.57333, superficie: 10.03 },
  { name: "Sucy-en-Brie", codeInsee: "94071", cp: "94370", canton: "Saint-Maur-des-Fossés-2", interco: "Métropole du Grand Paris", population: 27593, lat: 48.76778, lng: 2.51833, superficie: 10.40 },
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
