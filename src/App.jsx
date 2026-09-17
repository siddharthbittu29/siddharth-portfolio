import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import WhatIBuild from "./components/WhatIBuild";

function App() {
  return (
    <div className="portfolio">

      <Navbar />

      <main>

        {/* HERO */}
        <Hero />

        {/* QUICK STATS */}
        <Stats />

        {/* WHAT I BUILD */}
        <WhatIBuild />

        {/* Temporary sections */}
        <section id="skills" className="placeholder-section">
          <span>02</span>
          <h2>Skills</h2>
        </section>

        <section id="projects" className="placeholder-section">
          <span>03</span>
          <h2>Projects</h2>
        </section>

        <section id="achievements" className="placeholder-section">
          <span>04</span>
          <h2>Achievements</h2>
        </section>

        <section id="contact" className="placeholder-section">
          <span>05</span>
          <h2>Contact</h2>
        </section>

      </main>

    </div>
  );
}

export default App;