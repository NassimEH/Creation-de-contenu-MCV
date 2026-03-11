/**
 * Communes de Seine-Saint-Denis (93) dont le nom commence par V.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_SEINE_SAINT_DENIS_VILLES_V = [
  { name: "Vaujours", codeInsee: "93074", cp: "93410", canton: "Tremblay-en-France", interco: "Métropole du Grand Paris", population: 7743, lat: 48.93195, lng: 2.56889, superficie: 3.67 },
  { name: "Villemomble", codeInsee: "93077", cp: "93250", canton: "Villemomble", interco: "Métropole du Grand Paris", population: 29973, lat: 48.88889, lng: 2.50444, superficie: 4.08 },
  { name: "Villepinte", codeInsee: "93078", cp: "93420", canton: "Sevran", interco: "Métropole du Grand Paris", population: 39647, lat: 48.95889, lng: 2.54222, superficie: 10.41 },
  { name: "Villetaneuse", codeInsee: "93079", cp: "93430", canton: "Épinay-sur-Seine", interco: "Métropole du Grand Paris", population: 12432, lat: 48.95694, lng: 2.34667, superficie: 2.37 },
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
