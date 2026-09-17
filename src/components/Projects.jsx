import {
  FiArrowUpRight,
  FiGithub,
  FiExternalLink,
  FiLayers,
} from "react-icons/fi";
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPython,
  SiStreamlit,
  SiPostgresql,
  SiJavascript,
} from "react-icons/si";

const projects = [
  {
    number: "01",
    category: "FULL-STACK • AI/ML",
    title: "Smart Tourism Platform",
    description:
      "A smart digital platform designed to promote eco and cultural tourism in Jharkhand through interactive discovery, intelligent recommendations and a modern tourism experience.",
    tags: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "EJS", icon: FiLayers },
      { name: "MongoDB", icon: SiMongodb },
    ],
    featured: true,
    github: "https://github.com/siddharthbittu29/Jharkhand-smart-tourism-portal",
  },
  {
    number: "02",
    category: "AI • ATTENDANCE",
    title: "SNAPCLASS",
    description:
      "An AI-powered attendance management system combining face recognition, voice recognition and a Streamlit interface with cloud database integration.",
    tags: [
      { name: "Python", icon: SiPython },
      { name: "Streamlit", icon: SiStreamlit },
      { name: "Supabase", icon: FiLayers },
      { name: "AI/ML", icon: FiLayers },
    ],
    featured: false,
    github: "https://github.com/siddharthbittu29/-snapclass-main",
  },
  {
    number: "03",
    category: "AI • NLP",
    title: "ATS Resume Screening System",
    description:
      "An AI/ML-based resume screening system designed to analyze resumes and assist with candidate evaluation using automated processing.",
    tags: [
      { name: "Python", icon: SiPython },
      { name: "AI/ML", icon: FiLayers },
      { name: "NLP", icon: FiLayers },
    ],
    featured: false,
    github: "https://github.com/siddharthbittu29/ATS-Resume-Screener",
  },
  {
    number: "04",
    category: "AI • COMPUTER VISION",
    title: "Smart Face & Voice Recognition",
    description:
      "An intelligent recognition system combining computer vision and voice-based interaction to create a multimodal AI application.",
    tags: [
      { name: "Python", icon: SiPython },
      { name: "Computer Vision", icon: FiLayers },
      { name: "AI/ML", icon: FiLayers },
    ],
    featured: false,
  },
  {
    number: "05",
    category: "AI • CLOUD SECURITY",
    title: "AI-Based Cloud Security Detector",
    description:
      "An AI-based security project focused on detecting potential cloud security threats and applying intelligent analysis to improve security monitoring.",
    tags: [
      { name: "Python", icon: SiPython },
      { name: "AI/ML", icon: FiLayers },
      { name: "Cloud Security", icon: FiLayers },
    ],
    featured: false,
  },
  {
    number: "06",
    category: "FULL-STACK • FINTECH",
    title: "Stock Trading Platform",
    description:
      "A full-stack web application concept for exploring stock trading workflows with an interactive frontend, backend services and database integration.",
    tags: [
      { name: "React", icon: SiReact },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "MongoDB", icon: SiMongodb },
    ],
    featured: false,
  },
];

function ProjectCard({ project }) {
  return (
    <article className={`project-card ${project.featured ? "featured" : ""}`}>
      <div className="project-card-top">
        <span className="project-number">{project.number}</span>

        <FiArrowUpRight className="project-arrow" size={22} />
      </div>

      <div className="project-content">
        <span className="project-category">{project.category}</span>

        <h3>{project.title}</h3>

        <p>{project.description}</p>
      </div>

      <div className="project-tags">
        {project.tags.map((tag) => {
          const Icon = tag.icon;

          return (
            <span className="project-tag" key={tag.name}>
              <Icon size={15} />
              {tag.name}
            </span>
          );
        })}
      </div>

      <div className="project-links">
        {project.github && (
          <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-link"
            >
                <FiGithub size={16} />
                GitHub
            </a>
        )}

        <a href="#" className="project-link">
          <FiExternalLink size={17} />
          View Project
        </a>
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <div>
          <span className="section-label">03 · PROJECTS</span>

          <h2>
            Things I’ve{" "}
            <span className="gradient-text">built.</span>
          </h2>
        </div>

        <p>
          A selection of projects where I combine software engineering,
          full-stack development and AI/ML to build practical solutions.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.number} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;