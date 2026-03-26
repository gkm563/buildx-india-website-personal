import { motion, useMotionTemplate, useMotionValue } from 'motion/react';
import { Brain, Globe, Shield, Cpu, Zap, Lightbulb } from 'lucide-react';
import { MouseEvent } from 'react';

const themes = [
  {
    title: 'AI & Machine Learning',
    description: 'Build intelligent systems that learn and adapt to solve complex problems.',
    icon: Brain,
    color: 'from-orange-500 to-amber-500',
    shadow: 'shadow-orange-500/50'
  },
  {
    title: 'Web Development',
    description: 'Create seamless, scalable, and high-performance digital experiences.',
    icon: Globe,
    color: 'from-cyan-500 to-blue-500',
    shadow: 'shadow-cyan-500/50'
  },
  {
    title: 'Blockchain',
    description: 'Develop decentralized solutions for security, transparency, and trust.',
    icon: Shield,
    color: 'from-pink-500 to-rose-500',
    shadow: 'shadow-pink-500/50'
  },
  {
    title: 'IoT & Hardware',
    description: 'Connect the physical world with smart, data-driven hardware solutions.',
    icon: Cpu,
    color: 'from-emerald-500 to-teal-500',
    shadow: 'shadow-emerald-500/50'
  },
  {
    title: 'Cybersecurity',
    description: 'Protect the digital frontier with innovative security frameworks.',
    icon: Zap,
    color: 'from-indigo-500 to-violet-500',
    shadow: 'shadow-indigo-500/50'
  },
  {
    title: 'Open Innovation',
    description: 'Have a unique idea? Build anything that creates a positive impact.',
    icon: Lightbulb,
    color: 'from-primary to-secondary',
    shadow: 'shadow-primary/50'
  }
];

// Individual Card Component with Mouse Tracking Glow
function SpotlightCard({ theme }: { theme: typeof themes[0] }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative group rounded-3xl bg-slate-800/40 border border-white/10 overflow-hidden shadow-lg hover:shadow-2xl hover:border-white/20 transition-all duration-500 p-8 backdrop-blur-md"
    >
      {/* Animated Spotlight Border/Background Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(96, 165, 250, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="relative z-10">
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${theme.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-500`}>
          <theme.icon className="text-white w-7 h-7" />
        </div>
        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors">{theme.title}</h3>
        <p className="text-slate-300 leading-relaxed font-medium">
          {theme.description}
        </p>
      </div>
    </div>
  );
}

export default function ThemeCards() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } }
  };

  return (
    <section className="py-24 px-6 bg-transparent relative overflow-hidden">
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.05),transparent_50%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-white">Hackathon <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Themes</span></h2>
          <p className="text-slate-300 max-w-2xl mx-auto font-medium">
            Choose a track that excites you and build something extraordinary.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {themes.map((theme) => (
            <motion.div key={theme.title} variants={itemVariants}>
              <SpotlightCard theme={theme} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
