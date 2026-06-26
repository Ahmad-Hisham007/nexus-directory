import CategorySection from "./_components/CategorySection";
import CtaSection from "./_components/CtaSection";
import HeroSection from "./_components/HeroSection";
import HowItWorks from "./_components/HowItWorks";
import StatsSection from "./_components/StatsSection";
import TrendingServices from "./_components/TrendingServices";
import WhyChooseUs from "./_components/WhyChooseUs";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-base-100 text-base-content w-full overflow-x-hidden">
      <HeroSection />
      <StatsSection />
      <CategorySection />
      <TrendingServices />
      <WhyChooseUs />
      <HowItWorks />
      <CtaSection />
    </main>
  );
}
