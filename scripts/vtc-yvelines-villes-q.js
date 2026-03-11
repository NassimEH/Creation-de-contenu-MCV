/**
 * Communes des Yvelines (78) dont le nom commence par Q.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_YVELINES_VILLES_Q = [
  { name: "La Queue-les-Yvelines", codeInsee: "78513", cp: "78940", canton: "Aubergenville", interco: "CC Cœur d'Yvelines", population: 2505, lat: 48.80639, lng: 1.76750, superficie: 5.81 },
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
