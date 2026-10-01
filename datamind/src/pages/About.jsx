import SEO from "../components/SEO";
import { siteConfig } from "../seo/siteConfig";

export default function About() {
  return (
    <>
      <SEO
        title="About"
        description={`Learn about ${siteConfig.name}, an information platform covering Data Science, AI, Machine Learning, RAG, and Data Analytics.`}
        canonical={`${siteConfig.url}/about/`}
      />

      <main className="section">
        <div className="container narrow">
          <header className="page-header">
            <span className="eyebrow">
              ABOUT
            </span>

            <h1>
              About {siteConfig.name}
            </h1>
          </header>

          <div className="content">
            <p>
              {siteConfig.name} is an information
              platform focused on practical concepts
              across Data Science, Machine Learning,
              Generative AI, Agentic AI, RAG, and Data
              Analytics.
            </p>

            <p>
              The goal is to explain technical topics
              clearly, connect concepts with practical
              examples, and make modern data and AI
              technologies easier to understand.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}