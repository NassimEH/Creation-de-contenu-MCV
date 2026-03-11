/**
 * Communes du Val-d'Oise (95) dont le nom commence par E.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_VAL_DOISE_VILLES_E = [
  { name: "Eaubonne", codeInsee: "95203", cp: "95600", canton: "Ermont", interco: "CA Val Parisis", population: 25934, lat: 48.98917, lng: 2.27889, superficie: 4.39 },
  { name: "Écouen", codeInsee: "95205", cp: "95440", canton: "Fosses", interco: "CA Roissy Pays de France", population: 7173, lat: 49.01833, lng: 2.38222, superficie: 7.69 },
  { name: "Enghien-les-Bains", codeInsee: "95210", cp: "95880", canton: "Montmorency", interco: "CA Plaine Vallée", population: 11594, lat: 48.96833, lng: 2.31, superficie: 1.76 },
  { name: "Ennery", codeInsee: "95211", cp: "95300", canton: "Pontoise", interco: "CC Sausseron Impressionnistes", population: 2313, lat: 49.07528, lng: 2.10528, superficie: 7.42 },
  { name: "Épiais-lès-Louvres", codeInsee: "95212", cp: "95380", canton: "Goussainville", interco: "CA Roissy Pays de France", population: 141, lat: 49.03056, lng: 2.55778, superficie: 3.43 },
  { name: "Épiais-Rhus", codeInsee: "95213", cp: "95810", canton: "Pontoise", interco: "CC Sausseron Impressionnistes", population: 607, lat: 49.12167, lng: 2.06444, superficie: 10.48 },
  { name: "Épinay-Champlâtreux", codeInsee: "95214", cp: "95270", canton: "Fosses", interco: "CC Carnelle Pays-de-France", population: 58, lat: 49.08472, lng: 2.41528, superficie: 3.61 },
  { name: "Éragny", codeInsee: "95218", cp: "95610", canton: "Cergy-2", interco: "CA de Cergy-Pontoise", population: 18723, lat: 49.02361, lng: 2.09111, superficie: 4.67 },
  { name: "Ermont", codeInsee: "95219", cp: "95120", canton: "Ermont", interco: "CA Val Parisis", population: 29189, lat: 48.98583, lng: 2.2575, superficie: 4.22 },
  { name: "Ézanville", codeInsee: "95229", cp: "95460", canton: "Fosses", interco: "CA Plaine Vallée", population: 9789, lat: 49.02917, lng: 2.36306, superficie: 5.18 },
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
