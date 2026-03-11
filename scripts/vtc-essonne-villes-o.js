/**
 * Communes de l'Essonne (91) dont le nom commence par O.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_ESSONNE_VILLES_O = [
  { name: "Ollainville", codeInsee: "91461", cp: "91340", canton: "Arpajon", interco: "CA Coeur d'Essonne Agglomération", population: 5361, lat: 48.58972, lng: 2.22083, superficie: 11.47 },
  { name: "Oncy-sur-École", codeInsee: "91463", cp: "91490", canton: "Mennecy", interco: "CC des 2 Vallées", population: 1037, lat: 48.38111, lng: 2.47528, superficie: 5.37 },
  { name: "Ormoy", codeInsee: "91468", cp: "91540", canton: "Mennecy", interco: "CC du Val d'Essonne (CCVE)", population: 2896, lat: 48.57667, lng: 2.44778, superficie: 1.85 },
  { name: "Ormoy-la-Rivière", codeInsee: "91469", cp: "91150", canton: "Étampes", interco: "CA Etampois Sud Essonne", population: 950, lat: 48.40306, lng: 2.15028, superficie: 10.41 },
  { name: "Orsay", codeInsee: "91471", cp: "91400", canton: "Palaiseau", interco: "CA Communauté Paris-Saclay", population: 16655, lat: 48.69806, lng: 2.18583, superficie: 7.57 },
  { name: "Orveau", codeInsee: "91473", cp: "91590", canton: "Étampes", interco: "CC du Val d'Essonne (CCVE)", population: 145, lat: 48.44861, lng: 2.29278, superficie: 4.30 },
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
