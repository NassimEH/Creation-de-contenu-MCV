/**
 * Met à jour la page "Nos secteurs" (parente) avec un contenu SEO complet.
 * Corrige : keyphrase, méta, images, liens internes/externes, longueur du texte.
 *
 * Usage : node scripts/update-nos-secteurs-page.js
 */

import { getParentPageId, updatePageById } from "./wordpress-api.js";
import { getNosSecteursPageData } from "./generate-nos-secteurs-page-content.js";

const { focusKeyphrase, seoTitle, metaDescription, content } = getNosSecteursPageData();

console.log("Mise à jour de la page Nos secteurs (parente) ...\n");

const parentId = await getParentPageId();
console.log(`  ID de la page : ${parentId}`);
console.log(`  Titre affiché : Nos secteurs`);
console.log(`  Titre SEO (Yoast) : ${seoTitle}`);
console.log(`  Expression clé : ${focusKeyphrase}`);
console.log(`  Méta description : ${metaDescription.length} caractères\n`);

try {
  const data = await updatePageById(parentId, {
    title: "Nos secteurs",
    content,
    excerpt: metaDescription,
    focusKeyphrase,
    yoastSeoTitle: seoTitle,
  });
  console.log(`  Page mise à jour avec succès (ID ${data.id}).`);
  console.log("\nVérifiez dans WordPress : réglages Yoast (titre SEO, méta description, expression clé) et le contenu de la page Nos secteurs.");
} catch (err) {
  console.error("Erreur :", err.message);
  process.exit(1);
}
