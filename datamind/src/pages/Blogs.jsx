import SEO from "../components/SEO";
import BlogCard from "../components/BlogCard";
import { blogs } from "../data/blog";
import { siteConfig } from "../seo/siteConfig";

export default function Blog() {
  return (
    <>
      <SEO
        title="Data Science & AI Blog | Machine Learning, GenAI, RAG & AI Agents"
        description="Read practical articles about Data Science, Machine Learning, Generative AI, Agentic AI, RAG, and Data Analytics."
        canonical={`${siteConfig.url}/blog/`}
      />

      <main className="section">
        <div className="container">
          <header className="page-header">
            <span className="eyebrow">
              BLOG
            </span>

            <h1>
              Data Science & AI Blog
            </h1>

            <p>
              Practical guides, explanations, and
              insights covering modern data and AI
              technologies.
            </p>
          </header>

          <div className="blog-grid">
            {blogs.map((blog) => (
              <BlogCard
                key={blog.slug}
                blog={blog}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}