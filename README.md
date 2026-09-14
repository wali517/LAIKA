# Aurora Studios — React + Tailwind CSS Site

A fully componentized recreation of the interactive sections shown in your
screen recording (navbar dropdown, hero, film carousel with thumbnail strip,
hover-driven studio tabs, quote block, awards carousel, shop product
carousel, newsletter box, and the footer with the diagonal cut). Built with
**React 18**, **Vite 5**, and the **latest Tailwind CSS v4**.

> Note: real film stills, logos, and exact copy from the studio in the
> recording aren't reproduced here (that's copyrighted brand material).
> Everything is renamed to a placeholder brand ("Aurora Studios") with
> placeholder images from picsum.photos, but every layout, interaction,
> and animation pattern the mouse pointed at in the video is rebuilt —
> swap in your own copy/images/logo whenever you're ready.

## Project structure

```
studio-site/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── components/
    │   ├── Navbar.jsx        # logo + nav + "Animated Films" dropdown
    │   ├── Hero.jsx          # full-bleed hero banner
    │   ├── FilmsCarousel.jsx # big feature carousel + thumbnail strip
    │   ├── StudioTabs.jsx    # hover-to-switch tab list + image card
    │   ├── QuoteSection.jsx  # centered pull-quote block
    │   ├── AwardsSection.jsx # paged awards grid with arrows
    │   ├── ShopCarousel.jsx  # paged product cards
    │   ├── Newsletter.jsx    # subscribe box over an image
    │   └── Footer.jsx        # diagonal-cut footer + social links
    └── data/
        ├── films.js
        ├── studioTabs.js
        ├── awards.js
        └── products.js
```

Every section is its own file — edit the matching file in `components/` to
change layout, and the matching file in `data/` to change content.

## Run it in VS Code

1. Open this folder (`studio-site`) in VS Code.
2. Open a terminal (`` Ctrl+` ``) and install dependencies:

   ```bash
   npm install
   ```

3. Start the dev server:

   ```bash
   npm run dev
   ```

4. Open the printed local URL (usually `http://localhost:5173`) in your
   browser. The page hot-reloads as you edit files.

To build a production bundle:

```bash
npm run build
npm run preview   # preview the production build locally
```

## Customizing

- **Brand name / logo** — edit the text in `Navbar.jsx` and `Footer.jsx`.
- **Colors** — edit the `@theme` block in `src/index.css`
  (`--color-brand-yellow`, `--color-brand-cream`, etc.).
- **Fonts** — the display font is loaded via Google Fonts in `index.html`
  (`Archivo Black`); swap the `<link>` and the `--font-display` variable in
  `index.css` for a different look.
- **Images** — every `<img>` currently points at a `picsum.photos` seed URL
  as a stand-in; replace `src="..."` with your own image paths (e.g. put
  files in a `public/` folder and reference them as `/your-image.jpg`).
- **Content** — all copy, film names, award stats, and product info live in
  the `src/data/*.js` files, not hard-coded in the components.
