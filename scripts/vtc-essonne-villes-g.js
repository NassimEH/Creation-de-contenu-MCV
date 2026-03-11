/**
 * Communes de l'Essonne (91) dont le nom commence par G.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_ESSONNE_VILLES_G = [
  { name: "Gif-sur-Yvette", codeInsee: "91272", cp: "91190", canton: "Gif-sur-Yvette", interco: "CA Communauté Paris-Saclay", population: 22578, lat: 48.70361, lng: 2.12889, superficie: 11.99 },
  { name: "Gironville-sur-Essonne", codeInsee: "91273", cp: "91720", canton: "Mennecy", interco: "CC des 2 Vallées", population: 762, lat: 48.37083, lng: 2.38000, superficie: 13.33 },
  { name: "Gometz-la-Ville", codeInsee: "91274", cp: "91400", canton: "Gif-sur-Yvette", interco: "CC du Pays de Limours (CCPL)", population: 1512, lat: 48.67222, lng: 2.12556, superficie: 9.67 },
  { name: "Gometz-le-Châtel", codeInsee: "91275", cp: "91940", canton: "Les Ulis", interco: "CA Communauté Paris-Saclay", population: 2635, lat: 48.67889, lng: 2.14028, superficie: 4.92 },
  { name: "Les Granges-le-Roi", codeInsee: "91284", cp: "91410", canton: "Dourdan", interco: "CC le Dourdannais en Hurepoix (CCDH)", population: 1187, lat: 48.50361, lng: 2.02111, superficie: 12.83 },
  { name: "Grigny", codeInsee: "91286", cp: "91350", canton: "Viry-Châtillon", interco: "CA Grand Paris Sud Seine Essonne Sénart", population: 26500, lat: 48.65722, lng: 2.38861, superficie: 4.87 },
  { name: "Guibeville", codeInsee: "91292", cp: "91630", canton: "Arpajon", interco: "CA Coeur d'Essonne Agglomération", population: 929, lat: 48.57139, lng: 2.27056, superficie: 2.64 },
  { name: "Guigneville-sur-Essonne", codeInsee: "91293", cp: "91590", canton: "Mennecy", interco: "CC du Val d'Essonne (CCVE)", population: 876, lat: 48.47361, lng: 2.35667, superficie: 9.26 },
  { name: "Guillerval", codeInsee: "91294", cp: "91690", canton: "Étampes", interco: "CA Etampois Sud Essonne", population: 812, lat: 48.36417, lng: 2.10000, superficie: 17.35 },
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
