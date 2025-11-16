import { Code2, Database, Smartphone, Zap } from "lucide-react";

const About = () => {
  const skills = [
    { icon: Code2, label: "Frontend: React, TypeScript, Tailwind" },
    { icon: Database, label: "Backend: Node.js, Express, PostgreSQL" },
    { icon: Smartphone, label: "Responsive Design & Mobile-First" },
    { icon: Zap, label: "Performance Optimization & SEO" },
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm Akshay Kumar (AK), a passionate full-stack developer with a keen eye for
              design and a commitment to delivering exceptional web experiences.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With years of experience in modern web technologies, I specialize in
              creating fast, responsive, and visually stunning websites that not only
              look great but also drive real business results.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you need a portfolio to showcase your work, a business website to
              establish your online presence, or a high-converting landing page, I'm here
              to bring your vision to life with cutting-edge technology and creative
              solutions.
            </p>
          </div>

          <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {skills.map((skill, index) => (
              <div
                key={index}
                className="glass-card p-6 hover-glow group cursor-pointer transition-all duration-300 hover:translate-x-2"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <skill.icon className="w-6 h-6 text-background" />
                  </div>
                  <p className="text-lg font-medium">{skill.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
