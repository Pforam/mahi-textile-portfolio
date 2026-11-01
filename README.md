# Mahi Patel — Textile Design Portfolio

A responsive React + TypeScript portfolio website built with Vite. This first phase intentionally excludes the CMS; the content is structured separately so a CMS can be connected later without rewriting page layouts.

## Requirements
- Node.js 20.19+ or 22.12+
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite.

## Production build
```bash
npm run build
npm run preview
```
The production output is written to `dist/`.

## Deploy to Netlify
1. Push this project to an independent GitHub repository.
2. In Netlify, choose **Add new site → Import an existing project** and connect the repository.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy. Netlify will provide a preview URL and HTTPS automatically for the Netlify subdomain.

The app uses React Router. If direct navigation to nested URLs returns a 404 on Netlify, add the included `public/_redirects` file (already supplied) to rewrite routes to `index.html`.

## Content editing (temporary, code-based)
Project content is in `src/data/projects.ts`. The project pages, cards and category filters are generated from this data. The About, Skills and Contact copy currently lives in:
- `src/pages/About.tsx`
- `src/pages/Skills.tsx`
- `src/pages/Contact.tsx`

The CMS is deliberately deferred. When it is added, these content sources can be replaced by CMS queries while keeping the visual components.

## Artwork and approvals — before public launch
The site currently uses textile-textured placeholders, not portfolio images. Replace these with original images supplied or approved by Mahi. Do not use third-party reference images as if they are original work. Confirm group-project credits and image permissions before publishing.

The email address `hello@example.com` is a placeholder in `src/components/Footer.tsx` and `src/pages/Contact.tsx`. Replace it only after Mahi approves a public email address. Behance is linked to the supplied profile.

## Image integration
Put optimized images in `public/images/` and use paths such as `/images/vansutra-cover.webp` in the project data. For each image, provide meaningful alt text, appropriate dimensions, and responsive sizing. Prefer WebP or AVIF while retaining high detail for textile textures and embroidery.

## Git hygiene
Do not commit `.env` files, credentials, or private client information. This project does not currently require environment variables or API keys.

## Current scope
Included: homepage, about, work listing, category filters, nine project detail routes, skills & craft, contact page, responsive navigation, custom 404, page metadata baseline, reduced-motion support, and Netlify SPA routing.

Not included yet: CMS, admin login, contact form/email delivery, analytics, custom domain, final portfolio image integration, or formal accessibility/performance audit.
