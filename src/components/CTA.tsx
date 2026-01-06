import { ArrowRight, Mail, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main CTA Card */}
        <div className="glass-card p-12 sm:p-16">
          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Ready to Build Something{" "}
            <span className="gradient-text">Exceptional</span>?
          </h2>

          {/* Subheadline */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Let's discuss your project. Every great product starts with a 
            conversation. No commitment required — just ideas and possibilities.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-105 group w-full sm:w-auto"
            >
              <a href="mailto:hello@debeersoftware.com">
                <Mail className="mr-2 w-5 h-5" />
                Get In Touch
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="glass-button rounded-full px-8 py-6 text-lg hover:scale-105 w-full sm:w-auto"
            >
              <a href="#" onClick={(e) => e.preventDefault()}>
                <Calendar className="mr-2 w-5 h-5" />
                Schedule a Call
              </a>
            </Button>
          </div>

          {/* Trust Text */}
          <p className="mt-8 text-sm text-muted-foreground">
            🇺🇸 US-Based Team • Free Consultation • NDA Available
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
