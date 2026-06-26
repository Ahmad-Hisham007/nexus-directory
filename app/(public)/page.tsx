// We will build these next:
// import TrendingServices from "./_components/home/TrendingServices";
// import WhyChooseUs from "./_components/home/WhyChooseUs";
// import HowItWorks from "./_components/home/HowItWorks";
// import CtaSection from "./_components/home/CtaSection";
// import Footer from "./_components/home/Footer";

import CategorySection from "./_components/CategorySection";
import HeroSection from "./_components/HeroSection";
import StatsSection from "./_components/StatsSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-base-100 text-base-content w-full overflow-x-hidden">
      {/* Navbar will go in layout or top of here if not already global */}

      <HeroSection />
      <StatsSection />
      <CategorySection />

      {/* <TrendingServices />
      <WhyChooseUs />
      <HowItWorks />
      <CtaSection />
      <Footer /> 
      */}
    </main>
  );
}
