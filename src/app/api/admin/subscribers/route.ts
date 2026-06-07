import { db } from "@/db";
import { newsletterSubscriptions } from "@/db/schema";
import { desc } from "drizzle-orm";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const allSubscribers = await db
      .select()
      .from(newsletterSubscriptions)
      .orderBy(desc(newsletterSubscriptions.createdAt));

    return Response.json({ success: true, data: allSubscribers });
  } catch {
    return Response.json(
      { error: "Failed to fetch subscribers" },
      { status: 500 }
    );
  }
}
