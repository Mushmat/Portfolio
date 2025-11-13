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
      className={`relative flex items-center gap-8 mb-12 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Left side content for even items */}
      <div className={`flex-1 ${isEven ? "text-right" : "order-3"}`}>
        {isEven && (
          <Card className="p-6 bg-card border-border hover-glow transition-all duration-300 inline-block w-full">
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
      <div className="relative flex flex-col items-center z-10 order-2">
        <div
          className={`w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-lg transition-all duration-500 ${
            isVisible ? "scale-100 rotate-0" : "scale-0 rotate-180"
          }`}
          style={{ transitionDelay: `${index * 100 + 200}ms` }}
        >
          {getIcon()}
        </div>
      </div>

      {/* Right side content for odd items */}
      <div className={`flex-1 ${!isEven ? "text-left" : "order-1"}`}>
        {!isEven && (
          <Card className="p-6 bg-card border-border hover-glow transition-all duration-300 inline-block w-full">
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
      title: "Bachelor of Technology in Computer Science",
      organization: "University Name",
      location: "City, Country",
      date: "2021 - Present",
      description: "Pursuing a comprehensive degree in Computer Science with focus on software engineering, algorithms, and emerging technologies.",
      achievements: [
        "Current CGPA: 8.5/10.0",
        "Dean's List for Academic Excellence",
        "Active member of Google Developer Student Club"
      ]
    },
    {
      type: "hackathon",
      title: "Winner - National Hackathon 2024",
      organization: "TechFest 2024",
      location: "Metro City",
      date: "March 2024",
      description: "Led a team to develop an AI-powered healthcare solution that won first place among 150+ participating teams.",
      achievements: [
        "Developed ML model with 94% accuracy",
        "Presented solution to industry experts",
        "Won $5,000 prize and mentorship opportunity"
      ],
      technologies: ["Python", "TensorFlow", "React", "FastAPI"]
    },
    {
      type: "internship",
      title: "Software Engineering Intern",
      organization: "Tech Innovations Inc.",
      location: "Tech Hub City",
      date: "Jun 2023 - Aug 2023",
      description: "Worked on full-stack development projects, contributing to production applications used by thousands of users.",
      achievements: [
        "Developed 3 major features for production app",
        "Improved application performance by 30%",
        "Collaborated with cross-functional teams"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"]
    },
    {
      type: "milestone",
      title: "Published Research Paper",
      organization: "International Conference on AI",
      location: "Conference City",
      date: "January 2024",
      description: "Co-authored and presented a research paper on machine learning optimization techniques at an international conference.",
      achievements: [
        "Paper accepted in peer-reviewed conference",
        "Presented findings to 200+ attendees",
        "Received positive feedback from researchers"
      ]
    },
    {
      type: "hackathon",
      title: "2nd Place - College CodeFest",
      organization: "University Annual Hackathon",
      location: "Campus",
      date: "October 2023",
      description: "Built a collaborative project management tool with real-time features in 24 hours.",
      achievements: [
        "Implemented WebSocket for real-time updates",
        "Created intuitive UI/UX design",
        "Managed team of 4 developers"
      ],
      technologies: ["Next.js", "Socket.io", "MongoDB", "Tailwind CSS"]
    },
    {
      type: "milestone",
      title: "Open Source Contributor",
      organization: "Various Projects on GitHub",
      location: "Remote",
      date: "2022 - Present",
      description: "Active contributor to open-source projects with 100+ contributions across multiple repositories.",
      achievements: [
        "Contributed to 10+ open-source projects",
        "Fixed critical bugs in popular libraries",
        "Helped improve documentation and tests"
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
