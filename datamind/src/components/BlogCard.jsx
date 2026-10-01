import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
  return (
    <article className="blog-card">
      {blog.image && (
        <Link to={`/blog/article/${blog.slug}/`}>
          <img
            src={blog.image}
            alt={blog.title}
            loading="lazy"
            width="800"
            height="450"
          />
        </Link>
      )}

      <div className="blog-card-content">
        <span className="category-label">
          {blog.category}
        </span>

        <h2>
          <Link to={`/blog/article/${blog.slug}/`}>
            {blog.title}
          </Link>
        </h2>

        <p>{blog.excerpt}</p>

        <div className="blog-meta">
          <span>{blog.author.name}</span>
          <span>{blog.readTime}</span>
        </div>
      </div>
    </article>
  );
}