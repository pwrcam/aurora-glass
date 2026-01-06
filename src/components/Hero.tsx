import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 animated-gradient-bg" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      {/* Floating Diamond Shapes */}
      <div className="absolute top-32 right-20 opacity-20 animate-float">
        <img src={logo} alt="" className="h-12 w-auto" />
      </div>
      <div className="absolute bottom-40 left-20 opacity-10 animate-float-delayed">
        <img src={logo} alt="" className="h-16 w-auto" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-sm text-muted-foreground">
            Premium Custom Software Development
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          We Build Software That{" "}
          <span className="gradient-text">Scales Your Vision</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          From concept to launch — premium custom software solutions for ambitious 
          companies ready to transform their ideas into reality.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-105 group"
          >
            <a href="#contact">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="glass-button rounded-full px-8 py-6 text-lg hover:scale-105"
          >
            <a href="#services">See Our Services</a>
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
          {[
            { value: "50+", label: "Projects Delivered" },
            { value: "100%", label: "Client Satisfaction" },
            { value: "24/7", label: "Support Available" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold gradient-text">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
