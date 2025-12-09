import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar, Award, Shield } from "lucide-react";

interface Certification {
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  verificationUrl: string;
  logo: string;
  category: "course" | "certification" | "badge";
  skills?: string[];
}

const Certifications = () => {
  const certifications: Certification[] = [
    
    {
      title: "First Course on Ethical Hacking",
      issuer: "ZSecurity/Udemy",
      issueDate: "June 2025",
      credentialId:"UC-57aadc7b-5f31-49bd-9e9d-60bf91eaaee7",
      verificationUrl: "https://www.udemy.com/certificate/UC-57aadc7b-5f31-49bd-9e9d-60bf91eaaee7/",
      logo: "https://bcdn.mindler.com/bloglive/wp-content/uploads/2016/08/06132948/Ethical-hacking-cover-pic-770x476.jpg",
      category: "course",
      skills: ["Wireshark", "NMap", "Network Security", "Vulnerability Assessment"]
    },
    {
      title: "Course on Defensive Cyber Security",
      issuer: "StationX/Udemy",
      issueDate: "June 2025",
      credentialId: "UC-0441f0cd-95d0-430a-b879-b9b9974476aa",
      verificationUrl: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-0441f0cd-95d0-430a-b879-b9b9974476aa.pdf",
      logo: "https://cdn.prod.website-files.com/651e8862627bb76b91f2a4e6/66968ed362180b62481f4cb2_Hero%20Image%20Essential%20Cybersecurity%20Frameworks%20for%20Enhancing%20Defense%20Sector%20Security-p-2000.jpg",
      category: "course",
      skills: ["Snort", "Intrusion Detection", "Firewall Management"]
    },
    {
      title: "Course on Android 14 & Kotlin Development",
      issuer: "Udemy",
      issueDate: "July 2024",
      credentialId: "UC-ab66b3ca-beaf-428b-9d7e-af5125516f21",
      verificationUrl: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-ab66b3ca-beaf-428b-9d7e-af5125516f21.pdf",
      logo: "https://scontent.fudr2-1.fna.fbcdn.net/v/t39.30808-1/308659204_462000859297536_2030791871659361058_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=105&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=EBxoH16UDgIQ7kNvwFaRsVl&_nc_oc=Adm82BN4VhZv-RHtrYFl-A3uaZY0c9xsnvpBSBlJ7vtrygqzORGo9h269Y-oV2MZDv-Jv-sBiKSOOo3FallNBnqf&_nc_zt=24&_nc_ht=scontent.fudr2-1.fna&_nc_gid=gylna7RV0Wfqwq6l9IJfdA&oh=00_Afn6KfADSZjCOgaGDgBtKAc3nw4zbKzFmM8KmD270ivhFA&oe=693DC7FF",
      category: "course",
      skills: ["Kotlin", "Jetpack Compose", "Secure Apps"]
    },
    {
      title: "Google Code-in 2019 - World Top 10",
      issuer: "Google Code-in",
      issueDate: "January 2020",
      credentialId: "6312418381135872",
      verificationUrl: "https://drive.google.com/file/d/1ixwoyIKkqs7MdWxXpza4YTs6il4zfL2x/view?usp=sharing",
      logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiMhE8INtZ9nb7fR2Rz9BfpRK1f26NMv6DO_7YPjf_PRpD8BtQeTGDjDN8dXtZtpMDOP9tsFxc2QLWvdjNj10f5Ng3fIFj5szRWonrPekvxD6kdA2GaPNRtnlfhF_1wh9J8qDUqR3BFpZ8/s1600/GCI+-+Vertical+-+Gray+Text+-+White+BG.png",
      category: "badge",
      skills: ["Version Control", "Open Source Contribution", "Python"]
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "certification":
        return <Shield className="h-4 w-4" />;
      case "course":
        return <Award className="h-4 w-4" />;
      case "badge":
        return <Award className="h-4 w-4" />;
      default:
        return <Award className="h-4 w-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "certification":
        return "bg-primary/10 text-primary border-primary/20";
      case "course":
        return "bg-secondary/10 text-secondary border-secondary/20";
      case "badge":
        return "bg-accent/10 text-accent-foreground border-accent/20";
      default:
        return "bg-muted/10 text-muted-foreground border-muted/20";
    }
  };

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certifications & <span className="text-gradient">Credentials</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional certifications, completed courses, and technical achievements that validate my expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover-glow transition-all duration-300 flex flex-col"
            >
              {/* Header with Logo */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted flex-shrink-0 border border-border">
                  <img 
                    src={cert.logo} 
                    alt={cert.issuer}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <Badge 
                    variant="secondary"
                    className={`mb-2 ${getCategoryColor(cert.category)}`}
                  >
                    <span className="flex items-center gap-1">
                      {getCategoryIcon(cert.category)}
                      {cert.category.charAt(0).toUpperCase() + cert.category.slice(1)}
                    </span>
                  </Badge>
                  <h3 className="font-semibold text-lg leading-tight line-clamp-2">
                    {cert.title}
                  </h3>
                </div>
              </div>

              {/* Issuer */}
              <p className="text-muted-foreground font-medium mb-2">
                {cert.issuer}
              </p>

              {/* Date */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <Calendar className="h-4 w-4" />
                <span>Issued {cert.issueDate}</span>
              </div>

              {/* Credential ID */}
              {cert.credentialId && (
                <div className="mb-3">
                  <p className="text-xs text-muted-foreground">
                    Credential ID: <span className="font-mono">{cert.credentialId}</span>
                  </p>
                </div>
              )}

              {/* Skills */}
              {cert.skills && cert.skills.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="outline"
                      className="text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              )}

              {/* Verification Button */}
              <div className="mt-auto pt-4">
                <Button 
                  variant="outline"
                  size="sm"
                  className="w-full hover-glow border-primary/50"
                  asChild
                >
                  <a href={cert.verificationUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Verify Credential
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-12 grid grid-cols-3 gap-4 max-w-3xl mx-auto">
          <Card className="p-6 text-center bg-card/50 backdrop-blur-sm border-border">
            <div className="text-3xl font-bold text-gradient mb-1">
              {certifications.filter(c => c.category === "certification").length}
            </div>
            <div className="text-sm text-muted-foreground">Certifications</div>
          </Card>
          <Card className="p-6 text-center bg-card/50 backdrop-blur-sm border-border">
            <div className="text-3xl font-bold text-gradient mb-1">
              {certifications.filter(c => c.category === "course").length}
            </div>
            <div className="text-sm text-muted-foreground">Courses</div>
          </Card>
          <Card className="p-6 text-center bg-card/50 backdrop-blur-sm border-border">
            <div className="text-3xl font-bold text-gradient mb-1">
              {certifications.filter(c => c.category === "badge").length}
            </div>
            <div className="text-sm text-muted-foreground">Badges</div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
