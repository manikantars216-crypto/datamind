import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { render } from "../dist-server/entry-server.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");

const routes = [
  "/",
  "/blog/",
  "/about/",
  "/contact/",
  "/blog/article/what-is-hybrid-rag/",
  "/blog/article/agentic-ai-in-data-science/",
  "/blog/article/exploratory-data-analysis/",
];

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
