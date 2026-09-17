import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

function Contact() {
  return (
    <>
      <section id="contact" className="contact-section">
        <div className="contact-glow"></div>

        <div className="contact-content">
          <span className="section-label">
            05 · CONTACT
          </span>

          <h2>
            Let's build something{" "}
            <span className="gradient-text">meaningful.</span>
          </h2>

          <p>
            Whether it's a software engineering opportunity,
            an interesting project, or an idea worth building,
            I'm always open to meaningful conversations.
          </p>

          <div className="contact-actions">
            <a
              href="mailto:siddharthchaturvedibittu29@gmail.com"
              className="contact-primary"
            >
              <FiMail size={19} />
              Get In Touch
              <FiArrowUpRight size={18} />
            </a>

            <a
              href="https://github.com/siddharthbittu29"
              target="_blank"
              rel="noreferrer"
              className="contact-secondary"
            >
              <FiGithub size={18} />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/siddharth-chaturverdi-2a0311359/"
              target="_blank"
              rel="noreferrer"
              className="contact-secondary"
            >
              <FiLinkedin size={18} />
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/siddharth_chaturvedi_bittu/"
              target="_blank"
              rel="noreferrer"
              className="contact-secondary"
            >
              <FiInstagram size={18} />
              Instagram
            </a>
          </div>
        </div>

        <div className="contact-info">
          <div className="contact-info-item">
            <FiMapPin size={18} />
            <span>India</span>
          </div>

          <div className="contact-status">
            <span className="status-dot"></span>
            Open to opportunities
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="footer-logo">
              &lt;/&gt;
            </span>

            <span>Siddharth.dev</span>
          </div>

          <p>
            Designed & built by Siddharth Chaturvedi
          </p>

          <span className="footer-copy">
            © {new Date().getFullYear()} Siddharth
          </span>
        </div>
      </footer>
    </>
  );
}

export default Contact;