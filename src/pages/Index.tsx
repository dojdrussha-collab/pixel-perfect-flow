import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ApproachSection from "@/components/ApproachSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ApproachSection />
        <CTASection />
      </main>

      <footer className="py-10 border-t border-border">
        <div className="section-container text-center">
          <p className="text-muted-foreground text-sm">© 2026 ContentLab. Jamal Ramazanov</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
