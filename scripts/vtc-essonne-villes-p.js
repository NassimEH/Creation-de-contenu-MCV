/**
 * Communes de l'Essonne (91) dont le nom commence par P.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_ESSONNE_VILLES_P = [
  { name: "Palaiseau", codeInsee: "91477", cp: "91120", canton: "Palaiseau", interco: "CA Communauté Paris-Saclay", population: 36067, lat: 48.71222, lng: 2.23889, superficie: 11.76 },
  { name: "Paray-Vieille-Poste", codeInsee: "91479", cp: "91550", canton: "Athis-Mons", interco: "Métropole du Grand Paris", population: 7956, lat: 48.70972, lng: 2.36500, superficie: 6.17 },
  { name: "Pecqueuse", codeInsee: "91482", cp: "91470", canton: "Gif-sur-Yvette", interco: "CC du Pays de Limours (CCPL)", population: 567, lat: 48.64694, lng: 2.04778, superficie: 7.48 },
  { name: "Le Plessis-Pâté", codeInsee: "91494", cp: "91220", canton: "Ris-Orangis", interco: "CA Coeur d'Essonne Agglomération", population: 4107, lat: 48.61278, lng: 2.32806, superficie: 7.55 },
  { name: "Plessis-Saint-Benoist", codeInsee: "91495", cp: "91410", canton: "Étampes", interco: "CA Etampois Sud Essonne", population: 327, lat: 48.44417, lng: 2.00528, superficie: 9.17 },
  { name: "Prunay-sur-Essonne", codeInsee: "91507", cp: "91720", canton: "Mennecy", interco: "CC des 2 Vallées", population: 312, lat: 48.35750, lng: 2.37306, superficie: 5.08 },
  { name: "Puiselet-le-Marais", codeInsee: "91508", cp: "91150", canton: "Étampes", interco: "CA Etampois Sud Essonne", population: 261, lat: 48.40556, lng: 2.26361, superficie: 11.33 },
  { name: "Pussay", codeInsee: "91511", cp: "91740", canton: "Étampes", interco: "CA Etampois Sud Essonne", population: 2182, lat: 48.35056, lng: 1.99444, superficie: 11.58 },
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
