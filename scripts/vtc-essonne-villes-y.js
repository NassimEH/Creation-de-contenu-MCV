/**
 * Communes de l'Essonne (91) dont le nom commence par Y.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_ESSONNE_VILLES_Y = [
  { name: "Yerres", codeInsee: "91691", cp: "91330", canton: "Yerres", interco: "CA Val d'Yerres Val de Seine", population: 28349, lat: 48.71861, lng: 2.50611, superficie: 9.90 },
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
