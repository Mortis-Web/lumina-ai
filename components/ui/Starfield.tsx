'use client';
import { useEffect, useRef } from 'react';

interface Star {
  cx: number;
  cy: number;
  r: number;
  orbit: number;
  speed: number;
  angle: number;
  twinklePhase: number;
}

const Starfield: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = window.innerWidth;
    let h = window.innerHeight;
    let DPR = Math.max(1, window.devicePixelRatio || 1);
    let animationId: number;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      DPR = Math.max(1, window.devicePixelRatio || 1);
      canvas.width = w * DPR;
      canvas.height = h * DPR;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize);

    const STAR_COUNT = 100;
    const stars: Star[] = [];

    const rand = (min: number, max: number) => Math.random() * (max - min) + min;

    for (let i = 0; i < STAR_COUNT; i++) {
      const orbitRadius = rand(10, 100);
      const centerX = rand(0, w);
      const centerY = rand(0, h);
      const angle = rand(0, Math.PI * 2);
      stars.push({
        cx: centerX,
        cy: centerY,
        r: rand(0.6, 2.5),
        orbit: orbitRadius,
        speed: rand(0.0005, 0.01),
        angle,
        twinklePhase: rand(0, Math.PI * 2),
      });
    }

    const frame = () => {
      ctx.clearRect(0, 0, w, h);

      for (const s of stars) {
        s.angle += s.speed;
        const x = s.cx + Math.cos(s.angle) * s.orbit;
        const y = s.cy + Math.sin(s.angle) * s.orbit;
        s.twinklePhase += 0.005;
        const alpha = 0.5 + 0.5 * Math.sin(s.twinklePhase);

        ctx.beginPath();
        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.arc(x, y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(frame);
    };

    animationId = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="starfield"
      className="absolute inset-0 m-auto pointer-events-none z-50 w-full h-full"
    />
  );
};

export default Starfield;
