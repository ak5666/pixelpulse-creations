import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import projectRestaurant from "@/assets/project-restaurant.jpg";
import projectPhotography from "@/assets/project-photography.jpg";
import projectBusiness from "@/assets/project-business.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "Restaurant Website",
      description: "Modern restaurant site with online menu and reservation system",
      image: projectRestaurant,
      tags: ["React", "Tailwind", "Animation"],
      link: "https://example.com/restaurant-demo",
    },
    {
      title: "Photography Portfolio",
      description: "Elegant gallery showcase for professional photographer",
      image: projectPhotography,
      tags: ["Next.js", "Gallery", "Responsive"],
      link: "https://example.com/photography-demo",
    },
    {
      title: "Business Landing Page",
      description: "High-converting landing page for B2B services",
      image: projectBusiness,
      tags: ["React", "SEO", "Analytics"],
      link: "https://example.com/business-demo",
    },
  ];

  return (
    <section id="portfolio" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and successful client projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="glass-card group overflow-hidden hover-glow cursor-pointer transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <Button
                    variant="outline"
                    className="neon-border"
                    asChild
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      View Details
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
