import {
  FiArrowUpRight,
  FiAward,
  FiBookOpen,
  FiFileText,
  FiCode,
  FiCpu,
  FiSmartphone,
  FiMessageCircle,
} from "react-icons/fi";

const achievements = [
  {
    number: "01",
    icon: <FiFileText />,
    category: "PATENT APPLICATION",
    title: "Artificial Intelligence Based Cloud Security Detector",
    description:
      "An AI-based project focused on detecting potential security threats in cloud environments using intelligent security analysis.",
    meta: "Government of India Patent Office",
  },
  {
    number: "02",
    icon: <FiBookOpen />,
    category: "RESEARCH PUBLICATION",
    title:
      "Smart Digital Platform for Eco & Cultural Tourism in Jharkhand",
    description:
      "Research work focused on developing a smart digital platform to promote eco and cultural tourism in Jharkhand.",
    meta: "Published in IRJET",
  },
  {
    number: "03",
    icon: <FiCpu />,
    category: "MACHINE LEARNING",
    title: "Introduction to Machine Learning",
    description:
      "Completed an NPTEL certification covering fundamental machine learning concepts and techniques.",
    meta: "NPTEL · IIT Madras",
  },
  {
    number: "04",
    icon: <FiCode />,
    category: "FULL-STACK DEVELOPMENT",
    title: "Delta Full Stack Web Development",
    description:
      "Completed full-stack web development training covering modern web technologies and practical application development.",
    meta: "Apna College",
  },
  {
    number: "05",
    icon: <FiAward />,
    category: "JAVA DEVELOPMENT",
    title: "Java Training Certification",
    description:
      "Completed an extensive Java development training program focused on programming fundamentals and application development.",
    meta: "6 Months · Saksham Digital Technology",
  },
  {
    number: "06",
    icon: <FiSmartphone />,
    category: "MOBILE DEVELOPMENT",
    title: "Mobile App Development using Flutter",
    description:
      "Completed technical training focused on mobile application development using Flutter.",
    meta: "Saksham Digital Technology",
  },
  {
    number: "07",
    icon: <FiMessageCircle />,
    category: "COMMUNICATION",
    title: "Ultimate Spoken English Course — Advanced Plus",
    description:
      "Completed advanced spoken English training to strengthen professional communication and presentation skills.",
    meta: "Josh Skills · 82%",
  },
  {
    number: "08",
    icon: <FiAward />,
    category: "TECHNICAL TRAINING",
    title: "Royal Enfield Technical Training",
    description:
      "Completed technical training associated with Royal Enfield, adding practical exposure beyond software development.",
    meta: "Technical Training",
  },
];

function AchievementCard({ achievement }) {
  return (
    <article className="achievement-card">
      <div className="achievement-top">
        <span className="achievement-number">
          {achievement.number}
        </span>

        <div className="achievement-icon">
          {achievement.icon}
        </div>

        <FiArrowUpRight
          className="achievement-arrow"
          size={21}
        />
      </div>

      <div className="achievement-content">
        <span className="achievement-category">
          {achievement.category}
        </span>

        <h3>{achievement.title}</h3>

        <p>{achievement.description}</p>

        <span className="achievement-meta">
          {achievement.meta}
        </span>
      </div>
    </article>
  );
}

function Achievements() {
  return (
    <section
      id="achievements"
      className="achievements-section"
    >
      <div className="achievements-header">
        <div>
          <span className="section-label">
            04 · ACHIEVEMENTS
          </span>

          <h2>
            Beyond the{" "}
            <span className="gradient-text">code.</span>
          </h2>
        </div>

        <p>
          Research, certifications and technical milestones
          that have shaped my journey as a software engineer
          and AI/ML developer.
        </p>
      </div>

      <div className="achievements-grid">
        {achievements.map((achievement) => (
          <AchievementCard
            key={achievement.number}
            achievement={achievement}
          />
        ))}
      </div>
    </section>
  );
}

export default Achievements;