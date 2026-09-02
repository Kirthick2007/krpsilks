import siteConfig, {
  getInstagramEmbedUrl,
  whatsappCommunityLink,
} from "../data/siteConfig.js";

export default function Instagram() {
  const reels = siteConfig.instagramReels || [];

  return (
    <section className="social" id="social">
      <div className="container">
        <span className="eyebrow reveal">Stay Connected &amp; Follow Our Collections</span>
        <h2 className="reveal reveal-delay-1">
          Explore Our Latest Collections
        </h2>
        <p className="lede reveal reveal-delay-2">
          Want to see our newest sarees before they sell out? Follow us on Instagram for daily
          drape Reels and join our WhatsApp Community for direct saree catalog photos &amp; new arrivals!
        </p>

        {/* ===== SOCIAL CHANNELS BANNER ===== */}
        <div className="social-channels-banner reveal reveal-delay-2">
          {/* Instagram Channel Card */}
          <div className="channel-card ig-channel">
            <div className="channel-icon-wrap ig">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </div>
            <div className="channel-info">
              <span className="channel-badge">Instagram Channel</span>
              <h3 className="channel-title">{siteConfig.instagramHandle}</h3>
              <p className="channel-desc">
                Daily Reels, wedding draping videos, customer reviews &amp; showroom moments.
              </p>
            </div>
            <a
              className="channel-btn ig-btn"
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              + Follow on Instagram
            </a>
          </div>

          {/* WhatsApp Community Card */}
          <div className="channel-card wa-channel">
            <div className="channel-icon-wrap wa">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.07-1.32A9.94 9.94 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"
                  fill="#25D366"
                />
                <path
                  d="M8.6 7.4c-.2-.44-.4-.45-.6-.46h-.5c-.18 0-.46.07-.7.34-.24.27-.9.9-.9 2.15 0 1.26.93 2.48 1.06 2.65.13.17 1.8 2.85 4.42 3.9 2.19.87 2.63.7 3.1.65.48-.05 1.53-.62 1.75-1.22.22-.6.22-1.11.15-1.22-.06-.1-.24-.17-.5-.3-.26-.13-1.53-.75-1.77-.84-.24-.09-.4-.13-.58.13-.17.27-.66.84-.8 1.01-.15.17-.3.2-.56.07-.26-.13-1.1-.4-2.1-1.3-.78-.68-1.3-1.53-1.46-1.8-.15-.26-.02-.4.11-.53.12-.12.26-.3.4-.46.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.13-.58-1.42-.8-1.94z"
                  fill="#fff"
                />
              </svg>
            </div>
            <div className="channel-info">
              <span className="channel-badge">WhatsApp Community</span>
              <h3 className="channel-title">Daily Collection Updates</h3>
              <p className="channel-desc">
                Get direct photos of fresh saree arrivals, color options &amp; prices directly on WhatsApp.
              </p>
            </div>
            <a
              className="channel-btn wa-btn"
              href={whatsappCommunityLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              Join WhatsApp Group
            </a>
          </div>
        </div>

        {/* ===== REELS SECTION HEADER ===== */}
        <div className="reels-heading reveal reveal-delay-2">
          <span className="reels-subhead">Featured Instagram Reels</span>
        </div>

        {/* ===== REELS GRID ===== */}
        <div className="reels-grid reveal reveal-delay-3">
          {reels.map((reel, index) => {
            const hasSpecificReel = reel.url && (reel.url.includes("/reel/") || reel.url.includes("/p/") || reel.id);
            const embedSrc = hasSpecificReel ? getInstagramEmbedUrl(reel.url || reel.id) : null;

            return (
              <div className="reel-card" key={index}>
                <div className="reel-header">
                  <div className="reel-user">
                    <img src="/images/logo.webp" alt="KRPSILKS" className="reel-avatar" />
                    <div>
                      <span className="reel-username">{siteConfig.brandName}</span>
                      <span className="reel-tag">{reel.tag || "Collection"}</span>
                    </div>
                  </div>
                  <a
                    href={reel.url || siteConfig.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="reel-ig-icon"
                    aria-label="View on Instagram"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                </div>

                <div className="reel-media-wrapper">
                  {embedSrc ? (
                    <iframe
                      src={embedSrc}
                      className="reel-iframe"
                      title={reel.title || "KRPSILKS Instagram Reel"}
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  ) : (
                    <a
                      href={reel.url || siteConfig.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="reel-placeholder"
                    >
                      <div className="reel-play-btn">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                      </div>
                      <span className="reel-title">{reel.title}</span>
                      <span className="reel-cta">Watch Reel on Instagram &rarr;</span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* ===== BOTTOM DUAL ACTION BAR ===== */}
        <div className="social-actions reveal">
          <a
            className="btn solid ig-main-cta"
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow @krpsilks on Instagram
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
              <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </a>
          <a
            className="btn ghost-light wa-main-cta"
            href={whatsappCommunityLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Daily Photos on WhatsApp
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
              <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
