# Kris Shieh Portfolio

A responsive static portfolio website for **krisshieh.com**.

## Files

- `index.html` — page content and SEO metadata
- `styles.css` — visual design and responsive layout
- `script.js` — mobile navigation, reveal animation, cursor glow
- `favicon.svg` — browser icon
- `404.html` — custom missing-page screen
- `robots.txt` and `sitemap.xml` — basic search-engine files
- `CNAME` — custom-domain file for GitHub Pages

## Preview locally

Double-click `index.html`, or run a local server:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Content to replace before publishing

Search the project for these items:

1. `kris.xie@murdoch.edu.au`
2. Project descriptions and tags
3. Education dates and descriptions
4. `Australia` in the hero metadata
5. Any future CV, LinkedIn, ORCID, publication, video, or project links

## Deployment option A: GitHub Pages

1. Create a new GitHub repository.
2. Upload all files in this folder to the repository root.
3. Open repository **Settings → Pages**.
4. Publish from the main branch and root folder.
5. Keep the included `CNAME` file.
6. At the company where the domain was purchased, add the DNS records shown by GitHub Pages.
7. Enable HTTPS after the domain is verified.

## Deployment option B: Cloudflare Pages

1. Create a Cloudflare account and add `krisshieh.com`.
2. Connect a GitHub repository or upload the static site.
3. Use no build command; the output directory is the project root.
4. Add `krisshieh.com` as a custom domain.
5. Follow Cloudflare's DNS prompts.

## Deployment option C: Vercel

1. Import the folder through GitHub or deploy it with Vercel.
2. Select a static site with no framework.
3. Add `krisshieh.com` under project domains.
4. Update DNS using the values shown in the Vercel dashboard.

## Recommended next improvements

- Replace generated visual placeholders with real project screenshots.
- Add individual case-study pages.
- Add a downloadable CV.
- Add publication entries and DOI links.
- Add an English/Chinese language switch.
- Add privacy-friendly analytics.
