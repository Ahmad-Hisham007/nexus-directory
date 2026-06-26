import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/dbConnect";
import Service from "@/models/Service";
// Important: Import related models so Mongoose knows about them for population
import "@/models/Category";
import "@/models/User";

export async function GET() {
  try {
    await dbConnect();
    const servicesDoc = await Service.find()
      .populate("author", "name image")
      .populate("category", "name")
      .lean();

    // Format data to match our ServiceType interface
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const services = servicesDoc.map((s: any) => ({
      ...s,
      id: s._id.toString(),
      author: s.author?.name || "Unknown Author",
      category: s.category?.name || "Uncategorized",
      // If we need the author's image later, we have it here:
      authorImage: s.author?.image,
    }));

    return NextResponse.json(services);
  } catch (error) {
    console.error("API Fetch Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch services" },
      { status: 500 },
    );
  }
}
