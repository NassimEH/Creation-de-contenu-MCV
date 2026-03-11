/**
 * Communes de Seine-et-Marne (77) dont le nom commence par I.
 * Même structure que villes-a à villes-h pour les pages VTC [Ville].
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_SEINE_ET_MARNE_VILLES_I = [
  { name: "Ichy", codeInsee: "77230", cp: "77890", canton: "Nemours", interco: "CC Gâtinais Val de Loing", population: 158, lat: 48.20167, lng: 2.54917, superficie: 7.77 },
  { name: "Isles-les-Meldeuses", codeInsee: "77231", cp: "77440", canton: "La Ferté-sous-Jouarre", interco: "CC du Pays de l'Ourcq", population: 780, lat: 48.99833, lng: 3.00472, superficie: 6.83 },
  { name: "Isles-lès-Villenoy", codeInsee: "77232", cp: "77450", canton: "Claye-Souilly", interco: "CA du Pays de Meaux", population: 1136, lat: 48.91167, lng: 2.82833, superficie: 7.02 },
  { name: "Iverny", codeInsee: "77233", cp: "77165", canton: "Claye-Souilly", interco: "CC Plaines et Monts de France", population: 610, lat: 48.99944, lng: 2.79000, superficie: 1.76 },
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
