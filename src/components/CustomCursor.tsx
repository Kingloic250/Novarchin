import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 350, damping: 28, mass: 0.4 });
  const ringY = useSpring(y, { stiffness: 350, damping: 28, mass: 0.4 });

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduced) return;

    setEnabled(true);
    document.documentElement.classList.add('custom-cursor-active');

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as HTMLElement;
      setHovering(
        !!target.closest('a, button, [role="button"], input, textarea, select, [data-cursor="hover"]'),
      );
    };
    window.addEventListener('mousemove', move);
    return () => {
      window.removeEventListener('mousemove', move);
      document.documentElement.classList.remove('custom-cursor-active');
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-[100] pointer-events-none rounded-full bg-wine-600 mix-blend-multiply"
        style={{
          x,
          y,
          width: 8,
          height: 8,
          translateX: '-50%',
          translateY: '-50%',
        }}
        aria-hidden="true"
      />
      <motion.div
        className="fixed top-0 left-0 z-[100] pointer-events-none rounded-full border border-wine-600/50"
        style={{
          x: ringX,
          y: ringY,
          width: 36,
          height: 36,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{ scale: hovering ? 1.6 : 1, opacity: hovering ? 0.9 : 0.5 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        aria-hidden="true"
      />
    </>
  );
}
