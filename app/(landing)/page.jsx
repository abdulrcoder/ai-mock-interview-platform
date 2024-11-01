import FeaturesSection from "./_components/FeaturesSection";
import Footer from "./_components/Footer";
import HeroSection from "./_components/HeroSection";
import HowItWorkSection from "./_components/HowItWorkSection";
import NavBar from "./_components/NavBar";
import PricingSection from "./_components/PricingSection";
import ReviewSection from "./_components/ReviewSection";

export default function LandingPage() {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <HowItWorkSection />
      <FeaturesSection />
      <PricingSection />
      <ReviewSection />
      <Footer />
    </main>
  );
}
