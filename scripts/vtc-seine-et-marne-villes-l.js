/**
 * Communes de Seine-et-Marne (77) dont le nom commence par L.
 * Même structure que villes-a à villes-j pour les pages VTC [Ville].
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_SEINE_ET_MARNE_VILLES_L = [
  { name: "Lagny-sur-Marne", codeInsee: "77243", cp: "77400", canton: "Lagny-sur-Marne", interco: "CA Marne et Gondoire", population: 21433, lat: 48.87278, lng: 2.70972, superficie: 5.73 },
  { name: "Larchant", codeInsee: "77244", cp: "77760", canton: "Nemours", interco: "CC Pays de Nemours", population: 729, lat: 48.28417, lng: 2.59611, superficie: 29.33 },
  { name: "Laval-en-Brie", codeInsee: "77245", cp: "77148", canton: "Montereau-Fault-Yonne", interco: "CC Pays de Montereau", population: 394, lat: 48.42389, lng: 2.99778, superficie: 20.26 },
  { name: "Léchelle", codeInsee: "77246", cp: "77171", canton: "Provins", interco: "CC du Provinois", population: 577, lat: 48.57722, lng: 3.39111, superficie: 21.92 },
  { name: "Lescherolles", codeInsee: "77247", cp: "77320", canton: "Coulommiers", interco: "CC des Deux Morin", population: 450, lat: 48.76333, lng: 3.34611, superficie: 10.94 },
  { name: "Lesches", codeInsee: "77248", cp: "77450", canton: "Lagny-sur-Marne", interco: "CA Marne et Gondoire", population: 767, lat: 48.90750, lng: 2.77917, superficie: 4.07 },
  { name: "Lésigny", codeInsee: "77249", cp: "77150", canton: "Ozoir-la-Ferrière", interco: "CC Les Portes Briardes Entre Villes et Forêts", population: 7015, lat: 48.74417, lng: 2.61639, superficie: 10.09 },
  { name: "Leudon-en-Brie", codeInsee: "77250", cp: "77320", canton: "Coulommiers", interco: "CC des Deux Morin", population: 167, lat: 48.73417, lng: 3.27139, superficie: 4.35 },
  { name: "Lieusaint", codeInsee: "77251", cp: "77127", canton: "Combs-la-Ville", interco: "CA Grand Paris Sud Seine Essonne Sénart", population: 14096, lat: 48.63139, lng: 2.55250, superficie: 11.98 },
  { name: "Limoges-Fourches", codeInsee: "77252", cp: "77550", canton: "Fontenay-Trésigny", interco: "CA Melun Val de Seine", population: 599, lat: 48.62695, lng: 2.66556, superficie: 7.99 },
  { name: "Lissy", codeInsee: "77253", cp: "77550", canton: "Fontenay-Trésigny", interco: "CA Melun Val de Seine", population: 343, lat: 48.62695, lng: 2.69611, superficie: 6.72 },
  { name: "Liverdy-en-Brie", codeInsee: "77254", cp: "77220", canton: "Fontenay-Trésigny", interco: "CC Val Briard", population: 1366, lat: 48.70028, lng: 2.77611, superficie: 9.16 },
  { name: "Livry-sur-Seine", codeInsee: "77255", cp: "77000", canton: "Melun", interco: "CA Melun Val de Seine", population: 2224, lat: 48.51222, lng: 2.68583, superficie: 5.41 },
  { name: "Lizines", codeInsee: "77256", cp: "77650", canton: "Provins", interco: "CC Bassée-Montois", population: 178, lat: 48.52639, lng: 3.17944, superficie: 5.81 },
  { name: "Lizy-sur-Ourcq", codeInsee: "77257", cp: "77440", canton: "La Ferté-sous-Jouarre", interco: "CC du Pays de l'Ourcq", population: 3575, lat: 49.02417, lng: 3.02222, superficie: 11.34 },
  { name: "Lognes", codeInsee: "77258", cp: "77185", canton: "Champs-sur-Marne", interco: "CA Paris - Vallée de la Marne", population: 14678, lat: 48.83528, lng: 2.63000, superficie: 4.04 },
  { name: "Longperrier", codeInsee: "77259", cp: "77230", canton: "Mitry-Mory", interco: "CA Roissy Pays de France", population: 2911, lat: 49.05222, lng: 2.65944, superficie: 4.60 },
  { name: "Longueville", codeInsee: "77260", cp: "77650", canton: "Provins", interco: "CC du Provinois", population: 1802, lat: 48.51389, lng: 3.24639, superficie: 5.64 },
  { name: "Lorrez-le-Bocage-Préaux", codeInsee: "77261", cp: "77710", canton: "Nemours", interco: "CC Gâtinais Val de Loing", population: 1244, lat: 48.23639, lng: 2.90167, superficie: 19.84 },
  { name: "Louan-Villegruis-Fontaine", codeInsee: "77262", cp: "77560", canton: "Provins", interco: "CC du Provinois", population: 492, lat: 48.62556, lng: 3.48000, superficie: 38.13 },
  { name: "Luisetaines", codeInsee: "77263", cp: "77520", canton: "Provins", interco: "CC Bassée-Montois", population: 231, lat: 48.46722, lng: 3.18111, superficie: 5.10 },
  { name: "Lumigny-Nesles-Ormeaux", codeInsee: "77264", cp: "77540", canton: "Fontenay-Trésigny", interco: "CC Val Briard", population: 1482, lat: 48.73750, lng: 2.95278, superficie: 36.46 },
  { name: "Luzancy", codeInsee: "77265", cp: "77138", canton: "La Ferté-sous-Jouarre", interco: "CA Coulommiers Pays de Brie", population: 1048, lat: 48.97222, lng: 3.18750, superficie: 6.70 },
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
