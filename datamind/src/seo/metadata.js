import { siteConfig } from "./siteConfig";

export function createMetadata({
  title,
  description,
  path = "/",
}) {
  const canonical = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    canonical,
  };
}