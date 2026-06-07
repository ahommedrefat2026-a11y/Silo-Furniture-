import { db } from "@/db";
import { newsletterSubscriptions } from "@/db/schema";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return Response.json(
        { error: "Email is required" },
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

    await db
      .insert(newsletterSubscriptions)
      .values({ email })
      .onConflictDoNothing({ target: newsletterSubscriptions.email });

    return Response.json({ success: true, message: "Subscribed successfully" });
  } catch {
    return Response.json(
      { error: "Failed to subscribe" },
      { status: 500 }
    );
  }
}
