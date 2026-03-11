/**
 * Communes de l'Essonne (91) dont le nom commence par D.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_ESSONNE_VILLES_D = [
  { name: "D'Huison-Longueville", codeInsee: "91198", cp: "91590", canton: "Étampes", interco: "CC du Val d'Essonne (CCVE)", population: 1532, lat: 48.46278, lng: 2.32000, superficie: 9.99 },
  { name: "Dannemois", codeInsee: "91195", cp: "91490", canton: "Mennecy", interco: "CC des 2 Vallées", population: 854, lat: 48.45250, lng: 2.47611, superficie: 8.49 },
  { name: "Dourdan", codeInsee: "91200", cp: "91410", canton: "Dourdan", interco: "CC le Dourdannais en Hurepoix (CCDH)", population: 11068, lat: 48.52833, lng: 2.01250, superficie: 30.74 },
  { name: "Draveil", codeInsee: "91201", cp: "91210", canton: "Draveil", interco: "CA Val d'Yerres Val de Seine", population: 29824, lat: 48.68639, lng: 2.41139, superficie: 15.95 },
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
