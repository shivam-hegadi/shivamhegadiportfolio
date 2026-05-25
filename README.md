# Shivam Hegadi — Writing Portfolio

A lightweight, static writing portfolio built with Astro and designed with a polished corporate style (navy/blue palette, clear typography, generous whitespace, and refined card layouts).

## Local development

```bash
npm install
npm run dev
```

Open the local URL shown in your terminal (usually `http://localhost:4321`).

## Build for production

```bash
npm run build
npm run preview
```

The static output is generated in `dist/`.

## Content model (add/edit writing links)

All writing entries are managed in:

- `src/content/writing.json`

Each item has this shape:

```json
{
  "title": "Article title",
  "publication": "Publication name",
  "date": "2026-01-24",
  "summary": "Short summary",
  "url": "https://example.com/article",
  "tags": ["systems", "leadership"],
  "featured": true
}
```

Notes:
- Use ISO dates (`YYYY-MM-DD`) for correct sorting.
- Set `featured: true` to show an item in the Home page featured grid.
- `/writing` lists all entries and supports tag filtering + date sorting.

## Pages and structure

- `src/pages/index.astro` — Home (hero, featured writing, about, contact)
- `src/pages/writing.astro` — Full writing index with filter/sort UI
- `src/layouts/BaseLayout.astro` — Shared layout + SEO/Open Graph/Twitter tags
- `src/styles/global.css` — Global design system and layout styling

## GitHub Pages deployment

This repository includes a workflow at `.github/workflows/deploy.yml` that:
1. Builds the Astro static site on pushes to `main`
2. Uploads `dist/`
3. Deploys to GitHub Pages

### Enable Pages in GitHub

1. Go to **Repository Settings → Pages**
2. Under **Build and deployment**, set **Source** to **GitHub Actions**
3. Push to `main` (or run the workflow manually)

## Custom domain: `shivamhegadi.systems`

A `CNAME` file is included at `public/CNAME` with:

```txt
shivamhegadi.systems
```

### DNS records to configure

At your DNS provider, set:

**A records** for apex domain (`shivamhegadi.systems`) to:
- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

**AAAA records** (optional, recommended for IPv6):
- `2606:50c0:8000::153`
- `2606:50c0:8001::153`
- `2606:50c0:8002::153`
- `2606:50c0:8003::153`

Alternatively, if using `www`, set:
- `www` **CNAME** → `shivam-hegadi.github.io`

After DNS propagation, enable **Enforce HTTPS** in GitHub Pages settings.
