/**
 * Communes de l'Essonne (91) dont le nom commence par M.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_ESSONNE_VILLES_M = [
  { name: "Maisse", codeInsee: "91359", cp: "91720", canton: "Mennecy", interco: "CC des 2 Vallées", population: 2804, lat: 48.39667, lng: 2.37667, superficie: 21.51 },
  { name: "Marcoussis", codeInsee: "91363", cp: "91460", canton: "Les Ulis", interco: "CA Communauté Paris-Saclay", population: 8597, lat: 48.64333, lng: 2.23111, superficie: 16.89 },
  { name: "Marolles-en-Beauce", codeInsee: "91374", cp: "91150", canton: "Étampes", interco: "CA Etampois Sud Essonne", population: 238, lat: 48.37472, lng: 2.20139, superficie: 6.00 },
  { name: "Marolles-en-Hurepoix", codeInsee: "91376", cp: "91630", canton: "Brétigny-sur-Orge", interco: "CA Coeur d'Essonne Agglomération", population: 5688, lat: 48.56194, lng: 2.30361, superficie: 6.61 },
  { name: "Massy", codeInsee: "91377", cp: "91300", canton: "Massy", interco: "CA Communauté Paris-Saclay", population: 50597, lat: 48.73250, lng: 2.27667, superficie: 9.44 },
  { name: "Mauchamps", codeInsee: "91378", cp: "91730", canton: "Dourdan", interco: "CC Entre Juine et Renarde (CCEJR)", population: 379, lat: 48.53056, lng: 2.19611, superficie: 3.13 },
  { name: "Mennecy", codeInsee: "91386", cp: "91540", canton: "Mennecy", interco: "CC du Val d'Essonne (CCVE)", population: 16071, lat: 48.56750, lng: 2.43417, superficie: 11.10 },
  { name: "Mérobert", codeInsee: "91393", cp: "91780", canton: "Étampes", interco: "CA Etampois Sud Essonne", population: 635, lat: 48.41556, lng: 2.00583, superficie: 10.43 },
  { name: "Mespuits", codeInsee: "91399", cp: "91150", canton: "Étampes", interco: "CA Etampois Sud Essonne", population: 188, lat: 48.35750, lng: 2.27139, superficie: 10.00 },
  { name: "Milly-la-Forêt", codeInsee: "91405", cp: "91490", canton: "Mennecy", interco: "CC des 2 Vallées", population: 4582, lat: 48.40250, lng: 2.46556, superficie: 33.74 },
  { name: "Moigny-sur-École", codeInsee: "91408", cp: "91490", canton: "Mennecy", interco: "CC des 2 Vallées", population: 1311, lat: 48.43361, lng: 2.45806, superficie: 12.26 },
  { name: "Les Molières", codeInsee: "91411", cp: "91470", canton: "Gif-sur-Yvette", interco: "CC du Pays de Limours (CCPL)", population: 1935, lat: 48.67333, lng: 2.06972, superficie: 7.05 },
  { name: "Mondeville", codeInsee: "91412", cp: "91590", canton: "Mennecy", interco: "CC des 2 Vallées", population: 724, lat: 48.49167, lng: 2.41583, superficie: 6.80 },
  { name: "Monnerville", codeInsee: "91414", cp: "91930", canton: "Étampes", interco: "CA Etampois Sud Essonne", population: 377, lat: 48.34639, lng: 2.04389, superficie: 8.36 },
  { name: "Montgeron", codeInsee: "91421", cp: "91230", canton: "Montgeron", interco: "CA Val d'Yerres Val de Seine", population: 23890, lat: 48.70500, lng: 2.45889, superficie: 11.24 },
  { name: "Montlhéry", codeInsee: "91425", cp: "91310", canton: "Longjumeau", interco: "CA Communauté Paris-Saclay", population: 9238, lat: 48.64139, lng: 2.27222, superficie: 3.33 },
  { name: "Morangis", codeInsee: "91432", cp: "91420", canton: "Savigny-sur-Orge", interco: "Métropole du Grand Paris", population: 13773, lat: 48.69889, lng: 2.33000, superficie: 4.81 },
  { name: "Morigny-Champigny", codeInsee: "91433", cp: "91150", canton: "Étampes", interco: "CA Etampois Sud Essonne", population: 4435, lat: 48.44695, lng: 2.18472, superficie: 31.02 },
  { name: "Morsang-sur-Orge", codeInsee: "91434", cp: "91390", canton: "Sainte-Geneviève-des-Bois", interco: "CA Coeur d'Essonne Agglomération", population: 21161, lat: 48.65222, lng: 2.35500, superficie: 4.38 },
  { name: "Morsang-sur-Seine", codeInsee: "91435", cp: "91250", canton: "Épinay-sous-Sénart", interco: "CA Grand Paris Sud Seine Essonne Sénart", population: 584, lat: 48.57139, lng: 2.49361, superficie: 4.45 },
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
