import ProjectCollection from "./ProjectCollection";
import { selectedProjects } from "@/data/portfolio";

const ProjectsSection = () => (
  <ProjectCollection
    id="projects"
    number="03"
    eyebrow="SELECTED WORK"
    title="Selected Projects"
    description="A growing collection of independent projects, internship deliverables, community initiatives, and competition entries."
    projects={selectedProjects}
  />
);

export default ProjectsSection;
