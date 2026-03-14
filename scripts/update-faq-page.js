/**
 * Met à jour la page FAQ avec un contenu SEO complet.
 * Corrige : keyphrase, méta, slug, image avec alt, liens internes, hiérarchie H2/H3, voix active, mots de transition.
 *
 * Usage : node scripts/update-faq-page.js [slug]
 *         node scripts/update-faq-page.js --id=123
 * Ex.   : node scripts/update-faq-page.js faq
 *         node scripts/update-faq-page.js --id=1234
 *
 * Si le slug ne fonctionne pas, utilisez --id=ID (l'ID est dans l'URL WordPress en édition).
 */

import { getPageIdBySlugGlobal, updatePageById } from "./wordpress-api.js";
import { getFaqPageData } from "./generate-faq-page-content.js";

const args = process.argv.slice(2);
const idArg = args.find((a) => a.startsWith("--id="));
const pageIdFromArg = idArg ? parseInt(idArg.replace("--id=", ""), 10) : null;
const slugArg = args.find((a) => !a.startsWith("--"));

const { focusKeyphrase, seoTitle, metaDescription, content, slug: targetSlug } = getFaqPageData();

let pageId = pageIdFromArg || null;
let usedSlug = null;

if (!pageId) {
  const slugsToTry = slugArg ? [slugArg] : ["faq", "faq-vtc", "faq-chauffeur-prive-vtc", "questions-frequentes"];
  for (const s of slugsToTry) {
    pageId = await getPageIdBySlugGlobal(s);
    if (pageId) {
      usedSlug = s;
      break;
    }
  }
}

if (!pageId || isNaN(pageId)) {
  console.error("Aucune page FAQ trouvée avec le slug.");
  console.error("\nSlugs testés : faq, faq-vtc, faq-chauffeur-prive-vtc, questions-frequentes");
  console.error("\nMettre à jour par ID :");
  console.error("  node scripts/update-faq-page.js --id=ID");
  console.error("  (Dans WordPress : Pages > Modifier la page FAQ > l'URL contient post=ID)");
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
    title: "FAQ chauffeur privé VTC",
    content,
    excerpt: metaDescription,
    focusKeyphrase,
    yoastSeoTitle: seoTitle,
    slug: targetSlug,
  });
  console.log(`  Page mise à jour avec succès (ID ${data.id}).`);
  if (targetSlug) console.log(`  Nouveau slug (expression clé dans l'URL) : ${targetSlug}`);
  console.log("\nVérifiez dans WordPress : réglages Yoast (titre SEO, méta description, expression clé) et le contenu de la page FAQ.");
} catch (err) {
  console.error("Erreur :", err.message);
  process.exit(1);
}
