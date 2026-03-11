/**
 * Communes de l'Essonne (91) dont le nom commence par B.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_ESSONNE_VILLES_B = [
  { name: "Ballainvilliers", codeInsee: "91044", cp: "91160", canton: "Longjumeau", interco: "CA Communauté Paris-Saclay", population: 4838, lat: 48.67694, lng: 2.29278, superficie: 3.98 },
  { name: "Ballancourt-sur-Essonne", codeInsee: "91045", cp: "91610", canton: "Mennecy", interco: "CC du Val d'Essonne (CCVE)", population: 7795, lat: 48.52500, lng: 2.38500, superficie: 11.39 },
  { name: "Baulne", codeInsee: "91047", cp: "91590", canton: "Mennecy", interco: "CC du Val d'Essonne (CCVE)", population: 1468, lat: 48.49472, lng: 2.36083, superficie: 8.14 },
  { name: "Bièvres", codeInsee: "91064", cp: "91570", canton: "Gif-sur-Yvette", interco: "CA Versailles Grand Parc (CAVGP)", population: 4700, lat: 48.75528, lng: 2.21639, superficie: 9.69 },
  { name: "Blandy", codeInsee: "91067", cp: "91150", canton: "Étampes", interco: "CA Etampois Sud Essonne", population: 115, lat: 48.31361, lng: 2.25722, superficie: 7.89 },
  { name: "Boigneville", codeInsee: "91069", cp: "91720", canton: "Mennecy", interco: "CC des 2 Vallées", population: 376, lat: 48.33556, lng: 2.37222, superficie: 15.86 },
  { name: "Bois-Herpin", codeInsee: "91075", cp: "91150", canton: "Étampes", interco: "CA Etampois Sud Essonne", population: 83, lat: 48.36917, lng: 2.23472, superficie: 3.90 },
  { name: "Boissy-la-Rivière", codeInsee: "91079", cp: "91690", canton: "Étampes", interco: "CA Etampois Sud Essonne", population: 533, lat: 48.37556, lng: 2.15361, superficie: 12.52 },
  { name: "Boissy-le-Cutté", codeInsee: "91080", cp: "91590", canton: "Étampes", interco: "CC Entre Juine et Renarde (CCEJR)", population: 1343, lat: 48.47194, lng: 2.28333, superficie: 4.61 },
  { name: "Boissy-le-Sec", codeInsee: "91081", cp: "91870", canton: "Étampes", interco: "CA Etampois Sud Essonne", population: 693, lat: 48.47889, lng: 2.08944, superficie: 19.35 },
  { name: "Boissy-sous-Saint-Yon", codeInsee: "91085", cp: "91790", canton: "Arpajon", interco: "CC Entre Juine et Renarde (CCEJR)", population: 3855, lat: 48.55806, lng: 2.21000, superficie: 8.13 },
  { name: "Bondoufle", codeInsee: "91086", cp: "91070", canton: "Ris-Orangis", interco: "CA Grand Paris Sud Seine Essonne Sénart", population: 10833, lat: 48.61583, lng: 2.38139, superficie: 6.91 },
  { name: "Boullay-les-Troux", codeInsee: "91093", cp: "91470", canton: "Gif-sur-Yvette", interco: "CC du Pays de Limours (CCPL)", population: 632, lat: 48.67861, lng: 2.05111, superficie: 4.88 },
  { name: "Bouray-sur-Juine", codeInsee: "91095", cp: "91850", canton: "Arpajon", interco: "CC Entre Juine et Renarde (CCEJR)", population: 2077, lat: 48.52167, lng: 2.30056, superficie: 7.28 },
  { name: "Boussy-Saint-Antoine", codeInsee: "91097", cp: "91800", canton: "Épinay-sous-Sénart", interco: "CA Val d'Yerres Val de Seine", population: 7986, lat: 48.69056, lng: 2.53278, superficie: 2.92 },
  { name: "Boutervilliers", codeInsee: "91098", cp: "91150", canton: "Étampes", interco: "CA Etampois Sud Essonne", population: 429, lat: 48.45306, lng: 2.05694, superficie: 7.12 },
  { name: "Boutigny-sur-Essonne", codeInsee: "91099", cp: "91820", canton: "Mennecy", interco: "CC des 2 Vallées", population: 3048, lat: 48.43694, lng: 2.37833, superficie: 16.24 },
  { name: "Bouville", codeInsee: "91100", cp: "91880", canton: "Étampes", interco: "CA Etampois Sud Essonne", population: 658, lat: 48.43278, lng: 2.28500, superficie: 20.94 },
  { name: "Brétigny-sur-Orge", codeInsee: "91103", cp: "91220", canton: "Brétigny-sur-Orge", interco: "CA Coeur d'Essonne Agglomération", population: 26658, lat: 48.61056, lng: 2.30889, superficie: 14.56 },
  { name: "Breuillet", codeInsee: "91105", cp: "91650", canton: "Dourdan", interco: "CA Coeur d'Essonne Agglomération", population: 9023, lat: 48.56694, lng: 2.17056, superficie: 6.71 },
  { name: "Breux-Jouy", codeInsee: "91106", cp: "91650", canton: "Dourdan", interco: "CC le Dourdannais en Hurepoix (CCDH)", population: 1283, lat: 48.56139, lng: 2.17639, superficie: 4.73 },
  { name: "Brières-les-Scellés", codeInsee: "91109", cp: "91150", canton: "Étampes", interco: "CA Etampois Sud Essonne", population: 1218, lat: 48.45722, lng: 2.13944, superficie: 8.66 },
  { name: "Briis-sous-Forges", codeInsee: "91111", cp: "91640", canton: "Dourdan", interco: "CC du Pays de Limours (CCPL)", population: 3375, lat: 48.62417, lng: 2.12389, superficie: 11.19 },
  { name: "Brouy", codeInsee: "91112", cp: "91150", canton: "Étampes", interco: "CA Etampois Sud Essonne", population: 129, lat: 48.31694, lng: 2.27889, superficie: 8.49 },
  { name: "Brunoy", codeInsee: "91114", cp: "91800", canton: "Brunoy", interco: "CA Val d'Yerres Val de Seine", population: 25792, lat: 48.70555, lng: 2.51028, superficie: 6.62 },
  { name: "Bruyères-le-Châtel", codeInsee: "91115", cp: "91680", canton: "Arpajon", interco: "CA Coeur d'Essonne Agglomération", population: 3738, lat: 48.59306, lng: 2.18750, superficie: 12.95 },
  { name: "Buno-Bonnevaux", codeInsee: "91121", cp: "91720", canton: "Mennecy", interco: "CC des 2 Vallées", population: 523, lat: 48.36083, lng: 2.38833, superficie: 15.97 },
  { name: "Bures-sur-Yvette", codeInsee: "91122", cp: "91440", canton: "Gif-sur-Yvette", interco: "CA Communauté Paris-Saclay", population: 9481, lat: 48.69750, lng: 2.16222, superficie: 4.45 },
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
