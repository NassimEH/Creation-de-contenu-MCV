/**
 * Communes de l'Essonne (91) dont le nom commence par C.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_ESSONNE_VILLES_C = [
  { name: "Cerny", codeInsee: "91129", cp: "91590", canton: "Étampes", interco: "CC du Val d'Essonne (CCVE)", population: 3425, lat: 48.47472, lng: 2.32750, superficie: 17.25 },
  { name: "Chalo-Saint-Mars", codeInsee: "91130", cp: "91780", canton: "Étampes", interco: "CA Etampois Sud Essonne", population: 1042, lat: 48.42611, lng: 2.06556, superficie: 29.07 },
  { name: "Chalou-Moulineux", codeInsee: "91131", cp: "91740", canton: "Étampes", interco: "CA Etampois Sud Essonne", population: 380, lat: 48.38417, lng: 2.02333, superficie: 10.73 },
  { name: "Chamarande", codeInsee: "91132", cp: "91730", canton: "Dourdan", interco: "CC Entre Juine et Renarde (CCEJR)", population: 1104, lat: 48.51417, lng: 2.21972, superficie: 5.89 },
  { name: "Champcueil", codeInsee: "91135", cp: "91750", canton: "Mennecy", interco: "CC du Val d'Essonne (CCVE)", population: 2873, lat: 48.51528, lng: 2.44778, superficie: 16.53 },
  { name: "Champlan", codeInsee: "91136", cp: "91160", canton: "Longjumeau", interco: "CA Communauté Paris-Saclay", population: 2606, lat: 48.70917, lng: 2.27056, superficie: 3.70 },
  { name: "Champmotteux", codeInsee: "91137", cp: "91150", canton: "Étampes", interco: "CA Etampois Sud Essonne", population: 360, lat: 48.34278, lng: 2.32111, superficie: 7.55 },
  { name: "Chatignonville", codeInsee: "91145", cp: "91410", canton: "Étampes", interco: "CA Etampois Sud Essonne", population: 71, lat: 48.46889, lng: 1.93278, superficie: 5.18 },
  { name: "Chauffour-lès-Étréchy", codeInsee: "91148", cp: "91580", canton: "Dourdan", interco: "CC Entre Juine et Renarde (CCEJR)", population: 135, lat: 48.50195, lng: 2.17028, superficie: 4.78 },
  { name: "Cheptainville", codeInsee: "91156", cp: "91630", canton: "Arpajon", interco: "CA Coeur d'Essonne Agglomération", population: 2212, lat: 48.55083, lng: 2.26500, superficie: 7.24 },
  { name: "Chevannes", codeInsee: "91159", cp: "91750", canton: "Mennecy", interco: "CC du Val d'Essonne (CCVE)", population: 1550, lat: 48.53083, lng: 2.44278, superficie: 10.33 },
  { name: "Chilly-Mazarin", codeInsee: "91161", cp: "91380", canton: "Massy", interco: "CA Communauté Paris-Saclay", population: 19981, lat: 48.70278, lng: 2.31972, superficie: 5.62 },
  { name: "Congerville-Thionville", codeInsee: "91613", cp: "91740", canton: "Étampes", interco: "CA Etampois Sud Essonne", population: 212, lat: 48.37833, lng: 1.99583, superficie: 8.42 },
  { name: "Corbeil-Essonnes", codeInsee: "91174", cp: "91100", canton: "Corbeil-Essonnes", interco: "CA Grand Paris Sud Seine Essonne Sénart", population: 53712, lat: 48.61056, lng: 2.47722, superficie: 11.08 },
  { name: "Corbreuse", codeInsee: "91175", cp: "91410", canton: "Dourdan", interco: "CC le Dourdannais en Hurepoix (CCDH)", population: 1675, lat: 48.50195, lng: 1.96028, superficie: 15.87 },
  { name: "Le Coudray-Montceaux", codeInsee: "91179", cp: "91830", canton: "Mennecy", interco: "CA Grand Paris Sud Seine Essonne Sénart", population: 4738, lat: 48.56139, lng: 2.50694, superficie: 11.42 },
  { name: "Courances", codeInsee: "91180", cp: "91490", canton: "Mennecy", interco: "CC des 2 Vallées", population: 336, lat: 48.44083, lng: 2.47583, superficie: 8.32 },
  { name: "Courdimanche-sur-Essonne", codeInsee: "91184", cp: "91720", canton: "Mennecy", interco: "CC des 2 Vallées", population: 279, lat: 48.41833, lng: 2.37889, superficie: 5.78 },
  { name: "Courson-Monteloup", codeInsee: "91186", cp: "91680", canton: "Dourdan", interco: "CC du Pays de Limours (CCPL)", population: 570, lat: 48.60056, lng: 2.14972, superficie: 3.78 },
  { name: "Crosne", codeInsee: "91191", cp: "91560", canton: "Vigneux-sur-Seine", interco: "CA Val d'Yerres Val de Seine", population: 9606, lat: 48.71778, lng: 2.46333, superficie: 2.46 },
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
