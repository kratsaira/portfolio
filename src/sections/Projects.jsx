import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import "../styles/Projects.css"

function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="container">

        <h2>Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;