![Nexus Directory Logo](public/nexus-directory-logo.png)

# Nexus Directory

Modern directory platform built with Next.js (App Router), React 19, Mongoose, and NextAuth.

**Overview**

- **Purpose:** Marketplace-style directory for professionals, agencies, and services.
- **Tech stack:** Next.js (App Router), React 19, TypeScript, Tailwind CSS + DaisyUI, MongoDB (Mongoose), NextAuth, react-hot-toast.

**Quick Links**

- **Layout:** [app/layout.tsx](app/layout.tsx#L1)
- **Auth handler:** [auth.ts](auth.ts#L1)
- **Next config:** [next.config.ts](next.config.ts#L1)
- **Logo:** [public/nexus-directory-logo.png](public/nexus-directory-logo.png)

**Key Features**

- **Authentication:** NextAuth with Credentials and OAuth providers
- **Data:** Mongoose models for `User`, `Service`, `Category`, etc.
- **Styling:** Tailwind CSS + DaisyUI components and themes
- **UX:** Toasts (`react-hot-toast`) and accessible forms (`react-hook-form`)

**Prerequisites**

- **Node:** 18 or newer
- **Package manager:** npm or yarn
- **Database:** MongoDB connection (Atlas recommended)

**Local Quick Start**

1. Install dependencies

```bash
npm install
```

2. Create `.env.local` with the required variables

- `MONGODB_URI` — MongoDB connection string
- `AUTH_SECRET` — NextAuth secret
- `NEXTAUTH_URL` — App base URL (e.g. `http://localhost:3000`)
- `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET` — Google OAuth
- `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET` — GitHub OAuth
- `LINKEDIN_CLIENT_ID`, `LINKEDIN_CLIENT_SECRET` — LinkedIn OAuth
- `AUTH_TRUST_HOST` — optional

> Tip: Copy the existing `.env.local` in the repo and replace secrets. Never commit secrets to source control.

3. Run the app

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

**NPM Scripts**

- **dev:** `npm run dev` — Start development server
- **build:** `npm run build` — Build for production
- **start:** `npm run start` — Run production build
- **lint:** `npm run lint` — Run ESLint

**Project Structure (high level)**

- **`app/`**: Next.js App Router routes, layouts, and page components
- **`Components/`**: Reusable UI components (ThemeToggle, ToasterProvider, etc.)
- **`models/`**: Mongoose models (`User`, `Service`, `Category`, `Account`, `Session`)
- **`lib/`**: Helpers (`dbConnect.ts`, `data.ts`)
- **`public/`**: Static assets (logo at `public/nexus-directory-logo.png`)

**Database & Seeding**

- Connection helper: `lib/dbConnect.ts` — centralizes Mongoose connection.
- Seeding: `app/api/seed/route.ts` — endpoint available to populate sample data. Use only in development or protect it.

**Authentication**

- Config: `auth.config.ts` and `auth.ts` (handler)
- Uses NextAuth with CredentialsProvider (bcrypt password check) and OAuth providers configured via environment variables.

**Deployment**

- Recommended: Vercel (supports Next.js App Router and server components). Configure environment variables in the Vercel dashboard.

**Maintenance Tips**

- Keep Node and Next versions aligned with your hosting environment; this repo uses Next.js 16 and React 19.
- Replace open seeding endpoints with an admin-only guard or convert them to a local CLI `npm run seed` script.
- Store secrets in your hosting provider or GitHub Secrets for CI; never commit `.env.local`.

**Contributing**

- Fork the repo, create a branch, implement changes, open a PR. Run `npm run lint` and include UI screenshots for visual changes.

If you'd like, I can add a CI workflow or a guarded seed script next.
