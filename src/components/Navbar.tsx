import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

const navItems = [
  { label: "Work", href: "#experience" },
  { label: "Internships", href: "#internships" },
  { label: "Projects", href: "#projects" },
  { label: "Organizations", href: "#organizations" },
  { label: "Volunteering", href: "#volunteering" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("");
  const toggleRef = useRef<HTMLButtonElement>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    let frame = 0;
    const update = () => {
      setScrolled(window.scrollY > 24);
      const sections = Array.from(document.querySelectorAll<HTMLElement>("main section[id]"));
      const passed = sections.filter(section => section.getBoundingClientRect().top <= 180);
      const current = passed[passed.length - 1];
      setActive(current ? `#${current.id}` : "");
      frame = 0;
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    const onResize = () => { if (window.innerWidth >= 1280) setMobileOpen(false); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onResize); cancelAnimationFrame(frame); };
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setMobileOpen(false); toggleRef.current?.focus(); }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className={`site-header ${scrolled || mobileOpen ? "is-scrolled" : ""}`}>
        <nav aria-label="Main navigation" className="section-container nav-inner">
          <a href="#hero" aria-label="Yose Elvis Saputra, home" className="brand" onClick={() => setMobileOpen(false)}>yose<span>.</span><span className="brand-caption">PORTFOLIO</span></a>
          <div className="hidden xl:flex items-center gap-1">
            {navItems.map(item => <a key={item.href} href={item.href} aria-current={active === item.href ? "location" : undefined} className={`nav-link ${active === item.href ? "is-active" : ""}`}>{item.label}</a>)}
          </div>
          <a href="#contact" className="nav-contact hidden xl:inline-flex">Let's talk <ArrowUpRight size={16} /></a>
          <button ref={toggleRef} className="menu-toggle xl:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? "Close navigation" : "Open navigation"} aria-expanded={mobileOpen} aria-controls="mobile-navigation">{mobileOpen ? <X size={22} /> : <Menu size={22} />}</button>
        </nav>
        <AnimatePresence>
          {mobileOpen && <motion.nav id="mobile-navigation" aria-label="Mobile navigation" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="mobile-navigation xl:hidden">
            {[...navItems, { label: "Contact", href: "#contact" }].map((item, index) => <a key={item.href} href={item.href} onClick={() => setMobileOpen(false)} aria-current={active === item.href ? "location" : undefined}><span className="font-mono text-primary text-xs">0{index + 1}</span>{item.label}<ArrowUpRight size={17} /></a>)}
          </motion.nav>}
        </AnimatePresence>
        <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />
      </header>
    </>
  );
};

export default Navbar;
