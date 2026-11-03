export type ProjectCategory = "Data Science" | "System Development" | "Analytics";

export interface PortfolioProject {
  id: string;
  title: string;
  role: string;
  organization: string;
  period: string;
  category: ProjectCategory;
  highlights: string[];
  tags: string[];
  githubUrl?: string;
  deckUrl?: string;
}

export const internshipProjects: PortfolioProject[] = [
  {
    id: "mandiri-news",
    title: "MandiriNews Mobile News Application",
    role: "Mobile Developer",
    organization: "Bank Mandiri x Rakamin Academy",
    period: "Feb 2026 - Mar 2026",
    category: "System Development",
    highlights: [
      "Built a Flutter news application with Riverpod and Supabase, integrating NewsAPI, GDELT, and RSS into searchable, categorized feeds.",
      "Implemented authentication, bookmarks, reading history, AI summaries, sentiment labels, semantic search, and article-grounded Q&A."
    ],
    tags: ["Flutter", "Riverpod", "Supabase", "Python", "NLP"],
    githubUrl: "https://github.com/ElvissYo/MandiriAINews"
  },
  {
    id: "banking-warehouse",
    title: "Data Warehouse & ETL Pipeline",
    role: "Data Engineer",
    organization: "ID/X Partners x Rakamin Academy",
    period: "Jan 2026 - Feb 2026",
    category: "System Development",
    highlights: [
      "Designed a banking star-schema warehouse and automated ETL pipelines integrating SQL Server, CSV, and Excel into reporting-ready fact and dimension tables.",
      "Achieved 100% successful FactTransaction loads in project testing; built stored procedures for transaction summaries and account balance tracking."
    ],
    tags: ["SQL Server", "Pentaho", "T-SQL", "Dimensional Modeling"],
    githubUrl: "https://github.com/ElvissYo/Data-Warehouse-ETL-Pipeline",
    deckUrl: "/dataeng_ppt.pdf"
  },
  {
    id: "data-governance",
    title: "Data Governance Framework",
    role: "Data Governance",
    organization: "Rakamin Academy",
    period: "Nov 2025",
    category: "Analytics",
    highlights: [
      "Analyzed ownership and data-quality gaps, redesigned the RACI framework, and clarified responsibilities across operations and analytics.",
      "Proposed source-level checks, SOP updates, and four-hour quality-audit feedback loops targeting 98% record accuracy. This was a proposed target, not an achieved result."
    ],
    tags: ["Data Governance", "RACI", "SOP Design", "Data Quality"],
    githubUrl: "https://github.com/ElvissYo/Data-Governance-Framework"
  },
  {
    id: "home-credit",
    title: "Credit-Risk Scoring Model",
    role: "Data Scientist",
    organization: "Home Credit Indonesia x Rakamin Academy",
    period: "Oct 2025",
    category: "Data Science",
    highlights: [
      "Integrated eight lending datasets covering 307,511 applications, engineering 202 numeric features and 50+ behavioral risk indicators.",
      "Benchmarked four models; CatBoost achieved AUC 0.772. The reproducible pipeline generated default-probability scores for 48,744 applicants."
    ],
    tags: ["Python", "CatBoost", "LightGBM", "pandas", "scikit-learn"],
    githubUrl: "https://github.com/ElvissYo/Home-Credit-Score-Credit-Score-Prediction",
    deckUrl: "/home_ppt.pdf"
  },
  {
    id: "idx-credit-risk",
    title: "Credit Risk Prediction Model",
    role: "Data Scientist",
    organization: "ID/X Partners x Rakamin Academy",
    period: "Sep 2025",
    category: "Data Science",
    highlights: [
      "Prepared and explored approximately 466,285 lending records across 75 fields, identifying patterns and severe class imbalance in loan-default risk.",
      "Applied SMOTE and compared Random Forest against Logistic Regression to evaluate minority-class risk detection."
    ],
    tags: ["Python", "Random Forest", "Logistic Regression", "SMOTE"],
    githubUrl: "https://github.com/ElvissYo/Credit-Risk-Model",
    deckUrl: "/Data_Science_IDX.pdf"
  }
];

export const selectedProjects: PortfolioProject[] = [
  {
    id: "student-risk-prediction",
    title: "Student Risk Prediction",
    role: "Data Science Competition",
    organization: "DSCO 2026",
    period: "2026",
    category: "Data Science",
    highlights: [
      "Developed a student-risk prediction pipeline using learning activity and assessment data, with 26,086 training records and 6,502 test records.",
      "The selected M3-02 model used 93 features and score-group thresholds, achieving out-of-fold F1 of 0.774403 and ROC-AUC of 0.845422."
    ],
    tags: ["Python", "pandas", "scikit-learn", "Feature Engineering", "Classification"],
    githubUrl: "https://github.com/ElvissYo/DSCO-2026-Student-Risk-Prediction"
  },
  {
    id: "master-order",
    title: "MASTER_ORDER - Internal Order System",
    role: "System Development",
    organization: "Insta360 Indonesia (PT Denka Pratama Indonesia)",
    period: "Aug 2026 - Present",
    category: "System Development",
    highlights: [
      "Built a centralized Internal Order System for product catalogs, stock verification, orders, and invoices across 479 active SKUs, replacing fragmented email and Excel handoffs.",
      "Developed a Brand Manager Console consolidating 22 recorded sales orders and invoice follow-up status for clearer operational visibility."
    ],
    tags: ["Order Management", "Inventory", "Invoicing", "Reporting"],
    githubUrl: "https://github.com/ElvissYo/MASTER_ORDER"
  },
  { ...internshipProjects[4], title: "Credit Risk Prediction" },
  { ...internshipProjects[3], title: "Credit Score Prediction" },
  { ...internshipProjects[1], title: "ETL & Data Warehousing" },
  {
    id: "revenue-intelligence",
    title: "DVD Rental Business Analytics",
    role: "DVD Rental Operations",
    organization: "Revenue Intelligence Dashboard",
    period: "2026",
    category: "Analytics",
    highlights: [
      "Built Power BI and Streamlit reports covering 14,596 transactions and $61,312 in revenue, surfacing sales, customer, and inventory patterns.",
      "Integrated a local Ollama chatbot for natural-language questions and user-requested visualizations."
    ],
    tags: ["Power BI", "Streamlit", "PostgreSQL", "SQL", "Ollama"],
    githubUrl: "https://github.com/ElvissYo/dvd-rental-dashboard",
    deckUrl: "/Streamlit_Dashboard.pdf"
  },
  {
    id: "predictive-maintenance",
    title: "Adaptive AI Predictive Maintenance",
    role: "WINTEQ AI Bootcamp",
    organization: "PT Astra Otoparts",
    period: "2026",
    category: "Data Science",
    highlights: [
      "Extracted 301,680 engineered feature values from 480 MATLAB files and 3,352 sensor signal windows for industrial bearing-condition analysis.",
      "Designed event-driven model and feature updates for new sensor readings in a predictive maintenance prototype."
    ],
    tags: ["Python", "PostgreSQL", "ASP.NET Core", "Signal Processing"],
    githubUrl: "https://github.com/ElvissYo/AstraOtoparts"
  },
  {
    id: "weather-mlops",
    title: "Weather Data & MLOps Pipeline",
    role: "Independent Project",
    organization: "Data Engineering & MLOps",
    period: "2026",
    category: "System Development",
    highlights: [
      "Built a Dagster-orchestrated pipeline using 6.5 years of Jakarta weather data, with partitioned ingestion and model-quality validation.",
      "Automated daily ingestion and monthly retraining, supported by 36 tests for data quality and pipeline correctness."
    ],
    tags: ["Python", "Dagster", "PostgreSQL", "Docker Compose", "scikit-learn"],
    githubUrl: "https://github.com/ElvissYo/dagster-workshop-multi"
  },
  {
    id: "stock-forecasting",
    title: "Indonesian Stock Forecasting Dashboard",
    role: "Independent Project",
    organization: "Live Deployment",
    period: "2026",
    category: "Data Science",
    highlights: [
      "Deployed a dashboard for 100 IDX stocks with price forecasts, news sentiment, and four Top-10 rankings.",
      "Automated daily data refresh and model retraining with GitHub Actions."
    ],
    tags: ["Python", "Streamlit", "Hugging Face Spaces", "GitHub Actions", "NLP"],
    githubUrl: "https://github.com/ElvissYo/Stock_Web_Prediciton"
  },
  {
    id: "claim-forecasting",
    title: "Claim Trend Forecasting",
    role: "Competition",
    organization: "MCF ITB x AXA Financial Indonesia",
    period: "2026",
    category: "Data Science",
    highlights: [
      "Forecasted 231 to 232 monthly claims and Rp10.99 billion in claim value in a reserve-planning case study.",
      "Benchmarked five approaches and selected Ridge Regression with EMA after time-series evaluation."
    ],
    tags: ["Python", "Time Series", "Ridge Regression", "EMA"],
    githubUrl: "https://github.com/ElvissYo/AXA-Claims-MCF-ITB",
    deckUrl: "/MCF.pdf"
  },
  {
    id: "phishing-detection",
    title: "Phishing URL Detection",
    role: "Competition",
    organization: "DSCO, BINUS University",
    period: "2025",
    category: "Data Science",
    highlights: [
      "Reached the national Top 10 with 96.89% accuracy and ensemble AUC 0.9933 on the DSCO public leaderboard.",
      "Combined TF-IDF and URL-based features with LightGBM and CatBoost models."
    ],
    tags: ["Python", "LightGBM", "CatBoost", "TF-IDF", "scikit-learn"],
    deckUrl: "/DSCO.pdf"
  },
  {
    id: "repeat-orders",
    title: "Repeat Order Prediction",
    role: "Data Scientist",
    organization: "End-to-End ML Pipeline",
    period: "Portfolio Project",
    category: "Data Science",
    highlights: ["Built a predictive pipeline to help a company prioritize repeat-order follow-up based on available data patterns and characteristics.", "Combined XGBoost with SHAP interpretability, feature engineering, and PCA."],
    tags: ["Feature Engineering", "XGBoost", "SHAP", "PCA"],
    deckUrl: "/SPARC.pdf"
  },
  {
    id: "credit-risk-management",
    title: "Credit Risk Management",
    role: "Software Engineer and Accountant",
    organization: "ERP-based Accounting Information System",
    period: "Portfolio Project",
    category: "System Development",
    highlights: ["ERP-based Accounting Information System for credit risk management."],
    tags: ["Feature Engineering", "XGBoost", "SHAP", "PCA"],
    deckUrl: "/SPARC.pdf"
  },
  {
    id: "photocopy-erp",
    title: "Photocopy ERP System",
    role: "Software Engineer",
    organization: "MSME Photocopy",
    period: "Portfolio Project",
    category: "System Development",
    highlights: ["An ERP system for an MSME photocopy business, connecting accounting and software engineering."],
    tags: ["Accountant and Software Engineer"],
    deckUrl: "/SPARC.pdf"
  }
];

export const workExperiences = [
  {
    role: "Data Analyst & Brand Management Intern",
    company: "Insta360 Indonesia (PT Denka Pratama Indonesia)",
    period: "Aug 2026 - Present",
    highlights: [
      "Built an Internal Order System (IOS) replacing fragmented email and Excel handoffs with a centralized workflow for product catalog, stock verification, orders, and invoices across 479 active SKUs.",
      "Developed a Brand Manager Console consolidating 22 recorded sales orders totaling Rp89.11 billion and one pending invoice worth Rp5.37 billion, improving visibility into records and follow-up status.",
      "Supported marketing reporting across social media, KOLs, ads, and events for detailed channel-level performance review."
    ],
    githubUrl: "https://github.com/ElvissYo/MASTER_ORDER"
  },
  {
    role: "Mentor of Data Science",
    company: "President University Developer Club (PUDC)",
    period: "May 2026 - Aug 2026",
    highlights: [
      "Mentored approximately 15 junior students through data preparation, exploratory analysis, feature engineering, machine learning, and evaluation.",
      "Led hands-on Python exercises and reviewed assignments, helping mentees practice end-to-end analysis."
    ]
  }
];
