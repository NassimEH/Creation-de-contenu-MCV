/**
 * Communes du Val-de-Marne (94) dont le nom commence par L.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_VAL_DE_MARNE_VILLES_L = [
  { name: "Limeil-Brévannes", codeInsee: "94044", cp: "94450", canton: "Villeneuve-Saint-Georges", interco: "Métropole du Grand Paris", population: 27806, lat: 48.74694, lng: 2.47917, superficie: 6.99 },
  { name: "La Queue-en-Brie", codeInsee: "94060", cp: "94510", canton: "Plateau briard", interco: "Métropole du Grand Paris", population: 12074, lat: 48.78639, lng: 2.57889, superficie: 9.35 },
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
