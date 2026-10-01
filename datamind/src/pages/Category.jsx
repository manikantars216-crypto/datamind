import { useParams, Link } from "react-router-dom";
import SEO from "../components/SEO";
import BlogCard from "../components/BlogCard";
import Breadcrumbs from "../components/Breadcrumbs";
import { categories } from "../data/categories";
import { getBlogsByCategory } from "../data/blog";
import { siteConfig } from "../seo/siteConfig";

export default function Category() {
  const { slug } = useParams();

  const category = categories.find(
    (item) => item.slug === slug
  );

  if (!category) {
    return (
      <main className="section">
        <div className="container">
          <h1>Category Not Found</h1>

          <Link to="/blog/">
            Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  const categoryBlogs =
    getBlogsByCategory(category.slug);

  const canonical =
    `${siteConfig.url}/blog/topic/${category.slug}/`;

  return (
    <>
      <SEO
        title={`${category.name} Articles & Guides`}
        description={category.description}
        canonical={canonical}
      />

      <main className="section">
        <div className="container">
          <Breadcrumbs
            items={[
              {
                name: "Blog",
                url: "/blog/",
              },
              {
                name: category.name,
                url: `/blog/topic/${category.slug}/`,
              },
            ]}
          />

          <header className="page-header">
            <span className="eyebrow">
              TOPIC
            </span>

            <h1>
              {category.name} Articles & Guides
            </h1>

            <p>
              {category.description}
            </p>
          </header>

          {categoryBlogs.length > 0 ? (
            <div className="blog-grid">
              {categoryBlogs.map((blog) => (
                <BlogCard
                  key={blog.slug}
                  blog={blog}
                />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <h2>
                More articles coming soon
              </h2>

              <p>
                This topic is being expanded with
                new practical content.
              </p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}