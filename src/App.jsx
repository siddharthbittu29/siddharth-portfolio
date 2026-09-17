import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import WhatIBuild from "./components/WhatIBuild";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="portfolio">

      <Navbar />

      <main>

        {/* HERO */}
        <Hero />

        {/* QUICK STATS */}
        <Stats />

        {/* ABOUT */}
        <About />

        {/* WHAT I BUILD */}
        <WhatIBuild />

        {/* Temporary sections */}
        <Skills />

        {/* PROJECTS */}
        <Projects />

        <Achievements />

        <Contact />

      </main>

    </div>
  );
}

export default App;