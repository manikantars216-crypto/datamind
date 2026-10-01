import { Helmet } from "react-helmet-async";
import { siteConfig } from "../seo/siteConfig";

export default function SEO({
  title,
  description,
  canonical,
  image,
  type = "website",
  noindex = false,
}) {
  const pageTitle =
    title === siteConfig.name
      ? title
      : `${title} | ${siteConfig.name}`;

  const pageDescription =
    description || siteConfig.description;

  const pageCanonical =
    canonical || `${siteConfig.url}/`;

  const pageImage =
    image || siteConfig.defaultImage;

  return (
    <Helmet>
      <html lang={siteConfig.language} />

      <title>{pageTitle}</title>

      <meta
        name="description"
        content={pageDescription}
      />

      <meta
        name="robots"
        content={
          noindex
            ? "noindex, follow"
            : "index, follow"
        }
      />

      <link
        rel="canonical"
        href={pageCanonical}
      />

      <meta
        property="og:type"
        content={type}
      />

      <meta
        property="og:title"
        content={pageTitle}
      />

      <meta
        property="og:description"
        content={pageDescription}
      />

      <meta
        property="og:url"
        content={pageCanonical}
      />

      <meta
        property="og:image"
        content={pageImage}
      />

      <meta
        property="og:site_name"
        content={siteConfig.name}
      />

      <meta
        property="og:locale"
        content={siteConfig.locale}
      />

      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={pageTitle}
      />

      <meta
        name="twitter:description"
        content={pageDescription}
      />

      <meta
        name="twitter:image"
        content={pageImage}
      />

      {siteConfig.twitterHandle && (
        <meta
          name="twitter:site"
          content={siteConfig.twitterHandle}
        />
      )}
    </Helmet>
  );
}