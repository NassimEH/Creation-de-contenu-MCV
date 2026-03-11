/**
 * Publication des 7 pages VTC gares SNCF à Paris sur WordPress (sous /nos-secteurs/).
 *
 * Usage : node scripts/publish-vtc-gares-paris-pages.js
 *         node scripts/publish-vtc-gares-paris-pages.js vtc-gare-du-nord
 */

import { createPageUnderNosSecteurs, getAllPageSlugsUnderNosSecteurs } from "./wordpress-api.js";
import { getAllPagesData } from "./generate-vtc-gares-paris-content.js";

const onlySlug = process.argv[2] || null;
const pagesData = getAllPagesData();
let toPublish = onlySlug
  ? pagesData.filter((p) => p.slug === onlySlug)
  : pagesData;

if (toPublish.length === 0) {
  console.error(onlySlug ? `Aucune gare avec le slug "${onlySlug}".` : "Aucune page à publier.");
  process.exit(1);
}

const existingSlugs = await getAllPageSlugsUnderNosSecteurs();
const toCreate = toPublish.filter((p) => !existingSlugs.has(p.slug));
const alreadyCount = toPublish.length - toCreate.length;

if (toCreate.length === 0) {
  console.log(`Toutes les pages gares Paris sont déjà publiées (${alreadyCount} page(s)). Rien à créer.`);
  process.exit(0);
}

if (alreadyCount > 0) {
  console.log(`${alreadyCount} déjà publiée(s), ${toCreate.length} à créer.\n`);
}

let created = 0;
for (const page of toCreate) {
  const { focusKeyphrase, seoTitle, metaDescription, slug, content } = page;
  try {
    const data = await createPageUnderNosSecteurs({
      title: seoTitle,
      content,
      slug,
      excerpt: metaDescription,
      focusKeyphrase,
      status: "publish",
    });
    console.log(`  ${slug} → ID ${data.id}`);
    created++;
  } catch (err) {
    console.error(`  ${slug} → ERREUR: ${err.message}`);
    if (onlySlug) process.exit(1);
  }
  await new Promise((r) => setTimeout(r, 600));
}

console.log(`\nTerminé. ${created} page(s) créée(s).`);
console.log("Vérifiez dans WordPress : Pages → sous « Nos secteurs ».");
