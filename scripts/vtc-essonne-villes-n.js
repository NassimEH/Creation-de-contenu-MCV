/**
 * Communes de l'Essonne (91) dont le nom commence par N.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_ESSONNE_VILLES_N = [
  { name: "Nainville-les-Roches", codeInsee: "91441", cp: "91750", canton: "Mennecy", interco: "CC du Val d'Essonne (CCVE)", population: 521, lat: 48.50611, lng: 2.49556, superficie: 6.01 },
  { name: "La Norville", codeInsee: "91457", cp: "91290", canton: "Arpajon", interco: "CA Coeur d'Essonne Agglomération", population: 4308, lat: 48.58194, lng: 2.26167, superficie: 4.52 },
  { name: "Nozay", codeInsee: "91458", cp: "91620", canton: "Les Ulis", interco: "CA Communauté Paris-Saclay", population: 4465, lat: 48.66000, lng: 2.24194, superficie: 7.40 },
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
