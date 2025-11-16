import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Restaurant Owner",
      content:
        "AK transformed our online presence with a stunning website. Our reservations have increased by 40% since launch!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Professional Photographer",
      content:
        "The portfolio website AK built perfectly showcases my work. My client inquiries have tripled. Highly recommend!",
      rating: 5,
    },
    {
      name: "Emma Davis",
      role: "Business Consultant",
      content:
        "Professional, creative, and incredibly responsive. AK delivered exactly what we needed, on time and on budget.",
      rating: 5,
    },
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            What my clients say about working with me
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="glass-card hover-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-lg">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
