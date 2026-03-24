export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Profile {
  id: string;
  email: string | null;
  full_name: string | null;
  role: "admin" | "editor" | "viewer";
  created_at: string;
  updated_at: string;
}

export interface Student {
  id: string;
  name: string;
  class: string | null;
  section: string | null;
  roll_no: string | null;
  guardian_name: string | null;
  guardian_phone: string | null;
  admission_date: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Teacher {
  id: string;
  name: string;
  designation: string | null;
  department: string | null;
  email: string | null;
  phone: string | null;
  image_url: string | null;
  bio: string | null;
  subject: string | null;
  join_date: string | null;
  is_active: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface Admission {
  id: string;
  student_name: string;
  class_applying: string;
  dob: string | null;
  gender: string | null;
  guardian_name: string;
  guardian_phone: string;
  guardian_email: string | null;
  address: string | null;
  previous_school: string | null;
  documents_url: string[] | null;
  status: "pending" | "approved" | "rejected";
  notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface GalleryAlbum {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  cover_image_url: string | null;
  event_date: string | null;
  is_published: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface GalleryImage {
  id: string;
  album_id: string;
  image_url: string;
  caption: string | null;
  sort_order: number;
  created_at: string;
}

export interface News {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string | null;
  cover_image_url: string | null;
  is_published: boolean;
  published_at: string | null;
  author: string | null;
  created_at: string;
  updated_at: string;
}

export interface Event {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  event_date: string;
  end_date: string | null;
  venue: string | null;
  cover_image_url: string | null;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string | null;
  is_published: boolean;
  expires_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface Download {
  id: string;
  title: string;
  category: string;
  file_url: string;
  file_size: number | null;
  description: string | null;
  is_published: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  subject: string | null;
  message: string;
  is_read: boolean;
  created_at: string;
}
