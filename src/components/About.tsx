import { Card } from "@/components/ui/card";
import { Code2, Cpu, Lightbulb } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, efficient, and well-documented code"
    },
    {
      icon: Cpu,
      title: "Problem Solver",
      description: "Tackling complex algorithms and data structure challenges"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Creating innovative solutions to real-world problems"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A dedicated Computer Science Engineering student with a passion for technology and innovation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {highlights.map((item, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card border-border hover-glow transition-all duration-300"
            >
              <item.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-card/50 backdrop-blur-sm border-border">
          <p className="text-lg leading-relaxed text-muted-foreground">
            I'm a Computer Science Engineering student with a deep fascination for software development 
            and emerging technologies. My journey in tech began with a curiosity about how things work, 
            which has evolved into a commitment to building solutions that make a difference. I'm constantly 
            learning new technologies, participating in hackathons, and contributing to open-source projects. 
            My goal is to leverage my skills to create impactful applications that solve real-world problems.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default About;
