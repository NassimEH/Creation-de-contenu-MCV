/**
 * Script de test : crée une page sous /nos-secteurs/ sur le site WordPress.
 * Utilise le module wordpress-api.js (parent = slug "nos-secteurs").
 */

import { createPageUnderNosSecteurs, PARENT_SLUG } from "./wordpress-api.js";

const testPage = {
  title: "Test depuis Cursor",
  slug: "test-cursor",
  content:
    "<p>Cette page a été créée automatiquement via l’API WordPress pour vérifier que la connexion fonctionne.</p><p>Si vous voyez ce message, tout est OK.</p>",
  status: "draft",
};

console.log(`Création de la page sous /${PARENT_SLUG}/ ...`);

try {
  const data = await createPageUnderNosSecteurs(testPage);
  const slug = data.slug || testPage.slug;
  const path = `/${PARENT_SLUG}/${slug}/`;
  console.log("Succès ! Page créée :");
  console.log("  - ID :", data.id);
  console.log("  - Titre :", data.title?.rendered);
  console.log("  - Chemin (maillage) :", path);
  console.log("  - Lien (éditer) :", data.link);
  console.log("\nTu peux la voir en brouillon dans l’admin WordPress (Pages).");
} catch (err) {
  console.error(err.message);
  process.exit(1);
}
