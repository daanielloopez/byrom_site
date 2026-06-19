# Byrom plc — Corporate site

White-dominant, editorial corporate home for **Byrom plc**. Static site (no build) — Vercel just serves the files.

## Structure

```
.
├── index.html                       ← entry
├── vercel.json                      ← cache headers for fonts/images
├── src/
│   ├── colors_and_type.css          ← brand tokens + @font-face
│   ├── home.css                     ← layout & responsive rules
│   └── js/
│       ├── logos.js                 ← BYROM wordmark (base64)
│       ├── mapdata.js               ← world map path + event/office pins
│       ├── Primitives.jsx           ← Container, Btn, Photo, Modal…
│       ├── Navbar.jsx
│       ├── SectionsHero.jsx         ← Hero, Intro, StatsBand
│       ├── SectionsMid.jsx          ← Services, Gallery, Tech, TrackRecord, Timeline
│       └── SectionsEnd.jsx          ← Group, Presence, WorldMap, Closing (contact), Footer
└── public/
    └── assets/
        ├── fonts/                   ← Gotham + accents (see fonts/README.md)
        ├── logos/                   ← (optional) BYROM logo files
        ├── gallery/                 ← horizontal gallery (see gallery/README.md)
        ├── group/                   ← group-company logos (see group/README.md)
        ├── events/                  ← event imagery (track-record + map popups)
        └── map/                     ← (optional) future map data exports
```

## Run locally

No build step. Just serve the folder over HTTP (file:// won't load .jsx via `<script src>`):

```bash
npx serve .          # or: python3 -m http.server 8080
```

Open http://localhost:3000 (or :8080).

## Deploy to Vercel

1. Push this repo to GitHub.
2. On vercel.com → **Add new → Project → Import** your GitHub repo.
3. Framework Preset: **Other** · Build Command: *(leave empty)* · Output Directory: *(leave empty)* · Root Directory: `./`
4. Click **Deploy**. Done — every push to `main` auto-deploys.

## How to update the site

| Want to change…           | Edit                                                    |
| ------------------------- | ------------------------------------------------------- |
| Hero copy / CTAs          | `src/js/SectionsHero.jsx`                               |
| Stats                     | `STATS` array in `src/js/SectionsHero.jsx`              |
| Service text (popup body) | `SERVICES[i].full` in `src/js/SectionsMid.jsx`          |
| Gallery images            | drop files into `public/assets/gallery/` (see its README) |
| Track record cards        | `EVENTS` array in `src/js/SectionsMid.jsx`              |
| Historical timeline       | `TIMELINE` array in `src/js/SectionsMid.jsx`            |
| Group logos               | drop PNGs into `public/assets/group/`                   |
| Map pins                  | `LOCATIONS` in `src/js/mapdata.js`                      |
| Contact form events list  | `EVENT_OPTIONS` in `src/js/SectionsEnd.jsx`             |
| Brand colors / type scale | `src/colors_and_type.css`                               |

## Contact form

The form currently shows a "thank you" message in front-end only. To actually deliver enquiries, wire the `submit` handler in `Closing` (`SectionsEnd.jsx`) to one of:

- **Formspree** (zero backend) — change the `<form>` to `action="https://formspree.io/f/XXXX" method="POST"`.
- A **Vercel Serverless Function** (`/api/contact.js`) that forwards to your SFMC / email.
- Your **SFMC** endpoint directly.

## Notes

- Babel-in-browser is used so the repo stays buildless and easy to edit. If we ever need to optimise, we can convert to Vite without changing the design or component structure.
- Production CDN: React + React-DOM (UMD, production builds), Babel Standalone, Lucide icons.
