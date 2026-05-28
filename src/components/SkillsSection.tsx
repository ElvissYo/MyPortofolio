import { useState } from "react";
import { Award, X, ImageIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import RevealOnScroll from "./RevealOnScroll";

// Daftar Skill
const skills = [
  "Python", "SQL", "TensorFlow", "Scikit-Learn", "Pandas",
  "NumPy", "Looker Studio", "Pentaho", "Flutter", "FlaskAPI",
  "Git", "Docker", "BigQuery", "PostgreSQL","Gradient Boost","Django","Streamlit"
];

// Daftar Sertifikasi yang sudah disesuaikan dengan file di folder public
const certifications = [
  { 
    name: "Data Science ID/X Partner", 
    issuer: "ID/X Partners", 
    file: "/certif_dsidx.pdf?v=5" 
  },
  { 
    name: "Data Engineer ID/X Partner", 
    issuer: "ID/X Partners", 
    file:  "/certif_dataeng.pdf?v=5"
  },
  { 
    name: "Data Science Home Credit Indonesia", 
    issuer: "Home Credit Indonesia", 
    file: "/certif_dshome.pdf?v=5" 
  },
  { 
    name: "Data Analyst Bootcamp HariSenin", 
    issuer: "HariSenin 2026", 
    file: "/Data_Analyst_sertif.pdf?v=3"
  },
  { 
    name: "Mobile Developer Bank Mandiri", 
    issuer: "Bank Mandiri", 
    file: "/sertif_mandiri.pdf?v=3" 
  },
];

const SkillsSection = () => {
  // State untuk menyimpan sertifikat yang sedang dibuka di modal
  const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null);

  return (
    <section id="skills" className="relative py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <RevealOnScroll>
          <h2 className="section-heading glow-text text-center mb-12">Skills & Certifications</h2>
        </RevealOnScroll>

        {/* Tech Stack Cloud */}
        <RevealOnScroll delay={0.1}>
          <div className="glass-card-hover p-8 mb-8">
            <h3 className="text-sm font-mono text-primary/70 mb-6 tracking-wider uppercase">Tech Stack</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, i) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-lg font-mono text-sm text-foreground/90 bg-secondary/50 border border-border/50 transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:text-primary cursor-default"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Certifications List */}
        <RevealOnScroll delay={0.2}>
          <div className="glass-card-hover p-8">
            <h3 className="text-sm font-mono text-primary/70 mb-6 tracking-wider uppercase">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedCert(cert)}
                  className="w-full flex items-center gap-3 p-3 rounded-lg bg-secondary/30 border border-border/30 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 text-left group cursor-pointer"
                >
                  <Award size={18} className="text-primary flex-shrink-0" />
                  <div className="flex-1">
                    <span className="font-semibold text-foreground">{cert.name}</span>
                    <span className="text-muted-foreground text-sm ml-2">— {cert.issuer}</span>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground/50 group-hover:text-primary/70 transition-colors">
                    View Document
                  </span>
                </button>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>

      {/* Certificate Modal / Lightbox */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Background Overlay */}
            <motion.div
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
              onClick={() => setSelectedCert(null)}
            />

            {/* Modal Content */}
            <motion.div
              className="glass-card relative z-10 p-4 max-w-4xl w-full h-[85vh] glow-border flex flex-col"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <div className="flex items-center justify-between mb-4 px-2">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{selectedCert.name}</h3>
                  <p className="text-xs text-muted-foreground font-mono">{selectedCert.issuer}</p>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="text-muted-foreground hover:text-foreground p-2 rounded-full hover:bg-secondary/50 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* PDF Viewer Container */}
              <div className="flex-1 rounded-lg overflow-hidden bg-white/5 border border-border/50">
                <iframe
                  key={`${selectedCert.file}-${Date.now()}`}
                  src={`${selectedCert.file}#toolbar=0&cachebust=${Date.now()}`}
                  className="w-full h-full"
                  title={selectedCert.name}
                />
              </div>

              <div className="mt-4 flex justify-end px-2">
                <a 
                  href={selectedCert.file} 
                  download 
                  className="text-xs font-mono text-primary hover:underline"
                >
                  Download Certificate
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SkillsSection;