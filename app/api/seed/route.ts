import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/dbConnect";
import Service from "@/models/Service";
import { servicesData } from "@/lib/data";

export async function GET() {
  try {
    await dbConnect();

    // Clear existing dummy data to prevent duplicates if you run this twice
    await Service.deleteMany({});

    // Map the static data to match the DB schema (dropping the static 'id' so Mongo creates '_id')
    const seedData = servicesData.map(({ id, ...rest }) => rest);

    // Insert all records
    await Service.insertMany(seedData);

    return NextResponse.json({
      message: "Database seeded successfully with services!",
    });
  } catch (error) {
    console.error("Seeding error:", error);
    return NextResponse.json(
      { error: "Failed to seed database" },
      { status: 500 },
    );
  }
}
