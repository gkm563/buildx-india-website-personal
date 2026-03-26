import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Rocket, ArrowRight, Sparkles } from 'lucide-react';
import Countdown from './Countdown';
import Particles from './Particles';
import { useEffect } from 'react';
import logoImg from '@/src/assets/images/logo.jpeg';
import rulebookPdf from '@/src/assets/docs/BuildX India 2026.pdf';

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);

  const rotateX = useTransform(dy, [-300, 300], [10, -10]);
  const rotateY = useTransform(dx, [-300, 300], [-10, 10]);

  const bgX = useTransform(dx, [-300, 300], [20, -20]);
  const bgY = useTransform(dy, [-300, 300], [20, -20]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set(clientX - innerWidth / 2);
      mouseY.set(clientY - innerHeight / 2);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden perspective-1000">
      {/* Solid Deep Blue Background */}
      <div className="absolute inset-0 bg-dark pointer-events-none" />
      <Particles />
      
      {/* Subtle modern radial glow instead of intense pulse blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[150%] bg-[radial-gradient(circle_at_center,rgba(0,188,212,0.1)_0%,transparent_60%)] pointer-events-none" />

      {/* Futuristic Looping Graphic */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="w-[800px] h-[800px] border border-primary/30 rounded-full border-dashed"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute w-[600px] h-[600px] border border-secondary/20 rounded-full border-dashed"
        />
      </div>

      <motion.div 
        style={{ rotateX, rotateY }}
        className="max-w-7xl mx-auto px-6 pt-32 pb-48 relative z-10 text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-white/10 text-slate-200 text-sm font-semibold mb-8 bg-white/5 backdrop-blur-sm shadow-sm"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span>National Level Online Hackathon</span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-8xl font-display font-bold mb-6 tracking-tight flex flex-col items-center gap-4 text-white"
        >
          <div className="relative w-24 h-24 md:w-32 md:h-32 mb-8 group">
            <div className="relative w-full h-full rounded-2xl bg-white border border-white/10 p-2 flex items-center justify-center overflow-hidden shadow-2xl">
              <img 
                src={logoImg} 
                alt="BuildX India Logo" 
                className="w-full h-full object-cover rounded-[10px] group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
          <span className="leading-tight text-white drop-shadow-sm">
            BUILDX <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary font-black">INDIA</span> <span className="text-slate-300 font-bold">2026</span>
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed font-medium"
        >
          A 24-hour national innovation challenge organized by UDTech India. 
          Unleash your creativity and build the future of technology.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-12"
        >
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://unstop.com/o/mFoM1gk"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2 group shadow-xl shadow-primary/20"
            >
              Register Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={rulebookPdf} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-secondary"
            >
              View Rulebook
            </motion.a>
          </div>

          <Countdown />
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20 group cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-primary/60 font-black group-hover:text-primary transition-colors">Scroll</span>
        <div className="relative w-px h-16 bg-gradient-to-b from-primary via-primary/50 to-transparent overflow-hidden">
          <motion.div 
            animate={{ y: [0, 64, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-white to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
