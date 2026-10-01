import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="container nav-container">
        <Link
          to="/"
          className="logo"
        >
          DataMind
        </Link>

        <nav aria-label="Main navigation">
          <NavLink to="/">
            Home
          </NavLink>

          <NavLink to="/blog/">
            Blog
          </NavLink>

          <NavLink to="/blog/topic/data-science/">
            Data Science
          </NavLink>

          <NavLink to="/blog/topic/generative-ai/">
            Generative AI
          </NavLink>

          <NavLink to="/blog/topic/agentic-ai/">
            Agentic AI
          </NavLink>

          <NavLink to="/about/">
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}