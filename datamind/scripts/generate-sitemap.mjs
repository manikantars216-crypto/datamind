import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const root = path.resolve(__dirname, "..");

const blogsFile = fs.readFileSync(
  path.join(root, "src/data/blog.js"),
  "utf8"
);

const categoriesFile = fs.readFileSync(
  path.join(root, "src/data/categories.js"),
  "utf8"
);

const SITE_URL = "https://example.com";

function extractSlugs(fileContent) {
  const regex = /slug:\s*["']([^"']+)["']/g;

  return [...fileContent.matchAll(regex)].map(
    (match) => match[1]
  );
}

const blogSlugs = extractSlugs(blogsFile);
const categorySlugs =
  extractSlugs(categoriesFile);

const urls = [
  {
    loc: `${SITE_URL}/`,
    priority: "1.0",
  },
  {
    loc: `${SITE_URL}/blog/`,
    priority: "0.9",
  },
  {
    loc: `${SITE_URL}/about/`,
    priority: "0.5",
  },
  {
    loc: `${SITE_URL}/contact/`,
    priority: "0.4",
  },

  ...categorySlugs.map((slug) => ({
    loc: `${SITE_URL}/blog/topic/${slug}/`,
    priority: "0.7",
  })),

  ...blogSlugs.map((slug) => ({
    loc: `${SITE_URL}/blog/article/${slug}/`,
    priority: "0.8",
  })),
];

const today =
  new Date().toISOString().split("T")[0];

const xmlUrls = urls
  .map(
    (url) => `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${today}</lastmod>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join("");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
>
${xmlUrls}
</urlset>
`;

const publicDirectory =
  path.join(root, "public");

if (!fs.existsSync(publicDirectory)) {
  fs.mkdirSync(publicDirectory, {
    recursive: true,
  });
}

fs.writeFileSync(
  path.join(publicDirectory, "sitemap.xml"),
  sitemap.trim()
);

console.log(
  `Sitemap generated with ${urls.length} URLs.`
);