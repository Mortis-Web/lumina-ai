
import MagicButton from '@/components/ui/MagicButton';
import { Spotlight } from '@/components/ui/Spotlight';
import { cn } from '@/lib/utils';
import { FaArrowTrendUp } from 'react-icons/fa6';
import { GridPattern } from './ui/GridPattern';
import Starfield from './ui/Starfield';
import Image from 'next/image';

const Hero = () => {
  return (
    <header className="relative isolate h-screen overflow-hidden pb-20 pt-36">
      {/* Glow background */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            'radial-gradient(circle at 10% 30%, #b353ff40, transparent 60%), radial-gradient(circle at 60% 40%, #527bff30, transparent 30%)',
          filter: 'blur(80px)',
        }}
      ></div>

      <figure className="pointer-events-none">
        <Spotlight
          className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"
          fill="white"
        />

        <Spotlight
          className="left-80 top-28 h-[80vh] w-[50vw]"
          fill="oklch(80.9% 0.105 251.813)"
        />
      </figure>
      {/*
      <figure className="z-1 pointer-events-none absolute inset-0 m-auto h-screen w-full">
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <Prism
            animationType="rotate"
            timeScale={0.5}
            height={3.5}
            baseWidth={5.5}
            scale={3.6}
            hueShift={0}
            colorFrequency={1}
            noise={0.1}
            glow={1}
          />
        </div>
      </figure> */}

      <figure className="absolute inset-0 z-10 m-auto h-screen w-full text-blue-300 opacity-50">
        <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
          <GridPattern
            squares={[
              [4, 4],
              [5, 1],
              [8, 2],
              [5, 3],
              [3, 7],
              [5, 5],
              [7, 7],
              [12, 14],
              [16, 6],
              [15, 5],
              [7, 13],
              [10, 15],
              [18, 10],
            ]}
            className={cn(
              'mask-[radial-gradient(100vh_circle_at_center,white,transparent)]',
              'inset-0 m-auto h-[200%]'
            )}
          />
        </div>
      </figure>

      <figure className="pointer-events-none absolute inset-0 m-auto h-screen w-full bg-[#0b011d]">
        <Starfield />
        {/*
          <Galaxy
            mouseRepulsion={true}
            mouseInteraction={true}
            density={1.5}
            glowIntensity={0.5}
            saturation={0.8}
            hueShift={240}
          /> */}
      </figure>
      <figure className="absolute inset-0 m-auto flex h-screen w-full flex-col items-center justify-center gap-10 bg-[#0b011d] px-5 sm:px-10">
        <Image
        width={100}
        height={100}
          src="/logo.svg"
          alt="Lumina AI Logo"
          className="fade-slide-element w-full max-w-7xl"
        />
        <MagicButton
          title="Get Started"
          icon={<FaArrowTrendUp />}
          containerClass="fade-slide-element-slow"
        />
      </figure>
    </header>
  );
};

export default Hero;
