/**
 * Module partagé pour l’API WordPress.
 * Gère l’auth et la résolution du parent "nos-secteurs" par slug (indépendant du domaine).
 */

import "dotenv/config";

const WORDPRESS_URL = (process.env.WORDPRESS_URL || "").replace(/\/$/, "");
const WORDPRESS_USER = process.env.WORDPRESS_USER;
const WORDPRESS_APP_PASSWORD = process.env.WORDPRESS_APP_PASSWORD;

// Slug de la page parente sous laquelle créer les pages (ex: nos-secteurs → URLs /nos-secteurs/xxx)
const PARENT_SLUG = process.env.WORDPRESS_PARENT_SLUG || "nos-secteurs";

function getAuth() {
  if (!WORDPRESS_URL || !WORDPRESS_USER || !WORDPRESS_APP_PASSWORD) {
    throw new Error("Définir WORDPRESS_URL, WORDPRESS_USER et WORDPRESS_APP_PASSWORD dans .env");
  }
  const auth = Buffer.from(`${WORDPRESS_USER}:${WORDPRESS_APP_PASSWORD}`).toString("base64");
  return { baseUrl: WORDPRESS_URL, auth };
}

/**
 * Récupère l’ID de la page parente par son slug (ex: "nos-secteurs").
 * Les nouvelles pages créées avec parent=id auront l’URL : /nos-secteurs/slug-de-la-page
 */
export async function getParentPageId(parentSlug = PARENT_SLUG) {
  const { baseUrl, auth } = getAuth();
  const url = `${baseUrl}/wp-json/wp/v2/pages?slug=${encodeURIComponent(parentSlug)}`;
  const res = await fetch(url, {
    headers: { Authorization: `Basic ${auth}` },
  });
  if (!res.ok) throw new Error(`API: ${res.status} ${res.statusText}`);
  const pages = await res.json();
  if (!pages.length) throw new Error(`Aucune page trouvée avec le slug "${parentSlug}". Crée-la d’abord dans WordPress ou vérifie WORDPRESS_PARENT_SLUG dans .env`);
  return pages[0].id;
}

/**
 * Crée une page sous la parente (ex: /nos-secteurs/slug).
 * @param {Object} options - title, content, slug, excerpt, focusKeyphrase (Yoast), status
 * @returns {Promise<Object>} Réponse de l’API (id, link, etc.)
 */
export async function createPageUnderNosSecteurs({ title, content, slug, excerpt, focusKeyphrase, status = "draft" }) {
  const { baseUrl, auth } = getAuth();
  const parentId = await getParentPageId();
  const body = {
    title,
    content,
    status,
    parent: parentId,
  };
  if (slug) body.slug = slug;
  if (excerpt) body.excerpt = excerpt;
  if (focusKeyphrase != null || excerpt != null) {
    body.meta = {};
    if (focusKeyphrase != null) body.meta._yoast_wpseo_focuskw = focusKeyphrase;
    if (excerpt != null) body.meta._yoast_wpseo_metadesc = excerpt;
  }
  const url = `${baseUrl}/wp-json/wp/v2/pages`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${auth}`,
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`API: ${res.status} ${res.statusText}\n${text}`);
  }
  return res.json();
}

/**
 * Récupère l'ID d'une page enfant par son slug (sous la parente nos-secteurs).
 */
export async function getPageIdBySlug(slug) {
  const { baseUrl, auth } = getAuth();
  const parentId = await getParentPageId();
  const url = `${baseUrl}/wp-json/wp/v2/pages?parent=${parentId}&slug=${encodeURIComponent(slug)}`;
  const res = await fetch(url, {
    headers: { Authorization: `Basic ${auth}` },
  });
  if (!res.ok) throw new Error(`API: ${res.status} ${res.statusText}`);
  const pages = await res.json();
  if (!pages.length) return null;
  return pages[0].id;
}

/**
 * Récupère l'ID d'une page par son slug, quel que soit son parent (pour les pages racine comme "app-mobile").
 * Utilise context=view puis context=edit si besoin (certains hébergeurs cachent ou n'exposent qu'en edit).
 */
export async function getPageIdBySlugGlobal(slug) {
  const { baseUrl, auth } = getAuth();
  for (const context of ["view", "edit"]) {
    const url = `${baseUrl}/wp-json/wp/v2/pages?slug=${encodeURIComponent(slug)}&context=${context}`;
    const res = await fetch(url, {
      headers: { Authorization: `Basic ${auth}` },
    });
    if (!res.ok) continue;
    const body = await res.text();
    let pages;
    try {
      pages = JSON.parse(body);
    } catch {
      continue;
    }
    if (Array.isArray(pages) && pages.length) return pages[0].id;
  }
  return null;
}

/**
 * Récupère tous les slugs des pages déjà publiées sous nos-secteurs (pagination automatique).
 * Utilisé pour filtrer en une fois les communes à créer et éviter N appels getPageIdBySlug.
 */
export async function getAllPageSlugsUnderNosSecteurs() {
  const { baseUrl, auth } = getAuth();
  const parentId = await getParentPageId();
  const slugs = new Set();
  let page = 1;
  const perPage = 100;
  for (;;) {
    const url = `${baseUrl}/wp-json/wp/v2/pages?parent=${parentId}&per_page=${perPage}&page=${page}`;
    const res = await fetch(url, {
      headers: { Authorization: `Basic ${auth}` },
    });
    if (!res.ok) {
      const body = await res.text();
      if (res.status === 400 && body.includes("rest_post_invalid_page_number")) {
        break;
      }
      throw new Error(`API: ${res.status} ${res.statusText}\n${body}`);
    }
    const list = await res.json();
    if (!list.length) break;
    list.forEach((p) => slugs.add(p.slug));
    if (list.length < perPage) break;
    page++;
  }
  return slugs;
}

/**
 * Met à jour une page existante sous nos-secteurs (par slug).
 * focusKeyphrase et excerpt sont aussi envoyés en meta Yoast (_yoast_wpseo_focuskw, _yoast_wpseo_metadesc).
 */
export async function updatePageUnderNosSecteurs({ slug, title, content, excerpt, focusKeyphrase }) {
  const { baseUrl, auth } = getAuth();
  const pageId = await getPageIdBySlug(slug);
  if (!pageId) throw new Error(`Page non trouvée avec le slug "${slug}" sous nos-secteurs.`);
  return updatePageById(pageId, { title, content, excerpt, focusKeyphrase });
}

/**
 * Met à jour une page par son ID (utilisé pour la page parente "nos-secteurs" ou toute page).
 * focusKeyphrase, excerpt et yoastSeoTitle sont envoyés en meta Yoast.
 */
export async function updatePageById(pageId, { title, content, excerpt, focusKeyphrase, yoastSeoTitle, slug }) {
  const { baseUrl, auth } = getAuth();
  const body = {};
  if (title !== undefined) body.title = title;
  if (content !== undefined) body.content = content;
  if (excerpt !== undefined) body.excerpt = excerpt;
  if (slug !== undefined) body.slug = slug;
  if (focusKeyphrase != null || excerpt != null || yoastSeoTitle != null) {
    body.meta = body.meta || {};
    if (focusKeyphrase != null) body.meta._yoast_wpseo_focuskw = focusKeyphrase;
    if (excerpt != null) body.meta._yoast_wpseo_metadesc = excerpt;
    if (yoastSeoTitle != null) body.meta._yoast_wpseo_title = yoastSeoTitle;
  }
  const url = `${baseUrl}/wp-json/wp/v2/pages/${pageId}`;
  const res = await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${auth}`,
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`API: ${res.status} ${res.statusText}\n${text}`);
  }
  return res.json();
}

export { getAuth, PARENT_SLUG, WORDPRESS_URL };
