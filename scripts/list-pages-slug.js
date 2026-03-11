/**
 * Liste les slugs et titres des pages (pour trouver le slug d'une page comme "app mobile").
 * Usage: node scripts/list-pages-slug.js
 */
import "dotenv/config";
const baseUrl = (process.env.WORDPRESS_URL || "").replace(/\/$/, "");
const auth = Buffer.from(`${process.env.WORDPRESS_USER}:${process.env.WORDPRESS_APP_PASSWORD}`).toString("base64");

let all = [];
for (let p = 1; p <= 5; p++) {
  const res = await fetch(`${baseUrl}/wp-json/wp/v2/pages?per_page=100&page=${p}`, {
    headers: { Authorization: `Basic ${auth}` },
  });
  const list = await res.json();
  if (!list.length) break;
  all = all.concat(list);
}
const raw = (t) => (t || "").replace(/<[^>]+>/g, "").replace(/&#8217;/g, "'");
all
  .filter((page) => /mobile|app|application|iphone|android/i.test(raw(page.title?.rendered)))
  .forEach((page) => console.log(page.slug, "|", raw(page.title?.rendered)));

const roots = all.filter((p) => !p.parent || p.parent === 0);
console.log("\nPages racine (sans parent), max 30:");
roots.slice(0, 30).forEach((p) => console.log(p.slug, "|", raw(p.title?.rendered)));
const found = all.filter((p) => /mobile|app|application|iphone|ios/i.test(raw(p.title?.rendered)));
if (found.length) {
  console.log("\nPages contenant app/mobile/ios:");
  found.forEach((p) => console.log(p.slug, "|", raw(p.title?.rendered)));
}
