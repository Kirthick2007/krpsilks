import { Link, useLocation } from "react-router-dom";
import { navLinks } from "./Navbar.jsx";
import siteConfig, { whatsappUrl } from "../data/siteConfig.js";

export default function MobileMenu({ open, onClose }) {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  const handleLinkClick = (e, link) => {
    onClose();
    if (isHome && link.id) {
      e.preventDefault();
      const el = document.getElementById(link.id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 150);
      }
    }
  };

  return (
    <div
      className={`mobile-drawer${open ? " open" : ""}`}
      id="mobileDrawer"
      aria-hidden={!open}
    >
      <div className="mobile-drawer-brand">
        <span className="mobile-brand-name">{siteConfig.brandName}</span>
        <span className="mobile-brand-sub">{siteConfig.brandSub}</span>
      </div>

      <nav className="mobile-drawer-nav">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            to={link.to}
            onClick={(e) => handleLinkClick(e, link)}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="mobile-drawer-actions">
        <a
          className="wa-mobile"
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            style={{ display: "inline-block", verticalAlign: "middle", marginRight: "6px" }}
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.07-1.32A9.94 9.94 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"
              fill="#25D366"
            />
            <path
              d="M8.6 7.4c-.2-.44-.4-.45-.6-.46h-.5c-.18 0-.46.07-.7.34-.24.27-.9.9-.9 2.15 0 1.26.93 2.48 1.06 2.65.13.17 1.8 2.85 4.42 3.9 2.19.87 2.63.7 3.1.65.48-.05 1.53-.62 1.75-1.22.22-.6.22-1.11.15-1.22-.06-.1-.24-.17-.5-.3-.26-.13-1.53-.75-1.77-.84-.24-.09-.4-.13-.58.13-.17.27-.66.84-.8 1.01-.15.17-.3.2-.56.07-.26-.13-1.1-.4-2.1-1.3-.78-.68-1.3-1.53-1.46-1.8-.15-.26-.02-.4.11-.53.12-.12.26-.3.4-.46.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.13-.58-1.42-.8-1.94z"
              fill="#fff"
            />
          </svg>
          WhatsApp Us
        </a>
      </div>
    </div>
  );
}
