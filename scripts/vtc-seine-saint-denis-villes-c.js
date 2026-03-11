/**
 * Communes de Seine-Saint-Denis (93) dont le nom commence par C.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_SEINE_SAINT_DENIS_VILLES_C = [
  { name: "Clichy-sous-Bois", codeInsee: "93014", cp: "93390", canton: "Livry-Gargan", interco: "Métropole du Grand Paris", population: 29551, lat: 48.90667, lng: 2.54111, superficie: 3.90 },
  { name: "Coubron", codeInsee: "93015", cp: "93470", canton: "Tremblay-en-France", interco: "Métropole du Grand Paris", population: 5156, lat: 48.91556, lng: 2.57722, superficie: 4.22 },
  { name: "La Courneuve", codeInsee: "93027", cp: "93120", canton: "La Courneuve", interco: "Métropole du Grand Paris", population: 47086, lat: 48.92778, lng: 2.40667, superficie: 7.51 },
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
