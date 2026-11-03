import { Mail, Linkedin, Github, ArrowUpRight, ArrowUp } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

const links = [
  { icon: Mail, label: "Email", href: "mailto:yoseelvis1304@gmail.com", display: "yoseelvis1304@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/yoseelvissaputra/", display: "Let's connect" },
  { icon: Github, label: "GitHub", href: "https://github.com/ElvissYo", display: "Explore my repositories" },
];

const ContactSection = () => (
  <section id="contact" className="portfolio-section contact-section">
    <div className="section-container">
      <RevealOnScroll className="contact-intro">
        <p className="eyebrow">08 / WHAT'S NEXT?</p>
        <div className="availability"><span className="status-dot" /> Open to collaboration</div>
        <h2>Great things start<br />with <span className="gradient-text">a conversation.</span></h2>
        <p>Have a data challenge, an interesting idea, or an opportunity?<br className="hidden sm:block" /> Let's turn it into something meaningful.</p>
        <a href="mailto:yoseelvis1304@gmail.com" className="btn-primary-glow">Say hello <ArrowUpRight size={18} /></a>
      </RevealOnScroll>
      <div className="contact-links">
        {links.map((link, index) => <RevealOnScroll key={link.label} delay={index * 0.08}><a href={link.href} target={link.label === "Email" ? undefined : "_blank"} rel="noopener noreferrer" className="contact-link glass-card-hover"><link.icon size={22} className="text-primary" /><div><strong>{link.label}</strong><span>{link.display}</span></div><ArrowUpRight size={18} /></a></RevealOnScroll>)}
      </div>
      <footer className="site-footer"><a href="#hero" className="brand">yose<span>.</span></a><p>© {new Date().getFullYear()} Yose Elvis Saputra. Crafted with curiosity.</p><a href="#hero" className="back-top">Back to top <ArrowUp size={15} /></a></footer>
    </div>
  </section>
);

export default ContactSection;
