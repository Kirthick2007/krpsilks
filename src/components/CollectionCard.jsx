import { Link } from "react-router-dom";

export default function CollectionCard({ collection, className = "" }) {
  const { name, tagline, image, wide, hasPage, slug } = collection;
  const to = hasPage ? `/collections/${slug}` : "/contact";
  const linkLabel = hasPage ? "Explore Collection" : "Enquire About This";

  return (
    <Link
      to={to}
      className={`coll-card${wide ? " wide" : ""} ${className}`.trim()}
    >
      <div className="photo">
        <img src={image} alt={name} loading="lazy" />
      </div>
      <div className="coll-info">
        <h3>{name}</h3>
        <p>{tagline}</p>
        <span className="coll-link">
          {linkLabel}
          <svg width="12" height="9" viewBox="0 0 14 10" fill="none">
            <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
