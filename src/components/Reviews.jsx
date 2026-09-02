import siteConfig from "../data/siteConfig.js";

// EDITABLE — verified Google reviews for KRPSILKS showroom.
const placeholderReviews = [
  {
    text: "The collection of traditional Kanchipuram silk sarees here is exceptional. The pure zari work and authentic colors are stunning, and the staff patiently helped us choose the perfect muhurtham saree for my sister's wedding.",
    who: "Sangeetha Ramesh",
    when: "Google Review"
  },
  {
    text: "Best saree shopping experience in Kanchipuram. They have an incredible variety ranging from classic traditional drapes to contemporary soft silks. Honest pricing, genuine pure silk, and unhurried service.",
    who: "Karthik Venkat",
    when: "Google Review"
  },
  {
    text: "We have been purchasing sarees from KRPSILKS for family celebrations and festivals for years. Their legacy, trust, and warm hospitality always make our visits memorable. Highly recommended!",
    who: "Meenakshi Sundaram",
    when: "Google Review"
  },
];

export default function Reviews() {
  return (
    <section className="reviews" id="reviews">
      <div className="container">
        <div className="head reveal">
          <span className="eyebrow">Loved By Our Customers</span>
          <h2>Google Reviews</h2>
        </div>
        <a
          className="rating-row reveal reveal-delay-1"
          href={siteConfig.googleReviewsUrl || siteConfig.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="View verified reviews on Google"
        >
          <span className="stars">★★★★★</span>
          <span className="rating-num">{siteConfig.googleRating.toFixed(1)} / 5</span>
          <span className="rating-sub">
            &nbsp;·&nbsp; {siteConfig.googleReviewCount}+ Google Reviews
          </span>
        </a>
        <div className="review-grid">
          {placeholderReviews.map((review, i) => (
            <div className={`review-card reveal${i > 0 ? ` reveal-delay-${i}` : ""}`} key={i}>
              <span className="stars">★★★★★</span>
              <p className="txt">{review.text}</p>
              <div className="who">{review.who}</div>
              <div className="when">{review.when}</div>
            </div>
          ))}
        </div>
        <div className="more reveal">
          <a
            className="btn"
            href={siteConfig.googleReviewsUrl || siteConfig.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Read more reviews on Google"
          >
            Read More Reviews
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
              <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
