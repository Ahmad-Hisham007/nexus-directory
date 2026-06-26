import Link from "next/link";

const CtaSection = () => {
  return (
    <section className="w-full bg-base-200 py-24 px-6">
      <div className="max-w-5xl mx-auto rounded-3xl p-10 lg:p-16 text-center relative overflow-hidden shadow-2xl">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-[#26003b] to-[#b71056]"></div>

        <div className="relative z-10">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Ready to bring your ideas to life?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
            Join thousands of businesses and professionals who are already using
            Nexus to build amazing things together.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            {/* Standard Primary Button Variant (Inverted for dark background) */}
            <Link
              href="/login"
              className="btn md:btn-lg btn-md rounded-full border-0 bg-white text-[#26003b] hover:bg-base-200 px-10"
            >
              Get Started Now
            </Link>
            {/* Standard Outline Button */}
            <Link
              href="/explore"
              className="btn md:btn-lg btn-md btn-outline rounded-full text-white border-white hover:bg-white hover:text-[#26003b] px-10"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
