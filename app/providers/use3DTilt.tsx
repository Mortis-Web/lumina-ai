import { useEffect } from 'react';

type Use3DTiltOptions = {
  selector?: string;
  maxTilt?: number;
};

const use3DTilt = ({
  selector = '.tilt-wrapper',
  maxTilt = 20,
}: Use3DTiltOptions = {}) => {
  useEffect(() => {
    const wrappers = document.querySelectorAll<HTMLElement>(selector);
    const cleanups: (() => void)[] = [];

    wrappers.forEach((wrapper) => {
      const card = wrapper.querySelector<HTMLElement>('.tilt');
      if (!card) return;

      let rect: DOMRect | null = null;
      let rafId: number | null = null;

      const onMouseMove = (e: MouseEvent) => {
        if (!rect) return;

        if (rafId) cancelAnimationFrame(rafId);

        rafId = requestAnimationFrame(() => {
          const x = e.clientX - rect!.left;
          const y = e.clientY - rect!.top;

          const centerX = x / rect!.width - 0.5;
          const centerY = y / rect!.height - 0.5;

          const rotateX = Math.max(
            Math.min(centerY * -maxTilt, maxTilt),
            -maxTilt
          );

          const rotateY = Math.max(
            Math.min(centerX * -maxTilt, maxTilt),
            -maxTilt
          );

          card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
      };

      const onMouseEnter = () => {
        rect = wrapper.getBoundingClientRect();
        card.style.transition = 'transform 0.1s ease-out';
        card.classList.remove('animate-hovering');
      };

      const onMouseLeave = () => {
        rect = null;
        if (rafId) cancelAnimationFrame(rafId);

        card.style.transform = 'rotateX(0deg) rotateY(0deg)';
        card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';

        if (card.dataset.tiltAnimate === 'true') {
          setTimeout(() => {
            card.classList.add('animate-hovering');
          }, 300);
        }
      };

      wrapper.addEventListener('mouseenter', onMouseEnter);
      wrapper.addEventListener('mousemove', onMouseMove);
      wrapper.addEventListener('mouseleave', onMouseLeave);

      cleanups.push(() => {
        wrapper.removeEventListener('mouseenter', onMouseEnter);
        wrapper.removeEventListener('mousemove', onMouseMove);
        wrapper.removeEventListener('mouseleave', onMouseLeave);
      });
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, [selector, maxTilt]);
};

export default use3DTilt;
