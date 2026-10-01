import { Link } from "react-router-dom";

export default function CategoryCard({ category }) {
  return (
    <Link
      className="category-card"
      to={`/blog/topic/${category.slug}/`}
    >
      <h2>{category.name}</h2>

      <p>{category.description}</p>

      <span>Explore articles →</span>
    </Link>
  );
}