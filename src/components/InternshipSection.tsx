import ProjectCollection from "./ProjectCollection";
import { internshipProjects } from "@/data/portfolio";

const InternshipSection = () => (
  <ProjectCollection
    id="internships"
    number="02"
    eyebrow="PROJECT-BASED LEARNING"
    title="Project-Based Internship Projects"
    description="Five project-based internships through Rakamin Academy, spanning system development, data pipelines, governance, and data science."
    projects={internshipProjects}
  />
);

export default InternshipSection;
