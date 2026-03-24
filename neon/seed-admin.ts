// Run with: npx tsx neon/seed-admin.ts
// Creates the default admin user with a bcrypt-hashed password

import { neon } from "@neondatabase/serverless";
import bcrypt from "bcryptjs";

async function seed() {
  const DATABASE_URL = process.env.DATABASE_URL;
  if (!DATABASE_URL) {
    console.error("❌ DATABASE_URL environment variable is required");
    process.exit(1);
  }

  const sql = neon(DATABASE_URL);

  const email = "admin@mandakinipublicschool.edu.in";
  const password = "admin123"; // Change this!
  const hash = await bcrypt.hash(password, 10);

  await sql`
    INSERT INTO admins (email, password_hash, full_name, role)
    VALUES (${email}, ${hash}, 'School Admin', 'admin')
    ON CONFLICT (email) DO UPDATE SET password_hash = ${hash}
  `;

  console.log("✅ Admin user seeded successfully");
  console.log(`   Email: ${email}`);
  console.log(`   Password: ${password}`);
  console.log("   ⚠️  Change this password after first login!");
}

seed().catch(console.error);
