import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce application with payment integration, user authentication, and admin dashboard",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      demo: "#"
    },
    {
      title: "AI Task Manager",
      description: "Smart task management app using machine learning to prioritize tasks and predict deadlines",
      tech: ["Python", "TensorFlow", "Flask", "React"],
      github: "#",
      demo: "#"
    },
    {
      title: "Real-time Chat Application",
      description: "Scalable chat application with WebSocket support, file sharing, and group chat features",
      tech: ["Next.js", "Socket.io", "PostgreSQL", "Redis"],
      github: "#",
      demo: "#"
    },
    {
      title: "Code Snippet Manager",
      description: "Developer tool for organizing, searching, and sharing code snippets with syntax highlighting",
      tech: ["TypeScript", "Express", "Prisma", "Tailwind"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover-glow transition-all duration-300 overflow-hidden"
            >
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="hover-glow border-primary/50"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    size="sm"
                    className="glow-effect"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
