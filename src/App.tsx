/// <reference types="vite-plugin-svgr/client" />

import Lenis from "lenis";
import { useEffect } from "react";
import Hero from "./components/Hero";
import Roadmap from "./components/Roadmap";
import Tokenomics from "./components/Tokenomics";

function App() {
  useEffect(() => {
    const lenis = new Lenis();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="bg-bgPattern bg-cover bg-repeat bg-fixed flex flex-col overflow-hidden">
      <Hero />
      <Tokenomics />
      <Roadmap />
    </div>
  );
}

export default App;
