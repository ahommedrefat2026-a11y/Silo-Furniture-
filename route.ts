import { db } from "@/db";
import { inquiries } from "@/db/schema";
import { desc } from "drizzle-orm";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const allInquiries = await db
      .select()
      .from(inquiries)
      .orderBy(desc(inquiries.createdAt));

    return Response.json({ success: true, data: allInquiries });
  } catch {
    return Response.json(
      { error: "Failed to fetch inquiries" },
      { status: 500 }
    );
  }
}
