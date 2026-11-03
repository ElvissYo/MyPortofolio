import { useState } from "react";
import { ArrowUpRight, Github, Presentation } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import DeckModal from "./DeckModal";
import type { PortfolioProject, ProjectCategory } from "@/data/portfolio";

interface ProjectCollectionProps {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  projects: PortfolioProject[];
}

const categories: ("All projects" | ProjectCategory)[] = ["All projects", "Data Science", "System Development", "Analytics"];

const ProjectVisual = ({ project, index }: { project: PortfolioProject; index: number }) => (
  <div className={`project-visual visual-${index % 3}`} aria-hidden="true">
    <span className="project-visual-label">{project.category} / {String(index + 1).padStart(2, "0")}</span>
    <svg viewBox="0 0 340 130" fill="none">
      {[30, 65, 100].map(y => <path key={y} d={`M20 ${y}H320`} stroke="currentColor" strokeOpacity=".1" />)}
      {project.category === "System Development" ? <>
        <path className="diagram-path" d="M65 65H145M195 65H275" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" />
        {[40, 145, 250].map((x, i) => <g key={x}><rect x={x} y="40" width="50" height="50" rx="12" fill="currentColor" fillOpacity=".08" stroke="currentColor" strokeOpacity=".5" /><text x={x + 25} y="70" textAnchor="middle" fill="currentColor" fontSize="11" fontFamily="monospace">{["DATA", "BUILD", "SHIP"][i]}</text></g>)}
      </> : project.category === "Data Science" ? <>
        <path d="M20 110L60 95L100 100L140 62L180 73L220 37L260 50L310 18V120H20Z" fill="currentColor" fillOpacity=".06" />
        <path className="chart-line" d="M20 110L60 95L100 100L140 62L180 73L220 37L260 50L310 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="310" cy="18" r="5" fill="currentColor" />
      </> : <>
        {[44, 67, 50, 82, 66, 97, 80, 108].map((height, i) => <rect className="chart-bar" key={i} x={30 + i * 37} y={120 - height} width="20" height={height} rx="4" fill="currentColor" opacity={0.2 + i * 0.08} style={{ animationDelay: `${i * 70}ms` }} />)}
      </>}
    </svg>
    <span className="project-visual-caption">{project.period}</span>
  </div>
);

const ProjectCollection = ({ id, number, eyebrow, title, description, projects }: ProjectCollectionProps) => {
  const [modal, setModal] = useState<{ title: string; url: string } | null>(null);
  const [category, setCategory] = useState("All projects");
  const reducedMotion = useReducedMotion();
  const visibleProjects = projects.map((project, index) => ({ ...project, index })).filter(project => category === "All projects" || project.category === category);

  return (
    <section id={id} className="portfolio-section cv-project-section">
      <div className="section-container">
        <SectionHeading number={number} eyebrow={eyebrow} title={title} description={description} />
        <div className="project-toolbar">
          <div className="project-filters" role="group" aria-label={`Filter ${title}`}>
            {categories.filter(item => item === "All projects" || projects.some(project => project.category === item)).map(item => <button key={item} aria-pressed={category === item} onClick={() => setCategory(item)} className={category === item ? "is-active" : ""}>{item}</button>)}
          </div>
          <span className="project-count" role="status" aria-live="polite">{String(visibleProjects.length).padStart(2, "0")} projects</span>
        </div>
        <motion.div layout={!reducedMotion} className="projects-grid">
          <AnimatePresence mode="popLayout" initial={false}>
            {visibleProjects.map(project => (
              <motion.article layout={!reducedMotion} key={project.id}
                initial={reducedMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
                transition={{ duration: reducedMotion ? 0 : 0.35 }}
                className="project-card glass-card-hover group">
                <ProjectVisual project={project} index={project.index} />
                <div className="project-content">
                  <p className="project-role">{project.role}</p>
                  <h3>{project.title}</h3>
                  <p className="project-organization">{project.organization}</p>
                  <ul className="cv-highlights project-highlights">{project.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}</ul>
                  <div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                  <div className="project-actions">
                    {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-open" aria-label={`View GitHub: ${project.title}`}><span><Github size={16} /> GitHub</span><ArrowUpRight size={17} /></a>}
                    {project.deckUrl && <button onClick={() => setModal({ title: project.title, url: project.deckUrl! })} className="project-open" aria-label={`View deck: ${project.title}`}><span><Presentation size={16} /> View deck</span><ArrowUpRight size={17} /></button>}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      <DeckModal isOpen={!!modal} onClose={() => setModal(null)} title={modal?.title || ""} embedUrl={modal?.url || ""} />
    </section>
  );
};

export default ProjectCollection;
