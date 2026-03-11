/**
 * Communes du Val-d'Oise (95) dont le nom commence par D.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_VAL_DOISE_VILLES_D = [
  { name: "Deuil-la-Barre", codeInsee: "95197", cp: "95170", canton: "Deuil-la-Barre", interco: "CA Plaine Vallée", population: 22903, lat: 48.97611, lng: 2.3275, superficie: 3.75 },
  { name: "Domont", codeInsee: "95199", cp: "95330", canton: "Domont", interco: "CA Plaine Vallée", population: 16075, lat: 49.03222, lng: 2.33444, superficie: 8.53 },
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
