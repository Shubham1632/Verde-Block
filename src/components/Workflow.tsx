const Workflow = () => {
  const steps = [
    {
      number: "01",
      title: "SPV Formation",
      description: "Each property is placed into a dedicated Italian SPV (S.r.l.) for full legal transparency and compliance."
    },
    {
      number: "02",
      title: "Tokenization",
      description: "SPV's equity or debt is fractionalized into E-Tokens (equity shares) or G-Tokens (retrofit bonds)."
    },
    {
      number: "03",
      title: "Investor Onboarding",
      description: "Complete KYC/AML verification, pay in EUR or stablecoins, and receive tokens directly in your wallet."
    },
    {
      number: "04",
      title: "Earning Returns",
      description: "Quarterly rental income via smart contracts. ESG bonuses triggered when verified by IoT + audit data."
    },
    {
      number: "05",
      title: "Exit / Liquidity",
      description: "Tokens tradable on VerdeBlock's marketplace. Buyback/redemption at asset sale or refinance."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            From Milan Buildings to <span className="text-gradient">Your Wallet</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A transparent, compliant journey from property selection to token ownership
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative mb-12 last:mb-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-6 sm:gap-8">
                {/* Number */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl sm:text-2xl shadow-lg">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-card rounded-2xl p-6 sm:p-8 border border-border hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 sm:left-10 top-20 w-0.5 h-12 bg-gradient-to-b from-primary to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
