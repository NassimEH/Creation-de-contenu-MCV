/**
 * Communes de Seine-Saint-Denis (93) dont le nom commence par A.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_SEINE_SAINT_DENIS_VILLES_A = [
  { name: "Aubervilliers", codeInsee: "93001", cp: "93300", canton: "Aubervilliers", interco: "Métropole du Grand Paris", population: 89489, lat: 48.91306, lng: 2.38306, superficie: 5.78 },
  { name: "Aulnay-sous-Bois", codeInsee: "93005", cp: "93600", canton: "Aulnay-sous-Bois", interco: "Métropole du Grand Paris", population: 86360, lat: 48.93861, lng: 2.49056, superficie: 16.20 },
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
