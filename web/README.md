# Lusumbuko Women's Club

A modern Next.js website for Lusumbuko Women's Club, built as a small workspace app with a polished heritage-inspired landing experience.

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

## Donations (PayPal)

The donate page uses the same hosted PayPal section as Delight Tours:
stacked buttons, QR code, and payment link — all pointing to one secure checkout.

Copy `web/.env.example` to `web/.env.local` and fill in:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Hosted Buttons / NCP (required for /donate)
NEXT_PUBLIC_PAYPAL_HOSTED_CLIENT_ID=your_hosted_buttons_client_id
NEXT_PUBLIC_PAYPAL_HOSTED_BUTTON_ID=your_hosted_button_id
NEXT_PUBLIC_PAYPAL_PAYMENT_LINK=https://www.paypal.com/ncp/payment/your_button_id

EMAIL_HOST=smtp.example.com
EMAIL_USERNAME=noreply@example.com
EMAIL_PASSWORD=your_smtp_password
EMAIL_PORT=587
EMAIL_FROM="Lusumbuko Women's Club <noreply@example.com>"
DONATION_OWNER_EMAIL=info@lusumpuko.com
```

## Notes

- This app uses the Next.js App Router.
- Remote imagery is used in the page backgrounds, so the site is visual-first and image-heavy by design.
- The floating Donate button opens `/donate` with the three PayPal checkout options.
