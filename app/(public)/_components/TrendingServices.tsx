import ServiceCard from "@/Components/ServiceLoop/ServiceLoop";
import Image from "next/image";
import Link from "next/link";
import { FiStar, FiClock } from "react-icons/fi";

const TrendingServices = () => {
  // Hardcoded MVP data. No lorem ipsum as per requirements.
  const services = [
    {
      id: 1,
      title: "Full-Stack Web Development",
      description:
        "Custom built, responsive, and SEO-optimized web applications using Next.js.",
      author: "Alex Morgan",
      rating: "4.9",
      reviews: 124,
      price: "$500+",
      delivery: "7 days",
    },
    {
      id: 2,
      title: "Brand Identity & Logo Design",
      description:
        "Professional and modern brand identity packages including logos and guidelines.",
      author: "Sarah Chen",
      rating: "5.0",
      reviews: 89,
      price: "$250+",
      delivery: "3 days",
    },
    {
      id: 3,
      title: "Advanced Technical SEO",
      description:
        "Comprehensive site audits, keyword strategies, and indexing optimization.",
      author: "David Kumar",
      rating: "4.8",
      reviews: 210,
      price: "$300+",
      delivery: "5 days",
    },
    {
      id: 4,
      title: "UI/UX Mobile App Design",
      description:
        "High-fidelity Figma prototypes and user flows for iOS and Android applications.",
      author: "Elena Rodriguez",
      rating: "4.9",
      reviews: 156,
      price: "$400+",
      delivery: "10 days",
    },
  ];

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

        {/* Desktop: 4 per row, matching requirements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard service={service} key={service.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingServices;
