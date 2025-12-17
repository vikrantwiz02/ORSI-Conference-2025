# ICAORFDI-2026 Conference Portal

Official website for the International Conference on Applications of Operations Research in Finance, Defence, and Industry (ICAORFDI-2026), alongside the 58th Annual Convention of ORSI, hosted by Government Holkar Science College, Indore.

## Overview
- Single-page conference portal built with React, Vite, and TypeScript.
- Includes sections for About, Themes, Committee, Registration, Venue, Sponsors, FAQs, and Contact.
- Content and copy are managed via simple TypeScript constants for easy updates.

## Tech Stack
- React 19
- Vite 6
- TypeScript 5

## Prerequisites
- Node.js `>= 18.17` and npm `>= 9`

## Quick Start
```zsh
# Install dependencies
npm install

# Start the dev server (defaults to http://localhost:3000)
npm run dev

# Build for production (outputs to ./dist)
npm run build

# Preview the production build locally
npm run preview
```

## Project Structure
```
.
├─ App.tsx
├─ constants.ts
├─ index.html
├─ index.tsx
├─ metadata.json
├─ package.json
├─ README.md
├─ tsconfig.json
├─ types.ts
├─ vite.config.ts
└─ components/
	├─ CommitteeSection.tsx
	├─ ContactSection.tsx
	├─ FAQSection.tsx
	├─ Footer.tsx
	├─ Hero.tsx
	├─ HeroCarousel.tsx
	├─ Icons.tsx
	├─ InfoSection.tsx
	├─ Navbar.tsx
	├─ RegistrationSection.tsx
	├─ ScrollToTop.tsx
	├─ SponsorsSection.tsx
	└─ ThemesSection.tsx
```

## Configuration
- `constants.ts`: Update conference metadata (title, dates, fees, committees, FAQs, bank details, etc.).
- `metadata.json`: High-level site metadata used by the app and tooling.
- `vite.config.ts`: Local dev server settings (port `3000`, host `0.0.0.0`) and path aliases.

## Scripts
- `npm run dev`: Start Vite dev server.
- `npm run build`: Create production build in `dist/`.
- `npm run preview`: Preview the `dist/` build locally.

## Deployment
The site is a static build. Any static hosting will work:
- Build the site: `npm run build` (outputs to `dist/`).
- Serve `dist/` via your platform of choice (GitHub Pages, Netlify, Vercel, S3 + CloudFront, Nginx, etc.).

## Contributing
- Use feature branches and submit pull requests against `main`.
- Keep changes focused and align with the existing code style.
- For content edits, prefer updating `constants.ts` where possible.

## Notes
- No environment variables are required for local development.
- Styling is component-scoped using modern CSS classes defined in the project.

