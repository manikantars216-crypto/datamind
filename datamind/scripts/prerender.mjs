import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { render } from "../dist-server/entry-server.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");

// Read blog data
const blogFile = fs.readFileSync(
  path.join(root, "src/data/blog.js"),
  "utf8"
);

// Extract article slugs automatically
const articleSlugs = [
  ...blogFile.matchAll(
    /\{\s*slug:\s*["']([^"']+)["']/g
  ),
].map((match) => match[1]);

// Static pages
const routes = [
  "/",
  "/blog/",
  "/about/",
  "/contact/",
];

// Automatically add every article
for (const slug of articleSlugs) {
  routes.push(`/blog/article/${slug}/`);
}

console.log(`Found ${articleSlugs.length} articles to prerender.`);

const template = fs.readFileSync(
  path.join(dist, "index.html"),
  "utf8"
);

for (const route of routes) {
  const { html, helmet } = render(route);

  let output = template.replace(
    '<div id="root"></div>',
    `<div id="root">${html}</div>`
  );

  if (helmet) {
    output = output
      .replace(
        /<title>.*?<\/title>/i,
        helmet.title?.toString() || "<title>DataMinds</title>"
      )
      .replace(
        "</head>",
        `${helmet.meta?.toString() || ""}
${helmet.link?.toString() || ""}
</head>`
      );
  }

  const routePath =
    route === "/"
      ? dist
      : path.join(dist, route);

  fs.mkdirSync(routePath, { recursive: true });

  fs.writeFileSync(
    path.join(routePath, "index.html"),
    output
  );

  console.log(`Prerendered: ${route}`);
}
