import "../styles/Hero.css"

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <h1>Dan Ramírez</h1>

        <h2>Software Developer, Graphic Designer</h2>

        <p>
          I build modern, performant web experiences with React and
          modern web technologies.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>

          <a href="assets/danramirezcv.pdf" target="_blank" className="btn-primary">
            Resume
          </a>

          <a href="#contact" className="btn-secondary">
            Contact Me
          </a>


        </div>
      </div>
    </section>
  );
}

export default Hero;