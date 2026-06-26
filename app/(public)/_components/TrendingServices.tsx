import ServiceCard, { ServiceType } from "@/Components/ServiceLoop/ServiceLoop";
import Link from "next/link";
import { dbConnect } from "@/lib/dbConnect";
import Service from "@/models/Service";
import "@/models/Category"; // Register models
import "@/models/User";

const TrendingServices = async () => {
  await dbConnect();

  const servicesDoc = await Service.find()
    .populate("author", "name image")
    .populate("category", "name")
    .limit(4)
    .lean();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const services: ServiceType[] = servicesDoc.map((s: any) => ({
    ...s,
    id: s._id.toString(),
    author: s.author?.name || "Unknown Author",
    category: s.category?.name || "Uncategorized",
  }));

  return (
    <section className="w-full bg-base-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-base-content mb-2">
              Trending Services
            </h2>
            <p className="text-base-content/70">
              Most popular choices for growing your business.
            </p>
          </div>
          <Link
            href="/explore"
            className="btn btn-outline hidden md:flex rounded-full"
          >
            Explore All
          </Link>
        </div>

        {services.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard service={service} key={service.id} />
            ))}
          </div>
        ) : (
          <div className="text-center py-10 text-base-content/60">
            No services available.
          </div>
        )}
      </div>
    </section>
  );
};

export default TrendingServices;
