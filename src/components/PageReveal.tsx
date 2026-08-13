import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function PageReveal() {
  const [show, setShow] = useState(() => {
    if (typeof window === 'undefined') return false;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
    try {
      return !sessionStorage.getItem('novarchin:revealed');
    } catch {
      return true;
    }
  });

  useEffect(() => {
    if (!show) return;
    const timer = setTimeout(() => {
      setShow(false);
      try {
        sessionStorage.setItem('novarchin:revealed', '1');
      } catch {
        // non-critical
      }
      return () => clearTimeout(timer);
    }, 2000);
    return () => clearTimeout(timer);
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="curtain"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-ink"
          aria-hidden="true"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center"
          >
            <img src="/logo.png" alt="Novarchin" className="h-12 w-12" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
