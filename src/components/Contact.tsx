import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    { icon: Mail, label: "Email", value: "edu.chirayu2005@gmail.com", href: "mailto:edu.chirayu2005@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 81144 89928", href: "tel:+918114489928" },
    { icon: MapPin, label: "Location", value: "Bengaluru, Karnataka", href: "#" }
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/Mushmat" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/chirayu1803" }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just a friendly chat
          </p>
        </div>

        <Card className="p-8 bg-card border-border">
          <div className="space-y-6 mb-8">
            {contactInfo.map((item, index) => (
              <a 
                key={index}
                href={item.href}
                className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover-glow transition-all duration-300"
              >
                <div className="p-3 bg-primary/10 rounded-lg">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="font-medium">{item.value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-center text-muted-foreground mb-4">Connect with me on</p>
            <div className="flex gap-4 justify-center">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  size="icon"
                  variant="outline"
                  className="hover-glow border-primary/50"
                  asChild
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
