export default function Experience() {
  return (
    <>
      {/* ===== SHOWROOM EXPERIENCE ===== */}
      <section className="experience" id="experience">
        <div className="container">
          <div className="head reveal">
            <span className="eyebrow">The KRPSILKS Experience</span>
            <h2>
              More than saree shopping.
              <br />
              It's an experience.
            </h2>
          </div>
          <p className="lede reveal reveal-delay-1">
            Step inside our Kanchipuram showroom, where every visit is guided, unhurried,
            and rooted in decades of trust.
          </p>
          <div className="exp-grid">
            <div className="photo reveal">
              <img src="/images/krpinterior.png" alt="Spacious Showroom Ambiance" />
            </div>
            <div className="ph light reveal reveal-delay-1">
              <span className="ph-label">Curated Bridal Displays</span>
            </div>
            <div className="ph reveal reveal-delay-2">
              <span className="ph-label">Personalized Saree Draping</span>
            </div>
            <div className="ph light reveal reveal-delay-1">
              <span className="ph-label">Pure Zari &amp; Mulberry Silk</span>
            </div>
            <div className="ph reveal reveal-delay-2">
              <span className="ph-label">Kanchipuram Showroom</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY KRPSILKS ===== */}
      <section className="why">
        <div className="container">
          <div className="head reveal">
            <span className="eyebrow">Why KRPSILKS</span>
            <h2>Tradition. Experience. Trust.</h2>
          </div>
          <div className="why-grid">
            <div className="why-item reveal">
              <span className="idx">Heritage</span>
              <h3>Rooted in Tradition</h3>
              <p>Built on years of experience in Kanchipuram's saree trade.</p>
            </div>
            <div className="why-item reveal reveal-delay-1">
              <span className="idx">Curation</span>
              <h3>Curated Collections</h3>
              <p>A thoughtfully selected range of sarees for different occasions.</p>
            </div>
            <div className="why-item reveal reveal-delay-2">
              <span className="idx">Guidance</span>
              <h3>Personal Experience</h3>
              <p>A showroom experience where customers explore and choose with guidance.</p>
            </div>
            <div className="why-item reveal reveal-delay-3">
              <span className="idx">Relationship</span>
              <h3>Built on Trust</h3>
              <p>Relationships with customers, built over the years.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
