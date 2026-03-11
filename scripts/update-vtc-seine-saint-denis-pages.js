/**
 * Met à jour les pages VTC communes Seine-Saint-Denis (93) sur WordPress.
 * Utilise le contenu généré par generate-vtc-seine-saint-denis-content.js.
 *
 * Usage : node scripts/update-vtc-seine-saint-denis-pages.js
 *         node scripts/update-vtc-seine-saint-denis-pages.js vtc-aubervilliers
 */

import { updatePageUnderNosSecteurs } from "./wordpress-api.js";
import { getAllPagesData } from "./generate-vtc-seine-saint-denis-content.js";

const onlySlug = process.argv[2] || null;
const pagesData = getAllPagesData();
const toUpdate = onlySlug
  ? pagesData.filter((p) => p.slug === onlySlug)
  : pagesData;

if (toUpdate.length === 0) {
  console.error(onlySlug ? `Aucune commune 93 avec le slug "${onlySlug}".` : "Aucune page à mettre à jour.");
  process.exit(1);
}

console.log(`Mise à jour de ${toUpdate.length} page(s) communes 93 sous /nos-secteurs/ ...\n`);

for (const page of toUpdate) {
  const { focusKeyphrase, seoTitle, metaDescription, slug, content } = page;
  process.stdout.write(`  ${slug} ... `);
  try {
    const data = await updatePageUnderNosSecteurs({
      slug,
      title: seoTitle,
      content,
      excerpt: metaDescription,
      focusKeyphrase,
    });
    console.log(`OK (ID ${data.id})`);
  } catch (err) {
    console.log(`ERREUR`);
    console.error(err.message);
    if (onlySlug) process.exit(1);
  }
  await new Promise((r) => setTimeout(r, 600));
}

console.log(`\nTerminé. ${toUpdate.length} page(s) mise(s) à jour.`);
