import {
  Globe,
  Smartphone,
  Cpu,
  Cloud,
  Server,
  Palette,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Custom Web Applications",
    description:
      "Scalable, responsive web apps built with cutting-edge technologies. From dashboards to complex platforms.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile experiences that your users will love. iOS, Android, or both.",
  },
  {
    icon: Cpu,
    title: "AI & Automation",
    description:
      "Intelligent solutions that streamline operations. Machine learning, chatbots, and smart workflows.",
  },
  {
    icon: Cloud,
    title: "SaaS Development",
    description:
      "Launch your software-as-a-service product. Multi-tenant architecture, subscriptions, and analytics built-in.",
  },
  {
    icon: Server,
    title: "API & Backend Systems",
    description:
      "Robust, secure backends that power your applications. RESTful APIs, microservices, and cloud infrastructure.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces that convert. User research, prototyping, and pixel-perfect designs.",
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            What We <span className="gradient-text">Build</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            End-to-end software development services tailored to your business needs.
            We turn complex challenges into elegant solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group glass-card p-8 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
