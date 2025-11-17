import milanHero from "@/assets/milan-skyline.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  onCtaClick: () => void;
}

const Hero = ({ onCtaClick }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={milanHero}
          alt="Milan's modern skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Building Milan's <span className="text-gradient">Green Future</span>
        </h1>
        <p className="text-xl sm:text-2xl text-white/90 mb-4 max-w-3xl mx-auto font-serif italic">
          Predictable returns from ESG-focused PPS contracts
        </p>
        <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
          VerdeBlock helps developers raise ESG-focused capital through
          digitally represented Profit Participation System (PPS) contracts —
          enabling investors to earn predictable, transparent returns from
          sustainable buildings without owning them.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
            onClick={onCtaClick}
          >
            Join the Investor Network
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-black hover:bg-white hover:text-foreground text-lg px-8 py-6"
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Learn More
          </Button>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
            <div className="text-3xl font-bold text-accent mb-2">€790M+</div>
            <div className="text-white/80">Milan CRE Investment H1 2025</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
            <div className="text-3xl font-bold text-accent mb-2">$16T</div>
            <div className="text-white/80">RWA Market by 2030</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
            <div className="text-3xl font-bold text-accent mb-2">€5,500/m²</div>
            <div className="text-white/80">Prime Milan Office Space</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
