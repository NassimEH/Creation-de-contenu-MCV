/**
 * Communes du Val-d'Oise (95) dont le nom commence par F.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_VAL_DOISE_VILLES_F = [
  { name: "Fontenay-en-Parisis", codeInsee: "95241", cp: "95190", canton: "Fosses", interco: "CA Roissy Pays de France", population: 2220, lat: 49.05389, lng: 2.45028, superficie: 10.82 },
  { name: "Fosses", codeInsee: "95250", cp: "95470", canton: "Fosses", interco: "CA Roissy Pays de France", population: 10249, lat: 49.09528, lng: 2.48778, superficie: 3.64 },
  { name: "Franconville", codeInsee: "95252", cp: "95130", canton: "Franconville", interco: "CA Val Parisis", population: 38024, lat: 48.99222, lng: 2.22778, superficie: 6.22 },
  { name: "Frémainville", codeInsee: "95253", cp: "95450", canton: "Vauréal", interco: "CC Vexin Centre", population: 502, lat: 49.06556, lng: 1.86861, superficie: 5.64 },
  { name: "Frémécourt", codeInsee: "95254", cp: "95830", canton: "Pontoise", interco: "CC Vexin Centre", population: 535, lat: 49.11889, lng: 2.00139, superficie: 4.31 },
  { name: "Frépillon", codeInsee: "95256", cp: "95740", canton: "Saint-Ouen-l'Aumône", interco: "CA Val Parisis", population: 3327, lat: 49.04972, lng: 2.2075, superficie: 3.42 },
  { name: "Frouville", codeInsee: "95258", cp: "95690", canton: "Saint-Ouen-l'Aumône", interco: "CC Sausseron Impressionnistes", population: 347, lat: 49.14694, lng: 2.15056, superficie: 7.45 },
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
