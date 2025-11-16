import { Globe, Briefcase, Layers, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Custom websites built with modern technologies. Fast, responsive, and optimized for performance.",
    },
    {
      icon: Briefcase,
      title: "Portfolio Websites",
      description:
        "Stunning portfolio sites that showcase your work beautifully and attract clients.",
    },
    {
      icon: Layers,
      title: "Business Websites",
      description:
        "Professional business sites that establish credibility and drive conversions.",
    },
    {
      icon: Zap,
      title: "Landing Pages",
      description:
        "High-converting landing pages designed to capture leads and boost sales.",
    },
  ];

  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What I <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive web solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="glass-card hover-glow group cursor-pointer transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-background" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
