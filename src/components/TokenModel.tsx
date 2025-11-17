import greenOffice from "@/assets/green-office.jpg";
import { Coins, TrendingUp } from "lucide-react";

const TokenModel = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Structured PPS{" "}
            <span className="text-gradient">Investment Models</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three standardized PPS models designed for different asset types,
            risk profiles and ESG impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Core Income PPS */}
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 border-2 border-primary/20 hover:border-primary/40 transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center">
                <Coins className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold">Core Income (PPS)</h3>
                <p className="text-muted-foreground">
                  Stabilized income-producing assets with contractual cash-flow
                  share
                </p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                <p className="text-foreground/90">
                  Backed by stabilized Grade A offices with contractual
                  rent-share distributions
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                <p className="text-foreground/90">
                  Quarterly rental income distribution
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                <p className="text-foreground/90">
                  Capital appreciation on exit
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                <p className="text-foreground/90">
                  Ideal for family offices and long-term investors
                </p>
              </div>
            </div>

            <div className="bg-white/50 dark:bg-black/20 rounded-xl p-6 border border-primary/20">
              <div className="text-sm text-muted-foreground mb-2">
                Typical Structure
              </div>
              <div className="text-3xl font-bold text-primary mb-1">
                7–10 year duration
              </div>
              <div className="text-lg text-muted-foreground">
                Target IRR: 8–9% (includes operating cash flows and exit share)
              </div>
            </div>
          </div>

          {/* Value-Add / Retrofit PPS */}
          <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-3xl p-8 border-2 border-secondary/20 hover:border-secondary/40 transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold">
                  Value-Add / Retrofit (PPS)
                </h3>
                <p className="text-muted-foreground">
                  PPS for retrofit projects with ESG-linked performance bonuses
                </p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2" />
                <p className="text-foreground/90">
                  PPS notes funding ESG upgrades and energy efficiency retrofits
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2" />
                <p className="text-foreground/90">
                  Fixed coupon or profit-share with ESG performance bonuses
                  dependent on verified KPIs
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2" />
                <p className="text-foreground/90">
                  CO₂ reduction and EPC uplift incentives
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2" />
                <p className="text-foreground/90">
                  Higher risk, higher return potential
                </p>
              </div>
            </div>

            <div className="bg-white/50 dark:bg-black/20 rounded-xl p-6 border border-secondary/20">
              <div className="text-sm text-muted-foreground mb-2">
                Typical Structure
              </div>
              <div className="text-3xl font-bold text-secondary mb-1">
                3–5 year duration
              </div>
              <div className="text-lg text-muted-foreground">
                Target IRR: 12–15% (includes ESG bonus for verified outcomes)
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-12 rounded-3xl overflow-hidden shadow-2xl">
          <img
            src={greenOffice}
            alt="Sustainable green office building interior"
            className="w-full h-64 sm:h-96 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default TokenModel;
