import { Calendar } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

const experiences = [
  {
    role: "Mentor of Data Science",
    company: "PUDC (President University Developer Club)",
    period: "May - Present",
    desc: "Delivered structured mentoring sessions on core data science topics and Machine Learning",
  },
  {
    role: "Project Based Internship as Mobile Developer",
    company: "PT Bank Mandiri",
    period: "Jan - Feb 2026",
    desc: "Contributing to mobile banking development and digital transformation initiatives.",
  },
  {
    role: "Project Based Internship as Data Engineer",
    company: "ID/X Partners",
    period: "Dec – Jan 2026",
    desc: "Built Data Warehouse with Star Schema, Pentaho ETL pipelines, and SQL Stored Procedures for enterprise data integration.",
  },
  {
    role: "Project Based Internship as Data Governance",
    company: "Rakamin Academy",
    period: "Nov - Dec 2025",
    desc: "Redesigned RACI matrices and implemented Upstream Data Integrity frameworks to ensure data quality and accountability.",
  },
  {
    role: "Project Based Internship as Data Scientist",
    company: "Home Credit Indonesia",
    period: "Oct - Nov 2025",
    desc: "Developed CatBoost/LGBM credit scoring model achieving AUC 0.772 across 307k+ loan applications.",
  },
  {
    role: "Project Based Internship as Data Scientist",
    company: "ID/X Partners",
    period: "Sept - Oct 2025",
    desc: "Engineered Credit Risk prediction model using Random Forest and SMOTE for imbalanced classification.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <RevealOnScroll>
          <h2 className="section-heading glow-text text-center mb-12">Professional Experience</h2>
        </RevealOnScroll>

        <div className="relative">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <RevealOnScroll key={i} delay={i * 0.1}>
                <div className="glass-card-hover p-6 ml-10 md:ml-16 relative">
                  <div className="absolute -left-[calc(2.5rem+6px)] md:-left-[calc(4rem+6px)] top-8 w-3 h-3 rounded-full bg-primary neon-pulse" />

                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                      <p className="text-primary font-mono text-sm">{exp.company}</p>
                    </div>
                    <span className="text-muted-foreground text-sm font-mono flex items-center gap-1 whitespace-nowrap">
                      <Calendar size={14} /> {exp.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{exp.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
