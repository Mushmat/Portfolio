import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Education />
      <Certifications />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
