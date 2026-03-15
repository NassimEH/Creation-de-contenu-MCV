/**
 * Publie ou met à jour les pages hub sous /nos-secteurs/ :
 * - Chauffeur privé aéroport (chauffeur-prive-aeroport)
 * - Chauffeur privé gares (chauffeur-prive-gares)
 * - Chauffeur privé Île-de-France (chauffeur-prive-ile-de-france)
 * - Alternative grève Seine-et-Marne (alternative-greve-seine-et-marne)
 * - Tourisme Seine-et-Marne en VTC (tourisme-seine-et-marne)
 * - VTC Théâtre-Sénart Lieusaint (vtc-theatre-senart-lieusaint)
 * - VTC Carré-Sénart (vtc-carre-senart)
 * - Transport VTC Longues distances (vtc-longues-distances)
 * - Transport par Taxi pour un long trajet (taxi-long-trajet)
 *
 * Si la page n'existe pas : création en publié. Si elle existe : mise à jour du contenu et du SEO.
 *
 * Usage : node scripts/publish-hub-pages.js
 */

import {
  getPageIdBySlug,
  createPageUnderNosSecteurs,
  updatePageById,
} from "./wordpress-api.js";
import { getHubAeroportPageData } from "./generate-hub-aeroport-content.js";
import { getHubGaresPageData } from "./generate-hub-gares-content.js";
import { getHubIleDeFrancePageData } from "./generate-hub-ile-de-france-content.js";
import { getAlternativeGreve77PageData } from "./generate-alternative-greve-77-content.js";
import { getTourismeSeineEtMarnePageData } from "./generate-tourisme-seine-et-marne-content.js";
import { getTheatreSenartPageData } from "./generate-theatre-senart-content.js";
import { getCarreSenartPageData } from "./generate-carre-senart-content.js";
import { getVtcLonguesDistancesPageData } from "./generate-vtc-longues-distances-content.js";
import { getTaxiLongTrajetPageData } from "./generate-taxi-long-trajet-content.js";

const HUBS = [
  { name: "Chauffeur privé aéroport", getData: getHubAeroportPageData },
  { name: "Chauffeur privé gares", getData: getHubGaresPageData },
  { name: "Chauffeur privé Île-de-France", getData: getHubIleDeFrancePageData },
  { name: "Alternative grève Seine-et-Marne", getData: getAlternativeGreve77PageData },
  { name: "Tourisme Seine-et-Marne en VTC", getData: getTourismeSeineEtMarnePageData },
  { name: "VTC Théâtre-Sénart Lieusaint", getData: getTheatreSenartPageData },
  { name: "VTC Carré-Sénart", getData: getCarreSenartPageData },
  { name: "Transport VTC Longues distances", getData: getVtcLonguesDistancesPageData },
  { name: "Transport par Taxi pour un long trajet", getData: getTaxiLongTrajetPageData },
];

console.log("Pages hub : création ou mise à jour sous /nos-secteurs/ ...\n");

let created = 0;
let updated = 0;

for (const hub of HUBS) {
  const data = hub.getData();
  const { focusKeyphrase, seoTitle, metaDescription, slug, content } = data;
  const displayTitle = hub.name;

  process.stdout.write(`  ${slug} ... `);

  try {
    const pageId = await getPageIdBySlug(slug);

    if (!pageId) {
      const res = await createPageUnderNosSecteurs({
        title: displayTitle,
        content,
        slug,
        excerpt: metaDescription,
        focusKeyphrase,
        status: "publish",
      });
      await updatePageById(res.id, { yoastSeoTitle: seoTitle });
      console.log(`créé (ID ${res.id})`);
      created++;
    } else {
      await updatePageById(pageId, {
        title: displayTitle,
        content,
        excerpt: metaDescription,
        focusKeyphrase,
        yoastSeoTitle: seoTitle,
      });
      console.log(`mis à jour (ID ${pageId})`);
      updated++;
    }
  } catch (err) {
    console.log("ERREUR");
    console.error(err.message);
  }

  await new Promise((r) => setTimeout(r, 600));
}

console.log(`\nTerminé. ${created} créée(s), ${updated} mise(s) à jour.`);
console.log("Vérifiez dans WordPress : Pages → sous « Nos secteurs ».");
