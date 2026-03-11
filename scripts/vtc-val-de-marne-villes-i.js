/**
 * Communes du Val-de-Marne (94) dont le nom commence par I.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_VAL_DE_MARNE_VILLES_I = [
  { name: "Ivry-sur-Seine", codeInsee: "94041", cp: "94200", canton: "Ivry-sur-Seine", interco: "Métropole du Grand Paris", population: 64526, lat: 48.81611, lng: 2.38611, superficie: 6.12 },
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
