import { ArrowRight, Code2, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <Code2 className="w-4 h-4 text-primary animate-glow" />
            <span className="text-sm font-medium text-primary">
              Full-Stack Developer
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Building Fast, Creative,
            <br />
            <span className="gradient-text">High-Impact Websites</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            I'm Akshay Kumar, a full-stack developer who transforms ideas into
            stunning digital experiences that drive results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg px-8 py-6 hover-glow group"
              asChild
            >
              <a href="#portfolio">
                View My Work
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="neon-border text-lg px-8 py-6 group"
              asChild
            >
              <a href="#contact">
                Get In Touch
                <Rocket className="ml-2 group-hover:translate-y-[-2px] transition-transform" />
              </a>
            </Button>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-float" style={{ animationDelay: "1s" }}></div>
      </div>
    </section>
  );
};

export default Hero;
