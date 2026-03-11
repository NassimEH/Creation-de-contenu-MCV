/**
 * Communes de Seine-et-Marne (77) dont le nom commence par T.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_SEINE_ET_MARNE_VILLES_T = [
  { name: "Tancrou", codeInsee: "77460", cp: "77440", canton: "La Ferté-sous-Jouarre", interco: "CC du Pays de l'Ourcq", population: 330, lat: 49.00167, lng: 3.05083, superficie: 12.17 },
  { name: "Thénisy", codeInsee: "77461", cp: "77520", canton: "Provins", interco: "CC Bassée-Montois", population: 305, lat: 48.48889, lng: 3.17806, superficie: 5.35 },
  { name: "Thieux", codeInsee: "77462", cp: "77230", canton: "Mitry-Mory", interco: "CA Roissy Pays de France", population: 905, lat: 49.00972, lng: 2.66806, superficie: 12.03 },
  { name: "Thomery", codeInsee: "77463", cp: "77810", canton: "Montereau-Fault-Yonne", interco: "CC Moret Seine et Loing", population: 3417, lat: 48.40944, lng: 2.78667, superficie: 3.73 },
  { name: "Thorigny-sur-Marne", codeInsee: "77464", cp: "77400", canton: "Lagny-sur-Marne", interco: "CA Marne et Gondoire", population: 10405, lat: 48.88556, lng: 2.71667, superficie: 5.15 },
  { name: "Thoury-Férottes", codeInsee: "77465", cp: "77940", canton: "Nemours", interco: "CC Pays de Montereau", population: 653, lat: 48.29056, lng: 2.94333, superficie: 16.58 },
  { name: "Tigeaux", codeInsee: "77466", cp: "77163", canton: "Serris", interco: "CA Coulommiers Pays de Brie", population: 399, lat: 48.82750, lng: 2.90111, superficie: 6.13 },
  { name: "La Tombe", codeInsee: "77467", cp: "77130", canton: "Provins", interco: "CC Bassée-Montois", population: 201, lat: 48.38778, lng: 3.09083, superficie: 7.91 },
  { name: "Torcy", codeInsee: "77468", cp: "77200", canton: "Torcy", interco: "CA Paris - Vallée de la Marne", population: 22939, lat: 48.85111, lng: 2.65000, superficie: 6.15 },
  { name: "Touquin", codeInsee: "77469", cp: "77131", canton: "Coulommiers", interco: "CA Coulommiers Pays de Brie", population: 1228, lat: 48.73583, lng: 3.01250, superficie: 11.76 },
  { name: "Tournan-en-Brie", codeInsee: "77470", cp: "77220", canton: "Ozoir-la-Ferrière", interco: "CC Les Portes Briardes Entre Villes et Forêts", population: 8324, lat: 48.73944, lng: 2.76750, superficie: 15.49 },
  { name: "Tousson", codeInsee: "77471", cp: "77123", canton: "Fontainebleau", interco: "CA du Pays de Fontainebleau", population: 338, lat: 48.34667, lng: 2.45806, superficie: 13.28 },
  { name: "La Trétoire", codeInsee: "77472", cp: "77510", canton: "Coulommiers", interco: "CC des Deux Morin", population: 467, lat: 48.87361, lng: 3.25194, superficie: 9.39 },
  { name: "Treuzy-Levelay", codeInsee: "77473", cp: "77710", canton: "Nemours", interco: "CC Moret Seine et Loing", population: 440, lat: 48.27694, lng: 2.80278, superficie: 14.11 },
  { name: "Trilbardou", codeInsee: "77474", cp: "77450", canton: "Claye-Souilly", interco: "CA du Pays de Meaux", population: 692, lat: 48.94194, lng: 2.80556, superficie: 8.03 },
  { name: "Trilport", codeInsee: "77475", cp: "77470", canton: "La Ferté-sous-Jouarre", interco: "CA du Pays de Meaux", population: 5107, lat: 48.95750, lng: 2.94833, superficie: 10.94 },
  { name: "Trocy-en-Multien", codeInsee: "77476", cp: "77440", canton: "La Ferté-sous-Jouarre", interco: "CC du Pays de l'Ourcq", population: 230, lat: 49.04222, lng: 2.96278, superficie: 7.50 },
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
