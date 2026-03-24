# Mandakini Public School Mau - Website

A modern, responsive school website with admin panel and Supabase backend.

## Tech Stack

- **Frontend**: Next.js 14, Tailwind CSS, Framer Motion, Lucide Icons
- **Database & Auth**: Supabase
- **Deployment**: Vercel (frontend)

## Project Structure

```
mandakinipublicschool/
├── frontend/          # Next.js app (public site + admin)
│   └── src/
│       ├── app/       # Pages and API routes
│       ├── components/
│       └── lib/
├── supabase/
│   └── schema.sql     # Database schema
└── docs/              # Setup & deployment guides
```

## Quick Start

1. **Supabase**: Create project, run `supabase/schema.sql`, create admin user
2. **Env**: Copy `frontend/.env.example` to `frontend/.env.local` and add Supabase credentials
3. **Run**: `cd frontend && npm install && npm run dev`

See [docs/ENVIRONMENT_SETUP.md](docs/ENVIRONMENT_SETUP.md) for details.

## Public Pages

- Home, About, Academics, Admissions
- Facilities, Gallery, Events & News
- Contact, Student Corner, Teachers

## Admin Panel

- `/admin` – Login
- `/admin/dashboard` – Overview
- Manage: Students, Teachers, Admissions, Gallery, News, Events, Downloads, Settings

## License

© Mandakini Public School Mau
