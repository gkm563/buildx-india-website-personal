import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import SponsorGrid from '@/src/components/SponsorGrid';
import SponsorHighlight from '@/src/components/SponsorHighlight';
import SponsorMarquee from '@/src/components/SponsorMarquee';
import rulebookPdf from '@/src/assets/docs/BuildX India 2026.pdf';

export default function Sponsors() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 px-6 relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Strategic Partnerships
            </div>
            <h1 className="text-6xl md:text-9xl font-display font-bold mb-8 tracking-tighter">
              Our <span className="text-gradient">Sponsors</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Meet the visionary organizations that empower BuildX India 2026. Together, we're shaping the future of innovation.
            </p>
          </motion.div>
        </div>

        <div className="space-y-40">
          <section>
            <div className="flex flex-col items-center mb-16">
              <h2 className="text-2xl font-display font-bold mb-4">Premier Partner</h2>
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />
            </div>
            <SponsorHighlight />
          </section>

          <section>
            <SponsorGrid />
          </section>

          <section className="py-24 relative">
            {/* Background Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/[0.01] select-none pointer-events-none whitespace-nowrap">
              PARTNERSHIP
            </div>

            <div className="text-center mb-20 relative z-10">
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Why <span className="text-gradient">Partner</span> With Us?</h2>
              <p className="text-slate-400 max-w-xl mx-auto">Unlock exclusive opportunities to connect with the next generation of tech leaders.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {[
                { 
                  title: 'Brand Visibility', 
                  desc: 'Showcase your brand to 5000+ passionate developers and students across India through our multi-channel marketing reach.', 
                  icon: '🎯',
                  color: 'from-blue-500/20 to-indigo-500/20'
                },
                { 
                  title: 'Talent Pipeline', 
                  desc: 'Identify and recruit top-tier technical talent. Get early access to innovative projects and the brilliant minds behind them.', 
                  icon: '🚀',
                  color: 'from-emerald-500/20 to-teal-500/20'
                },
                { 
                  title: 'Tech Evangelism', 
                  desc: 'Drive adoption of your APIs, SDKs, and platforms. Watch as participants build real-world solutions using your technology.', 
                  icon: '💡',
                  color: 'from-purple-500/20 to-pink-500/20'
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative"
                >
                  <div className={`absolute -inset-2 bg-gradient-to-br ${item.color} rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500`} />
                  <div className="relative glass p-10 rounded-[2.5rem] border-white/5 hover:border-primary/30 transition-all h-full flex flex-col">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-4xl mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:bg-primary/10">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                    
                    <div className="mt-auto pt-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[-10px] group-hover:translate-x-0">
                      Learn More <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-32">
          <p className="text-center text-xs font-bold uppercase tracking-[0.4em] text-slate-600 mb-8">Official Sponsor Wall</p>
          <SponsorMarquee />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-40 relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-[4rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
          <div className="relative glass p-12 md:p-24 rounded-[3.5rem] text-center overflow-hidden border-primary/20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 blur-[120px]" />
            
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 tracking-tight">Become a Sponsor</h2>
            <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Partner with BuildX India 2026 and connect with 5000+ developers. 
              Gain brand visibility, recruitment access, and drive tech innovation.
            </p>
            <div className="flex flex-col items-center gap-6">
              <div className="flex flex-wrap justify-center gap-6">
                <a href={rulebookPdf} target="_blank" rel="noopener noreferrer" className="btn-primary px-12 py-4 text-lg inline-block">Download Prospectus</a>
                <div className="flex flex-col items-center gap-2">
                  <a href="mailto:indiaudtech@gmail.com" className="btn-outline px-12 py-4 text-lg inline-block">Contact Our Team</a>
                  <a href="mailto:indiaudtech@gmail.com" className="text-sm text-slate-400 hover:text-primary transition-colors">indiaudtech@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
