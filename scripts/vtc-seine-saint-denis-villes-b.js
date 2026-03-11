/**
 * Communes de Seine-Saint-Denis (93) dont le nom commence par B.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_SEINE_SAINT_DENIS_VILLES_B = [
  { name: "Bagnolet", codeInsee: "93006", cp: "93170", canton: "Bagnolet", interco: "Métropole du Grand Paris", population: 41776, lat: 48.86917, lng: 2.41806, superficie: 2.55 },
  { name: "Le Blanc-Mesnil", codeInsee: "93007", cp: "93150", canton: "Le Blanc-Mesnil", interco: "Métropole du Grand Paris", population: 59912, lat: 48.93417, lng: 2.46750, superficie: 8.14 },
  { name: "Bobigny", codeInsee: "93008", cp: "93000", canton: "Bobigny", interco: "Métropole du Grand Paris", population: 55270, lat: 48.90778, lng: 2.44194, superficie: 6.72 },
  { name: "Bondy", codeInsee: "93010", cp: "93140", canton: "Bondy", interco: "Métropole du Grand Paris", population: 51066, lat: 48.90361, lng: 2.47472, superficie: 5.48 },
  { name: "Le Bourget", codeInsee: "93013", cp: "93350", canton: "La Courneuve", interco: "Métropole du Grand Paris", population: 15052, lat: 48.93583, lng: 2.43083, superficie: 2.03 },
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
