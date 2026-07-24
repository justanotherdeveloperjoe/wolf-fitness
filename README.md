# Wolf Fitness — Landing Page

Single-page landing site for **Wolf Fitness**, a gym in Ciudad de Allende, Nuevo León, México.

Dark green/black design based on the NVIDIA DESIGN.md system, adapted to the gym's brand. Static site — no build step, no dependencies.

## Structure

```
wolf-fitness/
├── index.html        # Page markup (Spanish)
├── css/
│   └── styles.css    # All styles (design tokens in :root)
├── js/
│   ├── main.js       # Site interactions (mobile nav, Vanta init)
│   └── vendor/
│       ├── three.min.js      # three.js r134 (Vanta dependency)
│       └── vanta.net.min.js  # Vanta NET effect
└── images/           # Optimized photos + logo (transparent PNG)
```

## Development

Open `index.html` directly in a browser, or serve the folder:

```
npx serve .
```

## Pending before delivery

- [ ] **WhatsApp number** — replace every `520000000000` in `index.html` with the real number (format: `52` + 10 digits).
- [ ] **Facebook URL** — footer links to generic `facebook.com`; swap in the gym's page.
- [ ] **Weekend hours** — the schedule table assumes 7 A.M.–10 P.M. all 7 days; confirm Sat/Sun with the client.
- [ ] **Map pin** — verify the Google Maps embed lands on Dr. Mier 404; switch to exact coordinates if off.

## Notes

- Section prices also appear in the two marquee tickers and the CTA trust line — update all when prices change.
- The map iframe has a CSS filter for dark mode (`.map-embed iframe` in `styles.css`); remove it for a normal colored map.
- The final CTA section (`#cta`) gets an animated Vanta NET background (green network on black). `main.js` lazy-loads the vendor scripts only on viewports wider than 768px and skips them entirely for `prefers-reduced-motion` users — the CSS radial glow is the fallback in both cases. Effect tuning lives in the `VANTA.NET({...})` call in `main.js`.
- Section titles, cards, and gallery tiles fade up into view on scroll via `[data-reveal]` + `IntersectionObserver` in `main.js`. Grid siblings stagger through the `.reveal-grid` nth-child delays in `styles.css`. A `<noscript>` rule in `index.html` forces everything visible if JS is disabled. Price amounts (`.count-value[data-count-to]`) count up from 0 when their card reveals; both effects skip straight to the end state for `prefers-reduced-motion` users.
- Cards (`.benefit-card`, `.price-card`, `.info-card`) lift slightly on hover; primary buttons get a soft green glow on hover. Both are pure CSS.
