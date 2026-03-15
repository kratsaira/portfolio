import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Lenis from "lenis";
import { useEffect } from "react";

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

function SmoothScroll(){
  useEffect(() => {
    
    const lenis = new Lenis();
    
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

  }, []);

  return null;
}

export default SmoothScroll;