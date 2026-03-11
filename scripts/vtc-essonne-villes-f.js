/**
 * Communes de l'Essonne (91) dont le nom commence par F.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_ESSONNE_VILLES_F = [
  { name: "La Ferté-Alais", codeInsee: "91232", cp: "91590", canton: "Mennecy", interco: "CC du Val d'Essonne (CCVE)", population: 3663, lat: 48.48667, lng: 2.35056, superficie: 4.54 },
  { name: "Fleury-Mérogis", codeInsee: "91235", cp: "91700", canton: "Ris-Orangis", interco: "CA Coeur d'Essonne Agglomération", population: 13816, lat: 48.62889, lng: 2.36167, superficie: 6.59 },
  { name: "Fontaine-la-Rivière", codeInsee: "91240", cp: "91690", canton: "Étampes", interco: "CA Etampois Sud Essonne", population: 182, lat: 48.35722, lng: 2.15389, superficie: 3.73 },
  { name: "Fontenay-le-Vicomte", codeInsee: "91244", cp: "91540", canton: "Mennecy", interco: "CC du Val d'Essonne (CCVE)", population: 1563, lat: 48.54722, lng: 2.40083, superficie: 6.89 },
  { name: "Fontenay-lès-Briis", codeInsee: "91243", cp: "91640", canton: "Dourdan", interco: "CC du Pays de Limours (CCPL)", population: 2322, lat: 48.61945, lng: 2.15861, superficie: 9.76 },
  { name: "La Forêt-le-Roi", codeInsee: "91247", cp: "91410", canton: "Dourdan", interco: "CC le Dourdannais en Hurepoix (CCDH)", population: 493, lat: 48.47889, lng: 2.04361, superficie: 7.95 },
  { name: "La Forêt-Sainte-Croix", codeInsee: "91248", cp: "91150", canton: "Étampes", interco: "CA Etampois Sud Essonne", population: 153, lat: 48.38278, lng: 2.23000, superficie: 5.28 },
  { name: "Forges-les-Bains", codeInsee: "91249", cp: "91470", canton: "Dourdan", interco: "CC du Pays de Limours (CCPL)", population: 4138, lat: 48.62806, lng: 2.10028, superficie: 14.48 },
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
