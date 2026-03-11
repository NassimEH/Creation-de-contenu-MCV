/**
 * Communes de Seine-et-Marne (77) dont le nom commence par H.
 * Même structure que villes-a à villes-g pour les pages VTC [Ville].
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_SEINE_ET_MARNE_VILLES_H = [
  { name: "La Haute-Maison", codeInsee: "77225", cp: "77580", canton: "Serris", interco: "CA Coulommiers Pays de Brie", population: 342, lat: 48.88194, lng: 3.00250, superficie: 12.95 },
  { name: "Hautefeuille", codeInsee: "77224", cp: "77515", canton: "Coulommiers", interco: "CA Coulommiers Pays de Brie", population: 254, lat: 48.76611, lng: 2.96833, superficie: 9.85 },
  { name: "Héricy", codeInsee: "77226", cp: "77850", canton: "Fontainebleau", interco: "CA du Pays de Fontainebleau", population: 2511, lat: 48.44667, lng: 2.76250, superficie: 10.73 },
  { name: "Hermé", codeInsee: "77227", cp: "77114", canton: "Provins", interco: "CC Bassée-Montois", population: 634, lat: 48.48167, lng: 3.34389, superficie: 16.00 },
  { name: "Hondevilliers", codeInsee: "77228", cp: "77510", canton: "Coulommiers", interco: "CC des Deux Morin", population: 260, lat: 48.89944, lng: 3.30917, superficie: 5.55 },
  { name: "La Houssaye-en-Brie", codeInsee: "77229", cp: "77610", canton: "Fontenay-Trésigny", interco: "CC Val Briard", population: 1703, lat: 48.75389, lng: 2.87417, superficie: 12.42 },
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
