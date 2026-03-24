# API Routes

## POST /api/contact

Submit contact form.

**Body:**
```json
{
  "name": "string (required)",
  "email": "string (required)",
  "phone": "string (optional)",
  "subject": "string (optional)",
  "message": "string (required)"
}
```

**Response:** `{ "success": true }` or `{ "error": "..." }`

## POST /api/admissions

Submit admission form.

**Body:**
```json
{
  "studentName": "string (required)",
  "class": "string (required)",
  "dob": "string (optional)",
  "gender": "string (optional)",
  "guardianName": "string (required)",
  "guardianPhone": "string (required)",
  "guardianEmail": "string (optional)",
  "address": "string (optional)",
  "previousSchool": "string (optional)"
}
```

**Response:** `{ "success": true }` or `{ "error": "..." }`

## GET /auth/callback

Supabase OAuth/session callback. Handles `code` exchange for session.
