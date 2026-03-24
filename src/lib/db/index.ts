import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

const connectionString = process.env.DATABASE_URL;

// During build time on Vercel, the environment variable might not be available
// We provide a fallback to avoid crashing the build during route collection
const sql = neon(connectionString || "postgres://placeholder:placeholder@localhost:5432/placeholder");
export const db = drizzle(sql, { schema });
