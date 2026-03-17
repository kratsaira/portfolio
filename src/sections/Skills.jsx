import "../styles/Skills.css"

import { 
  FaReact, 
  FaJs, 
  FaCss3Alt, 
  FaGitAlt, 
  FaNodeJs,
  FaJava,
  FaHtml5,
  FaBootstrap,
  FaDatabase,
  FaGithub
} from "react-icons/fa";

import { SiSpringboot, SiDotnet, SiMysql, SiMongodb } from "react-icons/si";

function Skills() {

  const skillGroups = [
    {
      title: "frontend",
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "Bootstrap", icon: <FaBootstrap /> },
      ]
    },
    {
      title: "backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Java", icon: <FaJava /> },
        { name: "Spring Boot", icon: <SiSpringboot /> },
        { name: "C# / ASP.NET Core", icon: <SiDotnet /> },
      ]
    },
    {
      title: "databases",
      skills: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "OracleDB", icon: <FaDatabase /> },
        { name: "MongoDB", icon: <SiMongodb /> },
      ]
    },
    {
      title: "tools",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
      ]
    }
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">

        <h2>Skills</h2>

        <div className="skills-groups">
          {skillGroups.map((group) => (
    <div key={group.title} className="skills-group">
      
      <h3>{group.title}</h3>

       <div className="skills-grid">
        {group.skills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <div className="skill-icon">{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
          </div>

            </div>
          ))}
      </div>

      </div>
    </section>
  );
}

export default Skills;