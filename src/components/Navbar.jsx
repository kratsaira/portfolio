import { useEffect, useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import "../styles/Navbar.css";

const links = ["about", "skills", "projects", "contact"];

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleLink = () => setOpen(false);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button
          className="menu-toggle"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <i aria-hidden="true" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <Motion.div
            className="menu-panel"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
          >
            <div className="menu-panel-inner">
              <a className="menu-home" href="#hero" onClick={handleLink}>
                Dan Ramirez
              </a>

              <Motion.ul
                className="menu-links"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.06 } },
                }}
              >
                {links.map((link, index) => (
                  <Motion.li
                    key={link}
                    variants={{
                      hidden: { opacity: 0, y: 54, skewY: 4 },
                      visible: { opacity: 1, y: 0, skewY: 0 },
                    }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Motion.a
                      href={`#${link}`}
                      onClick={handleLink}
                      whileHover={{ x: 24 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      {link}
                    </Motion.a>
                  </Motion.li>
                ))}
              </Motion.ul>

              <span className="menu-caption">SWE - Graphic Designer</span>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
