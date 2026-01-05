import { useState, useEffect } from "react";

const useScreenSize = (breakpoint = 1100) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);
  const [isIsDesktop, setIsDesktop] = useState(!isMobile);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, [breakpoint]);

  return { isMobile, isIsDesktop };
};

export default useScreenSize;
