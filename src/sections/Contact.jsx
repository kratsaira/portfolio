import "../styles/Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container contact-grid">
        <span className="section-kicker">Contact</span>

        <div>
          <p className="contact-statement">
            Open to frontend roles, creative web projects, and collaborations
            where design taste matters as much as code quality.
          </p>

          <div className="contact-links">
            <a href="mailto:danram20714@gmail.com">danram20714@gmail.com</a>
            <a href="https://github.com/kratsaira" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
