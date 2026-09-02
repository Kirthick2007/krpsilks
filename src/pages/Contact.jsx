import { VisitUs } from "../components/VisitUs.jsx";

export default function Contact() {
  return (
    <div className="page">
      <section className="page-hero floral-veil dark">
        <div className="container">
          <span className="eyebrow reveal">Get In Touch</span>
          <h1 className="reveal reveal-delay-1">Visit Our Showroom</h1>
          <p className="lede reveal reveal-delay-2">
            Come see, touch and try our sarees in person — our team is happy to guide you
            through the collections best suited to your occasion.
          </p>
        </div>
      </section>

      <VisitUs />
    </div>
  );
}
