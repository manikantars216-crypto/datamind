import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import JsonLd from "../components/JsonLd";
import BlogCard from "../components/BlogCard";
import CategoryCard from "../components/CategoryCard";
import { blogs } from "../data/blog";
import { categories } from "../data/categories";
import {
  websiteSchema,
  organizationSchema,
} from "../seo/schema";
import { siteConfig } from "../seo/siteConfig";

export default function Home() {
  const latestBlogs = blogs.slice(0, 6);

  return (
    <>
      <SEO
        title="Data Science & AI Insights | Machine Learning, GenAI & Agentic AI"
        description={siteConfig.description}
        canonical={`${siteConfig.url}/`}
      />

      <JsonLd
        data={websiteSchema()}
      />

      <JsonLd
        data={organizationSchema()}
      />

      <main>
        <section className="hero">
          <div className="container">
            <span className="eyebrow">
              DATA SCIENCE & AI
            </span>

            <h1>
              Practical Insights Into Data Science and AI
            </h1>

            <p>
              Explore practical guides and explanations
              covering Data Science, Machine Learning,
              Generative AI, Agentic AI, RAG, and Data
              Analytics.
            </p>

            <Link
              className="button"
              to="/blog/"
            >
              Explore the Blog
            </Link>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">
                TOPICS
              </span>

              <h2>
                Explore Data Science & AI Topics
              </h2>
            </div>

            <div className="category-grid">
              {categories.map((category) => (
                <CategoryCard
                  key={category.slug}
                  category={category}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">
                LATEST ARTICLES
              </span>

              <h2>
                Latest Data Science & AI Articles
              </h2>
            </div>

            <div className="blog-grid">
              {latestBlogs.map((blog) => (
                <BlogCard
                  key={blog.slug}
                  blog={blog}
                />
              ))}
            </div>

            <div className="center">
              <Link
                className="button secondary"
                to="/blog/"
              >
                View All Articles
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}