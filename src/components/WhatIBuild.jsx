import { motion } from "framer-motion";
import {
  FiCpu,
  FiLayers,
  FiDatabase,
  FiArrowUpRight,
} from "react-icons/fi";

const categories = [
  {
    number: "01",
    icon: <FiCpu />,
    title: "Intelligent Systems",
    description:
      "AI-powered applications that combine machine learning, NLP, computer vision and intelligent APIs to solve practical problems.",
    technologies: [
      "AI / ML",
      "NLP",
      "Computer Vision",
      "Gemini API",
      "Hugging Face",
    ],
  },
  {
    number: "02",
    icon: <FiLayers />,
    title: "Full-Stack Applications",
    description:
      "End-to-end web applications connecting responsive interfaces, APIs, authentication, business logic and databases.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "FastAPI",
      "REST APIs",
    ],
  },
  {
    number: "03",
    icon: <FiDatabase />,
    title: "Data-Driven Products",
    description:
      "Applications that transform structured and unstructured data into useful information through databases and document processing.",
    technologies: [
      "PostgreSQL",
      "MongoDB",
      "Supabase",
      "Pandas",
      "PDF Processing",
    ],
  },
];

function WhatIBuild() {
  return (
    <section className="what-build-section" id="what-i-build">

      <div className="section-container">

        {/* Section heading */}
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">
            <span>01</span>
            WHAT I BUILD
          </div>

          <h2>
            Turning ideas into
            <span> intelligent software.</span>
          </h2>

          <p>
            I work across AI/ML and full-stack development,
            building applications from the initial idea to
            the backend, database and user interface.
          </p>
        </motion.div>


        {/* Cards */}
        <div className="build-grid">

          {categories.map((category, index) => (
            <motion.article
              className="build-card"
              key={category.number}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.55,
                delay: index * 0.12,
              }}
            >

              <div className="build-card-top">

                <span className="build-number">
                  {category.number}
                </span>

                <div className="build-icon">
                  {category.icon}
                </div>

                <FiArrowUpRight className="build-arrow" />

              </div>

              <h3>
                {category.title}
              </h3>

              <p>
                {category.description}
              </p>

              <div className="technology-list">
                {category.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

            </motion.article>
          ))}

        </div>

      </div>

    </section>
  );
}

export default WhatIBuild;