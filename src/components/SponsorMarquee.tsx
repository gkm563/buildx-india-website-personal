import { motion } from 'motion/react';
import insightsLogo from '@/src/assets/images/insights.jpeg';
import binternzLogo from '@/src/assets/images/binternz.jpeg';
import unstopLogo from '@/src/assets/images/unstop.jpeg';
import interviewBuddyLogo from '@/src/assets/images/INTERVIEW BUDDY.jpeg';
import xyzLogo from '@/src/assets/images/xyz.jpg';
import n8nLogo from '@/src/assets/images/n8n.webp';
import certifyixLogo from '@/src/assets/images/certifix.webp';
import fuelerLogo from '@/src/assets/images/fueler.png';

const sponsors = [
  { name: 'Thore Network', logo: insightsLogo },
  { name: 'Binternz', logo: binternzLogo },
  { name: 'Unstop', logo: unstopLogo },
  { name: '.xyz', logo: xyzLogo },
  { name: 'n8n', logo: n8nLogo },
  { name: 'Interview Buddy', logo: interviewBuddyLogo },
  { name: 'Certifyix', logo: certifyixLogo },
  { name: 'Fueler', logo: fuelerLogo },
];

export default function SponsorMarquee() {
  return (
    <div className="py-16 bg-transparent border-y border-white/5 overflow-hidden relative group">
      {/* Gradient Overlays for smooth fade */}
      <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-dark to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-dark to-transparent z-10" />
      
      <div className="max-w-7xl mx-auto px-6 mb-10 flex items-center justify-between relative z-20">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">Official Sponsor Wall</span>
        </div>
        <div className="h-px flex-1 mx-8 bg-gradient-to-r from-white/10 via-white/20 to-transparent" />
      </div>

      <motion.div 
        className="flex gap-12 items-center whitespace-nowrap"
        animate={{ x: [0, -1200] }}
        transition={{ 
          duration: 40, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        {[...sponsors, ...sponsors, ...sponsors].map((sponsor, idx) => (
          <div 
            key={idx} 
            className="flex items-center gap-6 px-10 py-5 rounded-2xl bg-slate-800/40 backdrop-blur-sm border border-white/10 hover:border-white/30 hover:shadow-lg transition-all duration-500 group/item cursor-pointer shrink-0"
          >
            <div className="flex flex-col items-center justify-center text-center">
              <span className="text-slate-100 font-display font-bold text-xl uppercase tracking-widest group-hover/item:text-primary transition-colors mb-1">
                {sponsor.name}
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 group-hover/item:text-primary transition-colors">
                Official Partner
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
