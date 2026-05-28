# LearnOS — Next-Gen Learning Dashboard

A futuristic student dashboard built with Next.js 14, Supabase, Framer Motion, and Tailwind CSS.

## Stack

| Tool | Why |
|------|-----|
| **Next.js 14 App Router** | Server Components for data fetching + nested layouts |
| **Supabase** | PostgreSQL BaaS; accessed server-side via `@supabase/ssr` |
| **Framer Motion** | Spring-physics animations, stagger, layoutId nav highlights |
| **Tailwind CSS** | Utility-first; custom design tokens via `tailwind.config.ts` |
| **TypeScript** | Strict types for all Supabase payloads and component props |

## Architecture

### Server / Client Component Split

- `app/dashboard/page.tsx` — **Server Component**. Calls `fetchCourses()` using the Supabase server client (cookies-based). The data is passed as props to the client grid.
- `components/dashboard/BentoGrid.tsx` — **Client Component** (`"use client"`). Handles all Framer Motion entrance animations and hover states.
- `components/layout/Sidebar.tsx` — **Client Component**. Manages collapsed state and `usePathname` for active link highlighting.
- All other dashboard tiles are Client Components to support animations.

### Loading & Error States

- `app/dashboard/loading.tsx` — rendered by Next.js while the page Server Component is suspended. Shows shimmer skeleton tiles.
- `<Suspense>` boundary inside `page.tsx` wraps the async data fetcher for fine-grained control.
- `app/dashboard/error.tsx` — catches runtime errors (e.g., bad env vars) and surfaces them gracefully with a retry button.
- `fetchCourses()` also falls back to static seed data if the DB returns an error, so the UI never breaks.

### Animation Approach

- **Stagger**: `containerVariants` with `staggerChildren: 0.07s` drives the bento tile entrance.
- **Spring physics**: All hover states use `type: "spring", stiffness: 300, damping: 20` — no layout shifts.
- **layoutId**: Sidebar active-link highlight uses `layoutId="sidebar-active-bg"` for smooth cross-link transitions.
- **Progress bars**: Animate from `width: 0%` to the actual value on first viewport entry via `useInView`.

## Supabase Setup

1. Create a free project at [supabase.com](https://supabase.com)
2. Run this SQL in the SQL Editor:

```sql
create table courses (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  progress integer not null default 0,
  icon_name text not null default 'BookOpen',
  created_at timestamptz not null default now()
);

-- Enable Row Level Security (optional but recommended)
alter table courses enable row level security;
create policy "Public read" on courses for select using (true);

-- Seed data
insert into courses (title, progress, icon_name) values
  ('Advanced React Patterns', 75, 'Code2'),
  ('Machine Learning Fundamentals', 42, 'BrainCircuit'),
  ('System Design at Scale', 88, 'Database'),
  ('Web Security & Cryptography', 30, 'Shield');
```

3. Copy `.env.example` to `.env.local` and fill in your project URL and anon key.

## Getting Started

```bash
npm install
cp .env.example .env.local
# fill in NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY
npm run dev
```

## Deployment (Vercel)

1. Push to a public GitHub repo
2. Import into Vercel
3. Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in Vercel's Environment Variables panel
4. Deploy — no build config needed

## Challenges

- **Async Server Components with TypeScript**: Next.js 14's async RSC pattern requires a `@ts-expect-error` comment when nesting async components inside `<Suspense>`, as the TS types don't yet model this cleanly.
- **Avoiding layout shifts with Framer Motion**: Using `transform`-only properties (`scale`, `translateY`) and never animating `width`/`height`/`margin` directly keeps the UI repaint-free.
- **Dynamic icon rendering**: Lucide exports all icons as named exports. The `DynamicIcon` component safely looks up icons by string name from the module namespace with a fallback.
