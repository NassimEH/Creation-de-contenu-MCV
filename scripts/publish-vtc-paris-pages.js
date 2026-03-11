/**
 * Publication des 21 pages VTC Paris et arrondissements sur WordPress.
 * Chaque page est créée sous /nos-secteurs/ avec titre SEO, méta description et contenu optimisé.
 *
 * Usage : node scripts/publish-vtc-paris-pages.js
 *         node scripts/publish-vtc-paris-pages.js vtc-paris     (une seule page)
 */

import { createPageUnderNosSecteurs } from "./wordpress-api.js";
import { getAllPagesData } from "./generate-vtc-content.js";

const onlySlug = process.argv[2] || null;
const pagesData = getAllPagesData();
const toPublish = onlySlug
  ? pagesData.filter((p) => p.slug === onlySlug)
  : pagesData;

if (toPublish.length === 0) {
  console.error(onlySlug ? `Aucune zone avec le slug "${onlySlug}".` : "Aucune page à publier.");
  process.exit(1);
}

console.log(`Publication de ${toPublish.length} page(s) sous /nos-secteurs/ ...\n`);

for (const page of toPublish) {
  const { focusKeyphrase, seoTitle, metaDescription, slug, content } = page;
  process.stdout.write(`  ${slug} ... `);
  try {
    const data = await createPageUnderNosSecteurs({
      title: seoTitle,
      content,
      slug,
      excerpt: metaDescription,
      focusKeyphrase,
      status: "publish",
    });
    console.log(`OK (ID ${data.id})`);
  } catch (err) {
    console.log(`ERREUR`);
    console.error(err.message);
    if (onlySlug) process.exit(1);
  }
  await new Promise((r) => setTimeout(r, 800));
}

console.log(`\nTerminé. ${toPublish.length} page(s) publiée(s).`);
console.log("Vérifiez dans WordPress : Pages → sous « Nos secteurs ».");
