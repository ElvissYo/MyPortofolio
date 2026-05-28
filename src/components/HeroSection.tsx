import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, Linkedin, Github } from "lucide-react";
import TypewriterEffect from "./TypewriterEffect";
import profileImg from "@/assets/profile-placeholder.png";

const socialLinks = [
  { icon: Mail, href: "mailto:yoseelvis1304@gmail.com", label: "Email" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/yoseelvissaputra/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/ElvissYo", label: "GitHub" },
];

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row items-center gap-12 py-20">
        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-shrink-0"
        >
          <div className="relative">
            <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-primary/50 neon-pulse">
              <img
                src={`/yose_face.png?v=2`} 
                alt="Yose Elvis Saputra"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-3 rounded-full border border-primary/20 animate-[spin_20s_linear_infinite]" />
          </div>
        </motion.div>

        {/* Text */}
        <div className="text-center lg:text-left flex-1">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-primary font-mono text-sm mb-4 tracking-wider"
          >
            {"// DATA SCIENCE & ENGINEERING"}
          </motion.p>

          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4">
            <TypewriterEffect
              text="Yose Elvis Saputra: Architecting Data, Engineering Intelligence."
              speed={35}
              className="text-foreground"
            />
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            className="text-muted-foreground text-base md:text-lg max-w-2xl mb-4"
          >
            Information Systems Undergraduate @ President University (GPA 3.81).
            Data Science & Engineering Enthusiast.
          </motion.p>

          {/* Quick Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.7 }}
            className="flex gap-3 justify-center lg:justify-start mb-8"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="magnetic-link p-2.5 rounded-lg bg-secondary/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                aria-label={link.label}
              >
                <link.icon size={18} />
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <a href="#projects" className="btn-primary-glow inline-flex items-center gap-2">
              View Projects <ArrowDown size={16} />
            </a>
            <a href={`/cv_yose.pdf?v=1`} className="btn-outline-glow inline-flex items-center gap-2" download>
              <Download size={16} /> Download CV
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown className="text-primary/50" size={20} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
