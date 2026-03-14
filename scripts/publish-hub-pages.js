/**
 * Publie ou met à jour les 3 pages hub sous /nos-secteurs/ :
 * - Chauffeur privé aéroport (chauffeur-prive-aeroport)
 * - Chauffeur privé gares (chauffeur-prive-gares)
 * - Chauffeur privé Île-de-France (chauffeur-prive-ile-de-france)
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

const HUBS = [
  { name: "Chauffeur privé aéroport", getData: getHubAeroportPageData },
  { name: "Chauffeur privé gares", getData: getHubGaresPageData },
  { name: "Chauffeur privé Île-de-France", getData: getHubIleDeFrancePageData },
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
