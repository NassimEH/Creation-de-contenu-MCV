/**
 * Communes du Val-d'Oise (95) dont le nom commence par P.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_VAL_DOISE_VILLES_P = [
  { name: "Parmain", codeInsee: "95480", cp: "95620", canton: "L'Isle-Adam", interco: "CC de la Vallée de l'Oise et des Trois Forêts", population: 5683, lat: 49.11389, lng: 2.20639, superficie: 8.83 },
  { name: "le Perchay", codeInsee: "95483", cp: "95450", canton: "Pontoise", interco: "CC Vexin Centre", population: 513, lat: 49.10972, lng: 1.93556, superficie: 5.48 },
  { name: "Persan", codeInsee: "95487", cp: "95340", canton: "L'Isle-Adam", interco: "CC du Haut Val d'Oise", population: 14348, lat: 49.15055, lng: 2.27389, superficie: 5.18 },
  { name: "Pierrelaye", codeInsee: "95488", cp: "95220", canton: "Taverny", interco: "CA Val Parisis", population: 10230, lat: 49.02222, lng: 2.15333, superficie: 8.98 },
  { name: "Piscop", codeInsee: "95489", cp: "95350", canton: "Domont", interco: "CA Plaine Vallée", population: 737, lat: 49.01083, lng: 2.34389, superficie: 4.11 },
  { name: "le Plessis-Bouchard", codeInsee: "95491", cp: "95130", canton: "Domont", interco: "CA Val Parisis", population: 8333, lat: 49.00167, lng: 2.23944, superficie: 2.62 },
  { name: "le Plessis-Gassot", codeInsee: "95492", cp: "95720", canton: "Fosses", interco: "CA Roissy Pays de France", population: 97, lat: 49.03194, lng: 2.41361, superficie: 4.09 },
  { name: "le Plessis-Luzarches", codeInsee: "95493", cp: "95270", canton: "Fosses", interco: "CC Carnelle Pays-de-France", population: 140, lat: 49.09444, lng: 2.45389, superficie: 0.92 },
  { name: "Pontoise", codeInsee: "95500", cp: "95000", canton: "Pontoise", interco: "CA de Cergy-Pontoise", population: 31623, lat: 49.05167, lng: 2.09417, superficie: 7.26 },
  { name: "Presles", codeInsee: "95504", cp: "95590", canton: "L'Isle-Adam", interco: "CC de la Vallée de l'Oise et des Trois Forêts", population: 3994, lat: 49.11417, lng: 2.28194, superficie: 10.18 },
  { name: "Puiseux-en-France", codeInsee: "95509", cp: "95380", canton: "Fosses", interco: "CA Roissy Pays de France", population: 3755, lat: 49.06667, lng: 2.47583, superficie: 5.16 },
  { name: "Puiseux-Pontoise", codeInsee: "95510", cp: "95650", canton: "Cergy-1", interco: "CA de Cergy-Pontoise", population: 593, lat: 49.05695, lng: 2.02167, superficie: 3.89 },
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
