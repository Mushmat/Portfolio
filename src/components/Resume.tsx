import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, BookOpen, Briefcase, Code2, Award } from "lucide-react";

const Resume = () => {
  const stats = [
    {
      icon: BookOpen,
      value: "4+",
      label: "Years of Study",
      color: "text-primary"
    },
    {
      icon: Briefcase,
      value: "6+",
      label: "Projects Completed",
      color: "text-primary"
    },
    {
      icon: Code2,
      value: "10+",
      label: "Technologies Mastered",
      color: "text-primary"
    },
    {
      icon: Award,
      value: "4+",
      label: "Achievements",
      color: "text-primary"
    }
  ];

  const handleDownload = () => {
    // Direct download link for Google Drive file (fileId extracted from sharing URL)
    const fileId = '19Q1M1FUuYLSXRfdaAIfd7AKoEXDqkM';
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    
    // Trigger download in new tab
    window.open(downloadUrl, '_blank');
};


  return (
    <section id="resume" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Download My <span className="text-gradient">Resume</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get a comprehensive overview of my experience, skills, and achievements
          </p>
        </div>

        <Card className="p-8 md:p-12 bg-gradient-to-br from-card to-card/50 border-border hover-glow transition-all duration-300 relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-0" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -z-0" />
          
          <div className="relative z-10">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="text-center p-6 rounded-lg bg-muted/30 backdrop-blur-sm border border-border/50 hover-glow transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-3">
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-bold mb-1 text-gradient">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Download Section */}
            <div className="text-center space-y-4">
              <div className="max-w-2xl mx-auto mb-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My resume includes detailed information about my educational background, 
                  technical skills, project portfolio, and professional achievements. 
                  Perfect for recruiters and potential collaborators.
                </p>
              </div>
              
              <Button 
                size="lg"
                onClick={handleDownload}
                className="glow-effect hover-glow group px-8 py-6 text-lg"
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download Resume (PDF)
              </Button>
              
              <p className="text-sm text-muted-foreground pt-2">
                Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Resume;
