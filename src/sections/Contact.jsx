import "../styles/Contact.css"

function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container">

        <h2>Contact</h2>

        <p>Let's build something together.</p>

        <div className="contact-links">
          <a href="mailto:danram20714@gmail.com">Email</a>
          <a href="https://github.com/kratsaira" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com">LinkedIn</a>
        </div>

      </div>
      
      <div className="scroll-up">
        <a href="#hero">Scroll up</a>
      </div>

    </section>
 
);
}

export default Contact;