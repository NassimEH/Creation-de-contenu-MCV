/**
 * Communes du Val-de-Marne (94) dont le nom commence par C.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_VAL_DE_MARNE_VILLES_C = [
  { name: "Cachan", codeInsee: "94016", cp: "94230", canton: "Cachan", interco: "Métropole du Grand Paris", population: 30526, lat: 48.79500, lng: 2.32861, superficie: 2.75 },
  { name: "Champigny-sur-Marne", codeInsee: "94017", cp: "94500", canton: "Champigny-sur-Marne", interco: "Métropole du Grand Paris", population: 78367, lat: 48.81861, lng: 2.50750, superficie: 11.28 },
  { name: "Charenton-le-Pont", codeInsee: "94018", cp: "94220", canton: "Charenton-le-Pont", interco: "Métropole du Grand Paris", population: 28756, lat: 48.82361, lng: 2.40556, superficie: 1.84 },
  { name: "Chennevières-sur-Marne", codeInsee: "94019", cp: "94430", canton: "Champigny-sur-Marne-2", interco: "Métropole du Grand Paris", population: 18295, lat: 48.80111, lng: 2.52806, superficie: 5.44 },
  { name: "Chevilly-Larue", codeInsee: "94021", cp: "94550", canton: "Thiais", interco: "Métropole du Grand Paris", population: 19813, lat: 48.77306, lng: 2.35278, superficie: 4.31 },
  { name: "Choisy-le-Roi", codeInsee: "94022", cp: "94600", canton: "Choisy-le-Roi", interco: "Métropole du Grand Paris", population: 46122, lat: 48.76444, lng: 2.40861, superficie: 5.51 },
  { name: "Créteil", codeInsee: "94028", cp: "94000", canton: "Créteil", interco: "Métropole du Grand Paris", population: 92859, lat: 48.79333, lng: 2.46083, superficie: 11.48 },
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
