import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "DeBeer Software Studios transformed our outdated systems into a modern, scalable platform. The attention to detail and communication throughout was exceptional.",
    author: "Sarah Chen",
    role: "CTO, TechFlow Inc.",
    rating: 5,
  },
  {
    quote:
      "Working with DeBeer was a game-changer for our startup. They delivered our MVP ahead of schedule and helped us secure our Series A funding.",
    author: "Marcus Johnson",
    role: "Founder, Nexus Labs",
    rating: 5,
  },
  {
    quote:
      "The team's expertise in AI and automation helped us reduce operational costs by 40%. True partners in every sense of the word.",
    author: "Emily Rodriguez",
    role: "VP Operations, DataSync",
    rating: 5,
  },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "5.0", label: "Average Rating" },
  { value: "98%", label: "On-Time Delivery" },
  { value: "USA", label: "Based Team" },
];

const Testimonials = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-accent/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Trusted by <span className="gradient-text">Innovators</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it. See what our clients have to say about working with us.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-card p-6 text-center hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card p-8 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] group"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary/30 mb-4 group-hover:text-primary/50 transition-colors" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="border-t border-white/10 pt-4">
                <div className="font-semibold text-foreground">
                  {testimonial.author}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
