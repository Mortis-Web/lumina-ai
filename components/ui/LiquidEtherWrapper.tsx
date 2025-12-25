"use client";

import LiquidEther from "@/components/ui/LiquidEther";
import { useEffect, useState } from "react";

export default function LiquidEtherWrapper() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsSmallScreen(window.innerWidth < 640);
    checkScreen();

    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <LiquidEther
      colors={['#5227FF', '#FF9FFC', '#B19EEF']}
      mouseForce={10}       // less aggressive
      cursorSize={isSmallScreen ? 75 : 100}     // smaller cursor effect
      isViscous={false}
      viscous={isSmallScreen ? 10 : 20}        // less viscous
      iterationsViscous={isSmallScreen ? 22 : 32}
      iterationsPoisson={isSmallScreen ? 22 : 32}
      resolution={0.5}
      isBounce={false}
      autoDemo={true}
      autoSpeed={isSmallScreen ? 0.25 : 0.5}   // slower auto demo
      autoIntensity={isSmallScreen ? 1.2 : 2.2} // less intense
      takeoverDuration={0.25}
      autoResumeDelay={3000}
      autoRampDuration={0.6}
    />
  );
}
