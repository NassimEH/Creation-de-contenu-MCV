/**
 * Communes du Val-de-Marne (94) dont le nom commence par J.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_VAL_DE_MARNE_VILLES_J = [
  { name: "Joinville-le-Pont", codeInsee: "94042", cp: "94340", canton: "Charenton-le-Pont", interco: "Métropole du Grand Paris", population: 20784, lat: 48.82333, lng: 2.47500, superficie: 2.29 },
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
