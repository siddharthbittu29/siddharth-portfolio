import {
  FiArrowDownRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

function Hero() {
  return (
    <section id="home" className="hero">

      {/* Background decoration */}
      <div className="hero-grid"></div>

      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>

      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-content">

          <div className="availability">
            <span className="status-dot"></span>
            Available for opportunities
          </div>

          <p className="hero-overline">
            FULL-STACK • AI/ML • SOFTWARE ENGINEERING
          </p>

          <h1>
            Hi, I'm
            <span className="hero-name">
              Siddharth
              <span className="gradient-text"> Chaturvedi</span>
            </span>
          </h1>

          <p className="hero-description">
            I build intelligent, full-stack applications that turn
            real-world problems into practical software solutions.
          </p>

          {/* CTA BUTTONS */}
          <div className="hero-buttons">

            <a href="#projects" className="primary-button">
              Explore My Work
              <FiArrowDownRight />
            </a>

            <a
              href="/SiddharthResume.pdf"
              download="SiddharthResume.pdf"
              className="secondary-button"
            >
              Download Resume
              <FiDownload />
            </a>

          </div>

          {/* Social links */}
          <div className="hero-socials">

            <span>Find me on</span>

            <a
              href="https://github.com/siddharthbittu29"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/siddharth-chaturverdi-2a0311359/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>

            <a
              href="mailto:siddharthchaturvedibittu29@gmail.com"
              aria-label="Email"
            >
              <FiMail />
            </a>

          </div>

        </div>

        {/* RIGHT VISUAL */}
        <div className="hero-visual">

          <div className="visual-orbit orbit-one"></div>
          <div className="visual-orbit orbit-two"></div>
          <div className="visual-orbit orbit-three"></div>

          {/* Central card */}
          <div className="developer-core">

            <div className="core-ring">
              <div className="core-symbol">
                &lt;/&gt;
              </div>
            </div>

            <span className="core-label">
              SOFTWARE
            </span>

            <strong>
              ENGINEER
            </strong>

          </div>

          {/* Floating technology nodes */}

          <div className="tech-node node-python">
            <span>Py</span>
            <small>Python</small>
          </div>

          <div className="tech-node node-ai">
            <span>AI</span>
            <small>AI / ML</small>
          </div>

          <div className="tech-node node-js">
            <span>JS</span>
            <small>JavaScript</small>
          </div>

          <div className="tech-node node-node">
            <span>ND</span>
            <small>Node.js</small>
          </div>

          <div className="tech-node node-db">
            <span>DB</span>
            <small>Database</small>
          </div>

          <div className="connection connection-one"></div>
          <div className="connection connection-two"></div>
          <div className="connection connection-three"></div>

        </div>

      </div>

      {/* Scroll indicator */}
      <a href="#about" className="scroll-indicator">
        <span>Scroll to explore</span>
        <FiArrowDownRight />
      </a>

    </section>
  );
}

export default Hero;