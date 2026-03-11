/**
 * Communes du Val-de-Marne (94) dont le nom commence par A.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_VAL_DE_MARNE_VILLES_A = [
  { name: "Ablon-sur-Seine", codeInsee: "94001", cp: "94480", canton: "Orly", interco: "Métropole du Grand Paris", population: 6029, lat: 48.72778, lng: 2.41694, superficie: 1.12 },
  { name: "Alfortville", codeInsee: "94002", cp: "94140", canton: "Alfortville", interco: "Métropole du Grand Paris", population: 45569, lat: 48.80528, lng: 2.41778, superficie: 3.70 },
  { name: "Arcueil", codeInsee: "94003", cp: "94110", canton: "Cachan", interco: "Métropole du Grand Paris", population: 21868, lat: 48.80333, lng: 2.33083, superficie: 2.34 },
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
