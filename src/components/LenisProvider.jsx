import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";

// Define LenisContext within the file
// export const LenisContext = createContext();

function LenisProvider({ children }) {
  const [lenis, setLenis] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const newLenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    setLenis(newLenis);
    setIsLoading(false);

    function raf(time) {
      newLenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      newLenis.destroy();
      setLenis(null);
    };
  }, []);

  if (isLoading) {
    return null; // Return null while loading to prevent rendering until Lenis is ready
  }

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}

export default LenisProvider;