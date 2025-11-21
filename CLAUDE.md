# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Astrakit Main Website** - Official marketing/landing website for Astrakit, a privacy-focused chat application.

**Current Status**: Migrating from Next.js to Vite + React. This branch (`vite-rewrite`) will convert the Next.js App Router application to a standard React SPA using Vite.

## Migration Context

### Current Stack (Next.js - to be removed)
- Next.js 15 with App Router
- React 19
- TypeScript
- Tailwind CSS with CSS Variables design system
- CSS Modules for component styling
- Bun/npm for package management

### Target Stack (Vite - migration in progress)
- Vite (to be configured)
- React 19 (keep)
- TypeScript (keep)
- Tailwind CSS (keep)
- CSS Modules (keep)
- React Router (to be added for routing)

## Current Development Commands

```bash
# Development (Next.js - will be replaced)
npm run dev

# Type checking (keep)
npm run typecheck

# Build (will be replaced with vite build)
npm run build
```

## Current Architecture (Next.js - To Be Migrated)

### Route Structure
- `/` - Landing page (src/app/page.tsx)
- `/features` - Features page (src/app/features/page.tsx)
- `/creator-tools` - Creator tools page (src/app/creator-tools/page.tsx)
- `/donate` - Donation page (src/app/donate/page.tsx)

### Component Pattern
Components are co-located with their styles:
```
src/app/components/ComponentName/
├── ComponentName.tsx
└── ComponentName.module.css
```

### Layout & Shared Components
- `src/app/layout.tsx` - Wraps all pages with Background, Navigation, Footer, BuyMeCoffee
- All pages currently use `'use client'` directive (won't be needed in Vite)

## Migration Strategy

### Key Changes Required

1. **Remove Next.js specific code**:
   - Remove `'use client'` directives
   - Replace `next/link` with `react-router-dom` Link
   - Remove Next.js Metadata API (use react-helmet or similar)
   - Remove `next/image` optimizations (use standard img tags or vite-imagetools)

2. **File Structure Migration**:
   - Convert `src/app/page.tsx` → `src/pages/Home.tsx` (or similar)
   - Convert route folders to page components
   - Move shared components from `src/app/components/` to `src/components/`
   - Create `src/App.tsx` with React Router setup
   - Create `index.html` as entry point
   - Create `src/main.tsx` as React entry

3. **Routing Migration**:
   - Install `react-router-dom`
   - Map Next.js routes to React Router routes
   - Convert hash links (`#download`, `#team`) to work with SPA navigation

4. **Environment Variables**:
   - Replace `@t3-oss/env-nextjs` with Vite's env system
   - Update `src/env.js` or remove in favor of `import.meta.env`
   - Prefix client vars with `VITE_` instead of `NEXT_PUBLIC_`

5. **Configuration Files to Create**:
   - `vite.config.ts` - Vite configuration with React plugin
   - `index.html` - Entry HTML file
   - Update `tsconfig.json` for Vite (remove Next.js plugin)

6. **Configuration Files to Remove**:
   - `next.config.js`
   - `next-env.d.ts`

## Styling System (Keep Unchanged)

The CSS architecture should remain the same:
- `src/styles/globals.css` - CSS custom properties (--text-*, --background-*, --primary-*, --secondary-*, --accent-*) with 50-950 shades
- Dark mode via `.dark` class
- Tailwind config maps CSS variables to utilities
- Components use CSS Modules
- Global scrollbar styling

## TypeScript Configuration

Update for Vite:
- Keep strict mode and `noUncheckedIndexedAccess`
- Keep path alias `~/` → `./src/`
- Update lib to include "DOM", "DOM.Iterable", "ESNext"
- Set `moduleResolution: "bundler"`
- Add Vite types: `/// <reference types="vite/client" />`

## Migration Checklist

- [ ] Install Vite and required plugins (@vitejs/plugin-react)
- [ ] Create vite.config.ts with Tailwind CSS support
- [ ] Create index.html and src/main.tsx
- [ ] Install and configure react-router-dom
- [ ] Migrate app structure from src/app/ to src/pages/
- [ ] Move components from src/app/components/ to src/components/
- [ ] Create App.tsx with router and layout
- [ ] Replace Next.js Link with React Router Link
- [ ] Update environment variable handling
- [ ] Update package.json scripts (dev, build, preview)
- [ ] Test all routes and functionality
- [ ] Remove Next.js dependencies and config files
