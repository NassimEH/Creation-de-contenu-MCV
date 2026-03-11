/**
 * Communes du Val-de-Marne (94) dont le nom commence par F.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_VAL_DE_MARNE_VILLES_F = [
  { name: "Fontenay-sous-Bois", codeInsee: "94033", cp: "94120", canton: "Fontenay-sous-Bois", interco: "Métropole du Grand Paris", population: 52646, lat: 48.84889, lng: 2.46972, superficie: 5.58 },
  { name: "Fresnes", codeInsee: "94034", cp: "94260", canton: "L'Haÿ-les-Roses", interco: "Métropole du Grand Paris", population: 29298, lat: 48.75694, lng: 2.32167, superficie: 3.55 },
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
