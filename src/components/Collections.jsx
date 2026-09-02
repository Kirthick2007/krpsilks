import collections from "../data/collections.js";

export default function Collections() {
  return (
    <section className="collections" id="collections">
      <div className="container">
        <div className="head reveal">
          
          <h2>Explore Our Collections</h2>
          
        </div>

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
  );
}
