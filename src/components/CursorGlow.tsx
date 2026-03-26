import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function CursorGlow() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none z-[1] mix-blend-screen"
      animate={{
        x: mousePos.x - 200,
        y: mousePos.y - 200,
      }}
      transition={{ type: 'spring', damping: 30, stiffness: 150, mass: 0.5 }}
    />
  );
}
