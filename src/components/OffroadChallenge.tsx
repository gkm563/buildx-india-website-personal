import { motion } from 'motion/react';
import { 
  Scan, Target, FileText, Trophy, AlertTriangle, 
  Lightbulb, CheckCircle2, Download, ExternalLink,
  Layers, Map, Mountain
} from 'lucide-react';
import segmentationDoc from '@/src/assets/docs/BuildX Hackathon - Segmentation Documentation.pdf';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } }
};

export default function OffroadChallenge() {
  return (
    <motion.section 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="mt-24 w-full"
    >
      <div className="glass p-8 md:p-12 rounded-[3rem] relative overflow-hidden border-amber-500/20 bg-amber-500/5">
        {/* Background glow for Desert theme */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/10 blur-[120px] rounded-full pointer-events-none" />

        {/* Header Segment */}
        <motion.div variants={itemVariants} className="text-center mb-16 relative z-10">
          <div className="inline-flex items-center justify-center gap-3 px-6 py-2 rounded-full border border-amber-500/20 bg-amber-500/10 backdrop-blur-md mb-8">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-widest">Special Problem Statement</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white tracking-tight flex items-center justify-center gap-3">
            <Mountain className="w-8 h-8 md:w-12 md:h-12 text-amber-500" />
            Offroad Semantic <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Scene Segmentation</span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-2xl mx-auto font-medium mb-6">
            Train AI models to navigate the dunes. Solve for <span className="text-amber-500">desert autonomy</span>.
          </p>
        </motion.div>

        {/* Challenge Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 relative z-10">
          <motion.div variants={itemVariants} className="bg-slate-900/50 p-8 rounded-3xl border border-white/5 relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
            <div className="flex items-center gap-3 mb-4 text-white relative z-10">
              <Lightbulb className="w-6 h-6 text-amber-500" />
              <h3 className="text-2xl font-bold">The Challenge</h3>
            </div>
            <p className="text-slate-400 leading-relaxed relative z-10">
              In this challenge, you will work on training an AI model to perform <span className="text-white font-semibold">semantic segmentation on desert environment datasets</span>, improving accuracy and performance on unseen scenarios.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-slate-900/50 p-8 rounded-3xl border border-white/5 relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
            <div className="flex items-center gap-3 mb-4 text-white relative z-10">
              <Trophy className="w-6 h-6 text-orange-500" />
              <h3 className="text-2xl font-bold">Special Rewards</h3>
            </div>
            <p className="text-slate-400 leading-relaxed relative z-10">
              Teams who perform best on this problem statement will receive <span className="text-white font-semibold text-lg">separate rewards (including cash prizes)</span> based on their model performance and report.
            </p>
          </motion.div>
        </div>

        {/* Note & Participation */}
        <motion.div variants={itemVariants} className="mb-16 bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl relative z-10">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/20 flex items-center justify-center shrink-0">
              <AlertTriangle className="w-6 h-6 text-orange-500" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-2">Important Note</h4>
              <p className="text-slate-400 mb-4">
                This is a <span className="text-amber-500 font-semibold">special category problem statement</span> and is not related to the main winners (Top Teams). You can participate in this along with your main project.
              </p>
              <div className="flex items-center gap-2 text-sm text-slate-500 font-medium italic">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Great opportunity to explore AI + real-world applications and win additional rewards.
              </div>
            </div>
          </div>
        </motion.div>

        {/* Technical Focus */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 relative z-10">
          {[
            { icon: Layers, title: "Robust Training", desc: "Train a robust segmentation model for offroad environments." },
            { icon: Target, title: "High IoU", desc: "Achieve the highest possible intersection-over-union score." },
            { icon: Scan, title: "Optimization", desc: "Focus on proper evaluation and model optimization." },
            { icon: FileText, title: "Documentation", desc: "Maintain clear documentation and presentation of your results." }
          ].map((item, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants} 
              className="bg-slate-800/40 p-6 rounded-3xl border border-white/10 hover:border-amber-500/30 transition-all hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-amber-500" />
              </div>
              <h4 className="text-white font-bold mb-2">{item.title}</h4>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Documentation Link */}
        <motion.div variants={itemVariants} className="text-center relative z-10">
          <div className="bg-slate-900/60 p-8 rounded-[2.5rem] border border-white/10 inline-block max-w-xl">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to start segmenting?</h3>
            <p className="text-slate-400 mb-8">
              Download the official documentation for the Offroad Semantic Scene Segmentation challenge to get started with the datasets and evaluation guidelines.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={segmentationDoc} 
                download="BuildX Hackathon - Segmentation Documentation.pdf"
                className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-amber-500 text-slate-950 font-bold hover:bg-amber-400 transition-colors w-full sm:w-auto justify-center"
              >
                <Download className="w-5 h-5" />
                Download Documentation
              </a>
              <button 
                className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-colors w-full sm:w-auto justify-center disabled:opacity-50"
                disabled
              >
                <ExternalLink className="w-5 h-5" />
                Get Dataset
              </button>
            </div>
            <p className="text-xs text-slate-500 mt-4 italic">
              Dataset link will be provided in the documentation and Discord.
            </p>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}
