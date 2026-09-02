import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero.jsx";
import Story from "../components/Story.jsx";
import Instagram from "../components/Instagram.jsx";
import Collections from "../components/Collections.jsx";
import Reviews from "../components/Reviews.jsx";
import { VisitUs, FinalCta } from "../components/VisitUs.jsx";

export default function Home() {
  const { hash } = useLocation();

  // Scroll to the right section when arriving via a hash link (e.g. from
  // the navbar on another page, like /#story).
  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth" }));
    }
  }, [hash]);

  return (
    <>
      <Hero />
      <Story />
      <Instagram />
      <Collections />
      <Reviews />
      <VisitUs />
      <FinalCta />
    </>
  );
}
