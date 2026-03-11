/**
 * Communes du Val-d'Oise (95) dont le nom commence par U.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_VAL_DOISE_VILLES_U = [
  { name: "Us", codeInsee: "95625", cp: "95450", canton: "Pontoise", interco: "CC Vexin Centre", population: 1331, lat: 49.10083, lng: 1.96722, superficie: 10.98 },
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
