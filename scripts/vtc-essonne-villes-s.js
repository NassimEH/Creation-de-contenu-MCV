/**
 * Communes de l'Essonne (91) dont le nom commence par S.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_ESSONNE_VILLES_S = [
  { name: "Saclas", codeInsee: "91533", cp: "91690", canton: "Étampes", interco: "CA Etampois Sud Essonne", population: 1857, lat: 48.36028, lng: 2.12694, superficie: 13.85 },
  { name: "Saclay", codeInsee: "91534", cp: "91400", canton: "Gif-sur-Yvette", interco: "CA Communauté Paris-Saclay", population: 4380, lat: 48.73111, lng: 2.17500, superficie: 13.71 },
  { name: "Saint-Aubin", codeInsee: "91538", cp: "91190", canton: "Gif-sur-Yvette", interco: "CA Communauté Paris-Saclay", population: 671, lat: 48.71500, lng: 2.14139, superficie: 3.55 },
  { name: "Saint-Chéron", codeInsee: "91540", cp: "91530", canton: "Dourdan", interco: "CC le Dourdannais en Hurepoix (CCDH)", population: 5176, lat: 48.55361, lng: 2.12389, superficie: 11.52 },
  { name: "Saint-Cyr-la-Rivière", codeInsee: "91544", cp: "91690", canton: "Étampes", interco: "CA Etampois Sud Essonne", population: 472, lat: 48.35556, lng: 2.14778, superficie: 8.64 },
  { name: "Saint-Cyr-sous-Dourdan", codeInsee: "91546", cp: "91410", canton: "Dourdan", interco: "CC le Dourdannais en Hurepoix (CCDH)", population: 957, lat: 48.57028, lng: 2.03444, superficie: 10.09 },
  { name: "Saint-Escobille", codeInsee: "91547", cp: "91410", canton: "Étampes", interco: "CA Etampois Sud Essonne", population: 465, lat: 48.43083, lng: 1.96861, superficie: 12.17 },
  { name: "Saint-Germain-lès-Arpajon", codeInsee: "91552", cp: "91180", canton: "Arpajon", interco: "CA Coeur d'Essonne Agglomération", population: 11577, lat: 48.59778, lng: 2.26889, superficie: 6.30 },
  { name: "Saint-Germain-lès-Corbeil", codeInsee: "91553", cp: "91250", canton: "Draveil", interco: "CA Grand Paris Sud Seine Essonne Sénart", population: 7471, lat: 48.62167, lng: 2.48833, superficie: 3.97 },
  { name: "Saint-Hilaire", codeInsee: "91556", cp: "91780", canton: "Étampes", interco: "CA Etampois Sud Essonne", population: 402, lat: 48.43500, lng: 2.07972, superficie: 6.76 },
  { name: "Saint-Jean-de-Beauregard", codeInsee: "91560", cp: "91940", canton: "Les Ulis", interco: "CC du Pays de Limours (CCPL)", population: 471, lat: 48.66417, lng: 2.16861, superficie: 4.02 },
  { name: "Saint-Maurice-Montcouronne", codeInsee: "91568", cp: "91530", canton: "Dourdan", interco: "CC du Pays de Limours (CCPL)", population: 1540, lat: 48.58111, lng: 2.12389, superficie: 9.13 },
  { name: "Saint-Michel-sur-Orge", codeInsee: "91570", cp: "91240", canton: "Brétigny-sur-Orge", interco: "CA Coeur d'Essonne Agglomération", population: 21536, lat: 48.64194, lng: 2.31194, superficie: 5.32 },
  { name: "Saint-Pierre-du-Perray", codeInsee: "91573", cp: "91280", canton: "Épinay-sous-Sénart", interco: "CA Grand Paris Sud Seine Essonne Sénart", population: 12071, lat: 48.61333, lng: 2.50472, superficie: 11.71 },
  { name: "Saint-Sulpice-de-Favières", codeInsee: "91578", cp: "91910", canton: "Dourdan", interco: "CC Entre Juine et Renarde (CCEJR)", population: 271, lat: 48.54167, lng: 2.17917, superficie: 4.43 },
  { name: "Saint-Vrain", codeInsee: "91579", cp: "91770", canton: "Brétigny-sur-Orge", interco: "CC du Val d'Essonne (CCVE)", population: 3046, lat: 48.54250, lng: 2.33500, superficie: 11.63 },
  { name: "Saint-Yon", codeInsee: "91581", cp: "91650", canton: "Arpajon", interco: "CC Entre Juine et Renarde (CCEJR)", population: 914, lat: 48.55889, lng: 2.19111, superficie: 4.68 },
  { name: "Sainte-Geneviève-des-Bois", codeInsee: "91549", cp: "91700", canton: "Sainte-Geneviève-des-Bois", interco: "CA Coeur d'Essonne Agglomération", population: 35714, lat: 48.64944, lng: 2.32500, superficie: 9.36 },
  { name: "Saintry-sur-Seine", codeInsee: "91577", cp: "91250", canton: "Épinay-sous-Sénart", interco: "CA Grand Paris Sud Seine Essonne Sénart", population: 5853, lat: 48.60028, lng: 2.49389, superficie: 3.28 },
  { name: "Saulx-les-Chartreux", codeInsee: "91587", cp: "91160", canton: "Longjumeau", interco: "CA Communauté Paris-Saclay", population: 6611, lat: 48.69250, lng: 2.26750, superficie: 7.74 },
  { name: "Savigny-sur-Orge", codeInsee: "91589", cp: "91600", canton: "Savigny-sur-Orge", interco: "Métropole du Grand Paris", population: 37775, lat: 48.68972, lng: 2.35306, superficie: 7.01 },
  { name: "Sermaise", codeInsee: "91593", cp: "91530", canton: "Dourdan", interco: "CC le Dourdannais en Hurepoix (CCDH)", population: 1606, lat: 48.53639, lng: 2.08194, superficie: 13.89 },
  { name: "Soisy-sur-École", codeInsee: "91599", cp: "91840", canton: "Mennecy", interco: "CC des 2 Vallées", population: 1169, lat: 48.47639, lng: 2.49583, superficie: 11.59 },
  { name: "Soisy-sur-Seine", codeInsee: "91600", cp: "91450", canton: "Draveil", interco: "CA Grand Paris Sud Seine Essonne Sénart", population: 7370, lat: 48.64583, lng: 2.45111, superficie: 8.70 },
  { name: "Souzy-la-Briche", codeInsee: "91602", cp: "91580", canton: "Dourdan", interco: "CC Entre Juine et Renarde (CCEJR)", population: 484, lat: 48.52861, lng: 2.15111, superficie: 7.34 },
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
