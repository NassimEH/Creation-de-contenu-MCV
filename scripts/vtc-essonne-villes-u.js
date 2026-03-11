/**
 * Communes de l'Essonne (91) dont le nom commence par U (Les Ulis).
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_ESSONNE_VILLES_U = [
  { name: "Les Ulis", codeInsee: "91692", cp: "91940", canton: "Les Ulis", interco: "CA Communauté Paris-Saclay", population: 25633, lat: 48.68278, lng: 2.16528, superficie: 5.39 },
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
