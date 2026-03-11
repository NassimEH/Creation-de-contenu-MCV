/**
 * Communes de Seine-et-Marne (77) dont le nom commence par P.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_SEINE_ET_MARNE_VILLES_P = [
  { name: "Paley", codeInsee: "77353", cp: "77710", canton: "Nemours", interco: "CC Moret Seine et Loing", population: 481, lat: 48.24055, lng: 2.86139, superficie: 9.26 },
  { name: "Pamfou", codeInsee: "77354", cp: "77830", canton: "Nangis", interco: "CC Brie des Rivières et Châteaux", population: 966, lat: 48.46222, lng: 2.87194, superficie: 10.45 },
  { name: "Paroy", codeInsee: "77355", cp: "77520", canton: "Provins", interco: "CC Bassée-Montois", population: 184, lat: 48.47944, lng: 3.20083, superficie: 4.30 },
  { name: "Passy-sur-Seine", codeInsee: "77356", cp: "77480", canton: "Provins", interco: "CC Bassée-Montois", population: 46, lat: 48.42500, lng: 3.34944, superficie: 4.57 },
  { name: "Pécy", codeInsee: "77357", cp: "77970", canton: "Fontenay-Trésigny", interco: "CC Val Briard", population: 844, lat: 48.65667, lng: 3.07917, superficie: 21.16 },
  { name: "Penchard", codeInsee: "77358", cp: "77124", canton: "Claye-Souilly", interco: "CA du Pays de Meaux", population: 1357, lat: 48.98611, lng: 2.86056, superficie: 4.31 },
  { name: "Perthes", codeInsee: "77359", cp: "77930", canton: "Fontainebleau", interco: "CA du Pays de Fontainebleau", population: 2074, lat: 48.47778, lng: 2.55361, superficie: 12.24 },
  { name: "Pézarches", codeInsee: "77360", cp: "77131", canton: "Coulommiers", interco: "CA Coulommiers Pays de Brie", population: 404, lat: 48.73750, lng: 2.99306, superficie: 9.02 },
  { name: "Pierre-Levée", codeInsee: "77361", cp: "77580", canton: "La Ferté-sous-Jouarre", interco: "CA Coulommiers Pays de Brie", population: 474, lat: 48.89972, lng: 3.03833, superficie: 12.95 },
  { name: "Le Pin", codeInsee: "77363", cp: "77181", canton: "Villeparisis", interco: "CC Plaines et Monts de France", population: 1528, lat: 48.91444, lng: 2.62972, superficie: 6.71 },
  { name: "Le Plessis-aux-Bois", codeInsee: "77364", cp: "77165", canton: "Claye-Souilly", interco: "CC Plaines et Monts de France", population: 255, lat: 49.00250, lng: 2.76944, superficie: 3.41 },
  { name: "Le Plessis-Feu-Aussoux", codeInsee: "77365", cp: "77540", canton: "Fontenay-Trésigny", interco: "CC Val Briard", population: 606, lat: 48.71611, lng: 3.03444, superficie: 5.60 },
  { name: "Le Plessis-l'Évêque", codeInsee: "77366", cp: "77165", canton: "Claye-Souilly", interco: "CC Plaines et Monts de France", population: 291, lat: 49.00722, lng: 2.78528, superficie: 3.56 },
  { name: "Le Plessis-Placy", codeInsee: "77367", cp: "77440", canton: "La Ferté-sous-Jouarre", interco: "CC du Pays de l'Ourcq", population: 296, lat: 49.05722, lng: 2.98944, superficie: 8.18 },
  { name: "Poigny", codeInsee: "77368", cp: "77160", canton: "Provins", interco: "CC du Provinois", population: 505, lat: 48.53889, lng: 3.28333, superficie: 5.96 },
  { name: "Poincy", codeInsee: "77369", cp: "77470", canton: "La Ferté-sous-Jouarre", interco: "CA du Pays de Meaux", population: 776, lat: 48.96972, lng: 2.93639, superficie: 6.42 },
  { name: "Poligny", codeInsee: "77370", cp: "77167", canton: "Nemours", interco: "CC Gâtinais Val de Loing", population: 802, lat: 48.22417, lng: 2.74583, superficie: 27.23 },
  { name: "Pommeuse", codeInsee: "77371", cp: "77515", canton: "Fontenay-Trésigny", interco: "CA Coulommiers Pays de Brie", population: 3039, lat: 48.81722, lng: 3.01722, superficie: 12.85 },
  { name: "Pomponne", codeInsee: "77372", cp: "77400", canton: "Lagny-sur-Marne", interco: "CA Marne et Gondoire", population: 4149, lat: 48.88083, lng: 2.67917, superficie: 7.37 },
  { name: "Pontault-Combault", codeInsee: "77373", cp: "77340", canton: "Pontault-Combault", interco: "CA Paris - Vallée de la Marne", population: 38941, lat: 48.80222, lng: 2.60694, superficie: 13.60 },
  { name: "Pontcarré", codeInsee: "77374", cp: "77135", canton: "Ozoir-la-Ferrière", interco: "CA Marne et Gondoire", population: 2149, lat: 48.80000, lng: 2.70528, superficie: 9.61 },
  { name: "Précy-sur-Marne", codeInsee: "77376", cp: "77410", canton: "Claye-Souilly", interco: "CC Plaines et Monts de France", population: 760, lat: 48.93083, lng: 2.77528, superficie: 4.86 },
  { name: "Presles-en-Brie", codeInsee: "77377", cp: "77220", canton: "Fontenay-Trésigny", interco: "CC Val Briard", population: 2342, lat: 48.71583, lng: 2.74222, superficie: 17.45 },
  { name: "Pringy", codeInsee: "77378", cp: "77310", canton: "Saint-Fargeau-Ponthierry", interco: "CA Melun Val de Seine", population: 3861, lat: 48.52194, lng: 2.55972, superficie: 4.13 },
  { name: "Provins", codeInsee: "77379", cp: "77160", canton: "Provins", interco: "CC du Provinois", population: 11824, lat: 48.56194, lng: 3.30083, superficie: 14.79 },
  { name: "Puisieux", codeInsee: "77380", cp: "77139", canton: "La Ferté-sous-Jouarre", interco: "CC du Pays de l'Ourcq", population: 319, lat: 49.06583, lng: 2.91667, superficie: 9.25 },
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
