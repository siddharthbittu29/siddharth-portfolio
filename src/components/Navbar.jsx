import { useState } from "react";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMenu,
  FiX,
  FiSun,
  FiMoon,
} from "react-icons/fi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("light");
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <a href="#home" className="logo" onClick={closeMenu}>
          <span className="logo-symbol">&lt;/&gt;</span>
          <span>Siddharth<span className="logo-dot">.</span>dev</span>
        </a>

        {/* Desktop Navigation */}
        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#achievements" onClick={closeMenu}>Achievements</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        {/* Actions */}
        <div className="nav-actions">

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="nav-icon"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="nav-icon"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>

          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>

          <a href="#contact" className="nav-connect">
            Let's Connect
            <span>↗</span>
          </a>

          {/* Mobile menu */}
          <button
            className="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

        </div>
      </div>
    </header>
  );
}

export default Navbar;