import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProcessSection from "@/components/ProcessSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProcessSection />
        <PricingSection />
        <CTASection />
      </main>

      {/* Footer */}
      <footer className="py-10 border-t border-border">
        <div className="section-container text-center">
          <p className="text-muted-foreground text-sm">© 2026 WebDesign Studio. Jamal Ramazanov</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
