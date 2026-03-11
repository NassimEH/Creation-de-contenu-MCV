/**
 * Communes du Val-d'Oise (95) dont le nom commence par I.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_VAL_DOISE_VILLES_I = [
  { name: "l'Isle-Adam", codeInsee: "95313", cp: "95290", canton: "L'Isle-Adam", interco: "CC de la Vallée de l'Oise et des Trois Forêts", population: 12302, lat: 49.10944, lng: 2.22167, superficie: 15.76 },
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
