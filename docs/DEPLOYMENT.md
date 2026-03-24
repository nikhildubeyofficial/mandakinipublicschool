# Deployment Guide

## Frontend (Vercel)

1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Set environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_SITE_URL` (e.g. `https://yourdomain.vercel.app`)
4. Deploy

## Supabase Configuration

1. In Supabase **Authentication** > **URL Configuration**:
   - Site URL: your production URL
   - Redirect URLs: `https://yourdomain.com/auth/callback`

## Database

The schema runs once in Supabase SQL Editor. No extra deployment steps.

## Domain

Point your domain to Vercel in DNS settings (A/CNAME as per Vercel instructions).
