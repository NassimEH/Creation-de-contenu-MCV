/**
 * Communes de l'Essonne (91) dont le nom commence par I.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_ESSONNE_VILLES_I = [
  { name: "Igny", codeInsee: "91312", cp: "91430", canton: "Palaiseau", interco: "CA Communauté Paris-Saclay", population: 10571, lat: 48.73000, lng: 2.22472, superficie: 3.88 },
  { name: "Itteville", codeInsee: "91315", cp: "91760", canton: "Mennecy", interco: "CC du Val d'Essonne (CCVE)", population: 6674, lat: 48.51556, lng: 2.34167, superficie: 12.31 },
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
