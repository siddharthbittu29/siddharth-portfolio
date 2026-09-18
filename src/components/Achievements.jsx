import {
  FiArrowUpRight,
  FiAward,
  FiBookOpen,
  FiFileText,
  FiCode,
  FiCpu,
  FiSmartphone,
  FiMessageCircle,
  FiExternalLink,
} from "react-icons/fi";

const achievements = [
  {
    number: "01",
    icon: <FiFileText />,
    category: "REGISTERED DESIGN",
    title: "Artificial Intelligence Based Cloud Security Detector",
    description:
      "An AI-based project focused on detecting potential security threats in cloud environments using intelligent security analysis.",
    meta: "Government of India · Design Registration",
    proof: "/certificates/patent-cloud-security.jpeg",
    proofLabel: "View Registration Certificate",
  },

  {
    number: "02",
    icon: <FiFileText />,
    category: "REGISTERED DESIGN",
    title: "Hybrid Solar-Wind Concentrator",
    description:
      "A hybrid renewable-energy design integrating wind and solar energy generation into a unified system.",
    meta: "Government of India · Design No. 475176-001",
    proof: "/certificates/patent2.pdf",
    proofLabel: "View Registration Certificate",
  },

  {
    number: "03",
    icon: <FiBookOpen />,
    category: "RESEARCH PUBLICATION",
    title:
      "Smart Digital Platform for Eco & Cultural Tourism in Jharkhand",
    description:
      "Research work focused on developing a smart digital platform to promote eco and cultural tourism in Jharkhand.",
    meta: "Published in IRJET · January 2026",
    proof: "/certificates/research-irjet.jpeg",
    proofLabel: "View Publication Certificate",
  },

  {
    number: "04",
    icon: <FiCpu />,
    category: "MACHINE LEARNING",
    title: "Introduction to Machine Learning",
    description:
      "Completed an NPTEL certification covering fundamental machine learning concepts and techniques.",
    meta: "NPTEL · IIT Madras · 2025",
    proof: "/certificates/nptel-machine-learning.pdf",
    proofLabel: "View Certificate",
  },

  {
    number: "05",
    icon: <FiCode />,
    category: "FULL-STACK DEVELOPMENT",
    title: "Delta Full Stack Web Development",
    description:
      "Completed full-stack web development training covering modern web technologies and practical application development.",
    meta: "Apna College",

    // Add the certificate path here later
    // when you find the certificate.
  },

  {
    number: "06",
    icon: <FiAward />,
    category: "JAVA DEVELOPMENT",
    title: "Java Training Certification",
    description:
      "Completed an extensive Java development training program focused on programming fundamentals and application development.",
    meta: "6 Months · Saksham Digital Technology",
    proof: "/certificates/java-training.jpeg",
    proofLabel: "View Certificate",
  },

  {
    number: "07",
    icon: <FiSmartphone />,
    category: "MOBILE DEVELOPMENT",
    title: "Mobile App Development using Flutter",
    description:
      "Completed technical training focused on mobile application development using Flutter.",
    meta: "Saksham Digital Technology",
    proof: "/certificates/flutter-workshop.jpeg",
    proofLabel: "View Certificate",
  },

  {
    number: "08",
    icon: <FiMessageCircle />,
    category: "COMMUNICATION",
    title: "Ultimate Spoken English Course — Advanced Plus",
    description:
      "Completed advanced spoken English training to strengthen professional communication and presentation skills.",
    meta: "Josh Skills · 82%",
    proof: "/certificates/josh-spoken-english.jpeg",
    proofLabel: "View Certificate",
  },

  {
    number: "09",
    icon: <FiAward />,
    category: "TECHNICAL TRAINING",
    title: "Royal Enfield Technical Training",
    description:
      "Completed technical training associated with Royal Enfield, adding practical exposure beyond software development.",
    meta: "Technical Training",
    proof: "/certificates/royal-enfield-training.jpeg",
    proofLabel: "View Certificate",
  },

  {
    number: "10",
    icon: <FiCpu />,
    category: "TECHNICAL TRAINING",
    title: "Unlocking Big Data — Practical Technologies Skills",
    description:
      "Participated in a five-day training program focused on practical big data technologies and skills.",
    meta: "Oriental Institute of Science & Technology · 2025",
    proof: "/certificates/big-data-workshop.jpeg",
    proofLabel: "View Certificate",
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

        {achievement.proof && (
          <a
            href={achievement.proof}
            target="_blank"
            rel="noopener noreferrer"
            className="achievement-proof-button"
          >
            {achievement.proofLabel}
            <FiExternalLink />
          </a>
        )}
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