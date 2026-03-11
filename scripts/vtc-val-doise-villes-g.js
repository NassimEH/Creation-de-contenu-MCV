/**
 * Communes du Val-d'Oise (95) dont le nom commence par G.
 */

function slugFromName(name) {
  return "vtc-" + name.toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/'/g, "-")
    .replace(/–/g, "-");
}

export const VTC_VAL_DOISE_VILLES_G = [
  { name: "Garges-lès-Gonesse", codeInsee: "95268", cp: "95140", canton: "Garges-lès-Gonesse", interco: "CA Roissy Pays de France", population: 42388, lat: 48.97333, lng: 2.39083, superficie: 5.5 },
  { name: "Genainville", codeInsee: "95270", cp: "95420", canton: "Vauréal", interco: "CC du Vexin-Val de Seine", population: 521, lat: 49.12444, lng: 1.7525, superficie: 10.5 },
  { name: "Génicourt", codeInsee: "95271", cp: "95650", canton: "Pontoise", interco: "CC Sausseron Impressionnistes", population: 515, lat: 49.08833, lng: 2.06889, superficie: 6.45 },
  { name: "Gonesse", codeInsee: "95277", cp: "95500", canton: "Villiers-le-Bel", interco: "CA Roissy Pays de France", population: 26959, lat: 48.98472, lng: 2.44917, superficie: 20.24 },
  { name: "Goussainville", codeInsee: "95280", cp: "95190", canton: "Goussainville", interco: "CA Roissy Pays de France", population: 30952, lat: 49.03167, lng: 2.46972, superficie: 11.53 },
  { name: "Grisy-les-Plâtres", codeInsee: "95287", cp: "95810", canton: "Pontoise", interco: "CC Vexin Centre", population: 706, lat: 49.13028, lng: 2.05222, superficie: 7.22 },
  { name: "Groslay", codeInsee: "95288", cp: "95410", canton: "Deuil-la-Barre", interco: "CA Plaine Vallée", population: 8378, lat: 48.98889, lng: 2.35278, superficie: 3.07 },
  { name: "Guiry-en-Vexin", codeInsee: "95295", cp: "95450", canton: "Vauréal", interco: "CC Vexin Centre", population: 151, lat: 49.10806, lng: 1.85111, superficie: 6.19 },
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
