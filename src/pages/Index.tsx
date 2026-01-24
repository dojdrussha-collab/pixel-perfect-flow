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
        <section id="process">
          <ProcessSection />
        </section>
        <section id="pricing">
          <PricingSection />
        </section>
        <section id="contact">
          <CTASection />
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50">
        <div className="section-container text-center">
          <p className="text-muted-foreground">
            © 2024 WebDesign Studio. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
