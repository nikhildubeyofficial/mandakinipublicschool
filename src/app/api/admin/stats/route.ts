import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { students, teachers, news, events } from "@/lib/db/schema";
import { count } from "drizzle-orm";

export async function GET() {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const [s, t, n, e] = await Promise.all([
      db.select({ count: count() }).from(students),
      db.select({ count: count() }).from(teachers),
      db.select({ count: count() }).from(news),
      db.select({ count: count() }).from(events),
    ]);

    return NextResponse.json({
      students: s[0]?.count ?? 0,
      teachers: t[0]?.count ?? 0,
      news: n[0]?.count ?? 0,
      events: e[0]?.count ?? 0,
    });
  } catch (err) {
    console.error("Stats fetch error:", err);
    return NextResponse.json({ error: "Failed to fetch stats" }, { status: 500 });
  }
}
