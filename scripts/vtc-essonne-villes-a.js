/**
 * Communes de l'Essonne (91) dont le nom commence par A.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_ESSONNE_VILLES_A = [
  { name: "Abbéville-la-Rivière", codeInsee: "91001", cp: "91150", canton: "Étampes", interco: "CA Etampois Sud Essonne", population: 331, lat: 48.34667, lng: 2.16833, superficie: 15.00 },
  { name: "Angerville", codeInsee: "91016", cp: "91670", canton: "Étampes", interco: "CA Etampois Sud Essonne", population: 4416, lat: 48.31222, lng: 1.99722, superficie: 25.82 },
  { name: "Angervilliers", codeInsee: "91017", cp: "91470", canton: "Dourdan", interco: "CC du Pays de Limours (CCPL)", population: 1720, lat: 48.59278, lng: 2.06389, superficie: 9.12 },
  { name: "Arpajon", codeInsee: "91021", cp: "91290", canton: "Arpajon", interco: "CA Coeur d'Essonne Agglomération", population: 11503, lat: 48.59028, lng: 2.25028, superficie: 2.35 },
  { name: "Arrancourt", codeInsee: "91022", cp: "91690", canton: "Étampes", interco: "CA Etampois Sud Essonne", population: 119, lat: 48.34167, lng: 2.16167, superficie: 7.59 },
  { name: "Athis-Mons", codeInsee: "91027", cp: "91200", canton: "Athis-Mons", interco: "Métropole du Grand Paris", population: 36451, lat: 48.70250, lng: 2.37222, superficie: 8.63 },
  { name: "Authon-la-Plaine", codeInsee: "91035", cp: "91410", canton: "Étampes", interco: "CA Etampois Sud Essonne", population: 371, lat: 48.45139, lng: 1.95806, superficie: 10.49 },
  { name: "Auvernaux", codeInsee: "91037", cp: "91830", canton: "Mennecy", interco: "CC du Val d'Essonne (CCVE)", population: 330, lat: 48.53000, lng: 2.49389, superficie: 6.47 },
  { name: "Auvers-Saint-Georges", codeInsee: "91038", cp: "91580", canton: "Étampes", interco: "CC Entre Juine et Renarde (CCEJR)", population: 1250, lat: 48.49194, lng: 2.21806, superficie: 12.78 },
  { name: "Avrainville", codeInsee: "91041", cp: "91630", canton: "Arpajon", interco: "CA Coeur d'Essonne Agglomération", population: 1045, lat: 48.56250, lng: 2.24889, superficie: 9.32 },
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
