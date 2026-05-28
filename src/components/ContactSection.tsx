import { Mail, Linkedin, Github } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

const links = [
  { icon: Mail, label: "Email", href: "mailto:yoseelvis1304@gmail.com", display: "yoseelvis1304@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/iwww.linkedin.com/in/yoseelvissaputran/yoseelvis", display: "linkedin.com/in/yoseelvis" },
  { icon: Github, label: "GitHub", href: "https://github.com/yohttps://github.com/ElvissYoseelvis", display: "github.com/yoseelvis" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="container mx-auto max-w-2xl text-center">
        <RevealOnScroll>
          <h2 className="section-heading glow-text mb-4">Get In Touch</h2>
          <p className="text-muted-foreground mb-12">
            Open to collaboration, data science projects, and new opportunities.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="magnetic-link glass-card-hover p-6 flex flex-col items-center gap-3 flex-1"
              >
                <link.icon size={28} className="text-primary" />
                <span className="font-semibold text-foreground">{link.label}</span>
                <span className="text-muted-foreground text-xs font-mono">{link.display}</span>
              </a>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.3}>
          <p className="text-muted-foreground/50 text-sm font-mono mt-16">
            © 2026 Yose Elvis Saputra. Built with React & Tailwind CSS.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default ContactSection;
