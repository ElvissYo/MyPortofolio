import { Award, Database, BarChart3 } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <RevealOnScroll>
          <h2 className="section-heading glow-text text-center mb-12">About Me</h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div className="glass-card-hover p-8 md:p-10">
            <p className="text-foreground/90 text-lg leading-relaxed mb-6">
              A data-driven enthusiast specializing in{" "}
              <span className="text-primary font-semibold">Data Science</span> and{" "}
              <span className="text-primary font-semibold">Data Engineering</span>.
              I bridge the gap between complex raw data and strategic business intelligence.
              With a strong foundation in{" "}
              <span className="text-primary font-semibold">Python</span>,{" "}
              <span className="text-primary font-semibold">SQL</span>, and{" "}
              <span className="text-primary font-semibold">Machine Learning</span>,
              I focus on building scalable data pipelines and predictive models that drive impact.
              Jababeka Scholarship Awardee and a lifelong learner in the evolving AI landscape.
            </p>

            <div className="flex flex-wrap gap-4 mt-6">
              <div className="flex items-center gap-2 text-primary font-mono text-sm px-4 py-2 rounded-lg bg-primary/5 border border-primary/20">
                <Award size={16} />
                Jababeka Scholarship Awardee
              </div>
              <div className="flex items-center gap-2 text-primary font-mono text-sm px-4 py-2 rounded-lg bg-primary/5 border border-primary/20">
                <Database size={16} />
                Data Engineering
              </div>
              <div className="flex items-center gap-2 text-primary font-mono text-sm px-4 py-2 rounded-lg bg-primary/5 border border-primary/20">
                <BarChart3 size={16} />
                Data Science
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default AboutSection;
