import { Building2, Leaf, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Unlocking <span className="text-gradient">Milan's Skyline</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            VerdeBlock helps real estate developers raise ESG-focused capital
            through standardized Profit Participation System (PPS) contracts.
            Investors gain contractual rights to share cash flows from
            sustainable projects — with clear legal terms, measurable ESG KPIs,
            and automated reporting.
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
              Make sustainable real estate funding faster, compliant, and
              transparent — connecting global investors with Italian developers
              through contractual participation.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
              <TrendingUp className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              Become Europe’s leading platform for digitally-enabled, ESG-driven
              real estate participation, leveraging standardized PPS contracts
              to enable green capital for sustainable urban transformation.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
              <Leaf className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-2xl font-bold mb-4">ESG Impact</h3>
            <p className="text-muted-foreground leading-relaxed">
              Projects integrate measurable ESG KPIs (energy, EPC, CO₂) with
              third-party verification to align investor returns with tangible
              sustainability outcomes.
            </p>
          </div>
        </div>

        {/* Key Value Props */}
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 sm:p-12">
          <h3 className="text-3xl font-bold mb-8 text-center">
            Why VerdeBlock?
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-lg mb-2">
                  PPS Contract Access
                </h4>
                <p className="text-muted-foreground">
                  Access curated, developer-backed PPS offerings with clear
                  contractual returns and exit horizons.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-lg mb-2">
                  Predictable Exit Terms
                </h4>
                <p className="text-muted-foreground">
                  Predefined exit or maturity conditions (sale, refinance, or
                  maturity) — designed for predictable capital return, not
                  speculative trading.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-lg mb-2">
                  Sustainability-Driven Returns
                </h4>
                <p className="text-muted-foreground">
                  Projects must define ESG KPIs and offer ESG-linked bonus terms
                  verified by auditors or IoT providers.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-lg mb-2">
                  Digital Transparency
                </h4>
                <p className="text-muted-foreground">
                  Distributions, ESG metrics and compliance reports are
                  digitized and automated for clarity — smart contracts are used
                  for execution and record-keeping, not speculative trading.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
