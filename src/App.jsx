import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import CollectionsPage from "./pages/Collections.jsx";
import KanchipuramSilks from "./pages/KanchipuramSilks.jsx";
import WeddingCollection from "./pages/WeddingCollection.jsx";
import Contact from "./pages/Contact.jsx";
import siteConfig, { whatsappUrl } from "./data/siteConfig.js";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  // On page load/reload, ensure scroll starts at the top hero section
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    // Clean hash on reload if present so it doesn't jump to section
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (hash) return;
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

// Fades sections marked `.reveal` (and the `.thread` timeline) into view as
// they scroll into the viewport. Re-runs on every route change.
function useScrollReveal(pathname) {
  useEffect(() => {
    let io;
    const timer = setTimeout(() => {
      const revealEls = document.querySelectorAll(".reveal, .thread");
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add("in");
          });
        },
        { threshold: 0.15 }
      );
      revealEls.forEach((el) => io.observe(el));
    }, 0);
    return () => {
      if (io) io.disconnect();
      clearTimeout(timer);
    };
  }, [pathname]);
}

export default function App() {
  const { pathname } = useLocation();
  useScrollReveal(pathname);

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<CollectionsPage />} />
        <Route path="/collections/kanchipuram-silks" element={<KanchipuramSilks />} />
        <Route path="/collections/wedding-collection" element={<WeddingCollection />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <a
        className="wa-float"
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
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
    </>
  );
}

export { siteConfig };
