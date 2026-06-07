import { db } from "@/db";
import { inquiries } from "@/db/schema";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, furnitureType, requirements } = body;

    if (!name || !email || !furnitureType || !requirements) {
      return Response.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    await db.insert(inquiries).values({
      name,
      email,
      furnitureType,
      requirements,
    });

    return Response.json({ success: true, message: "Inquiry submitted successfully" });
  } catch {
    return Response.json(
      { error: "Failed to submit inquiry" },
      { status: 500 }
    );
  }
}
