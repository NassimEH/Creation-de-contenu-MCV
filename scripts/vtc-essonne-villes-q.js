/**
 * Communes de l'Essonne (91) dont le nom commence par Q.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_ESSONNE_VILLES_Q = [
  { name: "Quincy-sous-Sénart", codeInsee: "91514", cp: "91480", canton: "Épinay-sous-Sénart", interco: "CA Val d'Yerres Val de Seine", population: 9491, lat: 48.67167, lng: 2.53306, superficie: 5.22 },
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
