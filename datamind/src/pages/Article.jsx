import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import SEO from "../components/SEO";
import JsonLd from "../components/JsonLd";
import Breadcrumbs from "../components/Breadcrumbs";
import RelatedArticles from "../components/RelatedArticles";
import TableOfContents from "../components/TableOfContents";
import { getBlogBySlug } from "../data/blog";
import { siteConfig } from "../seo/siteConfig";
import {
  articleSchema,
  breadcrumbSchema,
} from "../seo/schema";

function addHeadingIds(html) {
  return html.replace(
    /<h2([^>]*)>(.*?)<\/h2>/gi,
    (_, attributes, text) => {
      const cleanText = text
        .replace(/<[^>]*>/g, "")
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");

      return `<h2${attributes} id="${cleanText}">${text}</h2>`;
    }
  );
}

export default function Article() {
  const { slug } = useParams();

  const article = getBlogBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <main className="section">
        <div className="container">
          <h1>Article Not Found</h1>

          <p>
            The article you're looking for does not
            exist.
          </p>

          <Link to="/blog/">
            Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  const articlePath =
    `/blog/article/${article.slug}/`;

  const canonical =
    `${siteConfig.url}${articlePath}`;

  const breadcrumbs = [
    {
      name: "Blog",
      url: `${siteConfig.url}/blog/`,
    },
    {
      name: article.category,
      url: `${siteConfig.url}/blog/topic/${article.categorySlug}/`,
    },
    {
      name: article.title,
      url: canonical,
    },
  ];

  const articleContent =
    addHeadingIds(article.content);

  return (
    <>
      <SEO
        title={article.title}
        description={article.description}
        canonical={canonical}
        image={`${siteConfig.url}${article.image}`}
        type="article"
      />

      <JsonLd
        data={articleSchema(article)}
      />

      <JsonLd
        data={breadcrumbSchema(breadcrumbs)}
      />

      <main className="article-page">
        <div className="container">
          <Breadcrumbs
            items={[
              {
                name: "Blog",
                url: "/blog/",
              },
              {
                name: article.category,
                url: `/blog/topic/${article.categorySlug}/`,
              },
              {
                name: article.title,
                url: articlePath,
              },
            ]}
          />

          <article>
            <header className="article-header">
              <span className="category-label">
                {article.category}
              </span>

              <h1>{article.title}</h1>

              <p className="article-description">
                {article.description}
              </p>

              <div className="article-meta">
                <span>
                  By {article.author.name}
                </span>

                <span>
                  {article.datePublished}
                </span>

                <span>
                  {article.readTime}
                </span>
              </div>
            </header>

            {article.image && (
              <img
                className="article-featured-image"
                src={article.image}
                alt={article.title}
                width="1200"
                height="675"
              />
            )}

            <div className="article-layout">
              <aside>
                <TableOfContents
                  content={article.content}
                />
              </aside>

              <div
                className="article-content"
                dangerouslySetInnerHTML={{
                  __html: articleContent,
                }}
              />
            </div>
          </article>

          <RelatedArticles
            article={article}
          />
        </div>
      </main>
    </>
  );
}