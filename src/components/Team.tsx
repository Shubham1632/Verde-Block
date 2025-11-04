import { Linkedin } from "lucide-react";

const Team = () => {
  const team = [
    {
      name: "Puja Todi",
      role: "Architect | Team Leader",
      education: "MBE, Politecnico di Milano"
    },
    {
      name: "Shubham Santosh Gangurde",
      role: "Software Developer",
      education: "MSc CSE, Politecnico di Milano"
    },
    {
      name: "Aryan Tuteja",
      role: "Software Engineer",
      education: "MSc CSE, Politecnico di Milano"
    },
    {
      name: "Timothy Immanuel",
      role: "Urban Designer",
      education: "MBE, Politecnico di Milano"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Meet the <span className="text-gradient">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A multidisciplinary team of architects, engineers, and urban designers driving innovation
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-6 border border-border hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 className="text-xl font-bold text-center mb-2">{member.name}</h3>
              <p className="text-primary text-center mb-2 font-medium">{member.role}</p>
              <p className="text-sm text-muted-foreground text-center mb-4">{member.education}</p>
              <div className="flex justify-center">
                <button className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors">
                  <Linkedin className="w-5 h-5 text-primary" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
