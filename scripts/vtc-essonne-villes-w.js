/**
 * Communes de l'Essonne (91) dont le nom commence par W.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_ESSONNE_VILLES_W = [
  { name: "Wissous", codeInsee: "91689", cp: "91320", canton: "Savigny-sur-Orge", interco: "CA Communauté Paris-Saclay", population: 6924, lat: 48.73667, lng: 2.32750, superficie: 9.10 },
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
