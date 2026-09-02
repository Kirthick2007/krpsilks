import siteConfig, { whatsappUrl, telUrl } from "../data/siteConfig.js";

export function VisitUs() {
  return (
    <section className="visit" id="visit">
      <div className="container">
        <div className="grid">
          <div className="visit-info reveal">
            <span className="eyebrow">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Location &bull; Kanchipuram
            </span>
            <h2>Come Visit Us</h2>
            <p className="lede">
              Experience KRPSILKS in person and discover the beauty of our collections at
              our Kanchipuram showroom.
            </p>

            <div className="visit-block">
              <span className="lbl">Address</span>
              <p>
                {siteConfig.addressLines.map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < siteConfig.addressLines.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
            <div className="visit-block">
              <span className="lbl">Phone</span>
              <p>
                <a href={telUrl()}>{siteConfig.phoneDisplay}</a>
              </p>
            </div>
            <div className="visit-block">
              <span className="lbl">Opening Hours</span>
              <p>
                {siteConfig.hours.map((h, i) => (
                  <span key={i}>
                    {h.days}: {h.time}
                    {i < siteConfig.hours.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
          </div>
          <div className="map-wrap reveal reveal-delay-1">
            <iframe
              src={siteConfig.googleMapsEmbedUrl}
              loading="lazy"
              title="KRPSILKS showroom location map"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="final-cta">
      <div className="container">
        <div className="final-cta-card reveal">
          <div className="final-cta-ornament">
            <span></span>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
                fill="var(--gold)"
              />
            </svg>
            <span></span>
          </div>

          <span className="final-cta-eyebrow">Plan Your Visit</span>

          <h2>Your Next Saree Awaits You</h2>

          <p className="final-cta-lede">
            Experience the rich drape, authentic zari luster, and handcrafted tradition of genuine
            Kanchipuram silk sarees in person at our showroom.
          </p>

          <div className="final-cta-actions">
            <a
              className="premium-btn primary-gold"
              href={siteConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>Visit Our Showroom</span>
            </a>

            <a
              className="premium-btn secondary-wa"
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.07-1.32A9.94 9.94 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"
                  fill="#25D366"
                />
                <path
                  d="M8.6 7.4c-.2-.44-.4-.45-.6-.46h-.5c-.18 0-.46.07-.7.34-.24.27-.9.9-.9 2.15 0 1.26.93 2.48 1.06 2.65.13.17 1.8 2.85 4.42 3.9 2.19.87 2.63.7 3.1.65.48-.05 1.53-.62 1.75-1.22.22-.6.22-1.11.15-1.22-.06-.1-.24-.17-.5-.3-.26-.13-1.53-.75-1.77-.84-.24-.09-.4-.13-.58.13-.17.27-.66.84-.8 1.01-.15.17-.3.2-.56.07-.26-.13-1.1-.4-2.1-1.3-.78-.68-1.3-1.53-1.46-1.8-.15-.26-.02-.4.11-.53.12-.12.26-.3.4-.46.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.13-.58-1.42-.8-1.94z"
                  fill="#fff"
                />
              </svg>
              <span>Inquire on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisitUs;
