/**
 * Met à jour la page "App mobile" / "L'app mobile" avec un contenu SEO complet.
 * Corrige : keyphrase, méta, images, liens internes/externes, longueur du texte.
 *
 * Usage : node scripts/update-app-mobile-page.js [slug]
 *         node scripts/update-app-mobile-page.js --id=123
 * Ex.   : node scripts/update-app-mobile-page.js app-mobile
 *         node scripts/update-app-mobile-page.js --id=1234
 *
 * Si le slug ne fonctionne pas (cache API), utilisez --id=ID (l’ID est dans l’URL en édition : …/post.php?post=ID)
 */

import { getPageIdBySlugGlobal, updatePageById } from "./wordpress-api.js";
import { getAppMobilePageData } from "./generate-app-mobile-page-content.js";

const args = process.argv.slice(2);
const idArg = args.find((a) => a.startsWith("--id="));
const pageIdFromArg = idArg ? parseInt(idArg.replace("--id=", ""), 10) : null;
const slugArg = args.find((a) => !a.startsWith("--"));

const { focusKeyphrase, seoTitle, metaDescription, content, slug: targetSlug } = getAppMobilePageData();

let pageId = pageIdFromArg || null;
let usedSlug = null;

if (!pageId) {
  const slugsToTry = slugArg ? [slugArg] : ["app-mobile", "l-app-mobile", "application-mobile", "application-vtc-mobile"];
  for (const s of slugsToTry) {
    pageId = await getPageIdBySlugGlobal(s);
    if (pageId) {
      usedSlug = s;
      break;
    }
  }
}

if (!pageId || isNaN(pageId)) {
  console.error("Aucune page « app mobile » trouvée avec le slug (l’API ne renvoie peut‑être pas cette page).");
  console.error("\nMettre à jour par ID :");
  console.error("  node scripts/update-app-mobile-page.js --id=ID");
  console.error("  (Dans WordPress : Pages > Modifier « App mobile » > l’URL du navigateur contient post=ID ou page_id=ID)");
  console.error("\nContenu prêt dans : scripts/generate-app-mobile-page-content.js");
  process.exit(1);
}

if (usedSlug) console.log(`Page trouvée (slug : ${usedSlug}).\n`);
else console.log(`Mise à jour par ID : ${pageId}.\n`);

console.log(`  ID de la page : ${pageId}`);
console.log(`  Titre SEO (Yoast) : ${seoTitle}`);
console.log(`  Expression clé : ${focusKeyphrase}`);
console.log(`  Méta description : ${metaDescription.length} caractères\n`);

try {
  const data = await updatePageById(pageId, {
    title: "Application VTC mobile",
    content,
    excerpt: metaDescription,
    focusKeyphrase,
    yoastSeoTitle: seoTitle,
    slug: targetSlug,
  });
  console.log(`  Page mise à jour avec succès (ID ${data.id}).`);
  if (targetSlug) console.log(`  Nouveau slug (expression clé dans l’URL) : ${targetSlug}`);
  console.log("\nVérifiez dans WordPress : réglages Yoast et contenu de la page.");
} catch (err) {
  console.error("Erreur :", err.message);
  process.exit(1);
}
