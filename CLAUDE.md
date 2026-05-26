# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run lint     # ESLint
vercel --prod    # Deploy to production (requires vercel CLI + login)
```

## Architecture

Next.js 16 App Router (JavaScript, no TypeScript). Single-page waitlist site for ProByt — a precision-protein snack brand.

**Data flow:** Form submit → `POST /api/waitlist` → `lib/notion.js` → Notion database. Live count: `GET /api/waitlist/count` (60s revalidation cache) → fetched client-side in `Hero.jsx` via `useEffect`.

**Key files:**
- `lib/notion.js` — `addToWaitlist(email, whatsapp)` and `getWaitlistCount()`. `getWaitlistCount()` paginates through all records (100/page) since Notion has no total count API.
- `app/api/waitlist/route.js` — POST handler; validates email, calls notion.js
- `app/api/waitlist/count/route.js` — GET handler with `revalidate: 60`
- `app/page.js` — page assembly: Nav → Hero → [banner image] → Problem → ProductConcept → ProductCatalog → WhyProByt → waitlist CTA (`#waitlist`) → Footer
- `app/thank-you/page.js` — standalone page with Twitter/X and WhatsApp share links. Not redirected to from the form; form shows inline success state instead.

## Components

- `WaitlistForm` — props: `variant` ("hero" | "cta"), `dark` (bool). Handles loading/error/success inline. Success renders confirmation in place, no redirect.
- `CustomCursor` — built but **not imported anywhere**; dead code. If activated it reads `data-cursor` and `data-cursor-label` attributes scattered throughout components.
- All scroll animations use `framer-motion` (`useInView`, `motion` components). `once: true` on all — animations fire once on scroll into view.

## Tailwind v4 setup

Project uses Tailwind v4 CSS-first config. Theme tokens live in `app/globals.css` under `@theme {}` — this is the source of truth. `tailwind.config.js` is a legacy v3 file kept in repo but overridden by the v4 CSS config.

## Design tokens (`app/globals.css` `@theme`)

| Token | Value | Use |
|---|---|---|
| `cream` | #F5F5F0 | Page background |
| `ink` | #1A1A1A | Primary text |
| `terra` | #C1440E | Accent / CTA buttons |
| `terra-light` | #E8602A | Hover state for terra |
| `sage` | #4A7C59 | Secondary accent |
| `sage-light` | #6A9E78 | Hover state for sage |
| `muted` | #6B6B6B | Body text / labels |
| `border` | #E0DED8 | Card borders |

Fonts: `font-sans` = Inter, `font-display` = Playfair Display. Both loaded in `app/layout.js` as CSS variables and registered in `@theme`.

## Mobile responsive pattern

Sections use `py-16 sm:py-28` (not `py-28`). Cards use `p-6 sm:p-8`. Section header margins use `mb-10 sm:mb-14`. Keep this pattern when adding new sections.

## Environment variables

```
NOTION_TOKEN=               # Notion integration token (ntn_...)
NOTION_WAITLIST_DB_ID=      # Notion database ID — ProByt Waitlist DB (85425daf7d794fd092cec1c472254c6a)
```

Notion DB schema: Email (title), WhatsApp (rich text), Timestamp (date), Source (select — "Website" / "Instagram" / "WhatsApp" / "Other"). The Notion integration must be explicitly shared with the database (Notion UI → database → ··· → Connections).

## Deployment

Live at **probyt.vercel.app**. Project linked via `.vercel/project.json` (team: `vtharun-06s-projects`, project: `prj_WtYzDSm9D7JdQpLhLcVMWFTUhgXE`). Env vars already set in Vercel dashboard. GitHub repo: `vtharun-06/probyt` (connected; push to `main` auto-deploys). Domain `probyt.in` not yet pointed to Vercel — add in Vercel dashboard → Settings → Domains.
