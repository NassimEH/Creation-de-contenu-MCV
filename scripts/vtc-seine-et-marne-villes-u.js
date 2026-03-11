/**
 * Communes de Seine-et-Marne (77) dont le nom commence par U.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_SEINE_ET_MARNE_VILLES_U = [
  { name: "Ury", codeInsee: "77477", cp: "77760", canton: "Fontainebleau", interco: "CA du Pays de Fontainebleau", population: 883, lat: 48.34139, lng: 2.60194, superficie: 8.28 },
  { name: "Ussy-sur-Marne", codeInsee: "77478", cp: "77260", canton: "La Ferté-sous-Jouarre", interco: "CA Coulommiers Pays de Brie", population: 1063, lat: 48.95500, lng: 3.07167, superficie: 13.72 },
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
