import { Search, PenTool, Code, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discovery & Strategy",
    description:
      "We dive deep into your vision, goals, and challenges. Understanding your business is the foundation of great software.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Design & Prototype",
    description:
      "Wireframes, mockups, and interactive prototypes. See your product before a single line of code is written.",
  },
  {
    icon: Code,
    number: "03",
    title: "Development & Testing",
    description:
      "Agile development with regular updates. Rigorous testing ensures quality at every stage.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch & Support",
    description:
      "Smooth deployment and ongoing maintenance. We're with you long after launch day.",
  },
];

const Process = () => {
  return (
    <section id="process" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            How We <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A proven process that delivers results. Transparent, collaborative, and focused on your success.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative group">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-primary/50 to-transparent z-0" />
              )}

              {/* Card */}
              <div className="relative glass-card p-8 h-full hover:bg-white/10 transition-all duration-500 group-hover:scale-[1.02]">
                {/* Number Badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">
                    {step.number}
                  </span>
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
