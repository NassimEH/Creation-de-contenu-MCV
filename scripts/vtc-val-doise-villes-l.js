/**
 * Communes du Val-d'Oise (95) dont le nom commence par L.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_VAL_DOISE_VILLES_L = [
  { name: "la Chapelle-en-Vexin", codeInsee: "95139", cp: "95420", canton: "Vauréal", interco: "CC du Vexin-Val de Seine", population: 316, lat: 49.18528, lng: 1.73278, superficie: 3.61 },
  { name: "la Frette-sur-Seine", codeInsee: "95257", cp: "95530", canton: "Herblay-sur-Seine", interco: "CA Val Parisis", population: 4587, lat: 48.97417, lng: 2.18111, superficie: 2.03 },
  { name: "Labbeville", codeInsee: "95328", cp: "95690", canton: "Saint-Ouen-l'Aumône", interco: "CC Sausseron Impressionnistes", population: 641, lat: 49.13445, lng: 2.14528, superficie: 8.07 },
  { name: "Lassy", codeInsee: "95331", cp: "95270", canton: "Fosses", interco: "CC Carnelle Pays-de-France", population: 194, lat: 49.09583, lng: 2.44667, superficie: 1.97 },
  { name: "Livilliers", codeInsee: "95341", cp: "95300", canton: "Pontoise", interco: "CC Sausseron Impressionnistes", population: 386, lat: 49.095, lng: 2.09667, superficie: 6.56 },
  { name: "Longuesse", codeInsee: "95348", cp: "95450", canton: "Vauréal", interco: "CC Vexin Centre", population: 505, lat: 49.06111, lng: 1.93333, superficie: 8.54 },
  { name: "Louvres", codeInsee: "95351", cp: "95380", canton: "Goussainville", interco: "CA Roissy Pays de France", population: 12226, lat: 49.03889, lng: 2.50472, superficie: 11.38 },
  { name: "Luzarches", codeInsee: "95352", cp: "95270", canton: "Fosses", interco: "CC Carnelle Pays-de-France", population: 4909, lat: 49.11139, lng: 2.4225, superficie: 20.55 },
  { name: "la Roche-Guyon", codeInsee: "95523", cp: "95780", canton: "Vauréal", interco: "CC du Vexin-Val de Seine", population: 423, lat: 49.08222, lng: 1.63, superficie: 4.65 },
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
