import Navigation from "@/components/sections/navigation";
import HeroSection from "@/components/sections/hero";
import DataAnalysisSection from "@/components/sections/data-analysis";
import Benefits from "@/components/sections/benefits";
import ServicesSection from "@/components/sections/services";
import FeaturesSection from "@/components/sections/features";
import ProcessSection from "@/components/sections/process";
import SuccessStories from "@/components/sections/success-stories";
import IntegrationsSection from "@/components/sections/integrations";
import Testimonials from "@/components/sections/testimonials";
import PricingSection from "@/components/sections/pricing";
import FaqSection from "@/components/sections/faq";
import ComparisonSection from "@/components/sections/comparison";
import TeamSection from "@/components/sections/team";
import CtaFooter from "@/components/sections/cta-footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <DataAnalysisSection />
        <Benefits />
        <ServicesSection />
        <FeaturesSection />
        <ProcessSection />
        <SuccessStories />
        <IntegrationsSection />
        <Testimonials />
        <PricingSection />
        <FaqSection />
        <ComparisonSection />
        <TeamSection />
      </main>
      <CtaFooter />
    </div>
  );
}