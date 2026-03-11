/**
 * Communes du Val-d'Oise (95) dont le nom commence par T.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_VAL_DOISE_VILLES_T = [
  { name: "Taverny", codeInsee: "95607", cp: "95150", canton: "Taverny", interco: "CA Val Parisis", population: 27065, lat: 49.02222, lng: 2.22528, superficie: 10.42 },
  { name: "Théméricourt", codeInsee: "95610", cp: "95450", canton: "Vauréal", interco: "CC Vexin Centre", population: 289, lat: 49.08556, lng: 1.89889, superficie: 7.51 },
  { name: "Theuville", codeInsee: "95611", cp: "95810", canton: "Pontoise", interco: "CC Vexin Centre", population: 53, lat: 49.15361, lng: 2.07389, superficie: 5.05 },
  { name: "le Thillay", codeInsee: "95612", cp: "95500", canton: "Villiers-le-Bel", interco: "CA Roissy Pays de France", population: 4575, lat: 49.00611, lng: 2.4725, superficie: 3.98 },
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
