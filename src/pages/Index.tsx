import About from "@/components/About";
import Compliance from "@/components/Compliance";
import Hero from "@/components/Hero";
import InvestorPopup from "@/components/InvestorPopup";
import ROICalculator from "@/components/ROICalculator";
import Team from "@/components/Team";
import TokenModel from "@/components/TokenModel";
import Workflow from "@/components/Workflow";
import { useState } from "react";

const Index = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Hero onCtaClick={() => setIsPopupOpen(true)} />
      <About />
      <Workflow />
      <TokenModel />
      <ROICalculator />
      <Compliance />
      <Team />

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Participate in{" "}
            <span className="text-gradient">Sustainable Projects?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join family offices and ESG-focused investors accessing curated PPS
            offerings with clear legal terms and measurable impact.
          </p>
          <button
            onClick={() => setIsPopupOpen(true)}
            className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
          >
            Register Your Interest
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">VerdeBlock</h3>
          <p className="text-background/80 mb-6">
            VerdeBlock — ESG-focused PPS contracts for predictable, transparent
            real estate returns
          </p>
          <div className="text-sm text-background/60">
            © 2025 VerdeBlock. All rights reserved. | Politecnico di Milano
          </div>
        </div>
      </footer>

      <InvestorPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </div>
  );
};

export default Index;
