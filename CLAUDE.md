# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run lint     # ESLint
```

## Architecture

Next.js 16 App Router (JavaScript, no TypeScript). Single-page waitlist site for ProByt — a precision-protein snack brand.

**Data flow:** Form submit → `POST /api/waitlist` → `lib/notion.js` → Notion database. Live count: `GET /api/waitlist/count` (60s revalidation cache) → fetched client-side in `Hero.jsx` via `useEffect`.

**Key files:**
- `lib/notion.js` — `addToWaitlist(email, whatsapp)` and `getWaitlistCount()` — all Notion logic lives here. `getWaitlistCount()` paginates through all records (100/page) since Notion doesn't return a total count.
- `app/api/waitlist/route.js` — POST handler; validates email, calls notion.js
- `app/api/waitlist/count/route.js` — GET handler with `revalidate: 60`
- `app/page.js` — page assembly: Nav → Hero → [banner image] → Problem → ProductConcept → ProductCatalog → WhyProByt → waitlist CTA (`#waitlist`) → Footer
- `app/thank-you/page.js` — standalone page shown after successful signup (not currently redirected to; form shows inline success instead). Has Twitter/X and WhatsApp share links.

## Components

- `WaitlistForm` — accepts `variant` ("hero" | "cta") and `dark` (bool) props. Handles loading/error/success states inline. On success, renders confirmation UI in place (no redirect).
- `CustomCursor` — built but **not imported anywhere**; dead code. Uses `data-cursor` and `data-cursor-label` HTML attributes on elements to change cursor state.
- All animations use `framer-motion`.

## Tailwind v4 setup

Project uses Tailwind v4. Theme tokens live in `app/globals.css` under `@theme {}` — that is the source of truth, not `tailwind.config.js`. The `tailwind.config.js` is legacy v3 config (kept but overridden). `globals.css` correctly sets `--font-display: var(--font-playfair)`.

## Design tokens (globals.css @theme)

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

Fonts: `font-sans` = Inter (`--font-inter`), `font-display` = Playfair Display (intended; broken — see bug above).

## Environment variables

```
NOTION_TOKEN=               # Notion integration token
NOTION_WAITLIST_DB_ID=      # Notion database ID for waitlist entries
```

Notion DB schema: Email (title), WhatsApp (rich text), Timestamp (date), Source (select, always "Website").

## Deployment

Target: Vercel. Add env vars in Vercel dashboard (Settings → Environment Variables). Domain: probyt.in.
