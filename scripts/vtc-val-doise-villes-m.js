/**
 * Communes du Val-d'Oise (95) dont le nom commence par M.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_VAL_DOISE_VILLES_M = [
  { name: "Maffliers", codeInsee: "95353", cp: "95560", canton: "Fosses", interco: "CC Carnelle Pays-de-France", population: 1768, lat: 49.07722, lng: 2.30972, superficie: 6.75 },
  { name: "Magny-en-Vexin", codeInsee: "95355", cp: "95420", canton: "Vauréal", interco: "CC du Vexin-Val de Seine", population: 5755, lat: 49.16111, lng: 1.80667, superficie: 14.18 },
  { name: "Mareil-en-France", codeInsee: "95365", cp: "95850", canton: "Fosses", interco: "CC Carnelle Pays-de-France", population: 721, lat: 49.06861, lng: 2.42667, superficie: 7.04 },
  { name: "Margency", codeInsee: "95369", cp: "95580", canton: "Montmorency", interco: "CA Plaine Vallée", population: 2954, lat: 49.00139, lng: 2.29111, superficie: 0.73 },
  { name: "Marines", codeInsee: "95370", cp: "95640", canton: "Pontoise", interco: "CC Vexin Centre", population: 3508, lat: 49.14444, lng: 1.98222, superficie: 8.33 },
  { name: "Marly-la-Ville", codeInsee: "95371", cp: "95670", canton: "Goussainville", interco: "CA Roissy Pays de France", population: 5852, lat: 49.07722, lng: 2.49889, superficie: 8.73 },
  { name: "Maudétour-en-Vexin", codeInsee: "95379", cp: "95420", canton: "Vauréal", interco: "CC du Vexin-Val de Seine", population: 203, lat: 49.09972, lng: 1.77583, superficie: 6.73 },
  { name: "Menouville", codeInsee: "95387", cp: "95810", canton: "Pontoise", interco: "CC Sausseron Impressionnistes", population: 62, lat: 49.14972, lng: 2.11056, superficie: 2.73 },
  { name: "Menucourt", codeInsee: "95388", cp: "95180", canton: "Vauréal", interco: "CA de Cergy-Pontoise", population: 6189, lat: 49.02333, lng: 1.98722, superficie: 3.7 },
  { name: "Mériel", codeInsee: "95392", cp: "95630", canton: "Saint-Ouen-l'Aumône", interco: "CC de la Vallée de l'Oise et des Trois Forêts", population: 5337, lat: 49.07778, lng: 2.205, superficie: 5.33 },
  { name: "Méry-sur-Oise", codeInsee: "95394", cp: "95540", canton: "Saint-Ouen-l'Aumône", interco: "CC de la Vallée de l'Oise et des Trois Forêts", population: 10015, lat: 49.06167, lng: 2.18694, superficie: 10.02 },
  { name: "le Mesnil-Aubry", codeInsee: "95395", cp: "95720", canton: "Fosses", interco: "CA Roissy Pays de France", population: 901, lat: 49.04972, lng: 2.39528, superficie: 6.81 },
  { name: "Moisselles", codeInsee: "95409", cp: "95570", canton: "Domont", interco: "CA Plaine Vallée", population: 1259, lat: 49.04889, lng: 2.33639, superficie: 1.5 },
  { name: "Montgeroult", codeInsee: "95422", cp: "95650", canton: "Pontoise", interco: "CC Vexin Centre", population: 350, lat: 49.08278, lng: 2.00472, superficie: 5.03 },
  { name: "Montigny-lès-Cormeilles", codeInsee: "95424", cp: "95370", canton: "Herblay-sur-Seine", interco: "CA Val Parisis", population: 22390, lat: 48.99861, lng: 2.20056, superficie: 4.05 },
  { name: "Montlignon", codeInsee: "95426", cp: "95680", canton: "Montmorency", interco: "CA Plaine Vallée", population: 2966, lat: 49.00889, lng: 2.28472, superficie: 2.8 },
  { name: "Montmagny", codeInsee: "95427", cp: "95360", canton: "Deuil-la-Barre", interco: "CA Plaine Vallée", population: 14632, lat: 48.97361, lng: 2.34306, superficie: 2.89 },
  { name: "Montmorency", codeInsee: "95428", cp: "95160", canton: "Montmorency", interco: "CA Plaine Vallée", population: 21677, lat: 48.98833, lng: 2.32167, superficie: 5.19 },
  { name: "Montreuil-sur-Epte", codeInsee: "95429", cp: "95770", canton: "Vauréal", interco: "CC du Vexin-Val de Seine", population: 382, lat: 49.17778, lng: 1.67944, superficie: 7.29 },
  { name: "Montsoult", codeInsee: "95430", cp: "95560", canton: "Domont", interco: "CC Carnelle Pays-de-France", population: 4095, lat: 49.06917, lng: 2.31139, superficie: 3.88 },
  { name: "Mours", codeInsee: "95436", cp: "95260", canton: "L'Isle-Adam", interco: "CC du Haut Val d'Oise", population: 1680, lat: 49.13194, lng: 2.27083, superficie: 2.53 },
  { name: "Moussy", codeInsee: "95438", cp: "95640", canton: "Pontoise", interco: "CC Vexin Centre", population: 111, lat: 49.13694, lng: 1.91056, superficie: 4.77 },
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
