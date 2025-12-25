
import use3DTilt from '@/app/providers/use3DTilt';
import InfoBullet from '@/components/ui/InfoBullet';
import LiquidEtherWrapper from '@/components/ui/LiquidEtherWrapper';
import MagicButton from '@/components/ui/MagicButton';
import { Spotlight } from '@/components/ui/Spotlight';
import useLenis from '@/lib/lenis';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { FaHatWizard } from "react-icons/fa";
import { FaArrowTrendUp } from 'react-icons/fa6';
import { GiFluffyWing } from "react-icons/gi";
import { MdOutlineSpeed } from "react-icons/md";
import { GridPattern } from './ui/GridPattern';
import Starfield from './ui/Starfield';

const Hero = () => {
  use3DTilt()
    const lenis = useLenis(); // get the Lenis ref
  const handleScroll = () => {
    // Example: scroll to the bottom smoothly
    lenis.current?.scrollTo('#about', {
      duration: 0.75, // seconds
    });
  };

  return (
    <header className="relative isolate max-sm:max-h-150 h-screen overflow-hidden pb-20 pt-36">
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
          className="-left-10 -top-40 h-full md:-left-32 md:-top-20"
          fill="white"
        />

        <Spotlight
          className="left-80 top-28 h-[80vh] w-[50vw]"
          fill="oklch(80.9% 0.105 251.813)"
        />
      </figure>

      <figure className="absolute inset-0 z-10 m-auto h-full w-full text-blue-300 opacity-50">
        <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
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
          <LiquidEtherWrapper/>

        </div>
      </figure>

      <figure className="pointer-events-none absolute inset-0 m-auto h-full w-full bg-[#0b011d]">
        <Starfield />

      </figure>
      <figure className="absolute  z-100 bg-transparent inset-0 m-auto flex h-full w-full flex-col items-center justify-center gap-10  px-5 sm:px-10">
        <Image
        width={100}
        height={100}
        priority
        loading='eager'
          src="/logo.svg"
          alt="Lumina AI Logo"
          className="fade-slide-element w-full  max-w-7xl"
        />
        <div className='flex items-center fade-slide-element-slow px-4 flex-wrap gap-4 justify-center'>
          <span className='tilt-wrapper'>

        <InfoBullet text="Smart Magic" icon={<FaHatWizard />} />
          </span>
<span className="tilt-wrapper">
  <InfoBullet text="Neural Wings" icon={<GiFluffyWing />} />
</span>
<span className="tilt-wrapper">
  <InfoBullet text="Instant Speed" icon={<MdOutlineSpeed />} />
</span>


        </div>
        <MagicButton
          title="Get Started"
          icon={<FaArrowTrendUp />}
          containerClass="fade-slide-element-slower hover:translate-x-2 duration-150"
            position="right"
        handleClick={handleScroll}
        />
      </figure>
    </header>
  );
};

export default Hero;
