/**
 * Communes de Seine-Saint-Denis (93) dont le nom commence par T.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_SEINE_SAINT_DENIS_VILLES_T = [
  { name: "Tremblay-en-France", codeInsee: "93073", cp: "93290", canton: "Tremblay-en-France", interco: "Métropole du Grand Paris", population: 38210, lat: 48.98333, lng: 2.55667, superficie: 22.65 },
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
