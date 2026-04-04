import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import logoImg from '@/src/assets/images/logo.jpeg';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Event Details', path: '/details' },
  { name: 'Team', path: '/team' },
  { name: 'Problem Statements', path: '/problems' },
  { name: 'Sponsors', path: '/sponsors' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        scrolled ? 'bg-slate-900/70 backdrop-blur-xl border-b border-white/10 py-3 shadow-lg' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden shadow-sm">
            <img 
              src={logoImg} 
              alt="BuildX India Logo" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-xl tracking-tight leading-none text-white">
              BuildX <span className="text-primary">India</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold transition-colors text-slate-400 group-hover:text-primary">2026 Edition</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'text-sm font-semibold transition-colors hover:text-white',
                location.pathname === link.path ? 'text-primary' : 'text-slate-300'
              )}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://unstop.com/o/mFoM1gk"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary py-2.5 px-6 text-sm"
          >
            Register Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-300 hover:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, filter: 'blur(5px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -10, filter: 'blur(5px)' }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-slate-900 border-b border-white/10 p-6 flex flex-col gap-5 md:hidden shadow-2xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'text-lg font-bold transition-colors hover:text-white',
                  location.pathname === link.path ? 'text-primary' : 'text-slate-300'
                )}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://unstop.com/o/mFoM1gk"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-center mt-4 w-full flex justify-center"
            >
              Register Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
