'use client';

import Dock from '@/components/ui/Dock';
import { useEffect, useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { FaProjectDiagram } from "react-icons/fa";
import { LiaSitemapSolid } from "react-icons/lia";
import { RiSlideshowLine } from 'react-icons/ri';
import { TbMessage2Heart } from "react-icons/tb";

import useLenis from '@/lib/lenis';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const lenisRef = useLenis(); // useRef<Lenis | null>

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (selector: string) => {
    if (lenisRef.current) {
      const element = document.querySelector(selector);
      if (element) lenisRef.current.scrollTo(element);
    }
  };

  const items = [
    {
      icon: <AiOutlineHome size={24} />,
      label: 'Home',
      onClick: () => scrollTo('#home'),
    },
    {
      icon: <RiSlideshowLine size={24} />,
      label: 'About',
      onClick: () => scrollTo('#about'),
    },
    {
      icon: <FaProjectDiagram size={24} />,
      label: 'Projects',
      onClick: () => scrollTo('#projects'),
    },
    {
      icon: <TbMessage2Heart size={24} />,
      label: 'Testimonial',
      onClick: () => scrollTo('#testimonials'),
    },
     {
      icon: <LiaSitemapSolid size={24} />,
      label: 'Approach',
      onClick: () => scrollTo('#approach'),
    },
  ];

  return (
    <nav
      className={`z-1000 fixed bottom-0 left-0 right-0 text-white transition-all duration-500 ease-out ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-[120%] opacity-0'
      }`}
    >
      <Dock
        items={items}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      />
    </nav>
  );
};

export default Navbar;
