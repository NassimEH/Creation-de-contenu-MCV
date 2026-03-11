/**
 * Communes des Hauts-de-Seine (92) dont le nom commence par P.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_HAUT_DE_SEINE_VILLES_P = [
  { name: "Le Plessis-Robinson", codeInsee: "92060", cp: "92350", canton: "Châtenay-Malabry", interco: "Métropole du Grand Paris", population: 28893, lat: 48.78305, lng: 2.26250, superficie: 3.46 },
  { name: "Puteaux", codeInsee: "92062", cp: "92800", canton: "Courbevoie-2", interco: "Métropole du Grand Paris", population: 44198, lat: 48.88528, lng: 2.23917, superficie: 3.20 },
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
