/**
 * Communes de Seine-Saint-Denis (93) dont le nom commence par I (L'Île-Saint-Denis).
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_SEINE_SAINT_DENIS_VILLES_I = [
  { name: "L'Île-Saint-Denis", codeInsee: "93039", cp: "93450", canton: "Saint-Ouen-sur-Seine", interco: "Métropole du Grand Paris", population: 8682, lat: 48.93833, lng: 2.33806, superficie: 1.78 },
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
