import { motion } from 'motion/react';
import { Target, Sparkles } from 'lucide-react';
import ThoreProblemStatement from '@/src/components/ThoreProblemStatement';
import OffroadChallenge from '@/src/components/OffroadChallenge';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function ProblemStatements() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      variants={containerVariants}
      className="pt-32 pb-24 px-6 relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Page Header */}
        <motion.div 
          variants={itemVariants} 
          className="text-center mb-20"
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Target className="w-4 h-4" />
            <span>Problem Statements</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight">
            The <span className="text-gradient">Challenges</span>
          </h1>
          
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Choose your challenge, push your limits, and build something extraordinary. We've curated problems that matter.
          </p>
          
          {/* Decorative Sparkles */}
          <div className="flex justify-center gap-4 mt-8">
            <Sparkles className="w-6 h-6 text-amber-500/40 animate-pulse" />
            <Sparkles className="w-6 h-6 text-primary/40 animate-pulse delay-700" />
            <Sparkles className="w-6 h-6 text-secondary/40 animate-pulse delay-1000" />
          </div>
        </motion.div>

        {/* Challenge Components */}
        <div className="space-y-32">
          <ThoreProblemStatement />
          <OffroadChallenge />
        </div>

        {/* Bottom Call to Action */}
        <motion.div 
          variants={itemVariants} 
          className="mt-32 text-center"
        >
          <p className="text-slate-500 text-sm italic mb-8">
            Each problem statement has its own set of evaluation criteria and rewards. Choose wisely!
          </p>
          <div className="flex justify-center gap-4">
            <button className="btn-outline px-8" onClick={() => window.scrollTo(0, 0)}>Back to top</button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
