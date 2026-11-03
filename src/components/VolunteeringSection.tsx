import { useState } from "react";
import { ArrowUpRight, Calendar, Expand, Github, HeartHandshake } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";
import SectionHeading from "./SectionHeading";
import DeckModal from "./DeckModal";

const VolunteeringSection = () => {
  const [open, setOpen] = useState(false);
  return (
    <section id="volunteering" className="portfolio-section">
      <div className="section-container">
        <SectionHeading number="05" eyebrow="TECHNOLOGY FOR COMMUNITY" title="Volunteering" description="Sharing digital skills and creating practical tools alongside local communities." />
        <RevealOnScroll>
          <article className="glass-card-hover volunteering-card">
            <button className="organization-photo volunteering-photo" onClick={() => setOpen(true)} aria-label="View Aquanomic Digital Education documentation">
              <img src="/Aquanomic_photo.jpeg" alt="Aquanomic Digital Education documentation" loading="lazy" />
              <span><Expand size={18} /> View documentation</span>
            </button>
            <div className="volunteering-content">
              <span className="specialty-icon"><HeartHandshake size={22} /></span>
              <p className="project-role">Project Manager</p>
              <h3>Aquanomic Digital Education</h3>
              <p className="volunteering-partners">President University x Universitas Brawijaya</p>
              <p className="cv-period"><Calendar size={14} /> May 2025 - Jul 2025</p>
              <ul className="cv-highlights">
                <li>Led a Scrum team creating a WordPress education website prototype for fishermen and fish-product artisans in Muara Gembong.</li>
                <li>Conducted a digital-marketing workshop for 50+ fishermen and fish-product artisans, demonstrating the website prototype.</li>
              </ul>
              <a href="https://github.com/ElvissYo/Aquanomic" target="_blank" rel="noopener noreferrer" className="cv-source-link"><Github size={15} /> Explore Aquanomic <ArrowUpRight size={15} /></a>
            </div>
          </article>
        </RevealOnScroll>
      </div>
      <DeckModal isOpen={open} onClose={() => setOpen(false)} title="Aquanomic Digital Education" embedUrl="/Aquanomic_photo.jpeg" />
    </section>
  );
};

export default VolunteeringSection;
