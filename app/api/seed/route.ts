import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/dbConnect";
import Service from "@/models/Service";
import Category from "@/models/Category";
import User from "@/models/User";
import { servicesData } from "@/lib/data";

export async function GET() {
  try {
    await dbConnect();

    await Service.deleteMany({});
    await Category.deleteMany({});

    let demoSeller = await User.findOne({ email: "seller@demo.com" });
    if (!demoSeller) {
      demoSeller = await User.create({
        name: "Demo Seller",
        email: "seller@demo.com",
        password: "hashedpassword123", // Using the same dummy password
        role: "seller",
        image:
          "https://ui-avatars.com/api/?name=Demo+Seller&background=random&color=fff",
      });
    }

    const uniqueCategories = Array.from(
      new Set(servicesData.map((s) => s.category)),
    );
    const categoryDocs = await Promise.all(
      uniqueCategories.map((cat) =>
        Category.create({
          name: cat,
          slug: cat.toLowerCase().replace(/ /g, "-"),
        }),
      ),
    );

    const categoryMap = categoryDocs.reduce(
      (acc, doc) => {
        acc[doc.name] = doc._id;
        return acc;
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      {} as Record<string, any>,
    );

    const seedData = servicesData.map(({ id, category, author, ...rest }) => ({
      ...rest,
      category: categoryMap[category],
      author: demoSeller._id,
    }));

    // 5. Insert Services
    await Service.insertMany(seedData);

    return NextResponse.json({
      success: true,
      message: "Database seeded with dynamic references successfully!",
    });
  } catch (error) {
    console.error("Seeding error:", error);
    return NextResponse.json(
      { error: "Failed to seed database" },
      { status: 500 },
    );
  }
}
