# Environment Setup Guide

## Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account

## 1. Supabase Setup

1. Create a project at [supabase.com](https://supabase.com)
2. Go to **SQL Editor** and run the schema from `supabase/schema.sql`
3. Go to **Storage** and create buckets (optional, for gallery/images):
   - `gallery` - for gallery images
   - `downloads` - for file downloads
4. In **Authentication** > **Providers**, enable Email. Configure redirect URLs:
   - Site URL: `http://localhost:3000` (dev) or your production URL
   - Redirect URLs: `http://localhost:3000/auth/callback`, `https://yourdomain.com/auth/callback`
5. Create an admin user: **Authentication** > **Users** > **Add user** (email + password)

## 2. Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Fill in:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## 3. Install & Run

```bash
cd frontend
npm install
npm run dev
```

Visit `http://localhost:3000`

## 4. Admin Access

- Go to `/admin` or `/admin/login`
- Sign in with the admin user created in Supabase
- Manage content from the dashboard
