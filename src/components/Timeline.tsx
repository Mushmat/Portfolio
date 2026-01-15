import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Trophy, Briefcase, GraduationCap, Rocket } from "lucide-react";

interface TimelineItemProps {
  type: "education" | "internship" | "hackathon" | "milestone";
  title: string;
  organization: string;
  location: string;
  date: string;
  description: string;
  achievements?: string[];
  technologies?: string[];
  index: number;
}

const TimelineItem = ({ type, title, organization, location, date, description, achievements, technologies, index }: TimelineItemProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  const getIcon = () => {
    switch (type) {
      case "education":
        return <GraduationCap className="h-6 w-6" />;
      case "internship":
        return <Briefcase className="h-6 w-6" />;
      case "hackathon":
        return <Trophy className="h-6 w-6" />;
      case "milestone":
        return <Rocket className="h-6 w-6" />;
      default:
        return <Calendar className="h-6 w-6" />;
    }
  };

  const isEven = index % 2 === 0;

  return (
    <div
      ref={itemRef}
      className={`flex flex-col lg:flex-row items-center justify-between gap-8 mb-12 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Left side content - only for even indices (left-aligned on desktop) */}
      <div className={`w-full lg:w-5/12 ${isEven ? "lg:text-right order-1" : "lg:order-3 hidden lg:block"}`}>
        {isEven && (
          <Card className="p-6 bg-card border-border hover-glow transition-all duration-300 w-full">
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-4 flex-row-reverse">
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </Badge>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>{date}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="font-medium text-primary">{organization}</p>
              
              <div className="flex items-center gap-2 text-muted-foreground justify-end">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">{location}</span>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">{description}</p>
              
              {achievements && achievements.length > 0 && (
                <ul className="space-y-2 text-sm">
                  {achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-2 justify-end">
                      <span className="text-muted-foreground text-right">{achievement}</span>
                      <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    </li>
                  ))}
                </ul>
              )}
              
              {technologies && technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 justify-end">
                  {technologies.map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </Card>
        )}
      </div>

      {/* Center timeline indicator */}
      <div className="flex flex-col items-center z-10 w-24 lg:w-32 order-2">
        <div
          className={`w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-lg transition-all duration-500 ${
            isVisible ? "scale-100 rotate-0" : "scale-0 rotate-180"
          }`}
          style={{ transitionDelay: `${index * 100 + 200}ms` }}
        >
          {getIcon()}
        </div>
      </div>

      {/* Right side content - only for odd indices (right-aligned on desktop) */}
      <div className={`w-full lg:w-5/12 ${!isEven ? "lg:text-left order-3" : "lg:order-1 hidden lg:block"}`}>
        {!isEven && (
          <Card className="p-6 bg-card border-border hover-glow transition-all duration-300 w-full">
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-4">
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </Badge>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>{date}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="font-medium text-primary">{organization}</p>
              
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">{location}</span>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">{description}</p>
              
              {achievements && achievements.length > 0 && (
                <ul className="space-y-2 text-sm">
                  {achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
              )}
              
              {technologies && technologies.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </Card>
        )}
      </div>

      {/* Mobile: Center card for all items */}
      <div className="lg:hidden w-full order-1">
        <Card className="p-6 bg-card border-border hover-glow transition-all duration-300 w-full mx-auto max-w-2xl">
          <div className="space-y-3 text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </Badge>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Calendar className="h-4 w-4" />
                <span>{date}</span>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="font-medium text-primary">{organization}</p>
            
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">{location}</span>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">{description}</p>
            
            {achievements && achievements.length > 0 && (
              <ul className="space-y-2 text-sm max-w-md mx-auto">
                {achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-center gap-2 justify-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{achievement}</span>
                  </li>
                ))}
              </ul>
            )}
            
            {technologies && technologies.length > 0 && (
              <div className="flex flex-wrap gap-2 justify-center">
                {technologies.map((tech, idx) => (
                  <Badge key={idx} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};


const Timeline = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    const updateLineHeight = () => {
      if (timelineRef.current) {
        const rect = timelineRef.current.getBoundingClientRect();
        const scrolled = window.scrollY + window.innerHeight - rect.top;
        const maxHeight = timelineRef.current.scrollHeight;
        const height = Math.min(Math.max(0, scrolled), maxHeight);
        setLineHeight(height);
      }
    };

    window.addEventListener("scroll", updateLineHeight);
    updateLineHeight();

    return () => window.removeEventListener("scroll", updateLineHeight);
  }, []);

  const timelineData: Omit<TimelineItemProps, "index">[] = [
    {
      type: "education",
      title: "Integrated Master of Technology in Computer Science",
      organization: "International Institute of Information Technology, Bangalore",
      location: "Bangalore, India",
      date: "2023 - Present",
      description: "Pursuing a comprehensive degree in Computer Science with focus on software engineering, algorithms, and emerging technologies.",
      achievements: [
        "Current CGPA: 3.1/4.0",
        "Organizer, Synergy'25 - The Annual Tech Fest of IIIT-B"
      ]
    },
    {
      type: "milestone",
      title: "Organizer - Synergy'25: The Annual Tech Fest of IIIT-B",
      organization: "International Institute of Information Technology, Bangalore",
      location: "Bangalore, India",
      date: "November 2025",
      description: "Managed ₹12L + budget and 8,000+ footfall, onboarding 100+ volunteers",
      achievements: [
        "Highest footfall in all the editions of Synergy",
        "Exclusive hackathon with prize pool of $5,000",
        "End-to-end operations management"
      ]
    },
    {
      type: "internship",
      title: "Teaching Assistant | Database Systems Lab",
      organization: "IIIT Bangalore",
      location: "Bangalore, India",
      date: "Jan 2026 - Present",
      description: "Serving as a Teaching Assistant for Database Systems Lab, mentoring and guiding 50+ students throughout the semester on relational modeling, SQL, normalization, indexing, and transaction concepts.",
      achievements: [],
      technologies: ["JDBC", "MySQL"]
    },
    {
      type: "internship",
      title: "Summer Full-Stack Developer Intern",
      organization: "Furnicasa Privated Limited",
      location: "Jaipur, India",
      date: "Apr 2025 - Jul 2025",
      description: "Built Furnicasa, a full-stack furniture e-commerce site from scratch: React (Vite + Tailwind) front end, Node/Express + MongoDB API, JWT auth, live Razorpay checkout, PWA caching, and CI/CD to Vercel—delivering sub-50 KB first-load performance.",
      achievements: [
        "Concept to live launch in 8 weeks",
        "Optimized for < 50 KB first-load",
        "Collaborated with cross-functional teams"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Razorpay"]
    },
    {
      type: "internship",
      title: "App Developer & Entry-Level Pentester",
      organization: "Freelancer",
      location: "Bangalore, India",
      date: "Apr 2024 - Present",
      description: "App Developer & Freelance pentester supporting small businesses with lightweight security assessments focused on OWASP‑top risks",
      achievements: [
        "Increased client-sales by 50%",
        "Lifted monthly active users by 70% and repeat purchases 35%",
        "Identified 30+ volunerabilites & reduced critical risks by 40% for a startup"
      ],
      technologies: ["Wireshark", "Kotlin", "Snort", "NMap"]
    },
    {
      type: "milestone",
      title: "Global Top-10 in Google Code-in 2019",
      organization: "Google Code-in",
      location: "Jaipur, India",
      date: "2019",
      description: "Recognized as a Global Top 10 Finalist in the Google Code-In 2019 challenge for exceptional contributions to open source software.",
      achievements: [
        "Researched Google Earth-based flight simulators",
        "Led to the innovations adopted by 500+ global developers"
      ]
    },
    {
      type: "milestone",
      title: "Published Book: Game of Blood - The Cursed Magician",
      organization: "",
      location: "Jaipur, India",
      date: "January 2018",
      description: "Authored in Class 7th, Game of Blood: The Cursed Magician is an imaginative literary work blending elements of fantasy and mystery.",
      achievements: [
        "120-page paperback",
        "500 copies sold within the first year"
      ]
    },
    {
      type: "education",
      title: "High-School Diploma",
      organization: "Bharatiya Vidya Bhavan Vidyashram, Pratap Nagar",
      location: "Jaipur, India",
      date: "2012 - 2023",
      description: "Completed high school education with strong foundation in mathematics, physics, and computer fundamentals, achieving top performance in JEE Advanced (Top 1%).",
      achievements: [
        "Class XII - 96.8%",
        "Scholar's Blazer & Stream Topper - Science",
        "Perfect Scorer - Informatics Practices",
        "Cultural Head Boy - Batch 2022-23",
        "Organizer, Bhavans MUN"
      ]
    }
  ];

  return (
    <section id="timeline" className="py-20 px-4 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A chronological timeline of my academic achievements, professional experiences, and key milestones
          </p>
        </div>

        <div ref={timelineRef} className="relative">
          {/* Animated connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block">
            <div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary to-secondary transition-all duration-300 ease-out"
              style={{ height: `${Math.min(lineHeight, timelineRef.current?.scrollHeight || 0)}px` }}
            />
          </div>

          {/* Timeline items */}
          <div className="space-y-0">
            {timelineData.map((item, index) => (
              <TimelineItem key={index} {...item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
