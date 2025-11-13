import { Card } from "@/components/ui/card";
import { GraduationCap, Award, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "University Name",
      period: "2021 - 2025",
      details: "CGPA: 8.5/10.0 | Relevant Coursework: Data Structures, Algorithms, Database Systems, Software Engineering"
    }
  ];

  const achievements = [
    "Winner - College Hackathon 2024",
    "Top 10% in Competitive Programming Contest",
    "Published Research Paper on Machine Learning",
    "Google Developer Student Club Lead"
  ];

  return (
    <section id="education" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education & <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Academic journey and notable accomplishments
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="p-8 bg-card border-border hover-glow transition-all duration-300">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2">Education</h3>
              </div>
            </div>
            
            {education.map((edu, index) => (
              <div key={index} className="space-y-3">
                <h4 className="text-xl font-semibold text-primary">{edu.degree}</h4>
                <p className="text-lg font-medium">{edu.institution}</p>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{edu.period}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{edu.details}</p>
              </div>
            ))}
          </Card>

          <Card className="p-8 bg-card border-border hover-glow transition-all duration-300">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2">Achievements</h3>
              </div>
            </div>
            
            <ul className="space-y-4">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
