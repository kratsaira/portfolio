import "../styles/Skills.css"

function Skills() {
    const skills = [
      "JavaScript",
      "React",
      "HTML",
      "CSS",
      "Git",
      "Node.js"
    ];
  
    return (
      <section id="skills" className="skills section">
        <div className="container">
  
          <h2>Skills</h2>
  
          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill}>
                {skill}
              </div>
            ))}
          </div>
  
        </div>
      </section>
    );
  }
  
  export default Skills;