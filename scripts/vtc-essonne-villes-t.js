/**
 * Communes de l'Essonne (91) dont le nom commence par T.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_ESSONNE_VILLES_T = [
  { name: "Tigery", codeInsee: "91617", cp: "91250", canton: "Épinay-sous-Sénart", interco: "CA Grand Paris Sud Seine Essonne Sénart", population: 4359, lat: 48.63944, lng: 2.50806, superficie: 9.48 },
  { name: "Torfou", codeInsee: "91619", cp: "91730", canton: "Arpajon", interco: "CC Entre Juine et Renarde (CCEJR)", population: 277, lat: 48.53111, lng: 2.22694, superficie: 3.52 },
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
