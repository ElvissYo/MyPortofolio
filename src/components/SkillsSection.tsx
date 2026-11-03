import { useState } from "react";
import { Award, ArrowUpRight, BrainCircuit, Database, Code2, ChartNoAxesCombined, Trophy, Languages } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";
import SectionHeading from "./SectionHeading";
import DeckModal from "./DeckModal";

interface Certification {
  name: string;
  issuer: string;
  file?: string;
}

const certifications: Certification[] = [
  { name: "Data Engineer", issuer: "ID/X Partners x Rakamin Academy · 2026", file: "/certif_dataeng.pdf?v=5" },
  { name: "Mobile Developer", issuer: "Bank Mandiri x Rakamin Academy · 2026", file: "/sertif_mandiri.pdf?v=3" },
  { name: "Data Governance", issuer: "Rakamin Academy · 2025" },
  { name: "Data Scientist - Home Credit", issuer: "Home Credit Indonesia x Rakamin Academy · 2025", file: "/certif_dshome.pdf?v=5" },
  { name: "Data Scientist - ID/X Partners", issuer: "ID/X Partners x Rakamin Academy · 2025", file: "/certif_dsidx.pdf?v=5" },
  { name: "Data Analyst Bootcamp", issuer: "HariSenin · 2026", file: "/Data_Analyst_sertif.pdf?v=3" },
];

const skillGroups = [
  { label: "PROGRAMMING & ANALYTICS", icon: Code2, skills: ["Python", "SQL", "T-SQL", "TypeScript", "JavaScript", "pandas", "NumPy", "Microsoft Excel"] },
  { label: "BUSINESS INTELLIGENCE & DATA", icon: ChartNoAxesCombined, skills: ["Power BI", "Streamlit", "Data Visualization", "EDA", "Forecasting", "KPI Reporting", "Data Cleaning"] },
  { label: "DATA ENGINEERING & DATABASES", icon: Database, skills: ["SQL Server", "PostgreSQL", "Supabase", "Pentaho ETL", "Star Schema", "Dagster", "Data Validation"] },
  { label: "MACHINE LEARNING & DEVELOPMENT", icon: BrainCircuit, skills: ["scikit-learn", "CatBoost", "XGBoost", "LightGBM", "NLP", "Flutter", "React", "ASP.NET Core", "GitHub Actions", "Docker"] },
];

const SkillsSection = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  return (
    <section id="skills" className="portfolio-section">
      <div className="section-container">
        <SectionHeading number="07" eyebrow="THE TOOLKIT" title="Skills & Credentials" description="Technical skills, certifications, awards, and languages that support the work." />
        <div className="skills-layout">
          <div className="skill-groups">
            {skillGroups.map((group, i) => <RevealOnScroll key={group.label} delay={i * 0.08}>
              <div className="skill-group glass-card-hover"><h3><group.icon size={18} />{group.label}</h3><div className="skill-tags">{group.skills.map(skill => <span key={skill}>{skill}</span>)}</div></div>
            </RevealOnScroll>)}
          </div>
          <RevealOnScroll delay={0.12} className="certifications-panel">
            <div className="certifications-heading"><div><p className="eyebrow">ALWAYS LEARNING</p><h3>Certifications</h3></div><span>{String(certifications.length).padStart(2, "0")}</span></div>
            <div className="certifications-list">
              {certifications.map(cert => cert.file ?
                <button key={cert.name} onClick={() => setSelectedCert(cert)} className="certificate-row" aria-label={`View certificate: ${cert.name}`}><span className="certificate-icon"><Award size={20} /></span><div><strong>{cert.name}</strong><span>{cert.issuer}</span></div><ArrowUpRight size={18} /></button> :
                <div key={cert.name} className="certificate-row certificate-static"><span className="certificate-icon"><Award size={20} /></span><div><strong>{cert.name}</strong><span>{cert.issuer}</span></div></div>
              )}
            </div>
            <p className="certificate-hint">Certificates with an arrow can be opened for a closer look.</p>
            <div className="credentials-extra glass-card">
              <h3><Trophy size={18} /> Awards</h3>
              <ul><li><strong>Jababeka Scholarship Awardee</strong><span>2024</span></li><li><strong>DSCO BINUS National Leaderboard Top 10</strong><span>2025</span></li></ul>
              <h3><Languages size={18} /> Languages</h3>
              <div className="skill-tags"><span>Indonesian · Native</span><span>English</span></div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
      <DeckModal isOpen={!!selectedCert} onClose={() => setSelectedCert(null)} title={selectedCert?.name || ""} embedUrl={selectedCert?.file || ""} />
    </section>
  );
};

export default SkillsSection;
