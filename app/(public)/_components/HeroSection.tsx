import Link from "next/link";
import { FiSearch } from "react-icons/fi";

const HeroSection = () => {
  return (
    <section className="w-full bg-base-100 pt-20 pb-16 lg:pt-32 lg:pb-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8 z-10">
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
            <FiSearch className="text-base-content/50 ml-4 w-5 h-5" />
            <input
              type="text"
              placeholder="What service are you looking for?"
              className="bg-transparent border-none outline-none px-4 py-3 w-full text-base-content placeholder:text-base-content/50"
            />
            <button className="btn btn-primary rounded-full px-8">
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
        <div className="relative hidden lg:block h-[500px] w-full rounded-3xl bg-base-200 overflow-hidden border border-base-300">
          {/* Replace with actual image later. Using a CSS gradient block to simulate the illustration space for MVP speed */}
          <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
            <div className="text-center text-base-content/50">
              [Hero Lifestyle Image Space]
            </div>
          </div>

          {/* Floating badge to match template vibes */}
          <div className="absolute bottom-10 left-[-20px] bg-base-100 p-4 rounded-xl shadow-xl border border-base-300 flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-600 text-xl">
              ✓
            </div>
            <div>
              <p className="font-bold text-sm">Verified Experts</p>
              <p className="text-xs text-base-content/60">Quality guaranteed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
