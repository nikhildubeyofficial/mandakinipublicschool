# Component Structure

## Public Layout

```
PublicLayout
├── Header (nav, theme toggle)
└── Footer (links, contact, social)
```

## Reusable UI Components (`/components/ui`)

- `Button` - variants: default, secondary, outline, ghost, link
- `Card`, CardHeader, CardTitle, CardDescription, CardContent, CardFooter
- `Input`, Textarea, Label

## Layout Components (`/components/layout`)

- `Section` - section wrapper with optional title/subtitle
- `Header` - sticky nav with dropdowns, mobile menu
- `Footer` - multi-column footer
- `PublicLayout` - header + main + footer

## Home Components (`/components/home`)

- `Hero` - hero with CTA
- `Highlights` - stat counters
- `FacilitiesPreview` - facility cards
- `NewsEventsPreview` - latest news & events
- `Testimonials` - quote cards
- `GalleryPreview` - image grid
- `CtaSection` - bottom CTA

## Admin Components (`/components/admin`)

- `AdminProvider` - auth context
- `AdminSidebar` - nav sidebar
- `AdminLogin` - login form
