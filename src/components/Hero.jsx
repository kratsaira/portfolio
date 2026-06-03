import { useEffect, useRef } from "react";
import { motion as Motion } from "framer-motion";
import gsap from "gsap";
import "../styles/Hero.css";

function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const playHero = () => {
        gsap.fromTo(
          ".hero-line",
          {
            yPercent: 120,
            rotate: 2,
            opacity: 0,
            filter: "blur(18px)",
          },
          {
            yPercent: 0,
            rotate: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1.25,
            stagger: 0.11,
            ease: "expo.out",
            overwrite: true,
          }
        );

        gsap.fromTo(
          ".hero-bottom p, .hero-actions",
          {
            y: 34,
            opacity: 0,
            filter: "blur(14px)",
          },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1,
            stagger: 0.12,
            delay: 0.45,
            ease: "expo.out",
            overwrite: true,
          }
        );
      };

      playHero();

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" className="hero" ref={heroRef}>
      <div className="container hero-grid">
        <div className="hero-copy">
          <h1 aria-label="Dan Ramirez builds clean digital interfaces">
            <span><span className="hero-line">Dan Ramírez</span></span>
            <span><span className="hero-line">software engineer</span></span>
            <span><span className="hero-line">graphic designer</span></span>
          </h1>

          <div className="hero-bottom">
            <p>
              Software Engineer and Graphic Designer based in Costa Rica. I build clean digital interfaces and experiences for the web.
            </p>

            <div className="hero-actions">
              <Motion.a href="#projects" whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
                View work
              </Motion.a>
              <Motion.a href="/cv.pdf" target="_blank" whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
                Resume
              </Motion.a>
              <Motion.a href="#contact" whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
                Contact
              </Motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
