import { motion } from "framer-motion";
import {
  FaJava,
  FaPython,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";
import {
  SiHtml5,
  SiCss,
  SiExpress,
  SiFastapi,
  SiMongodb,
  SiPostgresql,
  SiSupabase,
  SiPandas,
  SiGooglecolab,
} from "react-icons/si";

const skillGroups = [
  {
    number: "01",
    title: "Languages",
    description: "Core programming and problem-solving technologies.",
    skills: [
      { name: "Java", icon: <FaJava /> },
      { name: "Python", icon: <FaPython /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "SQL", icon: <FaDatabase /> },
    ],
  },
  {
    number: "02",
    title: "Frontend",
    description: "Building responsive and interactive user interfaces.",
    skills: [
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss /> },
      { name: "React", icon: <FaReact /> },
      { name: "EJS", icon: <SiHtml5 /> },
    ],
  },
  {
    number: "03",
    title: "Backend",
    description: "Developing APIs, server-side applications and services.",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "REST APIs", icon: <FaCodeIcon /> },
    ],
  },
  {
    number: "04",
    title: "Databases",
    description: "Working with structured and NoSQL data systems.",
    skills: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "Supabase", icon: <SiSupabase /> },
    ],
  },
  {
    number: "05",
    title: "AI / ML",
    description: "Exploring intelligent systems and machine learning.",
    skills: [
      { name: "Machine Learning", icon: <FaBrainIcon /> },
      { name: "NLP", icon: <FaBrainIcon /> },
      { name: "Computer Vision", icon: <FaBrainIcon /> },
      { name: "Pandas", icon: <SiPandas /> },
    ],
  },
  {
    number: "06",
    title: "Tools",
    description: "Tools used for development, collaboration and experimentation.",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Google Colab", icon: <SiGooglecolab /> },
    ],
  },
];

function FaCodeIcon() {
  return <span className="skill-text-icon">&lt;/&gt;</span>;
}

function FaBrainIcon() {
  return <span className="skill-text-icon">AI</span>;
}

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">

        <motion.div
          className="skills-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">02 · SKILLS</span>

          <h2>
            The tools I use to
            <br />
            <span>build things.</span>
          </h2>

          <p>
            A practical toolkit spanning software engineering, full-stack
            development, databases and AI/ML.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <motion.div
              className="skill-group"
              key={group.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
              }}
            >
              <div className="skill-group-top">
                <span className="skill-number">{group.number}</span>
                <span className="skill-arrow">↗</span>
              </div>

              <h3>{group.title}</h3>

              <p>{group.description}</p>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <div className="skill-item" key={skill.name}>
                    <span className="skill-icon">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;