import { motion as Motion } from "framer-motion";

export default function FadeInSection({ children }) {
  return (
    <Motion.div
      className="fade-section"
      initial={{ opacity: 0, y: 90, scale: 0.985, filter: "blur(18px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: false, amount: 0.18 }}
      transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Motion.div>
  );
}
