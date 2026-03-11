/**
 * Communes de l'Essonne (91) dont le nom commence par E.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_ESSONNE_VILLES_E = [
  { name: "Écharcon", codeInsee: "91204", cp: "91540", canton: "Corbeil-Essonnes", interco: "CC du Val d'Essonne (CCVE)", population: 720, lat: 48.57333, lng: 2.40639, superficie: 6.98 },
  { name: "Égly", codeInsee: "91207", cp: "91520", canton: "Arpajon", interco: "CA Coeur d'Essonne Agglomération", population: 7078, lat: 48.58028, lng: 2.22472, superficie: 3.96 },
  { name: "Épinay-sous-Sénart", codeInsee: "91215", cp: "91860", canton: "Épinay-sous-Sénart", interco: "CA Val d'Yerres Val de Seine", population: 11783, lat: 48.69444, lng: 2.51694, superficie: 3.63 },
  { name: "Épinay-sur-Orge", codeInsee: "91216", cp: "91360", canton: "Longjumeau", interco: "CA Communauté Paris-Saclay", population: 10626, lat: 48.67472, lng: 2.32639, superficie: 4.42 },
  { name: "Étampes", codeInsee: "91223", cp: "91150", canton: "Étampes", interco: "CA Etampois Sud Essonne", population: 26601, lat: 48.43222, lng: 2.16083, superficie: 46.03 },
  { name: "Étiolles", codeInsee: "91225", cp: "91450", canton: "Draveil", interco: "CA Grand Paris Sud Seine Essonne Sénart", population: 3100, lat: 48.63722, lng: 2.47333, superficie: 11.83 },
  { name: "Étréchy", codeInsee: "91226", cp: "91580", canton: "Dourdan", interco: "CC Entre Juine et Renarde (CCEJR)", population: 6926, lat: 48.49306, lng: 2.19056, superficie: 14.28 },
  { name: "Évry-Courcouronnes", codeInsee: "91228", cp: "91000", canton: "Évry", interco: "CA Grand Paris Sud Seine Essonne Sénart", population: 66700, lat: 48.63583, lng: 2.44250, superficie: 8.54 },
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
