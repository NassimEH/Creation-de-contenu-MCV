/**
 * Communes des Yvelines (78) dont le nom commence par I.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_YVELINES_VILLES_I = [
  { name: "Issou", codeInsee: "78314", cp: "78440", canton: "Limay", interco: "CU Grand Paris Seine et Oise", population: 3858, lat: 48.98917, lng: 1.79333, superficie: 4.81 },
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
