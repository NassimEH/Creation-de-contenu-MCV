/**
 * Communes de Seine-et-Marne (77) dont le nom commence par V.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_SEINE_ET_MARNE_VILLES_V = [
  { name: "Vaires-sur-Marne", codeInsee: "77479", cp: "77360", canton: "Villeparisis", interco: "CA Paris - Vallée de la Marne", population: 13791, lat: 48.87056, lng: 2.64167, superficie: 6.06 },
  { name: "Valence-en-Brie", codeInsee: "77480", cp: "77830", canton: "Nangis", interco: "CC Brie des Rivières et Châteaux", population: 1023, lat: 48.44417, lng: 2.89083, superficie: 10.97 },
  { name: "Vanvillé", codeInsee: "77481", cp: "77370", canton: "Nangis", interco: "CC Brie Nangissienne", population: 186, lat: 48.55556, lng: 3.10806, superficie: 7.57 },
  { name: "Varennes-sur-Seine", codeInsee: "77482", cp: "77130", canton: "Montereau-Fault-Yonne", interco: "CC Pays de Montereau", population: 3724, lat: 48.37500, lng: 2.92667, superficie: 9.95 },
  { name: "Varreddes", codeInsee: "77483", cp: "77910", canton: "Claye-Souilly", interco: "CA du Pays de Meaux", population: 2166, lat: 49.00167, lng: 2.92972, superficie: 8.07 },
  { name: "Vaucourtois", codeInsee: "77484", cp: "77580", canton: "Serris", interco: "CA Coulommiers Pays de Brie", population: 281, lat: 48.89639, lng: 2.95306, superficie: 4.64 },
  { name: "Le Vaudoué", codeInsee: "77485", cp: "77123", canton: "Fontainebleau", interco: "CA du Pays de Fontainebleau", population: 731, lat: 48.35611, lng: 2.52028, superficie: 17.18 },
  { name: "Vaudoy-en-Brie", codeInsee: "77486", cp: "77141", canton: "Fontenay-Trésigny", interco: "CC Val Briard", population: 881, lat: 48.68833, lng: 3.08139, superficie: 27.53 },
  { name: "Vaux-le-Pénil", codeInsee: "77487", cp: "77000", canton: "Melun", interco: "CA Melun Val de Seine", population: 11378, lat: 48.52639, lng: 2.68500, superficie: 11.94 },
  { name: "Vaux-sur-Lunain", codeInsee: "77489", cp: "77710", canton: "Nemours", interco: "CC Gâtinais Val de Loing", population: 232, lat: 48.22583, lng: 2.93806, superficie: 8.49 },
  { name: "Vendrest", codeInsee: "77490", cp: "77440", canton: "La Ferté-sous-Jouarre", interco: "CC du Pays de l'Ourcq", population: 673, lat: 49.04556, lng: 3.09500, superficie: 17.72 },
  { name: "Verdelot", codeInsee: "77492", cp: "77510", canton: "Coulommiers", interco: "CC des Deux Morin", population: 626, lat: 48.87556, lng: 3.36806, superficie: 25.48 },
  { name: "Verneuil-l'Étang", codeInsee: "77493", cp: "77390", canton: "Nangis", interco: "CC Brie Nangissienne", population: 3211, lat: 48.64444, lng: 2.83278, superficie: 7.76 },
  { name: "Vernou-la-Celle-sur-Seine", codeInsee: "77494", cp: "77670", canton: "Montereau-Fault-Yonne", interco: "CC Moret Seine et Loing", population: 2621, lat: 48.38917, lng: 2.84889, superficie: 22.34 },
  { name: "Vert-Saint-Denis", codeInsee: "77495", cp: "77240", canton: "Savigny-le-Temple", interco: "CA Grand Paris Sud Seine Essonne Sénart", population: 9057, lat: 48.56500, lng: 2.61472, superficie: 16.20 },
  { name: "Vieux-Champagne", codeInsee: "77496", cp: "77370", canton: "Nangis", interco: "CC Brie Nangissienne", population: 190, lat: 48.58111, lng: 3.13944, superficie: 8.89 },
  { name: "Vignely", codeInsee: "77498", cp: "77450", canton: "Claye-Souilly", interco: "CA du Pays de Meaux", population: 323, lat: 48.93139, lng: 2.80861, superficie: 3.59 },
  { name: "Ville-Saint-Jacques", codeInsee: "77516", cp: "77130", canton: "Montereau-Fault-Yonne", interco: "CC Moret Seine et Loing", population: 811, lat: 48.34250, lng: 2.90000, superficie: 10.62 },
  { name: "Villebéon", codeInsee: "77500", cp: "77710", canton: "Nemours", interco: "CC Gâtinais Val de Loing", population: 464, lat: 48.20694, lng: 2.94139, superficie: 16.40 },
  { name: "Villecerf", codeInsee: "77501", cp: "77250", canton: "Montereau-Fault-Yonne", interco: "CC Moret Seine et Loing", population: 723, lat: 48.32833, lng: 2.84750, superficie: 10.96 },
  { name: "Villemaréchal", codeInsee: "77504", cp: "77710", canton: "Nemours", interco: "CC Moret Seine et Loing", population: 1067, lat: 48.26667, lng: 2.86806, superficie: 14.24 },
  { name: "Villemareuil", codeInsee: "77505", cp: "77470", canton: "Serris", interco: "CA du Pays de Meaux", population: 383, lat: 48.92111, lng: 2.97333, superficie: 10.72 },
  { name: "Villemer", codeInsee: "77506", cp: "77250", canton: "Nemours", interco: "CC Moret Seine et Loing", population: 766, lat: 48.30028, lng: 2.82528, superficie: 18.63 },
  { name: "Villenauxe-la-Petite", codeInsee: "77507", cp: "77480", canton: "Provins", interco: "CC Bassée-Montois", population: 453, lat: 48.40639, lng: 3.31139, superficie: 20.77 },
  { name: "Villeneuve-le-Comte", codeInsee: "77508", cp: "77174", canton: "Ozoir-la-Ferrière", interco: "CA Val d'Europe Agglomération", population: 1869, lat: 48.81417, lng: 2.83028, superficie: 19.22 },
  { name: "Villeneuve-les-Bordes", codeInsee: "77509", cp: "77154", canton: "Provins", interco: "CC Bassée-Montois", population: 614, lat: 48.48639, lng: 3.04333, superficie: 20.88 },
  { name: "Villeneuve-Saint-Denis", codeInsee: "77510", cp: "77174", canton: "Ozoir-la-Ferrière", interco: "CA Val d'Europe Agglomération", population: 1383, lat: 48.81528, lng: 2.79417, superficie: 7.43 },
  { name: "Villeneuve-sous-Dammartin", codeInsee: "77511", cp: "77230", canton: "Mitry-Mory", interco: "CA Roissy Pays de France", population: 612, lat: 49.03333, lng: 2.64000, superficie: 7.57 },
  { name: "Villeneuve-sur-Bellot", codeInsee: "77512", cp: "77510", canton: "Coulommiers", interco: "CC des Deux Morin", population: 1143, lat: 48.86389, lng: 3.34306, superficie: 9.58 },
  { name: "Villenoy", codeInsee: "77513", cp: "77124", canton: "Claye-Souilly", interco: "CA du Pays de Meaux", population: 5073, lat: 48.94333, lng: 2.86361, superficie: 7.35 },
  { name: "Villeparisis", codeInsee: "77514", cp: "77270", canton: "Villeparisis", interco: "CA Roissy Pays de France", population: 26794, lat: 48.94583, lng: 2.60944, superficie: 8.27 },
  { name: "Villeroy", codeInsee: "77515", cp: "77410", canton: "Claye-Souilly", interco: "CC Plaines et Monts de France", population: 692, lat: 48.98222, lng: 2.78222, superficie: 5.74 },
  { name: "Villevaudé", codeInsee: "77517", cp: "77410", canton: "Villeparisis", interco: "CC Plaines et Monts de France", population: 2114, lat: 48.91639, lng: 2.65361, superficie: 9.93 },
  { name: "Villiers-en-Bière", codeInsee: "77518", cp: "77190", canton: "Fontainebleau", interco: "CA Melun Val de Seine", population: 242, lat: 48.49528, lng: 2.59861, superficie: 10.75 },
  { name: "Villiers-Saint-Georges", codeInsee: "77519", cp: "77560", canton: "Provins", interco: "CC du Provinois", population: 1159, lat: 48.65083, lng: 3.40583, superficie: 33.27 },
  { name: "Villiers-sous-Grez", codeInsee: "77520", cp: "77760", canton: "Fontainebleau", interco: "CC Pays de Nemours", population: 684, lat: 48.32028, lng: 2.64750, superficie: 12.17 },
  { name: "Villiers-sur-Morin", codeInsee: "77521", cp: "77580", canton: "Serris", interco: "CA Coulommiers Pays de Brie", population: 2067, lat: 48.86111, lng: 2.88167, superficie: 6.27 },
  { name: "Villiers-sur-Seine", codeInsee: "77522", cp: "77114", canton: "Provins", interco: "CC Bassée-Montois", population: 285, lat: 48.45500, lng: 3.37611, superficie: 11.38 },
  { name: "Villuis", codeInsee: "77523", cp: "77480", canton: "Provins", interco: "CC Bassée-Montois", population: 263, lat: 48.41083, lng: 3.35556, superficie: 9.21 },
  { name: "Vimpelles", codeInsee: "77524", cp: "77520", canton: "Provins", interco: "CC Bassée-Montois", population: 521, lat: 48.43972, lng: 3.16583, superficie: 11.37 },
  { name: "Vinantes", codeInsee: "77525", cp: "77230", canton: "Mitry-Mory", interco: "CC Plaines et Monts de France", population: 380, lat: 49.00917, lng: 2.73611, superficie: 5.33 },
  { name: "Vincy-Manœuvre", codeInsee: "77526", cp: "77139", canton: "La Ferté-sous-Jouarre", interco: "CC du Pays de l'Ourcq", population: 274, lat: 49.07833, lng: 2.96417, superficie: 4.99 },
  { name: "Voinsles", codeInsee: "77527", cp: "77540", canton: "Fontenay-Trésigny", interco: "CC Val Briard", population: 573, lat: 48.69167, lng: 3.00528, superficie: 28.50 },
  { name: "Voisenon", codeInsee: "77528", cp: "77950", canton: "Melun", interco: "CA Melun Val de Seine", population: 1169, lat: 48.57139, lng: 2.66500, superficie: 3.42 },
  { name: "Voulangis", codeInsee: "77529", cp: "77580", canton: "Serris", interco: "CA Coulommiers Pays de Brie", population: 1504, lat: 48.85139, lng: 2.89917, superficie: 9.61 },
  { name: "Voulton", codeInsee: "77530", cp: "77560", canton: "Provins", interco: "CC du Provinois", population: 298, lat: 48.61833, lng: 3.33417, superficie: 26.20 },
  { name: "Voulx", codeInsee: "77531", cp: "77940", canton: "Nemours", interco: "CC Pays de Montereau", population: 1622, lat: 48.28083, lng: 2.96972, superficie: 12.53 },
  { name: "Vulaines-lès-Provins", codeInsee: "77532", cp: "77160", canton: "Provins", interco: "CC du Provinois", population: 75, lat: 48.55972, lng: 3.21889, superficie: 10.76 },
  { name: "Vulaines-sur-Seine", codeInsee: "77533", cp: "77870", canton: "Fontainebleau", interco: "CA du Pays de Fontainebleau", population: 2720, lat: 48.43195, lng: 2.76361, superficie: 4.50 },
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
