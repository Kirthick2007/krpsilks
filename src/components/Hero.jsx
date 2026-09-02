import { Link } from "react-router-dom";
import siteConfig from "../data/siteConfig.js";

export default function Hero() {
  return (
    <section className="hero floral-veil dark">

      {/* Background */}
      <div className="photo">
        <img src="/images/hero.webp" alt="" />
      </div>

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Main Content */}
      <div className="container hero-content">

        {/* FULL RECTANGULAR LOGO FRAME */}
        <div className="logo-frame">
          <img
            src="/images/logokrp.png"
            alt="K.R.P. Silks - Sri Murugan Silk House"
            className="hero-logo"
          />
        </div>

        {/* Since */}
        <span className="eyebrow">
          Since {siteConfig.since} · Kanchipuram
        </span>

        {/* Heading */}
        <h1>
          A Legacy
          <br />
          <em>Woven</em> in Silk
        </h1>

        {/* Description */}
        <p className="lede">
          Discover the timeless elegance of sarees rooted in tradition and
          curated for today's celebrations.
        </p>

        {/* Buttons */}
        <div className="cta-row">
          <a
            href="#story"
            className="btn ghost-light"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("story")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Explore Our Story
            <svg
              width="14"
              height="10"
              viewBox="0 0 14 10"
              fill="none"
            >
              <path
                d="M1 5H13M13 5L9 1M13 5L9 9"
                stroke="currentColor"
                strokeWidth="1.2"
              />
            </svg>
          </a>
        </div>

      </div>

      {/* Scroll */}
      <div className="scroll-cue">
        <span>Scroll to discover</span>
        <span className="line"></span>
      </div>

    </section>
  );
}