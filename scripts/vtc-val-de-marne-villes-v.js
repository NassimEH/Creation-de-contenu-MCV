/**
 * Communes du Val-de-Marne (94) dont le nom commence par V.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_VAL_DE_MARNE_VILLES_V = [
  { name: "Valenton", codeInsee: "94074", cp: "94460", canton: "Villeneuve-Saint-Georges", interco: "Métropole du Grand Paris", population: 14453, lat: 48.74694, lng: 2.46583, superficie: 5.26 },
  { name: "Villecresnes", codeInsee: "94075", cp: "94440", canton: "Plateau briard", interco: "Métropole du Grand Paris", population: 11650, lat: 48.72278, lng: 2.53806, superficie: 5.66 },
  { name: "Villejuif", codeInsee: "94076", cp: "94800", canton: "Villejuif", interco: "Métropole du Grand Paris", population: 58142, lat: 48.79000, lng: 2.36000, superficie: 5.48 },
  { name: "Villeneuve-le-Roi", codeInsee: "94077", cp: "94290", canton: "Orly", interco: "Métropole du Grand Paris", population: 20871, lat: 48.73583, lng: 2.42861, superficie: 8.52 },
  { name: "Villeneuve-Saint-Georges", codeInsee: "94078", cp: "94190", canton: "Villeneuve-Saint-Georges", interco: "Métropole du Grand Paris", population: 36170, lat: 48.73500, lng: 2.45389, superficie: 8.08 },
  { name: "Villiers-sur-Marne", codeInsee: "94079", cp: "94350", canton: "Villiers-sur-Marne", interco: "Métropole du Grand Paris", population: 32547, lat: 48.82972, lng: 2.54361, superficie: 4.36 },
  { name: "Vincennes", codeInsee: "94080", cp: "94300", canton: "Vincennes", interco: "Métropole du Grand Paris", population: 48368, lat: 48.84945, lng: 2.44000, superficie: 1.91 },
  { name: "Vitry-sur-Seine", codeInsee: "94081", cp: "94400", canton: "Vitry-sur-Seine", interco: "Métropole du Grand Paris", population: 95282, lat: 48.79445, lng: 2.38889, superficie: 11.72 },
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
