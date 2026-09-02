import collections from "../data/collections.js";
import { FinalCta } from "../components/VisitUs.jsx";

export default function CollectionsPage() {
  return (
    <div className="page">
      <section className="page-hero floral-veil dark">
        <div className="container">
          <span className="eyebrow reveal">Our Collections</span>
          <h1 className="reveal reveal-delay-1">Timeless traditions, beautiful weaves</h1>
          <p className="lede reveal reveal-delay-2">
            Sarees for every celebration — from the temple town's signature silks to soft
            everyday weaves. Every piece is best seen and felt in person at our
            Kanchipuram showroom.
          </p>
        </div>
      </section>

      <section className="collections">
        <div className="container">
          <div className="coll-gallery-grid">
            {collections.map((item, i) => (
              <div
                key={item.id}
                className={`coll-gallery-card reveal${i > 0 ? ` reveal-delay-${Math.min((i % 3) + 1, 3)}` : ""}`}
              >
                <div className="coll-img-wrap">
                  <img src={item.image} alt={item.name} loading="lazy" />
                  <div className="coll-overlay">
                    <span className="coll-tag">{item.tag}</span>
                    <h3 className="coll-title">{item.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </div>
  );
}
