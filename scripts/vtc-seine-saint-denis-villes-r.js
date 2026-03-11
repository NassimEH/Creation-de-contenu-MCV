/**
 * Communes de Seine-Saint-Denis (93) dont le nom commence par R.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_SEINE_SAINT_DENIS_VILLES_R = [
  { name: "Le Raincy", codeInsee: "93062", cp: "93340", canton: "Villemomble", interco: "Métropole du Grand Paris", population: 14778, lat: 48.89722, lng: 2.51917, superficie: 2.29 },
  { name: "Romainville", codeInsee: "93063", cp: "93230", canton: "Bagnolet", interco: "Métropole du Grand Paris", population: 35314, lat: 48.88083, lng: 2.44028, superficie: 3.38 },
  { name: "Rosny-sous-Bois", codeInsee: "93064", cp: "93110", canton: "Montreuil-1", interco: "Métropole du Grand Paris", population: 45947, lat: 48.87556, lng: 2.48194, superficie: 5.90 },
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
