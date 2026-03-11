/**
 * Communes de Seine-et-Marne (77) dont le nom commence par Y.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_SEINE_ET_MARNE_VILLES_Y = [
  { name: "Yèbles", codeInsee: "77534", cp: "77390", canton: "Nangis", interco: "CC Brie des Rivières et Châteaux", population: 970, lat: 48.63806, lng: 2.77167, superficie: 11.79 },
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
