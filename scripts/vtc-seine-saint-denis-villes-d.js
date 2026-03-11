/**
 * Communes de Seine-Saint-Denis (93) dont le nom commence par D.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_SEINE_SAINT_DENIS_VILLES_D = [
  { name: "Drancy", codeInsee: "93029", cp: "93700", canton: "Drancy", interco: "Métropole du Grand Paris", population: 71312, lat: 48.92361, lng: 2.44972, superficie: 7.82 },
  { name: "Dugny", codeInsee: "93030", cp: "93440", canton: "La Courneuve", interco: "Métropole du Grand Paris", population: 11723, lat: 48.95444, lng: 2.41500, superficie: 3.82 },
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
