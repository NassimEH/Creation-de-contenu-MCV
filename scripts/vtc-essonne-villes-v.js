/**
 * Communes de l'Essonne (91) dont le nom commence par V.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_ESSONNE_VILLES_V = [
  { name: "Le Val-Saint-Germain", codeInsee: "91630", cp: "91530", canton: "Dourdan", interco: "CC le Dourdannais en Hurepoix (CCDH)", population: 1550, lat: 48.56528, lng: 2.06167, superficie: 12.66 },
  { name: "Valpuiseaux", codeInsee: "91629", cp: "91720", canton: "Étampes", interco: "CA Etampois Sud Essonne", population: 621, lat: 48.39417, lng: 2.30472, superficie: 18.73 },
  { name: "Varennes-Jarcy", codeInsee: "91631", cp: "91480", canton: "Épinay-sous-Sénart", interco: "CC l'Orée de la Brie", population: 2381, lat: 48.67889, lng: 2.56111, superficie: 5.56 },
  { name: "Vaugrigneuse", codeInsee: "91634", cp: "91640", canton: "Dourdan", interco: "CC du Pays de Limours (CCPL)", population: 1451, lat: 48.60278, lng: 2.12083, superficie: 6.18 },
  { name: "Vauhallan", codeInsee: "91635", cp: "91430", canton: "Gif-sur-Yvette", interco: "CA Communauté Paris-Saclay", population: 1954, lat: 48.73472, lng: 2.20583, superficie: 3.32 },
  { name: "Vayres-sur-Essonne", codeInsee: "91639", cp: "91820", canton: "Étampes", interco: "CC du Val d'Essonne (CCVE)", population: 974, lat: 48.43861, lng: 2.35389, superficie: 8.43 },
  { name: "Verrières-le-Buisson", codeInsee: "91645", cp: "91370", canton: "Gif-sur-Yvette", interco: "CA Communauté Paris-Saclay", population: 14772, lat: 48.74278, lng: 2.26889, superficie: 9.95 },
  { name: "Vert-le-Grand", codeInsee: "91648", cp: "91810", canton: "Ris-Orangis", interco: "CC du Val d'Essonne (CCVE)", population: 2348, lat: 48.57278, lng: 2.36139, superficie: 16.22 },
  { name: "Vert-le-Petit", codeInsee: "91649", cp: "91710", canton: "Ris-Orangis", interco: "CC du Val d'Essonne (CCVE)", population: 2716, lat: 48.55139, lng: 2.36667, superficie: 6.86 },
  { name: "Videlles", codeInsee: "91654", cp: "91890", canton: "Mennecy", interco: "CC des 2 Vallées", population: 584, lat: 48.46472, lng: 2.43139, superficie: 8.79 },
  { name: "Vigneux-sur-Seine", codeInsee: "91657", cp: "91270", canton: "Vigneux-sur-Seine", interco: "CA Val d'Yerres Val de Seine", population: 31233, lat: 48.69917, lng: 2.43694, superficie: 8.88 },
  { name: "Villabé", codeInsee: "91659", cp: "91100", canton: "Corbeil-Essonnes", interco: "CA Grand Paris Sud Seine Essonne Sénart", population: 5654, lat: 48.58889, lng: 2.45583, superficie: 4.73 },
  { name: "La Ville-du-Bois", codeInsee: "91665", cp: "91620", canton: "Longjumeau", interco: "CA Communauté Paris-Saclay", population: 8140, lat: 48.66111, lng: 2.26833, superficie: 3.53 },
  { name: "Villebon-sur-Yvette", codeInsee: "91661", cp: "91140", canton: "Les Ulis", interco: "CA Communauté Paris-Saclay", population: 10353, lat: 48.69806, lng: 2.22694, superficie: 7.49 },
  { name: "Villeconin", codeInsee: "91662", cp: "91580", canton: "Dourdan", interco: "CC Entre Juine et Renarde (CCEJR)", population: 768, lat: 48.51472, lng: 2.12639, superficie: 14.72 },
  { name: "Villejust", codeInsee: "91666", cp: "91140", canton: "Les Ulis", interco: "CA Communauté Paris-Saclay", population: 2502, lat: 48.68333, lng: 2.23639, superficie: 5.39 },
  { name: "Villemoisson-sur-Orge", codeInsee: "91667", cp: "91360", canton: "Sainte-Geneviève-des-Bois", interco: "CA Coeur d'Essonne Agglomération", population: 7226, lat: 48.65750, lng: 2.33361, superficie: 2.32 },
  { name: "Villeneuve-sur-Auvers", codeInsee: "91671", cp: "91580", canton: "Étampes", interco: "CC Entre Juine et Renarde (CCEJR)", population: 595, lat: 48.47472, lng: 2.24889, superficie: 7.09 },
  { name: "Villiers-le-Bâcle", codeInsee: "91679", cp: "91190", canton: "Gif-sur-Yvette", interco: "CA Communauté Paris-Saclay", population: 1040, lat: 48.72556, lng: 2.12694, superficie: 6.08 },
  { name: "Villiers-sur-Orge", codeInsee: "91685", cp: "91700", canton: "Sainte-Geneviève-des-Bois", interco: "CA Coeur d'Essonne Agglomération", population: 4576, lat: 48.66083, lng: 2.30500, superficie: 1.78 },
  { name: "Viry-Châtillon", codeInsee: "91687", cp: "91170", canton: "Viry-Châtillon", interco: "Métropole du Grand Paris", population: 31112, lat: 48.67778, lng: 2.37583, superficie: 6.13 },
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
