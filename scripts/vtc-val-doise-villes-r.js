/**
 * Communes du Val-d'Oise (95) dont le nom commence par R.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_VAL_DOISE_VILLES_R = [
  { name: "Roissy-en-France", codeInsee: "95527", cp: "95700", canton: "Villiers-le-Bel", interco: "CA Roissy Pays de France", population: 2682, lat: 49.00306, lng: 2.51556, superficie: 14.25 },
  { name: "Ronquerolles", codeInsee: "95529", cp: "95340", canton: "L'Isle-Adam", interco: "CC du Haut Val d'Oise", population: 890, lat: 49.16611, lng: 2.22167, superficie: 4.74 },
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
