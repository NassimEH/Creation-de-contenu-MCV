/**
 * Trouve l’ID d’une page dont l’URL contient un mot-clé (ex. app-mobile).
 * Usage : node scripts/find-page-id.js app-mobile
 */
import "dotenv/config";
import { getAuth } from "./wordpress-api.js";

const keyword = process.argv[2] || "app-mobile";
const { baseUrl, auth } = getAuth();

let all = [];
for (let p = 1; p <= 10; p++) {
  const res = await fetch(`${baseUrl}/wp-json/wp/v2/pages?per_page=100&page=${p}`, {
    headers: { Authorization: `Basic ${auth}` },
  });
  if (!res.ok) break;
  const list = await res.json();
  if (!Array.isArray(list) || !list.length) break;
  all = all.concat(list);
  if (list.length < 100) break;
}

const found = all.filter((page) => (page.link || "").includes(keyword) || (page.slug || "") === keyword);
if (found.length) {
  found.forEach((p) => console.log("ID:", p.id, "| slug:", p.slug, "|", (p.title?.rendered || "").replace(/<[^>]+>/g, "").slice(0, 50)));
  console.log("\nPuis : node scripts/update-app-mobile-page.js --id=" + found[0].id);
} else {
  console.log("Aucune page avec slug ou lien contenant '" + keyword + "' (parcouru " + all.length + " pages).");
}
