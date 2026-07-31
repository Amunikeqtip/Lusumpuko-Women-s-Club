# Lusumpuko Women's Club

A modern Next.js website for Lusumpuko Women's Club, built as a small workspace app with a polished heritage-inspired landing experience.

## Tech Stack

- Next.js 16.2.4
- React 19.2.4
- React DOM 19.2.4
- TypeScript 5
- Tailwind CSS 4
- ESLint 9
- npm workspaces

## Prerequisites

- Node.js 20 or newer
- npm 10 or newer

## Install

From the repository root:

```bash
npm install
```

This installs the root workspace dependencies and keeps the `web` app in sync with the lockfile.

## Start The App

Development server:

```bash
npm run dev
```

Then open:

```bash
http://localhost:3000
```

Production build:

```bash
npm run build
```

Production server:

```bash
npm run start
```

Lint the app:

```bash
npm run lint
```

## Available Scripts

The root `package.json` proxies to the `web` workspace:

- `npm run dev` starts the Next.js dev server
- `npm run build` creates a production build
- `npm run start` runs the production server
- `npm run lint` runs ESLint

## Project Structure

- `web/src/app` - App Router pages and layout
- `web/public` - Static assets
- `web/next.config.ts` - Next.js configuration
- `web/src/app/globals.css` - Global styling and Tailwind theme setup

## Donations (Paynow)

Create `web/.env.local` with your Paynow credentials when ready:

```bash
PAYNOW_INTEGRATION_ID=your_integration_id
PAYNOW_INTEGRATION_KEY=your_integration_key
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Email delivery (Resend) — required to actually send donation emails
RESEND_API_KEY=re_xxxxxxxxx
EMAIL_FROM="Lusumpuko Women's Club <hello@lusumpukopala.com>"

# Owner alert recipients (comma-separated). Defaults to hello@lusumpukopala.com
DONATION_OWNER_EMAIL=hello@lusumpukopala.com
```

`NEXT_PUBLIC_SITE_URL` should be your public site origin in production so Paynow return/result URLs resolve correctly.

When Paynow confirms a paid donation:
- the donor receives a thank-you email
- owners receive an alert with the amount, donor name, and donor email

## Notes

- This app uses the Next.js App Router.
- Remote imagery is used in the page backgrounds, so the site is visual-first and image-heavy by design.
- The floating Donate button opens `/donate`, which initiates Paynow checkout via `/api/donate`.
