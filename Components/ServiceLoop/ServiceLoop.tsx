import Image from "next/image";
import Link from "next/link";
import { FiStar, FiClock } from "react-icons/fi";

export interface ServiceType {
  id: number | string;
  title: string;
  description: string;
  category?: string;
  author: string;
  rating: number | string;
  reviews: number;
  price: number | string;
  delivery: string;
}

const ServiceCard = ({ service }: { service: ServiceType }) => {
  return (
    <div className="group flex flex-col bg-base-100 rounded-2xl border border-base-300 overflow-hidden hover:shadow-xl hover:border-primary/50 transition-all duration-300">
      {/* Thumbnail */}
      <div className="relative w-full h-48 bg-base-200 overflow-hidden">
        <Image
          src="/Hero-image.webp"
          alt={service.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3">
          <Image
            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
              service.author,
            )}&background=random&color=fff`}
            alt={service.author}
            width={24}
            height={24}
            className="rounded-full"
          />
          <span className="text-sm font-medium text-base-content/80">
            {service.author}
          </span>
        </div>

        <h3 className="font-bold text-lg text-base-content mb-2 line-clamp-1 group-hover:text-primary transition-colors">
          <Link href={`/services/${service.id}`}>{service.title}</Link>
        </h3>
        <p className="text-sm text-base-content/70 line-clamp-2 mb-4 flex-1">
          {service.description}
        </p>

        {/* Meta Info */}
        <div className="flex items-center justify-between text-sm text-base-content/80 mb-4 pt-4 border-t border-base-200">
          <div className="flex items-center gap-1 text-orange-500 font-semibold">
            <FiStar className="fill-current" />
            <span>{service.rating}</span>
            <span className="text-base-content/50 font-normal">
              ({service.reviews})
            </span>
          </div>
          <div className="flex items-center gap-1">
            <FiClock />
            <span>{service.delivery}</span>
          </div>
        </div>

        {/* Footer / Price / CTA */}
        <div className="flex items-center justify-between mt-auto">
          <div>
            <span className="text-xs text-base-content/60 block">
              Starting at
            </span>
            <span className="text-lg font-bold text-base-content">
              ${service.price}
            </span>
          </div>
          <Link
            href={`/services/${service.id}`}
            className="btn btn-sm btn-primary rounded-full text-white bg-linear-to-br from-[#26003b] to-[#b71056] border-0"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
