import { motion as Motion } from "framer-motion";
import "../styles/Skills.css";

const skills = [
  "React",
  "JavaScript",
  "CSS",
  "Bootstrap",
  "Node.js",
  "Java",
  "Spring Boot",
  "ASP.NET Core",
  "MySQL",
  "OracleDB",
  "MongoDB",
  "Git",
  "GitHub",
  "Figma",
  "Photoshop",
];

function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <div className="section-note">
          <span className="section-kicker">Skills</span>
          <p>
            Technologies I use on a daily basis to build my projects and bring my ideas to life.
          </p>
        </div>

        <div className="skills-field">
          {skills.map((skill, index) => (
            <Motion.span
              key={skill}
              initial={{ opacity: 0, y: 42, rotate: index % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.7, delay: index * 0.035, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, color: "rgba(5, 5, 5, 1)" }}
            >
              {skill}
            </Motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
