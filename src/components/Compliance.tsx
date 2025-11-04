import { Shield, FileCheck, Lock, BarChart3 } from "lucide-react";

const Compliance = () => {
  const features = [
    {
      icon: Shield,
      title: "EU DLT Pilot Regime",
      description: "Fully compliant under EU regulations for tokenized securities"
    },
    {
      icon: Lock,
      title: "ERC-3643 Standard",
      description: "Tokens issued on Ethereum/Polygon with institutional-grade security"
    },
    {
      icon: FileCheck,
      title: "KYC/AML Compliant",
      description: "Off-chain verification with no personal data stored on blockchain"
    },
    {
      icon: BarChart3,
      title: "Independent Audits",
      description: "Quarterly financials and EPC audits verified by third parties"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-gradient">Regulatory</span> & Security Framework
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built on institutional-grade infrastructure with full regulatory compliance
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 sm:p-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Risk Mitigation</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
              <p className="text-foreground/90">Insurance and performance bonds mitigate retrofit and execution risks</p>
            </div>
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
              <p className="text-foreground/90">Transparent quarterly reporting on all financial and ESG metrics</p>
            </div>
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
              <p className="text-foreground/90">Legal SPV structure ensures asset protection and investor rights</p>
            </div>
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
              <p className="text-foreground/90">Smart contract audits by leading blockchain security firms</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Compliance;
