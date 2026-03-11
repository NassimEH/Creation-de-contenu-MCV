/**
 * Communes des Hauts-de-Seine (92) dont le nom commence par C.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_HAUT_DE_SEINE_VILLES_C = [
  { name: "Châtenay-Malabry", codeInsee: "92019", cp: "92290", canton: "Châtenay-Malabry", interco: "Métropole du Grand Paris", population: 35490, lat: 48.76805, lng: 2.28111, superficie: 6.37 },
  { name: "Châtillon", codeInsee: "92020", cp: "92320", canton: "Châtillon", interco: "Métropole du Grand Paris", population: 36224, lat: 48.80472, lng: 2.28667, superficie: 2.93 },
  { name: "Chaville", codeInsee: "92022", cp: "92370", canton: "Meudon", interco: "Métropole du Grand Paris", population: 20198, lat: 48.80361, lng: 2.18583, superficie: 3.58 },
  { name: "Clamart", codeInsee: "92023", cp: "92140", canton: "Clamart", interco: "Métropole du Grand Paris", population: 56882, lat: 48.80028, lng: 2.26417, superficie: 8.71 },
  { name: "Clichy", codeInsee: "92024", cp: "92110", canton: "Clichy", interco: "Métropole du Grand Paris", population: 65102, lat: 48.90528, lng: 2.30889, superficie: 3.09 },
  { name: "Colombes", codeInsee: "92025", cp: "92700", canton: "Colombes", interco: "Métropole du Grand Paris", population: 90692, lat: 48.92250, lng: 2.25222, superficie: 7.82 },
  { name: "Courbevoie", codeInsee: "92026", cp: "92400", canton: "Courbevoie", interco: "Métropole du Grand Paris", population: 81945, lat: 48.90000, lng: 2.24361, superficie: 4.15 },
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
