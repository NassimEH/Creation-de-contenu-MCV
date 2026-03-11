/**
 * Communes de Seine-Saint-Denis (93) dont le nom commence par P.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_SEINE_SAINT_DENIS_VILLES_P = [
  { name: "Pantin", codeInsee: "93055", cp: "93500", canton: "Pantin", interco: "Métropole du Grand Paris", population: 60954, lat: 48.89222, lng: 2.41222, superficie: 5.04 },
  { name: "Les Pavillons-sous-Bois", codeInsee: "93057", cp: "93320", canton: "Bondy", interco: "Métropole du Grand Paris", population: 24872, lat: 48.90361, lng: 2.49944, superficie: 2.93 },
  { name: "Le Pré-Saint-Gervais", codeInsee: "93061", cp: "93310", canton: "Pantin", interco: "Métropole du Grand Paris", population: 16733, lat: 48.88528, lng: 2.40361, superficie: 0.69 },
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
