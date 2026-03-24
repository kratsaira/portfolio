import "../styles/Hero.css"

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <h1>Dan Ramírez</h1>

        <h2>Software Developer, Graphic Designer</h2>

        <p>
          I build modern, performant web experiences with React and
          modern web technologies. I also design sometimes.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            Projects
          </a>

          <a href="/cv.pdf" target="_blank" className="btn-primary">
            Resume
          </a>


          <a href="#contact" className="btn-secondary">
            Contact Me
          </a>

          <div className="scroll-indicator">
            <span>Scroll</span>
            <div className="arrow">↓</div>
        </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;