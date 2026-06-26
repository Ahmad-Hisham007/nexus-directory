/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import {
  FiStar,
  FiClock,
  FiCheckCircle,
  FiMessageSquare,
} from "react-icons/fi";

import { notFound } from "next/navigation";
import ServiceCard from "@/Components/ServiceLoop/ServiceLoop";
import { dbConnect } from "@/lib/dbConnect";
import Service from "@/models/Service";

export default async function ServiceDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  // Await params in Next.js App Router
  const { id } = await params;
  await dbConnect();

  const serviceDoc = (await Service.findById(id)
    .populate("author", "name image")
    .populate("category", "name")
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .lean()) as any;

  if (!serviceDoc) {
    notFound();
  }

  const service = {
    ...serviceDoc,
    id: serviceDoc._id.toString(),
    author: serviceDoc.author?.name || "Unknown Author",
    authorImage: serviceDoc.author?.image || "/Hero-image.webp",
    category: serviceDoc.category?.name || "Uncategorized",
  };
  const relatedDocs = await Service.find({
    category: serviceDoc.category._id,
    _id: { $ne: id },
  })
    .populate("author", "name image")
    .populate("category", "name")
    .limit(3)
    .lean();

  const relatedServices = relatedDocs.map((doc: any) => ({
    ...doc,
    id: doc._id.toString(),
    author: doc.author?.name || "Unknown Author",
    category: doc.category?.name || "Uncategorized",
    image: doc.image || "/Hero-image.webp",
  }));

  return (
    <div className="w-full bg-base-100 min-h-screen py-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Header Section */}
        <div className="mb-8">
          <div className="text-sm text-primary font-semibold mb-2">
            {service.category}
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold text-base-content mb-4">
            {service.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-base-content/80">
            <div className="flex items-center gap-2">
              <Image
                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(service.author)}&background=random&color=fff`}
                alt={service.author}
                width={30}
                height={30}
                className="rounded-full"
              />
              <span className="font-medium">{service.author}</span>
            </div>
            <div className="flex items-center gap-1 text-orange-500 font-semibold">
              <FiStar className="fill-current" />
              <span>{service.rating}</span>
              <span className="text-base-content/50 font-normal">
                ({service.reviews} reviews)
              </span>
            </div>
          </div>
        </div>

        {/* Main Grid Layout */}
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left Column (Main Content) */}
          <div className="lg:col-span-2 space-y-10">
            {/* Image Gallery */}
            <div className="relative w-full h-100 lg:h-125 bg-base-200 rounded-3xl overflow-hidden border border-base-300">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Description Section */}
            <section className="bg-base-200/50 p-8 rounded-3xl border border-base-300">
              <h2 className="text-2xl font-bold text-base-content mb-4">
                About this service
              </h2>
              <p className="text-base-content/80 leading-relaxed">
                {service.description} We bring years of experience to ensure
                your project is completed with the highest quality standards.
                This service is tailored to meet modern industry requirements,
                providing you with a scalable and robust solution.
              </p>
            </section>

            {/* Specifications Section */}
            <section>
              <h2 className="text-2xl font-bold text-base-content mb-4">
                Key Specifications
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "High Quality Output",
                  "Source Files Included",
                  "Commercial Use",
                  "Revisions Provided",
                ].map((spec, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-base-content/80"
                  >
                    <FiCheckCircle className="text-primary" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Reviews Section */}
            <section className="border-t border-base-300 pt-10">
              <h2 className="text-2xl font-bold text-base-content mb-6">
                Client Reviews
              </h2>
              <div className="space-y-6">
                {/* Dummy Review */}
                <div className="bg-base-200 p-6 rounded-2xl border border-base-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                      J
                    </div>
                    <div>
                      <h4 className="font-bold text-base-content">John Doe</h4>
                      <div className="flex text-orange-500 text-sm">
                        <FiStar className="fill-current" />
                        <FiStar className="fill-current" />
                        <FiStar className="fill-current" />
                        <FiStar className="fill-current" />
                        <FiStar className="fill-current" />
                      </div>
                    </div>
                  </div>
                  <p className="text-base-content/70 italic">
                    &quot;Absolutely fantastic work. Delivered on time and
                    exceeded my expectations!&quot;
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column (Sticky Pricing Card) */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-base-100 rounded-3xl border border-base-300 shadow-xl p-6">
              <div className="flex justify-between items-center mb-6 border-b border-base-200 pb-4">
                <span className="text-xl font-bold text-base-content">
                  Standard Package
                </span>
                <span className="text-3xl font-bold text-primary">
                  ${service.price}
                </span>
              </div>

              <p className="text-base-content/70 mb-6">
                Complete delivery including all source files and 3 rounds of
                revisions.
              </p>

              <div className="flex items-center gap-2 text-base-content font-medium mb-8">
                <FiClock className="text-primary w-5 h-5" />
                <span>{service.delivery} Delivery</span>
              </div>

              <button className="btn btn-primary w-full rounded-full text-white bg-linear-to-br from-[#26003b] to-[#b71056] border-0 mb-3 btn-lg">
                Continue (${service.price})
              </button>
              <button className="btn btn-outline w-full rounded-full">
                <FiMessageSquare className="mr-2" /> Contact Seller
              </button>
            </div>
          </div>
        </div>

        {/* Related Items Section */}
        {relatedServices.length > 0 && (
          <div className="mt-20 pt-10 border-t border-base-300">
            <h2 className="text-2xl font-bold text-base-content mb-8">
              Related Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServices.map((related) => (
                <ServiceCard key={related.id} service={related} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
