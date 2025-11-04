import { Building2, TrendingUp, Leaf } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Unlocking <span className="text-gradient">Milan's Skyline</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            VerdeBlock connects global investors to Milan's top commercial real estate through 
            tokenized fractional ownership — merging traditional property investing with blockchain 
            transparency and ESG impact.
          </p>
        </div>

        {/* Mission, Vision, Value Props */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <Building2 className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              Make Grade A commercial real estate accessible, liquid, and sustainable for investors worldwide.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
              <TrendingUp className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              Bridge the multi-billion-euro retrofit funding gap and accelerate Milan's path to EU 2030 energy goals.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
              <Leaf className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-2xl font-bold mb-4">ESG Impact</h3>
            <p className="text-muted-foreground leading-relaxed">
              Every investment funds retrofits, improving energy efficiency, asset value, and Milan's sustainability.
            </p>
          </div>
        </div>

        {/* Key Value Props */}
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 sm:p-12">
          <h3 className="text-3xl font-bold mb-8 text-center">Why VerdeBlock?</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-lg mb-2">Fractional Investment Access</h4>
                <p className="text-muted-foreground">Invest in Milan's top-tier properties starting at €5K. Democratizes access beyond institutional investors.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-lg mb-2">Real Liquidity in Real Estate</h4>
                <p className="text-muted-foreground">Tradable security tokens on regulated secondary market with quarterly NAV-based buyback windows.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-lg mb-2">Sustainability-Driven Returns</h4>
                <p className="text-muted-foreground">Fund retrofits that improve energy efficiency. ESG-linked bonuses triggered via IoT + auditor data.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-lg mb-2">Blockchain Transparency</h4>
                <p className="text-muted-foreground">All payouts, bonuses, and metrics managed by smart contracts. Real-time dashboards powered by oracles.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
