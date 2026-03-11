/**
 * Communes de Seine-Saint-Denis (93) dont le nom commence par S.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_SEINE_SAINT_DENIS_VILLES_S = [
  { name: "Saint-Denis", codeInsee: "93066", cp: "93200", canton: "Saint-Denis", interco: "Métropole du Grand Paris", population: 148907, lat: 48.93056, lng: 2.35556, superficie: 12.38 },
  { name: "Saint-Ouen", codeInsee: "93070", cp: "93400", canton: "Saint-Ouen-sur-Seine", interco: "Métropole du Grand Paris", population: 53041, lat: 48.90917, lng: 2.33722, superficie: 4.26 },
  { name: "Sevran", codeInsee: "93071", cp: "93270", canton: "Sevran", interco: "Métropole du Grand Paris", population: 51640, lat: 48.94056, lng: 2.52389, superficie: 7.28 },
  { name: "Stains", codeInsee: "93072", cp: "93240", canton: "Saint-Denis-2", interco: "Métropole du Grand Paris", population: 40600, lat: 48.95306, lng: 2.37611, superficie: 5.36 },
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
