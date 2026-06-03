import { motion as Motion } from "framer-motion";
import "../styles/Projects.css";

function ProjectCard({ project, index }) {
  return (
    <Motion.article
      className="project-card"
      initial={{ opacity: 0, y: 80, filter: "blur(16px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: false, amount: 0.22 }}
      transition={{ duration: 0.9, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="project-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>

      <div className="project-footer">
        <div className="project-stack">
          <div className="tech">
            {project.tech.map((tech) => (
            <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>

        {project.demo ? (
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            Open
          </a>
        ) : (
          <span className="disabled-link">Case notes</span>
        )}
      </div>
    </Motion.article>
  );
}

export default ProjectCard;
