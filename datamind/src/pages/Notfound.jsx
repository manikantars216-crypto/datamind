import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you requested could not be found."
        noindex={true}
      />

      <main className="section">
        <div className="container not-found">
          <span className="eyebrow">
            404
          </span>

          <h1>Page Not Found</h1>

          <p>
            The page you're looking for doesn't exist
            or has moved.
          </p>

          <Link
            className="button"
            to="/"
          >
            Return Home
          </Link>
        </div>
      </main>
    </>
  );
}