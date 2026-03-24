export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { admissions } from "@/lib/db/schema";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      studentName,
      class: classApplying,
      dob,
      gender,
      guardianName,
      guardianPhone,
      guardianEmail,
      address,
      previousSchool,
    } = body;
    if (!studentName || !classApplying || !guardianName || !guardianPhone) {
      return NextResponse.json(
        { error: "Student name, class, guardian name, and phone are required" },
        { status: 400 }
      );
    }
    await db.insert(admissions).values({
      student_name: studentName,
      class_applying: classApplying,
      dob: dob || null,
      gender: gender || null,
      guardian_name: guardianName,
      guardian_phone: guardianPhone,
      guardian_email: guardianEmail || null,
      address: address || null,
      previous_school: previousSchool || null,
      status: "pending",
    });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Admission form error:", err);
    return NextResponse.json({ error: "Failed to submit" }, { status: 500 });
  }
}
