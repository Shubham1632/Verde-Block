import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Calculator } from "lucide-react";

const ROICalculator = () => {
  const [investment, setInvestment] = useState([5000]);
  
  const calculateReturns = (amount: number) => {
    const eTokenYield = 0.084; // 8.4%
    const years = 3;
    const irr = 0.14; // 14% average
    
    const annualReturn = amount * eTokenYield;
    const totalReturn = amount * (Math.pow(1 + irr, years) - 1);
    const finalValue = amount + totalReturn;
    
    return {
      annual: annualReturn.toLocaleString('en-US', { maximumFractionDigits: 0 }),
      total: totalReturn.toLocaleString('en-US', { maximumFractionDigits: 0 }),
      final: finalValue.toLocaleString('en-US', { maximumFractionDigits: 0 })
    };
  };
  
  const returns = calculateReturns(investment[0]);

  return (
    <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Your Investment <span className="text-gradient">Can Grow</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See potential returns based on historical E-Token performance
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-card rounded-3xl p-8 sm:p-12 border-2 border-primary/20 shadow-2xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <Calculator className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">Investment Calculator</h3>
          </div>

          <div className="space-y-8">
            {/* Slider */}
            <div>
              <div className="flex justify-between mb-4">
                <Label className="text-lg">Investment Amount</Label>
                <span className="text-2xl font-bold text-primary">
                  €{investment[0].toLocaleString()}
                </span>
              </div>
              <Slider
                value={investment}
                onValueChange={setInvestment}
                min={5000}
                max={100000}
                step={1000}
                className="mb-2"
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>€5,000</span>
                <span>€100,000</span>
              </div>
            </div>

            {/* Results */}
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 border border-primary/20">
                <div className="text-sm text-muted-foreground mb-2">Annual Income</div>
                <div className="text-3xl font-bold text-primary">€{returns.annual}</div>
                <div className="text-sm text-muted-foreground mt-1">Per year at 8.4%</div>
              </div>

              <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl p-6 border border-secondary/20">
                <div className="text-sm text-muted-foreground mb-2">Total Return</div>
                <div className="text-3xl font-bold text-secondary">€{returns.total}</div>
                <div className="text-sm text-muted-foreground mt-1">Over 3 years</div>
              </div>

              <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-6 border border-accent/20">
                <div className="text-sm text-muted-foreground mb-2">Portfolio Value</div>
                <div className="text-3xl font-bold text-accent">€{returns.final}</div>
                <div className="text-sm text-muted-foreground mt-1">After 3 years</div>
              </div>
            </div>

            <div className="bg-muted/30 rounded-xl p-6 text-sm text-muted-foreground">
              <p className="mb-2">
                <strong>Assumptions:</strong> Calculation based on E-Token historical performance of ~8.4% annual yield 
                and 14% IRR over 3 years. Past performance does not guarantee future results.
              </p>
              <p>
                Returns are subject to market conditions, property performance, and may vary. This is for illustrative purposes only.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Label = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <label className={`font-medium ${className}`}>{children}</label>
);

export default ROICalculator;
