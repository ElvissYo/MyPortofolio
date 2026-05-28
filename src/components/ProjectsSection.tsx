import { useState } from "react";
import { Presentation } from "lucide-react";
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

const ProjectsSection = () => {
  const [modal, setModal] = useState<{ title: string; url: string } | null>(null);

  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <RevealOnScroll>
          <h2 className="section-heading glow-text text-center mb-12">Projects</h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <RevealOnScroll key={i} delay={i * 0.1}>
              <div className="glass-card-hover p-6 flex flex-col h-full group">
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
          ))}
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
