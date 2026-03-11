/**
 * Communes de l'Essonne (91) dont le nom commence par J.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_ESSONNE_VILLES_J = [
  { name: "Janville-sur-Juine", codeInsee: "91318", cp: "91510", canton: "Arpajon", interco: "CC Entre Juine et Renarde (CCEJR)", population: 1997, lat: 48.51444, lng: 2.26333, superficie: 10.50 },
  { name: "Janvry", codeInsee: "91319", cp: "91640", canton: "Dourdan", interco: "CC du Pays de Limours (CCPL)", population: 649, lat: 48.64806, lng: 2.15417, superficie: 8.32 },
  { name: "Juvisy-sur-Orge", codeInsee: "91326", cp: "91260", canton: "Athis-Mons", interco: "Métropole du Grand Paris", population: 18978, lat: 48.69250, lng: 2.37722, superficie: 2.14 },
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
