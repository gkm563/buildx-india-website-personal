import React from 'react';
import { motion } from 'motion/react';
import { Trophy, ArrowRight } from 'lucide-react';
import insightsLogo from '@/src/assets/images/insights.jpeg';

const SponsorHighlight: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative group"
    >
      {/* Background Glows */}
      <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-[4rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
      
      <div className="relative glass p-8 md:p-16 rounded-[3.5rem] border-primary/20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 blur-[100px] -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-[0.2em] mb-8 border border-primary/20"
            >
              <Trophy className="w-4 h-4 fill-primary/20" />
              <span>Gold Sponsor</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-[1.1] tracking-tight">
              Thore Network <br />
              <span className="text-gradient">Pvt. Ltd.</span>
            </h2>
            
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              As our premier <span className="text-white font-semibold">Gold Sponsor</span>, Thore Network is at the forefront of driving innovation in the Indian tech ecosystem.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <a 
                href="https://thorecoin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary group/btn flex items-center gap-3 px-8 py-4 text-lg"
              >
                Visit Thore Network
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </a>
              
              <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm font-medium text-slate-300">Official Problem Statement Provider</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative aspect-square rounded-[2.5rem] overflow-hidden glass p-3 border-white/10 shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 mix-blend-overlay z-10" />
              <img 
                src={insightsLogo} 
                alt="iNSIGHTS Platform" 
                className="w-full h-full object-cover rounded-[2rem] opacity-90 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
              />
              
            </motion.div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/30 blur-3xl rounded-full animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/30 blur-3xl rounded-full animate-pulse delay-700" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SponsorHighlight;
