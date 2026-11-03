import { Award, ArrowUpRight, Database, BrainCircuit, ChartNoAxesCombined } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";
import SectionHeading from "./SectionHeading";

const specialties = [
  { icon: Database, title: "Engineer the foundation", description: "Reliable pipelines, structured warehouses, and data that is ready to work." },
  { icon: BrainCircuit, title: "Find the intelligence", description: "Predictive models that turn complex patterns into practical decisions." },
  { icon: ChartNoAxesCombined, title: "Make it meaningful", description: "Clear analytics that connect technical work to business impact." },
];

const AboutSection = () => (
  <section id="about" className="portfolio-section">
    <div className="section-container">
      <SectionHeading number="06" eyebrow="THE PERSON BEHIND THE DATA" title="About & Education" description="Information Systems, Data Science, and a drive to turn technical work into practical outcomes." />
      <div className="about-grid">
        <RevealOnScroll className="about-story">
          <p>I bridge the gap between <span>complex raw data</span> and <span>strategic business intelligence.</span></p>
          <p>I'm an Information Systems undergraduate specializing in Data Science at President University, with experience in analytics, data engineering, machine learning, and application development.</p>
          <p>At Insta360 Indonesia, I built an internal order system to centralize product and order workflows. My projects span pipelines, dashboards, and predictive models, including a national Top 10 result at DSCO BINUS.</p>
          <div className="education-details"><strong>President University</strong><span>B.Sc. Information Systems · Data Science Concentration</span><span>Cikarang, Indonesia · Expected graduation 2027</span><span className="text-primary">GPA 3.81 / 4.00</span></div>
          <div className="scholarship"><Award size={22} /><div><strong>Jababeka Scholarship Awardee</strong><span>Learning with purpose. Building with ambition.</span></div><ArrowUpRight size={18} /></div>
        </RevealOnScroll>
        <div className="specialty-list">
          {specialties.map((item, index) => <RevealOnScroll key={item.title} delay={index * 0.08}><div className="specialty-card glass-card-hover"><span className="specialty-icon"><item.icon size={22} /></span><div><h3>{item.title}</h3><p>{item.description}</p></div><span className="specialty-number">0{index + 1}</span></div></RevealOnScroll>)}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
