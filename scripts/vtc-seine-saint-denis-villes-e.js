/**
 * Communes de Seine-Saint-Denis (93) dont le nom commence par E.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_SEINE_SAINT_DENIS_VILLES_E = [
  { name: "Épinay-sur-Seine", codeInsee: "93031", cp: "93800", canton: "Épinay-sur-Seine", interco: "Métropole du Grand Paris", population: 53564, lat: 48.95861, lng: 2.30361, superficie: 4.60 },
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
