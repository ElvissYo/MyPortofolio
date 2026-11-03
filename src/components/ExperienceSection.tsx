import { ArrowUpRight, Calendar, Github } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";
import SectionHeading from "./SectionHeading";
import { workExperiences } from "@/data/portfolio";

const ExperienceSection = () => (
  <section id="experience" className="portfolio-section">
    <div className="section-container">
      <SectionHeading number="01" eyebrow="REAL-WORLD IMPACT" title="Work Experience" description="Applying analytics, building internal systems, and helping others develop their data science skills." />
      <div className="experience-timeline">
        <div className="space-y-6">
          {workExperiences.map((experience, index) => (
            <RevealOnScroll key={experience.company} delay={index * 0.1}>
              <article className="glass-card-hover experience-card">
                <div className="timeline-dot" aria-hidden="true" />
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                  <div>
                    <h3 className="font-semibold">{experience.role}</h3>
                    <p className="text-primary font-mono">{experience.company}</p>
                  </div>
                  <span className="text-muted-foreground font-mono flex items-center gap-2 whitespace-nowrap"><Calendar size={14} />{experience.period}</span>
                </div>
                <ul className="cv-highlights">{experience.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}</ul>
                {experience.githubUrl && <a href={experience.githubUrl} target="_blank" rel="noopener noreferrer" className="cv-source-link"><Github size={15} /> View project on GitHub <ArrowUpRight size={15} /></a>}
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
