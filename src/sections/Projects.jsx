import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import "../styles/Projects.css";

function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="section-note">
          <span className="section-kicker">Projects</span>
          <p>
            Selected projects that showcase my skills and experience in web development.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
