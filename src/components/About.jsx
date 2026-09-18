import { motion } from "framer-motion";
import { FaGraduationCap, FaCode, FaBrain } from "react-icons/fa";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* SECTION HEADING */}
        <motion.div
          className="about-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">ABOUT ME</span>

          <h2>
            Building with <span>purpose</span>,
            <br />
            learning with <span>curiosity</span>.
          </h2>
        </motion.div>

        {/* ABOUT CONTENT */}
        <div className="about-content">

          {/* PROFESSIONAL PHOTO */}
          <motion.div
            className="about-profile"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="about-profile-glow"></div>

            <div className="about-profile-frame">
              <img
                src="/profile/siddharth-profile.png"
                alt="Siddharth Chaturvedi"
              />
            </div>

            <div className="about-profile-caption">
              <span className="profile-dot"></span>
              CSE-AIML · Software Engineering
            </div>
          </motion.div>

          {/* ABOUT TEXT */}
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p>
              I'm Siddharth Chaturvedi, a Computer Science & Engineering
              student specializing in Artificial Intelligence and Machine
              Learning.
            </p>

            <p>
              I enjoy building practical software solutions that combine
              full-stack development with AI/ML. My interests span software
              engineering, problem solving, intelligent systems, and
              data-driven applications.
            </p>

            <p>
              I believe in learning by building — turning ideas into working
              applications and continuously improving my technical skills
              through projects and hands-on development.
            </p>
          </motion.div>

          {/* ABOUT CARDS */}
          <motion.div
            className="about-cards"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <div className="about-card">
              <div className="about-icon">
                <FaGraduationCap />
              </div>

              <div>
                <h3>Education</h3>
                <p>B.Tech · CSE-AIML</p>
              </div>
            </div>

            <div className="about-card">
              <div className="about-icon">
                <FaCode />
              </div>

              <div>
                <h3>Development</h3>
                <p>Full-Stack · Software Engineering</p>
              </div>
            </div>

            <div className="about-card">
              <div className="about-icon">
                <FaBrain />
              </div>

              <div>
                <h3>Interests</h3>
                <p>AI/ML · DSA · Intelligent Systems</p>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;