import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "SQL"]
    },
    {
      category: "Frontend",
      skills: ["React", "Next.js", "Tailwind CSS", "HTML/CSS", "Redux"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "Django", "REST APIs", "GraphQL"]
    },
    {
      category: "Database",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis"]
    },
    {
      category: "Tools & Others",
      skills: ["Git", "Docker", "AWS", "Linux", "Agile", "CI/CD"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card border-border hover-glow transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="secondary"
                    className="bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
