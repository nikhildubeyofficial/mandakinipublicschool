import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { galleryAlbums } from "@/lib/db/schema";
import { asc } from "drizzle-orm";

export async function GET() {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const data = await db.select().from(galleryAlbums).orderBy(asc(galleryAlbums.sort_order));
    return NextResponse.json(data);
  } catch (err) {
    console.error("Gallery fetch error:", err);
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
}
