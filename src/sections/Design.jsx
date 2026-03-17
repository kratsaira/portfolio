import "../styles/Design.css";
import { useState } from "react";

import img1_thumb from "../assets/azul3.webp";
import img2_thumb from "../assets/icanbethebesttoyou.webp";
import img3_thumb from "../assets/first_slide.webp";
import img4_thumb from "../assets/kadermagazine.webp";

import img1_full from "../assets/azul3.webp";
import img2_full from "../assets/icanbethebesttoyou.webp";
import img3_full from "../assets/first_slide.webp";
import img4_full from "../assets/kadermagazine.webp";

function Design() {
  const [selected, setSelected] = useState(null);

  const designs = [
    { thumb: img1_thumb, full: img1_full },
    { thumb: img2_thumb, full: img2_full },
    { thumb: img3_thumb, full: img3_full },
    { thumb: img4_thumb, full: img4_full },

  ];

  return (
    <section id="design" className="design section">
      <div className="container">
        <h2>Design</h2>

        <p>Here's my selected work from my design portfolio.</p>

        <div className="design-grid">
          {designs.map((design, index) => (
            <div
              key={index}
              className="design-item"
              onClick={() => setSelected(design.full)}
            >
              <img src={design.thumb} alt="design" loading="lazy" />
            </div>
          ))}
        </div>

        {selected && (
          <div className="modal" onClick={() => setSelected(null)}>
            <img src={selected} alt="full design" />
          </div>
        )}
      </div>
    </section>
  );
}

export default Design;