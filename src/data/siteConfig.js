// Central place to edit business info — used across the whole site.
// Update these values to keep the site accurate.
const siteConfig = {
  brandName: "K.R.P.SILKS",
  brandSub: "Sri Murugan Silk House",
  tagline: "A Legacy Woven in Silk",
  since: 1987,
  phone: "+919445817801",
  phoneDisplay: "+91 94458 17801",
  whatsappMessage:
    "Hello KRPSILKS, I would like to know more about your saree collections.",
  addressLines: [
    "K.R.P.SILKS",
    "77-A, Sheikpet Nadu St, Shiekpet",
    "Kanchipuram, Tamil Nadu – 631501, India",
  ],
  addressShort:
    "77-A, Sheikpet Nadu St, Shiekpet, Kanchipuram, Tamil Nadu – 631501",
  hours: [
    { days: "Monday – Saturday", time: "9:30 AM – 9:00 PM" },
    { days: "Sunday", time: "9:30 AM – 8:00 PM" },
  ],
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=K.R.P.SILKS+77-A+Sheikpet+Nadu+St+Kanchipuram",
  googleReviewsUrl:
    "https://www.google.com/search?q=K.R.P.SILKS+Kanchipuram+reviews#lrd=0x3a52c2c62c2f689f:0x45f44ca8675f9722,1,,,",
  googleMapsEmbedUrl:
    "https://maps.google.com/maps?q=K.R.P.SILKS%2C%2077-A%20Sheikpet%20Nadu%20St%2C%20Shiekpet%2C%20Kanchipuram%2C%20Tamil%20Nadu%20631501&t=&z=15&ie=UTF8&iwloc=&output=embed",
  instagramUrl: "https://www.instagram.com/krpsilks/?hl=en",
  instagramHandle: "@krpsilks",
  // EDITABLE — Add your Instagram Reel URLs or IDs here.
  // Paste either the full link (e.g. "https://www.instagram.com/reel/C8xyz123/") or just the ID ("C8xyz123")
  instagramReels: [
    {
      url: "https://www.instagram.com/reel/DZw9WtjR-Ug/?hl=en",
      title: "Pure Kanchipuram Silk Saree Weaves",
      tag: "Collections"
    },
    {
      url: "https://www.instagram.com/reel/DZ95FLORXZ2/?hl=en",
      title: "Showroom Collection & Drapes",
      tag: "Collections"
    },
    {
      url: "https://www.instagram.com/reel/DZcWE01R1l5/?hl=en",
      title: "Muhurtham Wedding Sarees",
      tag: "Collections"
    }
  ],
  // EDITABLE — Paste your WhatsApp Community/Group invite link here
  // (If left as default, clicking will open WhatsApp asking to join your catalog updates)
  whatsappCommunityUrl: "https://chat.whatsapp.com/KRPSILKS",
  whatsappCommunityMessage:
    "Hello KRPSILKS, please add me to your WhatsApp Community/Group to receive daily photos of your latest saree collections.",
  // EDITABLE — verify against the live Google Business listing before publishing
  googleRating: 4.9,
  googleReviewCount: 250,
};

export const getInstagramEmbedUrl = (urlOrId) => {
  if (!urlOrId) return "";
  if (urlOrId.includes("instagram.com")) {
    const clean = urlOrId.split("?")[0].replace(/\/$/, "");
    return `${clean}/embed/`;
  }
  return `https://www.instagram.com/reel/${urlOrId}/embed/`;
};

export const whatsappUrl = (message = siteConfig.whatsappMessage) =>
  `https://wa.me/${siteConfig.phone.replace("+", "")}?text=${encodeURIComponent(
    message
  )}`;

export const whatsappCommunityLink = () => {
  if (
    siteConfig.whatsappCommunityUrl &&
    !siteConfig.whatsappCommunityUrl.endsWith("/KRPSILKS")
  ) {
    return siteConfig.whatsappCommunityUrl;
  }
  return `https://wa.me/${siteConfig.phone.replace("+", "")}?text=${encodeURIComponent(
    siteConfig.whatsappCommunityMessage
  )}`;
};

export const telUrl = () => `tel:${siteConfig.phone}`;

export default siteConfig;
