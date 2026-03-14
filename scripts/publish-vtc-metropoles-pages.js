/**
 * Publie les pages VTC métropoles sur WordPress (sous /nos-secteurs/).
 * Crée uniquement les pages dont le slug n'existe pas encore.
 *
 * Usage : node scripts/publish-vtc-metropoles-pages.js
 *         node scripts/publish-vtc-metropoles-pages.js vtc-lyon
 */

import { createPageUnderNosSecteurs, getAllPageSlugsUnderNosSecteurs } from "./wordpress-api.js";
import { getAllPagesData } from "./generate-vtc-metropoles-content.js";

const onlySlug = process.argv[2] || null;
const pagesData = getAllPagesData();
let toPublish = onlySlug
  ? pagesData.filter((p) => p.slug === onlySlug)
  : pagesData;

const existingSlugs = await getAllPageSlugsUnderNosSecteurs();
const toCreate = toPublish.filter((p) => !existingSlugs.has(p.slug));
const alreadyCount = toPublish.length - toCreate.length;

if (toCreate.length === 0) {
  console.log(`Toutes les pages métropoles sont déjà publiées (${alreadyCount} page(s)). Rien à créer.`);
  console.log("Pour mettre à jour le contenu, utilisez : node scripts/update-vtc-metropoles-pages.js");
  process.exit(0);
}

if (alreadyCount > 0) {
  console.log(`${alreadyCount} déjà publiée(s), ${toCreate.length} à créer.\n`);
}

console.log(`Création de ${toCreate.length} page(s) métropoles sous /nos-secteurs/ ...\n`);

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
