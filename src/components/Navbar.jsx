import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MobileMenu from "./MobileMenu.jsx";
import siteConfig, { whatsappUrl } from "../data/siteConfig.js";

export const navLinks = [
  { label: "Our Story", to: "/#story", id: "story" },
  { label: "Collections", to: "/#collections", id: "collections" },
  { label: "Social Media", to: "/#social", id: "social" },
  { label: "Reviews", to: "/#reviews", id: "reviews" },
  { label: "Visit Us", to: "/#visit", id: "visit" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  // Handle in-page smooth scrolling when on home page
  const handleLinkClick = (e, link) => {
    if (isHome && link.id) {
      e.preventDefault();
      const el = document.getElementById(link.id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const headerClass = [
    !isHome ? "solid" : "",
    isHome && scrolled ? "scrolled" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header id="siteHeader" className={headerClass}>
      <div className="container">
        <Link
          to="/"
          className="logo-badge"
          onClick={(e) => {
            setMenuOpen(false);
            if (isHome) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <img src="/images/logo.webp" alt="KRPSILKS logo" />
          <span className="wordmark">
            <span className="name">{siteConfig.brandName}</span>
            <span className="sub">{siteConfig.brandSub}</span>
          </span>
        </Link>

        <nav className="links">
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

        <div className="nav-actions">
          {!isHome && (
            <Link to="/" className="nav-back-link" aria-label="Back to Home">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              <span>Back to Home</span>
            </Link>
          )}
          <a
            className="nav-wa"
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
          <button
            className={`burger${menuOpen ? " open" : ""}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
