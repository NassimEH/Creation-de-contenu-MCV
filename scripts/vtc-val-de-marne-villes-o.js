/**
 * Communes du Val-de-Marne (94) dont le nom commence par O.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_VAL_DE_MARNE_VILLES_O = [
  { name: "Orly", codeInsee: "94054", cp: "94310", canton: "Orly", interco: "Métropole du Grand Paris", population: 24488, lat: 48.74667, lng: 2.40389, superficie: 6.60 },
  { name: "Ormesson-sur-Marne", codeInsee: "94055", cp: "94490", canton: "Saint-Maur-des-Fossés-2", interco: "Métropole du Grand Paris", population: 10589, lat: 48.78944, lng: 2.53889, superficie: 3.26 },
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
