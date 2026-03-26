import { motion, useMotionValue, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import React from 'react';

import insightsLogo from '@/src/assets/images/insights.jpeg';
import binternzLogo from '@/src/assets/images/binternz.jpeg';
import unstopLogo from '@/src/assets/images/unstop.jpeg';
import interviewBuddyLogo from '@/src/assets/images/INTERVIEW BUDDY.jpeg';
import xyzLogo from '@/src/assets/images/xyz.jpg';
import n8nLogo from '@/src/assets/images/n8n.webp';
import certifyixLogo from '@/src/assets/images/certifix.webp';
import fuelerLogo from '@/src/assets/images/fueler.png';

const sponsorCategories = [
  {
    title: 'Gold Sponsor',
    sponsors: [
      { name: 'Thore Network Pvt. Ltd.', logo: insightsLogo, url: 'https://thorecoin.com' },
    ]
  },
  {
    title: 'Strategic Partners',
    isGrouped: true,
    subCategories: [
      {
        title: 'Powered By',
        sponsors: [
          { name: 'Unstop', logo: unstopLogo, url: '#' },
        ]
      },
      {
        title: 'Official Learning Partner',
        sponsors: [
          { name: 'Binternz', logo: binternzLogo, url: '#' },
        ]
      },
      {
        title: 'Domain Partner',
        sponsors: [
          { name: '.xyz', logo: xyzLogo, url: '#' },
        ]
      },
      {
        title: 'Cloud & Automation Partner',
        sponsors: [
          { name: 'n8n', logo: n8nLogo, url: '#' },
        ]
      },
      {
        title: 'Interview Partner',
        sponsors: [
          { name: 'Interview Buddy', logo: interviewBuddyLogo, url: '#' },
        ]
      },
      {
        title: 'Track Sponsor',
        sponsors: [
          { name: 'Certifyix', logo: certifyixLogo, url: '#' },
        ]
      },
      {
        title: 'In-kind Sponsor',
        sponsors: [
          { name: 'Fueler', logo: fuelerLogo, url: '#' },
        ]
      }
    ]
  }
];

function TiltCard({ children, className }: { children: React.ReactNode, className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set(e.clientX - cx);
    y.set(e.clientY - cy);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function SponsorGrid() {
  return (
    <div className="space-y-32">
      {sponsorCategories.map((category, catIdx) => {
        if (category.isGrouped) {
          return (
            <div key={category.title} className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {category.subCategories?.map((sub, subIdx) => (
                <div key={sub.title} className="relative">
                  {/* Section Header */}
                  <div className="flex flex-col items-center mb-12">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-4"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      {sub.title}
                    </motion.div>
                    <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                  </div>

                  <div className="grid grid-cols-1 gap-8">
                    {sub.sponsors.map((sponsor, idx) => (
                      <motion.a
                        key={sponsor.name}
                        href={sponsor.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 + subIdx * 0.2 }}
                        className="group relative block"
                      >
                        {/* Dynamic Glow Background */}
                        <div className={`absolute -inset-4 bg-gradient-to-r ${
                          sub.title === 'Official Learning Partner'
                            ? 'from-emerald-500/20 via-teal-500/20 to-emerald-500/20'
                            : 'from-primary/10 via-secondary/10 to-primary/10'
                        } rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105`} />
                        
                        <TiltCard className={`relative bg-slate-800/40 backdrop-blur-md p-10 rounded-[2.5rem] flex flex-col items-center text-center h-full transition-shadow duration-500 shadow-lg border border-white/10 hover:shadow-2xl group-hover:border-white/20`}>
                          
                          {/* Tier Badge */}
                          <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex flex-col items-center">
                            <div className={`px-6 py-2 rounded-2xl text-[11px] font-black uppercase tracking-[0.25em] text-white shadow-lg z-20 ${
                              sub.title === 'Official Learning Partner'
                                ? 'bg-gradient-to-r from-emerald-500 to-teal-600 shadow-[0_10px_20px_rgba(16,185,129,0.3)]'
                                : 'bg-gradient-to-r from-primary to-orange-600 shadow-[0_10px_20px_rgba(255,107,0,0.3)]'
                            }`}>
                              {sub.title}
                            </div>
                            <div className={`w-4 h-4 rotate-45 -mt-2 shadow-lg ${
                              sub.title === 'Official Learning Partner' ? 'bg-teal-600' : 'bg-orange-600'
                            }`} />
                          </div>

                          {/* Logo Container */}
                          <div className="w-full aspect-[2/1] flex items-center justify-center mb-8 relative group-hover:scale-105 transition-transform duration-500 mt-2">
                            <div className="absolute inset-0 bg-slate-100 rounded-2xl group-hover:bg-white transition-colors border border-white/10" />
                            <img
                              src={sponsor.logo}
                              alt={sponsor.name}
                              className="max-h-16 max-w-[70%] object-contain grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:brightness-110 relative z-10 p-2 mix-blend-multiply"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                          
                          <div className="space-y-3 relative z-10">
                            <h4 className={`text-xl font-display font-bold tracking-tight ${
                              sub.title === 'Official Learning Partner'
                                ? 'text-emerald-400 group-hover:text-emerald-300'
                                : 'text-slate-100 group-hover:text-primary'
                            } transition-colors`}>
                              {sponsor.name}
                            </h4>
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 group-hover:text-slate-300 transition-colors">
                              {sub.title}
                            </p>
                          </div>
                          
                          {/* Interactive Footer */}
                          <div className={`mt-8 pt-6 border-t border-slate-100 w-full flex items-center justify-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 relative z-10 ${
                            sub.title === 'Official Learning Partner'
                              ? 'text-emerald-600'
                              : 'text-primary'
                          }`}>
                            Explore Partnership
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-all ${
                              sub.title === 'Official Learning Partner'
                                ? 'bg-emerald-500/10 group-hover:bg-emerald-500 group-hover:text-white'
                                : 'bg-primary/10 group-hover:bg-primary group-hover:text-white'
                            }`}>
                              <ArrowRight className="w-2.5 h-2.5" />
                            </div>
                          </div>
                        </TiltCard>
                      </motion.a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          );
        }

        return (
          <div key={category.title} className="relative">
            {/* Section Header */}
            <div className="flex flex-col items-center mb-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-4"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                {category.title}
              </motion.div>
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            </div>

            <div className={`grid gap-8 ${
              category.title === 'Gold Sponsor' 
                ? 'grid-cols-1 max-w-3xl mx-auto' 
                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            }`}>
              {category.sponsors.map((sponsor, idx) => (
                <motion.a
                  key={sponsor.name}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 + catIdx * 0.2 }}
                  className="group relative block"
                >
                  {/* Dynamic Glow Background */}
                  <div className={`absolute -inset-4 bg-gradient-to-r ${
                    category.title === 'Gold Sponsor' 
                      ? 'from-amber-500/20 via-yellow-500/20 to-amber-500/20' 
                      : 'from-primary/10 via-secondary/10 to-primary/10'
                  } rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105`} />
                  
                  <TiltCard className={`relative bg-slate-800/40 backdrop-blur-md p-12 rounded-[2.5rem] flex flex-col items-center text-center h-full transition-shadow duration-500 shadow-lg border border-white/10 hover:shadow-2xl group-hover:border-white/20`}>
                    
                    {/* Tier Badge */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex flex-col items-center">
                      <div className={`px-6 py-2 rounded-2xl text-[11px] font-black uppercase tracking-[0.25em] text-white shadow-lg z-20 ${
                        category.title === 'Gold Sponsor'
                          ? 'bg-gradient-to-r from-amber-500 to-yellow-600 shadow-[0_10px_20px_rgba(245,158,11,0.3)]'
                          : 'bg-gradient-to-r from-primary to-orange-600 shadow-[0_10px_20px_rgba(255,107,0,0.3)]'
                      }`}>
                        {category.title === 'Gold Sponsor' ? 'Premier Partner' : category.title}
                      </div>
                      <div className={`w-4 h-4 rotate-45 -mt-2 shadow-lg ${
                        category.title === 'Gold Sponsor' ? 'bg-yellow-600' : 'bg-orange-600'
                      }`} />
                    </div>

                    {/* Logo Container */}
                    <div className="w-full aspect-[2/1] flex items-center justify-center mb-10 relative group-hover:scale-105 transition-transform duration-500 mt-2">
                      <div className="absolute inset-0 bg-slate-100 rounded-2xl group-hover:bg-white transition-colors border border-white/10" />
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="max-h-20 max-w-[75%] object-contain grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:brightness-110 relative z-10 p-2 mix-blend-multiply"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    
                    <div className="space-y-3 relative z-10">
                      <h4 className={`text-2xl font-display font-bold tracking-tight ${
                        category.title === 'Gold Sponsor' 
                          ? 'text-amber-400 group-hover:text-amber-300' 
                          : 'text-slate-100 group-hover:text-primary'
                      } transition-colors`}>
                        {sponsor.name}
                      </h4>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 group-hover:text-slate-300 transition-colors">
                        {category.title}
                      </p>
                    </div>
                    
                    {/* Interactive Footer */}
                    <div className={`mt-10 pt-8 border-t border-slate-100 w-full flex items-center justify-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 relative z-10 ${
                      category.title === 'Gold Sponsor'
                        ? 'text-amber-600'
                        : 'text-primary'
                    }`}>
                      Explore Partnership
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                        category.title === 'Gold Sponsor'
                          ? 'bg-amber-500/10 group-hover:bg-amber-500 group-hover:text-white'
                          : 'bg-primary/10 group-hover:bg-primary group-hover:text-white'
                      }`}>
                        <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>

                    {/* Decorative background text */}
                    <div className="absolute -bottom-4 -right-4 text-8xl font-black text-slate-50 select-none pointer-events-none group-hover:text-slate-100 transition-colors z-0">
                      {idx + 1}
                    </div>
                  </TiltCard>
                </motion.a>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
