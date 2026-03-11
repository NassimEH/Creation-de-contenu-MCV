/**
 * Communes de Seine-et-Marne (77) dont le nom commence par Q.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_SEINE_ET_MARNE_VILLES_Q = [
  { name: "Quiers", codeInsee: "77381", cp: "77720", canton: "Nangis", interco: "CC Brie Nangissienne", population: 652, lat: 48.60611, lng: 2.97139, superficie: 11.79 },
  { name: "Quincy-Voisins", codeInsee: "77382", cp: "77860", canton: "Serris", interco: "CA du Pays de Meaux", population: 5506, lat: 48.89833, lng: 2.88333, superficie: 10.29 },
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
