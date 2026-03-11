/**
 * Communes du Val-d'Oise (95) dont le nom commence par J.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_VAL_DOISE_VILLES_J = [
  { name: "Jagny-sous-Bois", codeInsee: "95316", cp: "95850", canton: "Fosses", interco: "CC Carnelle Pays-de-France", population: 272, lat: 49.0775, lng: 2.44306, superficie: 4.25 },
  { name: "Jouy-le-Moutier", codeInsee: "95323", cp: "95280", canton: "Cergy-2", interco: "CA de Cergy-Pontoise", population: 17411, lat: 49.01639, lng: 2.04639, superficie: 7.3 },
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
