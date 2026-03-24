import "../styles/Projects.css"


function ProjectCard({ project }) {
    return (
      <div className="project-card">
  
        <h3>{project.title}</h3>
  
        <p>{project.description}</p>
  
        <div className="tech">
          {project.tech.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <div className="links">
          <a href={project.demo} target="_blank">Live</a>
        </div>
      </div>
    );
  }
  
  export default ProjectCard;