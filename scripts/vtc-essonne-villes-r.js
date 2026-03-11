/**
 * Communes de l'Essonne (91) dont le nom commence par R.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_ESSONNE_VILLES_R = [
  { name: "Richarville", codeInsee: "91519", cp: "91410", canton: "Dourdan", interco: "CC le Dourdannais en Hurepoix (CCDH)", population: 388, lat: 48.47139, lng: 2.00111, superficie: 10.57 },
  { name: "Ris-Orangis", codeInsee: "91521", cp: "91130", canton: "Ris-Orangis", interco: "CA Grand Paris Sud Seine Essonne Sénart", population: 30283, lat: 48.65500, lng: 2.41361, superficie: 8.40 },
  { name: "Roinville", codeInsee: "91525", cp: "91410", canton: "Dourdan", interco: "CC le Dourdannais en Hurepoix (CCDH)", population: 1314, lat: 48.53111, lng: 2.04639, superficie: 13.50 },
  { name: "Roinvilliers", codeInsee: "91526", cp: "91150", canton: "Étampes", interco: "CA Etampois Sud Essonne", population: 110, lat: 48.35639, lng: 2.24167, superficie: 7.23 },
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
