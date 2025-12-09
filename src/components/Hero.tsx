import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden grid-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <p className="text-primary text-lg font-medium tracking-wide">Hello, I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="text-gradient">Chirayu Choudhary</span>
              <br />
              <span className="text-foreground">Student at IIIT Bangalore</span>
            </h1>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate about building innovative solutions through code. Specializing in software development,
            algorithms, and cutting-edge technologies.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg" 
              className="glow-effect hover-glow"
              onClick={() => scrollToSection("projects")}
            >
              View Projects
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="hover-glow border-primary/50 hover:border-primary"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex gap-4 justify-center pt-4">
            <a href="https://github.com/Mushmat" target="_blank" rel="noopener noreferrer">
              <Button size="icon" variant="ghost" className="hover-glow">
                <Github className="h-5 w-5" />
              </Button>
            </a>
            <a href="https://linkedin.com/in/chirayu1803" target="_blank" rel="noopener noreferrer">
              <Button size="icon" variant="ghost" className="hover-glow">
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>
            <a href="mailto:edu.chirayu2005@gmail.com">
              <Button size="icon" variant="ghost" className="hover-glow">
                <Mail className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>

      <button 
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="h-6 w-6 text-primary" />
      </button>
    </section>
  );
};

export default Hero;
