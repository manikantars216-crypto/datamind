import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h2>DataMind</h2>

          <p>
            Practical insights on Data Science,
            Machine Learning, Generative AI,
            Agentic AI, RAG, and Data Analytics.
          </p>
        </div>

        <div>
          <h3>Explore</h3>

          <Link to="/blog/">
            Blog
          </Link>

          <Link to="/blog/topic/data-science/">
            Data Science
          </Link>

          <Link to="/blog/topic/machine-learning/">
            Machine Learning
          </Link>

          <Link to="/blog/topic/generative-ai/">
            Generative AI
          </Link>

          <Link to="/blog/topic/agentic-ai/">
            Agentic AI
          </Link>

          <Link to="/blog/topic/rag/">
            RAG
          </Link>
        </div>

        <div>
          <h3>Company</h3>

          <Link to="/about/">
            About
          </Link>

          <Link to="/contact/">
            Contact
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>
            © {new Date().getFullYear()} DataMind.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}