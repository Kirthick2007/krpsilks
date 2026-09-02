import { Link } from "react-router-dom";
import collections from "../data/collections.js";
import { whatsappUrl } from "../data/siteConfig.js";
import { FinalCta } from "../components/VisitUs.jsx";

export default function WeddingCollection() {
  const collection = collections.find((c) => c.slug === "wedding-collection");

  return (
    <div className="page">
      <section className="page-hero floral-veil dark">
        <div className="container">
          <span className="eyebrow reveal">Our Collections</span>
          <h1 className="reveal reveal-delay-1">{collection.name}</h1>
          <p className="lede reveal reveal-delay-2">{collection.tagline}</p>
        </div>
      </section>

      <section className="coll-detail">
        <div className="container grid">
          <div className="photo reveal">
            <img src={collection.image} alt={collection.name} />
          </div>
          <div className="reveal reveal-delay-1">
            <span className="eyebrow">Wedding Collection</span>
            <h2>For The Bride & Her Celebrations</h2>
            <p className="intro-text">{collection.intro}</p>
            <ul className="details-list">
              {collection.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
            <div className="cta-row">
              <a
                className="btn solid"
                href={whatsappUrl(
                  "Hello KRPSILKS, I would like to know more about your Wedding Collection."
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                Enquire on WhatsApp
              </a>
              <Link className="btn" to="/contact">
                Visit Our Showroom
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FinalCta />
    </div>
  );
}
