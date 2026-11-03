import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download, Mail, Linkedin, Github, Database, Sparkles } from "lucide-react";
import { selectedProjects } from "@/data/portfolio";

const socialLinks = [
  { icon: Mail, href: "mailto:yoseelvis1304@gmail.com", label: "Email" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/yoseelvissaputra/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/ElvissYo", label: "GitHub" },
];

const HeroSection = () => {
  const reducedMotion = useReducedMotion();
  const entrance = (delay: number) => ({
    initial: reducedMotion ? false as const : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section id="hero" className="hero-section">
      <div className="hero-grid section-container">
        <div className="hero-copy">
          <motion.div {...entrance(0.05)} className="availability"><span className="status-dot" /> Open to opportunities</motion.div>
          <motion.p {...entrance(0.12)} className="hero-intro">Hi, I'm Yose Elvis Saputra <span className="text-primary">↗</span></motion.p>
          <motion.h1 {...entrance(0.2)}>Turning data<br />into <span className="gradient-text">intelligence.</span></motion.h1>
          <motion.p {...entrance(0.28)} className="hero-description">Data science meets thoughtful engineering. I build pipelines, predictive models, and meaningful insights from complex data.</motion.p>
          <motion.div {...entrance(0.36)} className="hero-actions">
            <a href="#projects" className="btn-primary-glow">Explore my work <ArrowUpRight size={18} /></a>
            <a href="/Yose_Elvis_Saputra_CV.pdf" className="btn-outline-glow" download><Download size={17} /> Download CV</a>
          </motion.div>
          <motion.div {...entrance(0.44)} className="hero-socials">
            <span className="font-mono text-xs text-muted-foreground">FIND ME ON</span>
            <div className="social-divider" />
            {socialLinks.map(link => <a key={link.label} href={link.href} target={link.label === "Email" ? undefined : "_blank"} rel="noopener noreferrer" className="social-link" aria-label={link.label}><link.icon size={18} /></a>)}
          </motion.div>
        </div>

        <motion.div {...entrance(0.25)} className="hero-visual">
          <div className="portrait-grid" aria-hidden="true" />
          <div className="orbit orbit-outer" aria-hidden="true"><i /></div>
          <div className="orbit orbit-inner" aria-hidden="true"><i /></div>
          <div className="portrait-frame">
            <img src="/yose_face.png" alt="Yose Elvis Saputra" width="400" height="400" fetchPriority="high" />
          </div>
          <div className="floating-label label-engineering"><span className="label-icon"><Database size={19} /></span><div><span className="label-caption">BUILDING WITH PURPOSE</span><strong>Data Engineering</strong></div></div>
          <div className="floating-label label-science"><span className="label-icon"><Sparkles size={19} /></span><div><span className="label-caption">DRIVEN BY CURIOSITY</span><strong>Machine Learning</strong></div><span className="status-dot" /></div>
          <span className="visual-coordinate font-mono">DATA → INSIGHT → IMPACT</span>
        </motion.div>
      </div>

      <motion.div {...entrance(0.5)} className="hero-bottom section-container">
        <div className="hero-credential"><img src="/president-university-original.png" alt="President University logo" className="credential-logo" width="48" height="52" /><div><strong>President University</strong><span>Information Systems Undergraduate</span></div></div>
        <div className="hero-stat"><strong>3.81<span>/4.00</span></strong><span>ACADEMIC GPA</span></div>
        <div className="hero-stat"><strong>{selectedProjects.length}<span> projects</span></strong><span>IDEAS INTO PRACTICE</span></div>
        <a href="#experience" className="scroll-cue"><span>SCROLL TO EXPLORE</span><ArrowDown size={18} /></a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
