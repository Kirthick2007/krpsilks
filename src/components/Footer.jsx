import { Link } from "react-router-dom";
import siteConfig, { telUrl } from "../data/siteConfig.js";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="floral-veil dark">
      <div className="container">
        <div className="foot-grid">
          <div className="foot-brand">
            <div className="foot-brand-mark">
              <img src="/images/logo.webp" alt="KRPSILKS logo" />
              <div>
                <span className="name">{siteConfig.brandName}</span>
                <span className="sub">{siteConfig.brandSub}</span>
              </div>
            </div>
            <p>
              {siteConfig.tagline}. Since {siteConfig.since}, Kanchipuram.
            </p>
            <div className="foot-social">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="foot-icon-btn"
                title="Follow on Instagram"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href={`https://wa.me/${siteConfig.phone.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="foot-icon-btn wa-icon"
                title="Chat on WhatsApp"
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
              </a>
              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Maps Location"
                className="foot-icon-btn"
                title="View on Google Maps"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </a>
            </div>
          </div>
          <div className="foot-col">
            <span className="lbl">Explore</span>
            <Link to="/#story">Our Story</Link>
            <Link to="/collections">Collections</Link>
            <Link to="/#social">Reels &amp; Community</Link>
            <Link to="/#reviews">Reviews</Link>
          </div>
          <div className="foot-col">
            <span className="lbl">Visit</span>
            <p>{siteConfig.addressShort}</p>
            <a href={telUrl()}>{siteConfig.phoneDisplay}</a>
          </div>
        </div>
        <div className="foot-bottom">
          <span>&copy; {year} {siteConfig.brandName} &bull; Sri Murugan Silk House. All Rights Reserved.</span>
          <span>Kanchipuram, Tamil Nadu</span>
        </div>
      </div>
    </footer>
  );
}
