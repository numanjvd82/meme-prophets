/// <reference types="vite-plugin-svgr/client" />

import { LenisRef, ReactLenis } from "lenis/react";
import { cancelFrame, frame } from "motion/react";
import { useEffect, useRef } from "react";

import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Roadmap from "./components/Roadmap";
import Tokenomics from "./components/Tokenomics";

function App() {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    function update(data: { timestamp: number }) {
      lenisRef.current?.lenis?.raf(data.timestamp);
    }
    frame.update(update, true);

    return () => cancelFrame(update);
  }, []);

  return (
    <ReactLenis ref={lenisRef} options={{ duration: 1 }} root>
      <div className="bg-bgPattern bg-cover bg-repeat bg-fixed flex flex-col overflow-hidden font-poppins">
        <Hero />
        <Tokenomics />
        <Roadmap />
        <Footer />
      </div>
    </ReactLenis>
  );
}

export default App;
