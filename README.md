# TrackPath — Landing Page

Landing page for **TrackPath**, a link shortener and affiliate marketing analytics platform. Built with vanilla HTML, CSS, and JavaScript — no frameworks, no dependencies.

---

## 📁 Project Structure

```

trackpath/
├── index.html      # Main HTML — structure and markup
├── styles.css      # All styles, tokens, animations and responsive layout
├── main.js         # JavaScript — i18n, theme, scroll, counters, FAQ, modal, form
├── sitemap.xml     # XML sitemap for SEO / Google Search Console
└── README.md       # This file

```

## 🎨 Features

- **Dark/Light theme** — persisted in `localStorage`
- **i18n (EN/PT-BR)** — auto-detected from browser language, persisted in `localStorage`
- **Scroll-aware navbar** — adds border on scroll
- **Intersection Observer animations** — `.reveal` elements animate in on scroll
- **Animated counters** — stats section counts up when visible
- **FAQ accordion** — accessible with `aria-expanded`
- **Fully responsive** — mobile-first with CSS Grid and `clamp()`


## 📄 License

© 2025 TrackPath. All rights reserved.
