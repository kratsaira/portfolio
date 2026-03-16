import "../styles/Skills.css"

import { 
  FaReact, 
  FaJs, 
  FaCss3Alt, 
  FaGitAlt, 
  FaNodeJs 
} from "react-icons/fa";

function Skills() {

  const skills = [
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Node.js", icon: <FaNodeJs /> }

  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">

        <h2>Skills</h2>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <div className="skill-icon">{skill.icon}</div>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;