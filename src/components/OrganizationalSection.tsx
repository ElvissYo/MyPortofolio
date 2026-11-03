import { useState } from "react";
import { Trophy, AudioLines, Expand } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";
import SectionHeading from "./SectionHeading";
import DeckModal from "./DeckModal";

const organizations = [
  {
    role: "PIC Event Organizer",
    name: "Golden Code Hackathon 2025",
    organization: "PUMA Information Systems x UNITAR Malaysia",
    period: "2025",
    icon: Trophy,
    description: "Led event planning and execution through completion for 25+ participants from President University and UNITAR Malaysia.",
    image: "/certif.eohackathon.jpg",
  },
  {
    role: "Event Organizer (Multimedia)",
    name: "TechSprint 2026",
    organization: "PUMA Information Systems",
    period: "2026",
    icon: AudioLines,
    description: "Managed live sound, multimedia, and presentation operations for TechSprint, supporting sessions for 40+ participants.",
    image: undefined,
  },
];

const OrganizationalSection = () => {
  const [lightbox, setLightbox] = useState<{ src: string; title: string } | null>(null);
  return (
    <section id="organizations" className="portfolio-section">
      <div className="section-container">
        <SectionHeading number="04" eyebrow="BEYOND THE TECHNICAL" title="Organizational Experience" description="Bringing people together through event leadership, international collaboration, and live production." />
        <div className="organization-grid cv-organization-grid">
          {organizations.map((organization, index) => (
            <RevealOnScroll key={organization.name} delay={index * 0.08}>
              <article className="organization-card glass-card-hover">
                {organization.image ? <button className="organization-photo" onClick={() => setLightbox({ src: organization.image!, title: organization.name })} aria-label={`View documentation: ${organization.name}`}>
                  <img src={organization.image} alt={organization.name} loading="lazy" />
                  <span><Expand size={18} /> View documentation</span>
                </button> : <div className="organization-illustration" aria-hidden="true"><AudioLines size={58} /><span>TECHSPRINT / 2026</span></div>}
                <div className="organization-content">
                  <span className="specialty-icon"><organization.icon size={21} /></span>
                  <p className="project-role">{organization.role}</p>
                  <h3>{organization.name}</h3>
                  <p className="organization-partners">{organization.organization}</p>
                  <p>{organization.description}</p>
                  <span className="organization-detail">{organization.period}</span>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
      <DeckModal isOpen={!!lightbox} onClose={() => setLightbox(null)} title={lightbox?.title || ""} embedUrl={lightbox?.src || ""} />
    </section>
  );
};

export default OrganizationalSection;
