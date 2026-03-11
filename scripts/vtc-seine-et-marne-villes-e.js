/**
 * Communes de Seine-et-Marne (77) dont le nom commence par E ou É.
 * Même structure que villes-a / villes-b / villes-c pour les pages VTC [Ville].
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_SEINE_ET_MARNE_VILLES_E = [
  { name: "Échouboulains", codeInsee: "77164", cp: "77830", canton: "Nangis", interco: "CC Brie des Rivières et Châteaux", population: 557, lat: 48.46472, lng: 2.94611, superficie: 20.96 },
  { name: "Les Écrennes", codeInsee: "77165", cp: "77820", canton: "Nangis", interco: "CC Brie des Rivières et Châteaux", population: 619, lat: 48.50444, lng: 2.85833, superficie: 18.54 },
  { name: "Égligny", codeInsee: "77167", cp: "77126", canton: "Provins", interco: "CC Bassée-Montois", population: 313, lat: 48.42694, lng: 3.12083, superficie: 16.62 },
  { name: "Égreville", codeInsee: "77168", cp: "77620", canton: "Nemours", interco: "CC Gâtinais Val de Loing", population: 2164, lat: 48.17556, lng: 2.87278, superficie: 31.67 },
  { name: "Émerainville", codeInsee: "77169", cp: "77184", canton: "Pontault-Combault", interco: "CA Paris - Vallée de la Marne", population: 7536, lat: 48.81250, lng: 2.62028, superficie: 5.33 },
  { name: "Esbly", codeInsee: "77171", cp: "77450", canton: "Serris", interco: "CA Val d'Europe Agglomération", population: 6237, lat: 48.90667, lng: 2.81250, superficie: 3.12 },
  { name: "Esmans", codeInsee: "77172", cp: "77940", canton: "Montereau-Fault-Yonne", interco: "CC Pays de Montereau", population: 904, lat: 48.34917, lng: 2.97694, superficie: 17.81 },
  { name: "Étrépilly", codeInsee: "77173", cp: "77139", canton: "La Ferté-sous-Jouarre", interco: "CC du Pays de l'Ourcq", population: 813, lat: 49.03472, lng: 2.93222, superficie: 13.34 },
  { name: "Everly", codeInsee: "77174", cp: "77157", canton: "Provins", interco: "CC Bassée-Montois", population: 570, lat: 48.46639, lng: 3.25083, superficie: 8.80 },
  { name: "Évry-Grégy-sur-Yerre", codeInsee: "77175", cp: "77166", canton: "Fontenay-Trésigny", interco: "CC Brie des Rivières et Châteaux", population: 3236, lat: 48.65278, lng: 2.63500, superficie: 19.13 },
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
