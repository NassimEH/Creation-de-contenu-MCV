/**
 * Communes du Val-d'Oise (95) dont le nom commence par V.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_VAL_DOISE_VILLES_V = [
  { name: "Vallangoujard", codeInsee: "95627", cp: "95810", canton: "Pontoise", interco: "CC Sausseron Impressionnistes", population: 616, lat: 49.13722, lng: 2.115, superficie: 7.53 },
  { name: "Valmondois", codeInsee: "95628", cp: "95760", canton: "Saint-Ouen-l'Aumône", interco: "CC Sausseron Impressionnistes", population: 1209, lat: 49.09444, lng: 2.19194, superficie: 4.53 },
  { name: "Vaudherland", codeInsee: "95633", cp: "95500", canton: "Villiers-le-Bel", interco: "CA Roissy Pays de France", population: 102, lat: 49.00139, lng: 2.48639, superficie: 0.1 },
  { name: "Vauréal", codeInsee: "95637", cp: "95490", canton: "Vauréal", interco: "CA de Cergy-Pontoise", population: 16079, lat: 49.03472, lng: 2.03139, superficie: 3.75 },
  { name: "Vémars", codeInsee: "95641", cp: "95470", canton: "Goussainville", interco: "CA Roissy Pays de France", population: 2986, lat: 49.06972, lng: 2.57028, superficie: 8.35 },
  { name: "Vétheuil", codeInsee: "95651", cp: "95510", canton: "Vauréal", interco: "CC du Vexin-Val de Seine", population: 867, lat: 49.0625, lng: 1.70472, superficie: 4.47 },
  { name: "Viarmes", codeInsee: "95652", cp: "95270", canton: "Fosses", interco: "CC Carnelle Pays-de-France", population: 5509, lat: 49.12556, lng: 2.37111, superficie: 8.26 },
  { name: "Vienne-en-Arthies", codeInsee: "95656", cp: "95510", canton: "Vauréal", interco: "CC du Vexin-Val de Seine", population: 360, lat: 49.06667, lng: 1.735, superficie: 3.78 },
  { name: "Vigny", codeInsee: "95658", cp: "95450", canton: "Vauréal", interco: "CC Vexin Centre", population: 1132, lat: 49.07694, lng: 1.92917, superficie: 6.82 },
  { name: "Villaines-sous-Bois", codeInsee: "95660", cp: "95570", canton: "Fosses", interco: "CC Carnelle Pays-de-France", population: 776, lat: 49.075, lng: 2.35806, superficie: 1.9 },
  { name: "Villeron", codeInsee: "95675", cp: "95380", canton: "Goussainville", interco: "CA Roissy Pays de France", population: 1672, lat: 49.05611, lng: 2.54278, superficie: 5.72 },
  { name: "Villers-en-Arthies", codeInsee: "95676", cp: "95510", canton: "Vauréal", interco: "CC du Vexin-Val de Seine", population: 487, lat: 49.08889, lng: 1.72667, superficie: 8.43 },
  { name: "Villiers-Adam", codeInsee: "95678", cp: "95840", canton: "L'Isle-Adam", interco: "CC de la Vallée de l'Oise et des Trois Forêts", population: 848, lat: 49.06306, lng: 2.23528, superficie: 9.89 },
  { name: "Villiers-le-Bel", codeInsee: "95680", cp: "95400", canton: "Villiers-le-Bel", interco: "CA Roissy Pays de France", population: 29238, lat: 49.00583, lng: 2.38917, superficie: 7.27 },
  { name: "Villiers-le-Sec", codeInsee: "95682", cp: "95720", canton: "Fosses", interco: "CC Carnelle Pays-de-France", population: 198, lat: 49.07139, lng: 2.39083, superficie: 3.21 },
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
