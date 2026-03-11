/**
 * Communes de l'Essonne (91) dont le nom commence par L.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_ESSONNE_VILLES_L = [
  { name: "Lardy", codeInsee: "91330", cp: "91510", canton: "Arpajon", interco: "CC Entre Juine et Renarde (CCEJR)", population: 5572, lat: 48.52194, lng: 2.26611, superficie: 7.71 },
  { name: "Le Mérévillois", codeInsee: "91390", cp: "91660", canton: "Étampes", interco: "CA Etampois Sud Essonne", population: 3420, lat: 48.31556, lng: 2.08806, superficie: 27.27 },
  { name: "Leudeville", codeInsee: "91332", cp: "91630", canton: "Brétigny-sur-Orge", interco: "CC du Val d'Essonne (CCVE)", population: 1560, lat: 48.56639, lng: 2.32722, superficie: 7.82 },
  { name: "Leuville-sur-Orge", codeInsee: "91333", cp: "91310", canton: "Arpajon", interco: "CA Coeur d'Essonne Agglomération", population: 4307, lat: 48.61555, lng: 2.26333, superficie: 2.48 },
  { name: "Limours", codeInsee: "91338", cp: "91470", canton: "Dourdan", interco: "CC du Pays de Limours (CCPL)", population: 6408, lat: 48.64528, lng: 2.07667, superficie: 14.32 },
  { name: "Linas", codeInsee: "91339", cp: "91310", canton: "Longjumeau", interco: "CA Communauté Paris-Saclay", population: 7310, lat: 48.63139, lng: 2.27139, superficie: 7.57 },
  { name: "Lisses", codeInsee: "91340", cp: "91090", canton: "Corbeil-Essonnes", interco: "CA Grand Paris Sud Seine Essonne Sénart", population: 7295, lat: 48.59833, lng: 2.42500, superficie: 10.43 },
  { name: "Longjumeau", codeInsee: "91345", cp: "91160", canton: "Longjumeau", interco: "CA Communauté Paris-Saclay", population: 20470, lat: 48.69750, lng: 2.29694, superficie: 4.89 },
  { name: "Longpont-sur-Orge", codeInsee: "91347", cp: "91310", canton: "Brétigny-sur-Orge", interco: "CA Coeur d'Essonne Agglomération", population: 6456, lat: 48.64305, lng: 2.29222, superficie: 5.10 },
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
