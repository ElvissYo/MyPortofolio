import { useState } from "react";
import { Users, Trophy, Heart, FlaskConical, ImageIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import RevealOnScroll from "./RevealOnScroll";

const orgs = [
  {
    role: "Member R&D",
    org: "PUMA Information Systems",
    period: "Oct 2024 – Sept 2025",
    icon: FlaskConical,
    desc: "Research and Development member contributing to information systems projects and technical innovation.",
    // Gunakan satu field gambar saja agar konsisten
    displayImg: "/rnd.jpeg", 
  },
  {
    role: "PIC Event Organizer",
    org: "Golden Code Hackathon 2025",
    detail: "International collaboration with UNITAR Malaysia",
    icon: Trophy,
    desc: "Led event organization for an international hackathon bridging students from Indonesia and Malaysia.",
    displayImg: "/certif.eohackathon.jpg",
  },
  {
    role: "PIC Sponsorship",
    org: "Temu Alumni",
    detail: "Secured Rp2,000,000 in funding",
    icon: Users,
    desc: "Managed sponsorship acquisition, successfully securing funding for the alumni gathering event.",
    displayImg: "/certif.sponsor.jpg",
  },
  
];

const OrganizationalSection = () => {
  const [lightbox, setLightbox] = useState<{ src: string; title: string } | null>(null);

  return (
    <section id="organizations" className="relative py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <RevealOnScroll>
          <h2 className="section-heading glow-text text-center mb-12">Organizational Experience</h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {orgs.map((org, i) => (
            <RevealOnScroll key={i} delay={i * 0.1}>
              <div className="glass-card-hover p-6 h-full flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 flex-shrink-0">
                    <org.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{org.role}</h3>
                    <p className="text-primary font-mono text-sm">{org.org}</p>
                    {org.detail && (
                      <p className="text-muted-foreground text-sm mt-1">{org.detail}</p>
                    )}
                    {org.period && (
                      <p className="text-muted-foreground text-xs font-mono mt-1">{org.period}</p>
                    )}
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-6 flex-grow">{org.desc}</p>

                {/* Single Photo Slot */}
                <div className="mt-auto">
                  <div
                    className="group relative aspect-video rounded-lg border border-border/60 bg-secondary/20 overflow-hidden cursor-pointer hover:border-primary/40 transition-all duration-300"
                    onClick={() => org.displayImg && setLightbox({ src: org.displayImg, title: `${org.role} - ${org.org}` })}
                  >
                    {org.displayImg ? (
                      <img 
                        src={org.displayImg} 
                        alt={org.org} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center h-full gap-2 opacity-50">
                        <ImageIcon size={24} />
                        <span className="text-xs font-mono">Documentation Placeholder</span>
                      </div>
                    )}
                    
                    {/* Overlay on hover */}
                    {org.displayImg && (
                        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <div className="bg-background/80 px-4 py-2 rounded-full border border-primary/20 text-xs font-bold uppercase tracking-widest shadow-xl">
                                Expand Photo
                            </div>
                        </div>
                    )}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      {/* Lightbox Pop-up */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-background/90 backdrop-blur-xl"
              onClick={() => setLightbox(null)}
            />
            <motion.div
              className="relative z-10 max-w-4xl w-full flex flex-col items-center"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
            >
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-14 right-0 text-muted-foreground hover:text-primary transition-colors p-2"
              >
                <X size={32} />
              </button>
              
              <div className="glass-card overflow-hidden w-full border border-primary/20 shadow-2xl">
                <img 
                  src={lightbox.src} 
                  alt={lightbox.title} 
                  className="w-full h-auto max-h-[75vh] object-contain mx-auto"
                />
                <div className="p-4 bg-secondary/30 border-t border-border/50 text-center">
                  <p className="text-sm font-mono text-primary uppercase tracking-widest">{lightbox.title}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default OrganizationalSection;