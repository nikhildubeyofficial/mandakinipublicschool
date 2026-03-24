import {
  pgTable,
  uuid,
  text,
  boolean,
  timestamp,
  date,
  integer,
  jsonb,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

// ─── Admin users ──────────────────────────────────────────────
export const admins = pgTable("admins", {
  id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
  email: text("email").notNull().unique(),
  password_hash: text("password_hash").notNull(),
  full_name: text("full_name"),
  role: text("role").default("admin"),
  created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updated_at: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});

// ─── Students ─────────────────────────────────────────────────
export const students = pgTable("students", {
  id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  class: text("class"),
  section: text("section"),
  roll_no: text("roll_no"),
  guardian_name: text("guardian_name"),
  guardian_phone: text("guardian_phone"),
  admission_date: date("admission_date"),
  is_active: boolean("is_active").default(true),
  created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updated_at: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});

// ─── Teachers ─────────────────────────────────────────────────
export const teachers = pgTable("teachers", {
  id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  designation: text("designation"),
  department: text("department"),
  email: text("email"),
  phone: text("phone"),
  image_url: text("image_url"),
  bio: text("bio"),
  subject: text("subject"),
  join_date: date("join_date"),
  is_active: boolean("is_active").default(true),
  sort_order: integer("sort_order").default(0),
  created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updated_at: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});

// ─── Admissions ───────────────────────────────────────────────
export const admissions = pgTable("admissions", {
  id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
  student_name: text("student_name").notNull(),
  class_applying: text("class_applying").notNull(),
  dob: date("dob"),
  gender: text("gender"),
  guardian_name: text("guardian_name").notNull(),
  guardian_phone: text("guardian_phone").notNull(),
  guardian_email: text("guardian_email"),
  address: text("address"),
  previous_school: text("previous_school"),
  documents_url: text("documents_url").array(),
  status: text("status").default("pending"),
  notes: text("notes"),
  created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updated_at: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});

// ─── Gallery Albums ───────────────────────────────────────────
export const galleryAlbums = pgTable("gallery_albums", {
  id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  cover_image_url: text("cover_image_url"),
  event_date: date("event_date"),
  is_published: boolean("is_published").default(true),
  sort_order: integer("sort_order").default(0),
  created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updated_at: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});

// ─── Gallery Images ───────────────────────────────────────────
export const galleryImages = pgTable("gallery_images", {
  id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
  album_id: uuid("album_id").references(() => galleryAlbums.id, { onDelete: "cascade" }),
  image_url: text("image_url").notNull(),
  caption: text("caption"),
  sort_order: integer("sort_order").default(0),
  created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
});

// ─── News ─────────────────────────────────────────────────────
export const news = pgTable("news", {
  id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  excerpt: text("excerpt"),
  content: text("content"),
  cover_image_url: text("cover_image_url"),
  is_published: boolean("is_published").default(true),
  published_at: timestamp("published_at", { withTimezone: true }),
  author: text("author"),
  created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updated_at: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});

// ─── Events ───────────────────────────────────────────────────
export const events = pgTable("events", {
  id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  event_date: date("event_date").notNull(),
  end_date: date("end_date"),
  venue: text("venue"),
  cover_image_url: text("cover_image_url"),
  is_published: boolean("is_published").default(true),
  created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updated_at: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});

// ─── Announcements ────────────────────────────────────────────
export const announcements = pgTable("announcements", {
  id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  content: text("content"),
  is_published: boolean("is_published").default(true),
  expires_at: timestamp("expires_at", { withTimezone: true }),
  created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updated_at: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});

// ─── Downloads ────────────────────────────────────────────────
export const downloads = pgTable("downloads", {
  id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  category: text("category").notNull(),
  file_url: text("file_url").notNull(),
  file_size: integer("file_size"),
  description: text("description"),
  is_published: boolean("is_published").default(true),
  sort_order: integer("sort_order").default(0),
  created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updated_at: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});

// ─── Contact Submissions ─────────────────────────────────────
export const contactSubmissions = pgTable("contact_submissions", {
  id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  subject: text("subject"),
  message: text("message").notNull(),
  is_read: boolean("is_read").default(false),
  created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
});

// ─── Settings (key-value) ─────────────────────────────────────
export const settings = pgTable("settings", {
  key: text("key").primaryKey(),
  value: jsonb("value").notNull(),
  updated_at: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});
