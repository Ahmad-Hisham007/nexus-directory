import { dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function GET() {
  try {
    await dbConnect();
    const isConnected = mongoose.connection.readyState === 1;
    if (isConnected) {
      const dbName = mongoose.connection.name;
      return NextResponse.json({
        message: `${dbName} Successfully connected to MongoDB!`,
      });
    }
  } catch (error) {
    console.error("Database connection error:", error);
    return NextResponse.json(
      { message: "Failed to connect to database" },
      { status: 500 },
    );
  }
}
