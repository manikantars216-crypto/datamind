import { siteConfig } from "./siteConfig";

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  };
}

export function articleSchema(article) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    image: [`${siteConfig.url}${article.image}`],
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: {
      "@type": "Person",
      name: article.author.name,
      url: `${siteConfig.url}/authors/${article.author.slug}/`,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/article/${article.slug}/`,
    },
    keywords: article.keywords?.join(", "),
  };
}

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function profilePageSchema(author) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: author.name,
    description: author.bio,
    url: `${siteConfig.url}/authors/${author.slug}/`,
    mainEntity: {
      "@type": "Person",
      name: author.name,
    },
  };
}