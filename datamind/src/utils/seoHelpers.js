import { siteConfig } from "../seo/siteConfig";

export function getCanonical(path) {
  return `${siteConfig.url}${path}`;
}

export function getArticleUrl(slug) {
  return `${siteConfig.url}/blog/article/${slug}/`;
}

export function getCategoryUrl(slug) {
  return `${siteConfig.url}/blog/topic/${slug}/`;
}