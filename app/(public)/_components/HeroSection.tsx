import Image from "next/image";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { IoRibbonOutline } from "react-icons/io5";
import { LuShieldCheck } from "react-icons/lu";

const HeroSection = () => {
  return (
    <section className="w-full bg-base-100 pt-20 pb-16 lg:pt-32 lg:pb-40 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-stretch justify-between">
        {/* Left Content */}
        <div className="space-y-8 lg:w-150 w-full z-10">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm">
            Top Rated Directory Platform
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-base-content">
            Find the perfect <span className="text-primary">professionals</span>{" "}
            for your next big project.
          </h1>
          <p className="text-lg text-base-content/70 max-w-xl">
            Connect with top-tier agencies, vetted freelancers, and expert
            consultants ready to elevate your business.
          </p>

          {/* Search Bar matching the Freeio template */}
          <div className="bg-base-200 p-2 rounded-full shadow-lg shadow-base-300 flex items-center max-w-lg border border-base-300">
            <FiSearch className="text-base-content/50 ml-4 w-5 h-5 text0-lg" />
            <input
              type="text"
              placeholder="What service are you looking for?"
              className="bg-transparent border-none outline-none px-4 py-3 w-full text-base-content placeholder:text-base-content/50 placeholder:text-sm md:placeholder:text-normal"
            />
            <button className="btn btn-primary rounded-full md:px-8 px-4">
              Search
            </button>
          </div>

          <div className="flex items-center gap-4 text-sm font-medium text-base-content/60 pt-4">
            <span>Popular:</span>
            <Link href="#" className="hover:text-primary transition-colors">
              Web Design
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              SEO
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Marketing
            </Link>
          </div>
        </div>

        {/* Right Image/Illustration Area */}
        <div className="relative lg:w-120 w-full lg:block rounded-3xl">
          <Image
            src="/Hero-image.webp"
            alt="Hero Image"
            width={900}
            height={700}
            className="aspect-square block w-full h-full object-cover rounded-3xl"
          />

          {/* Floating badge to match template vibes */}
          <div className="py-4 px-8 absolute md:-bottom-20 bottom-10 -left-5 bg-base-100  rounded-xl shadow-xl border border-base-300 flex items-center gap-3">
            <div className="md:w-14 md:h-14 w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-600 md:text-2xl text-lg">
              <IoRibbonOutline />
            </div>
            <div>
              <p className="font-bold md:text-lg text-normal text-base-content/80">
                Verified Experts
              </p>
              <p className="text-normal text-base-content/60">
                Quality guaranteed
              </p>
            </div>
          </div>
          <div className="py-4 px-8 absolute bottom-20 -right-5 bg-base-100  rounded-xl shadow-xl border border-base-300 md:flex hidden items-center gap-3">
            <div className="md:w-14 md:h-14 w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 md:text-2xl text-lg">
              <LuShieldCheck />
            </div>
            <div>
              <p className="font-bold md:text-lg text-normal text-base-content/80">
                Safe & Secure
              </p>
              <p className="text-normal text-base-content/60">
                Your privacy, our responsibility
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
