import BlogCard from "./BlogCard";
import { getRelatedBlogs } from "../data/blog";

export default function RelatedArticles({ article }) {
  const relatedBlogs = getRelatedBlogs(article, 3);

  if (!relatedBlogs.length) {
    return null;
  }

  return (
    <section className="related-articles">
      <h2>Related Articles</h2>

      <div className="blog-grid">
        {relatedBlogs.map((blog) => (
          <BlogCard
            key={blog.slug}
            blog={blog}
          />
        ))}
      </div>
    </section>
  );
}