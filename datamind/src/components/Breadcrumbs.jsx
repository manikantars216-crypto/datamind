import { Link } from "react-router-dom";

export default function Breadcrumbs({ items = [] }) {
  return (
    <nav
      className="breadcrumbs"
      aria-label="Breadcrumb"
    >
      <Link to="/">Home</Link>

      {items.map((item, index) => (
        <span key={item.url || index}>
          <span className="breadcrumb-separator">
            /
          </span>

          {index === items.length - 1 ? (
            <span aria-current="page">
              {item.name}
            </span>
          ) : (
            <Link to={item.url}>
              {item.name}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}