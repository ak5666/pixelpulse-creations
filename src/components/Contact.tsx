import { useState } from "react";
import { Mail, MessageSquare, Send, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      contactSchema.parse(formData);
      setErrors({});
      
      // Create WhatsApp message
      const message = `Hi! I'm ${formData.name} (${formData.email}). ${formData.message}`;
      const whatsappUrl = `https://wa.me/YOUR_PHONE_NUMBER?text=${encodeURIComponent(message)}`;
      
      window.open(whatsappUrl, "_blank");
      
      toast({
        title: "Message Ready!",
        description: "Opening WhatsApp to send your message.",
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);
      }
    }
  };

  const handleWhatsAppDirect = () => {
    const whatsappUrl = "https://wa.me/YOUR_PHONE_NUMBER?text=Hi!%20I'm%20interested%20in%20your%20services.";
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Ready to start your project? Get in touch today!
          </p>
        </div>

        <div className="glass-card p-8 md:p-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="flex items-center gap-2 mb-2 font-medium">
                <User className="w-4 h-4 text-primary" />
                Your Name
              </label>
              <Input
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`bg-background/50 ${errors.name ? 'border-destructive' : ''}`}
              />
              {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="flex items-center gap-2 mb-2 font-medium">
                <Mail className="w-4 h-4 text-primary" />
                Your Email
              </label>
              <Input
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`bg-background/50 ${errors.email ? 'border-destructive' : ''}`}
              />
              {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="flex items-center gap-2 mb-2 font-medium">
                <MessageSquare className="w-4 h-4 text-primary" />
                Your Message
              </label>
              <Textarea
                placeholder="Tell me about your project..."
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`bg-background/50 resize-none ${errors.message ? 'border-destructive' : ''}`}
              />
              {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                type="submit"
                size="lg"
                className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity hover-glow group"
              >
                Send Message
                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                type="button"
                onClick={handleWhatsAppDirect}
                size="lg"
                variant="outline"
                className="flex-1 neon-border"
              >
                <MessageSquare className="mr-2 w-4 h-4" />
                WhatsApp Me
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
