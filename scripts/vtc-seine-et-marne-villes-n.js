/**
 * Communes de Seine-et-Marne (77) dont le nom commence par N.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_SEINE_ET_MARNE_VILLES_N = [
  { name: "Nandy", codeInsee: "77326", cp: "77176", canton: "Saint-Fargeau-Ponthierry", interco: "CA Grand Paris Sud Seine Essonne Sénart", population: 6322, lat: 48.58167, lng: 2.56500, superficie: 8.54 },
  { name: "Nangis", codeInsee: "77327", cp: "77370", canton: "Nangis", interco: "CC Brie Nangissienne", population: 8883, lat: 48.55944, lng: 3.01139, superficie: 24.21 },
  { name: "Nanteau-sur-Essonne", codeInsee: "77328", cp: "77760", canton: "Fontainebleau", interco: "CC Pays de Nemours", population: 410, lat: 48.31583, lng: 2.41722, superficie: 12.93 },
  { name: "Nanteau-sur-Lunain", codeInsee: "77329", cp: "77710", canton: "Nemours", interco: "CC Moret Seine et Loing", population: 697, lat: 48.25611, lng: 2.81056, superficie: 13.36 },
  { name: "Nanteuil-lès-Meaux", codeInsee: "77330", cp: "77100", canton: "La Ferté-sous-Jouarre", interco: "CA du Pays de Meaux", population: 7054, lat: 48.92250, lng: 2.90667, superficie: 7.53 },
  { name: "Nanteuil-sur-Marne", codeInsee: "77331", cp: "77730", canton: "La Ferté-sous-Jouarre", interco: "CA Coulommiers Pays de Brie", population: 413, lat: 48.98139, lng: 3.21972, superficie: 1.31 },
  { name: "Nantouillet", codeInsee: "77332", cp: "77230", canton: "Mitry-Mory", interco: "CC Plaines et Monts de France", population: 303, lat: 49.00222, lng: 2.70417, superficie: 5.16 },
  { name: "Nemours", codeInsee: "77333", cp: "77140", canton: "Nemours", interco: "CC Pays de Nemours", population: 13118, lat: 48.26972, lng: 2.69556, superficie: 10.13 },
  { name: "Neufmoutiers-en-Brie", codeInsee: "77336", cp: "77610", canton: "Fontenay-Trésigny", interco: "CC Val Briard", population: 1277, lat: 48.76750, lng: 2.83111, superficie: 16.19 },
  { name: "Noisiel", codeInsee: "77337", cp: "77186", canton: "Champs-sur-Marne", interco: "CA Paris - Vallée de la Marne", population: 15927, lat: 48.85500, lng: 2.62806, superficie: 4.25 },
  { name: "Noisy-Rudignon", codeInsee: "77338", cp: "77940", canton: "Nemours", interco: "CC Pays de Montereau", population: 592, lat: 48.33556, lng: 2.93083, superficie: 4.25 },
  { name: "Noisy-sur-École", codeInsee: "77339", cp: "77123", canton: "Fontainebleau", interco: "CA du Pays de Fontainebleau", population: 1822, lat: 48.36722, lng: 2.50778, superficie: 29.93 },
  { name: "Nonville", codeInsee: "77340", cp: "77140", canton: "Nemours", interco: "CC Moret Seine et Loing", population: 596, lat: 48.28194, lng: 2.79333, superficie: 11.59 },
  { name: "Noyen-sur-Seine", codeInsee: "77341", cp: "77114", canton: "Provins", interco: "CC Bassée-Montois", population: 376, lat: 48.45167, lng: 3.35111, superficie: 12.34 },
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
