/**
 * Communes de Seine-Saint-Denis (93) dont le nom commence par M.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_SEINE_SAINT_DENIS_VILLES_M = [
  { name: "Montfermeil", codeInsee: "93047", cp: "93370", canton: "Tremblay-en-France", interco: "Métropole du Grand Paris", population: 28257, lat: 48.89472, lng: 2.55583, superficie: 5.45 },
  { name: "Montreuil", codeInsee: "93048", cp: "93100", canton: "Montreuil", interco: "Métropole du Grand Paris", population: 110758, lat: 48.86500, lng: 2.44667, superficie: 8.92 },
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
