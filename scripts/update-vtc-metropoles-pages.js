/**
 * Met à jour les pages VTC métropoles sur WordPress (sous /nos-secteurs/).
 *
 * Usage : node scripts/update-vtc-metropoles-pages.js
 *         node scripts/update-vtc-metropoles-pages.js vtc-lyon
 */

import { updatePageUnderNosSecteurs, getPageIdBySlug } from "./wordpress-api.js";
import { getAllPagesData } from "./generate-vtc-metropoles-content.js";

const onlySlug = process.argv[2] || null;
const pagesData = getAllPagesData();
const toUpdate = onlySlug
  ? pagesData.filter((p) => p.slug === onlySlug)
  : pagesData;

if (toUpdate.length === 0) {
  console.error(onlySlug ? `Aucune métropole avec le slug "${onlySlug}".` : "Aucune page à mettre à jour.");
  process.exit(1);
}

console.log(`Mise à jour de ${toUpdate.length} page(s) métropoles sous /nos-secteurs/ ...\n`);

let updated = 0;
let missing = [];

for (const page of toUpdate) {
  const { focusKeyphrase, seoTitle, metaDescription, slug, content } = page;
  process.stdout.write(`  ${slug} ... `);
  try {
    const pageId = await getPageIdBySlug(slug);
    if (!pageId) {
      console.log("ABSENT (page non trouvée)");
      missing.push(slug);
      continue;
    }
    await updatePageUnderNosSecteurs({
      slug,
      title: seoTitle,
      content,
      excerpt: metaDescription,
      focusKeyphrase,
    });
    console.log(`OK (ID ${pageId})`);
    updated++;
  } catch (err) {
    console.log("ERREUR");
    console.error(err.message);
    if (onlySlug) process.exit(1);
  }
  await new Promise((r) => setTimeout(r, 600));
}

console.log(`\nTerminé. ${updated} page(s) mise(s) à jour.`);
if (missing.length > 0) {
  console.log(`\nPages non trouvées (à créer avec publish-vtc-metropoles-pages.js) : ${missing.join(", ")}`);
}
