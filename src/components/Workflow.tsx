const Workflow = () => {
  const steps = [
    {
      number: "01",
      title: "Developer Onboarding",
      description:
        "Developer uploads project details, financials and ESG metrics; VerdeBlock performs legal and technical due diligence.",
    },
    {
      number: "02",
      title: "PPS Structuring",
      description:
        "Standardized PPS contract defines duration, investor returns, exit conditions and ESG bonus terms under a compliant legal framework.",
    },
    {
      number: "03",
      title: "Digital Representation",
      description:
        "PPS rights are represented as digital records for transparency and automated execution — these represent contractual rights, not ownership shares.",
    },
    {
      number: "04",
      title: "Capital Raise",
      description:
        "Investors subscribe via VerdeBlock; funds flow to escrow or a supervised project account under regulated custody arrangements.",
    },
    {
      number: "05",
      title: "Execution & Reporting",
      description:
        "Developer executes the project; VerdeBlock automates distributions, ESG progress reporting (auditor/IoT verified) and compliance reports.",
    },
    {
      number: "06",
      title: "Exit",
      description:
        "Predefined exit at maturity, sale or refinance with automatic return of funds — designed for predictable returns, not secondary trading.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            From Milan Projects to{" "}
            <span className="text-gradient">Transparent Returns</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A compliant, impact-oriented journey from project onboarding to
            automated payouts and ESG reporting
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
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
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
