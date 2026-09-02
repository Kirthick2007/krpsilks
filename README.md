# KRPSILKS Website

A multi-page informational website for **K.R.P.SILKS**, a traditional saree
showroom in Kanchipuram, Tamil Nadu (since 1987). This is **not** an
e-commerce site — there is no cart or checkout. The goal is to tell the
KRPSILKS story, showcase collections, and drive visits, calls and WhatsApp
enquiries to the physical showroom.

Built with **React + Vite**.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview   # preview the production build locally
```

## Project structure

```
krpsilks/
├── index.html            Vite entry HTML
├── public/
│   ├── images/            Static images served as-is (e.g. /images/hero.webp)
│   └── favicon.png
├── src/
│   ├── main.jsx           App entry point, mounts React + router
│   ├── App.jsx             Routes, shared header/footer, WhatsApp float button
│   ├── components/         Reusable pieces used across pages
│   ├── pages/               One file per route (see Pages below)
│   ├── data/
│   │   ├── siteConfig.js   Business info: phone, address, hours, links, rating
│   │   └── collections.js  Collection names, taglines, images, descriptions
│   └── styles/              Plain CSS, one file per section/component group
```

## Pages & routes

| Route                                  | File                              |
|-----------------------------------------|------------------------------------|
| `/`                                      | `pages/Home.jsx`                   |
| `/collections`                           | `pages/Collections.jsx`            |
| `/collections/kanchipuram-silks`         | `pages/KanchipuramSilks.jsx`       |
| `/collections/wedding-collection`        | `pages/WeddingCollection.jsx`      |
| `/contact`                               | `pages/Contact.jsx`                |

The homepage keeps in-page sections (Our Story, Experience, Reviews) reachable
via `#story`, `#experience`, `#reviews` anchors — the navbar links to these
from any page (e.g. `/#story`) and the app scrolls to them automatically.

## Editing business info

Almost everything specific to the store — phone number, address, opening
hours, Google Maps link, Instagram handle, and the Google rating/review count
— lives in **`src/data/siteConfig.js`**. Edit it in one place and it updates
everywhere (navbar, footer, contact page, WhatsApp links).

Collection names, descriptions and images live in **`src/data/collections.js`**.
Two collections (Kanchipuram Silks, Wedding Collection) have dedicated detail
pages; the others link to the Contact page for now. To give a collection its
own page, add a new file in `src/pages/`, add a `<Route>` for it in
`src/App.jsx`, and set `hasPage: true` on that collection in
`collections.js`.

## Images — important

The images in `public/images/` for `hero`, `showroom`, `kanchipuram-silk`,
`wedding`, `soft-silks` and `new-arrivals` are **stylized placeholders**
(a diagonal pattern in the brand's colours with a label), not real
photography. They're there so the site looks and functions correctly out of
the box.

**Before publishing, replace these files with real photographs of the
showroom, the sarees and the products**, keeping the same filenames so
nothing else needs to change:

- `logo.webp` — the real KRPSILKS logo (already the actual logo)
- `hero.webp` — homepage hero background
- `showroom.webp` — "Our Story" section image
- `kanchipuram-silk.webp` — Kanchipuram Silks collection card + detail page
- `wedding.webp` — Wedding Collection card + detail page
- `soft-silks.webp`, `new-arrivals.webp` — remaining collection cards

The "Showroom Experience" gallery and the Instagram grid on the homepage
still use the original CSS placeholder blocks (no image files needed) —
swap those sections for real photos/embeds whenever you're ready, following
the same pattern used elsewhere in the codebase.

The customer reviews in `src/components/Reviews.jsx` are also placeholders —
replace them with genuine, verified Google reviews before publishing, and
double check `googleRating` / `googleReviewCount` in `siteConfig.js` against
the live Google Business listing.

## Deploying

This is a static site after `npm run build` (output in `dist/`). It can be
hosted on any static host — Netlify, Vercel, GitHub Pages, or a normal web
server. No backend or database is required.
