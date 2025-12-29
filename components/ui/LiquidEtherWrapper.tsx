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

  /* === CORE PERFORMANCE FIXES === */
  resolution={isSmallScreen ? 0.22 : 0.32}

  iterationsPoisson={isSmallScreen ? 10 : 14}
  iterationsViscous={isSmallScreen ? 0 : 8}
  isViscous={false}

  BFECC={!isSmallScreen}   // VERY important

  /* === INTERACTION === */
  mouseForce={isSmallScreen ? 6 : 10}
  cursorSize={65}

  /* === AUTO DEMO === */
  autoDemo={!isSmallScreen}
  autoSpeed={0.35}
  autoIntensity={isSmallScreen ? 1.0 : 1.6}
  takeoverDuration={0.25}
  autoResumeDelay={1200}
  autoRampDuration={0.6}

  isBounce={false}
/>

  );
}
