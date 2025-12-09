import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Furnicasa Website",
      description: "Full-stack furniture e-commerce platform with product catalog management, secure user authentication, shopping cart and checkout flow, online payments, and admin dashboard for orders and inventory control.",
      tech: ["React", "Node.js", "MongoDB", "Razorpay"],
      github:"Hidden due to privacy reasons",
      demo: "www.furnicasa.in"
    },
    {
      title: "ML Model for Deepfake Detection",
      description: "End-to-end deepfake image detection ML model using CNNs and computer vision for high-accuracy classification, with dataset curation, preprocessing, feature extraction, and data augmentation to ensure resilience against misinformation.",
      tech: ["Python", "TensorFlow/Keras", "scikit-learn", "Flask", "OpenCV", "Pandas", "NumPy"],
      github: "https://github.com/Mushmat/Predicathon",
      demo:"https://github.com/Mushmat/Predicathon"
    },
    {
      title: "Pet Adoption Application Prototype",
      description: "A prototype for a pet adoption platform that simplifies the process of finding and adopting dogs and cats.",
      tech: ["Kotlin", "Jetpack Compose", "Firebase", "Room", "Android Studio"],
      github: "https://github.com/Mushmat/Wiggles",
      demo: "https://drive.google.com/file/d/1dyrvzFw9_2jPOnSyAxuP53zmnrjAMKj9/view"
    },
    {
      title: "Student Management System",
      description: "Software to manage students, courses, and faculty end-to-end. ",
      tech: ["Java", "Swing", "MySQL", "C++", "JDBC"],
      github: "https://github.com/Mushmat/StudentManagementSystem",
      demo:"https://github.com/Mushmat/StudentManagementSystem"
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
