import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Presentation } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";
import DeckModal from "./DeckModal";

const projects = [
  {
    title: "Aquanomic",
    role: "Project Manager",
    desc: "Led a team to develop an aquaculture analytics platform, managing end-to-end project delivery from requirements to deployment.",
    tags: ["Project Management", "Analytics", "Team Lead"],
    deckUrl: "/Aquanomic_photo.jpeg",
  },
  {
    title: "Credit Risk Prediction",
    role: "Data Scientist",
    desc: "Built a Credit Risk prediction model using Random Forest and SMOTE for imbalanced classification on loan default data.",
    tags: ["Random Forest", "SMOTE", "Scikit-Learn"],
    deckUrl: "/Data_Science_IDX.pdf",
  },
  {
    title: "Credit Score Prediction", // Sebelumnya DSCO, sekarang diganti ke IDX
    role: "Data Scientist",
    desc: "Developed CatBoost/LGBM credit scoring model achieving AUC 0.772 across 307k+ loan applications.",
    tags: ["CatBoost", "LightGBM", "Python"],
    deckUrl: "/home_ppt.pdf",
  },
  {
    title: "ETL & Data Warehousing",
    role: "Data Engineer",
    desc: "Implemented Star Schema Data Warehouse with Pentaho ETL pipelines and SQL Stored Procedures for enterprise data integration.",
    tags: ["Pentaho", "SQL", "Star Schema"],
    deckUrl: "/dataeng_ppt.pdf",
  },
  {
    title: "Phishing Detection", // Sebelumnya IDX, sekarang diganti ke DSCO
    role: "Natural Language Processing",
    desc: "Dual-Engine Classification integrating Char-Level and Word-Level TF-IDF for robust phishing URL detection.",
    tags: ["TF-IDF", "NLP", "Classification"],
    deckUrl: "/DSCO.pdf",
  },
  {
    title: "DVD Rental Business Analytics", // Sebelumnya IDX, sekarang diganti ke DSCO
    role: "Business Analytics",
    desc: "Data-Driven Decision Support System for Retail Operations",
    tags: ["Data Analytics", "Dashboard", "Streamlit","Logistic Regression"],  
    deckUrl: "/Streamlit_Dashboard.pdf",
  },
  {
    title: "Claim Trend Forecasting for AXA Financial Indonesia: A Seasonality-Aware Ridge Regression Approach", // Sebelumnya IDX, sekarang diganti ke DSCO
    role: "Data Scientist",
    desc: "The predictive analysis for AXA Financial Indonesia concludes that while the broader health insurance industry faces a 25.5% claim surge, this specific portfolio is projected to stabilize at approximately 231 to 232 claims per month through December 2025.",
    tags: ["Feature Engineering","Ridge Regression"],  
    deckUrl: "/MCF.pdf",
  },
  {
    title: "Predicting Repeat Orders: Building an End-to-End ML Pipeline with XGBoost & SHAP Interpretability", // Sebelumnya IDX, sekarang diganti ke DSCO
    role: "Data Scientist",
    desc: "The predictive that help a company prioritize repeat order follow-up based on available data patterns and characteristics.",
    tags: ["Feature Engineering","XGBoost","SHAP","PCA"],  
    deckUrl: "/SPARC.pdf",
  },
];

const PROJECTS_PER_PAGE = 6;
const projectPages = Array.from({ length: Math.ceil(projects.length / PROJECTS_PER_PAGE) }, (_, index) =>
  projects.slice(index * PROJECTS_PER_PAGE, index * PROJECTS_PER_PAGE + PROJECTS_PER_PAGE),
);

const ProjectsSection = () => {
  const [modal, setModal] = useState<{ title: string; url: string } | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const activeProjects = projectPages[currentPage] ?? [];
  const hasMultiplePages = projectPages.length > 1;

  const goToPreviousPage = () => {
    setCurrentPage((page) => (page === 0 ? projectPages.length - 1 : page - 1));
  };

  const goToNextPage = () => {
    setCurrentPage((page) => (page + 1) % projectPages.length);
  };

  useEffect(() => {
    if (!hasMultiplePages) {
      return;
    }

    const timer = window.setInterval(() => {
      setCurrentPage((page) => (page + 1) % projectPages.length);
    }, 10000);

    return () => window.clearInterval(timer);
  }, [hasMultiplePages]);

  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <RevealOnScroll>
          <h2 className="section-heading glow-text text-center mb-12">Projects</h2>
        </RevealOnScroll>

        <div className="relative">
          {hasMultiplePages && (
            <>
              <button
                type="button"
                onClick={goToPreviousPage}
                className="btn-outline-glow absolute -left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full p-0 md:-left-14"
                aria-label="Previous projects"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                type="button"
                onClick={goToNextPage}
                className="btn-outline-glow absolute -right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full p-0 md:-right-14"
                aria-label="Next projects"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          <div
            key={currentPage}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2"
            aria-live="polite"
          >
            {Array.from({ length: PROJECTS_PER_PAGE }).map((_, index) => {
              const project = activeProjects[index];

              if (!project) {
                return <div key={`empty-${index}`} className="hidden lg:block" aria-hidden="true" />;
              }

              return (
                <RevealOnScroll key={project.title} delay={index * 0.08}>
                  <div className="glass-card-hover p-6 flex flex-col h-full min-h-[290px] group">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono text-primary/70">{project.role}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                    <p className="text-muted-foreground text-sm flex-1 mb-4">{project.desc}</p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-mono px-2 py-1 rounded bg-primary/5 text-primary/80 border border-primary/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => setModal({ title: project.title, url: project.deckUrl })}
                      className="btn-outline-glow text-sm py-2 flex items-center justify-center gap-2"
                    >
                      <Presentation size={16} /> View Deck
                    </button>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>

          {hasMultiplePages && (
            <div className="mt-8 flex items-center justify-center gap-3">
              {projectPages.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentPage(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === currentPage ? "w-8 bg-primary shadow-[0_0_12px_hsl(var(--glow)/0.6)]" : "w-2.5 bg-primary/25"
                  }`}
                  aria-label={`Go to project page ${index + 1}`}
                  aria-current={index === currentPage ? "page" : undefined}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <DeckModal
        isOpen={!!modal}
        onClose={() => setModal(null)}
        title={modal?.title || ""}
        embedUrl={modal?.url || ""}
      />
    </section>
  );
};

export default ProjectsSection;
