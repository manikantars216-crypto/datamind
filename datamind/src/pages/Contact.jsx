import SEO from "../components/SEO";
import { siteConfig } from "../seo/siteConfig";

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact"
        description={`Contact the ${siteConfig.name} editorial team.`}
        canonical={`${siteConfig.url}/contact/`}
      />

      <main className="section">
        <div className="container narrow">
          <header className="page-header">
            <span className="eyebrow">
              CONTACT
            </span>

            <h1>Contact Us</h1>

            <p>
              Have a question, correction, or content
              suggestion?
            </p>
          </header>

          <div className="contact-card">
            <p>
              Email:
              {" "}
              <a href="mailto:hello@example.com">
                hello@example.com
              </a>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}