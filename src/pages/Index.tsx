import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import OrganizationalSection from "@/components/OrganizationalSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import InternshipSection from "@/components/InternshipSection";
import VolunteeringSection from "@/components/VolunteeringSection";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <ParticleBackground />
      <Navbar />
      <main id="main-content" className="relative z-10" tabIndex={-1}>
        <HeroSection />
        <ExperienceSection />
        <InternshipSection />
        <ProjectsSection />
        <OrganizationalSection />
        <VolunteeringSection />
        <AboutSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
