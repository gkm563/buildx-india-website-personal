import { motion } from 'motion/react';
import { Send, ExternalLink, AlertCircle } from 'lucide-react';

export default function ProjectSubmission() {
  return (
    <section className="py-24 px-6 relative overflow-hidden" id="submission">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="group relative"
        >
          {/* Main Card */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-[3rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
          
          <div className="relative glass p-8 md:p-16 rounded-[3rem] border-white/10 overflow-hidden">
            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-8"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  Submissions Open
                </motion.div>

                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight">
                  BuildX India Hackathon – <br /><span className="text-gradient hover-gradient">PPT Submission Round</span>
                </h2>
                
                <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-md font-medium">
                  Welcome to the PPT Submission Round of BuildX India 🚀
                </p>

                <div className="flex flex-col gap-4 mb-8 bg-white/5 p-6 rounded-3xl border border-white/10 backdrop-blur-md hover:border-primary/30 transition-colors">
                  <p className="text-primary font-bold text-lg mb-2 flex items-center gap-2">
                    📌 Please read carefully before submitting:
                  </p>
                  <ul className="text-slate-300 list-none space-y-3 text-sm ml-2 font-medium">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                      <span>Submit your final PPT in PDF/PPT/PPTX format</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                      <span>File size limit: Max 20 MB</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                      <span>Naming format: TeamName_College_ProjectTitle</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                      <span>Last Date: 05/04/2026</span>
                    </li>
                  </ul>
                  
                  <div className="h-px bg-white/10 my-2" />
                  
                  <div className="flex items-center gap-3 text-orange-400 text-sm font-semibold">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span>⚠️ Late or incorrect submissions may be disqualified</span>
                  </div>
                  <div className="text-slate-400 text-sm mt-1 font-medium bg-darker/50 p-4 rounded-xl inline-flex items-center gap-2 border border-white/5">
                    For queries, contact: <a href="mailto:indiaudtech@gmail.com" className="text-primary hover:text-white transition-colors underline decoration-primary/50 underline-offset-4">indiaudtech@gmail.com</a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center lg:items-end justify-center">
                <motion.a
                  href="https://forms.gle/Pmf7JDxtYnAD8pSb8"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group/btn"
                >
                  <div className="absolute -inset-4 bg-primary/30 rounded-full blur-2xl opacity-0 group-hover/btn:opacity-100 transition duration-500" />
                  <div className="relative flex flex-col items-center gap-4 bg-primary text-black font-black uppercase tracking-widest px-12 py-8 rounded-[2rem] shadow-2xl shadow-primary/20 hover:shadow-primary/40 transition-all duration-500">
                    <span className="text-2xl">Submit Project</span>
                    <ExternalLink className="w-6 h-6" />
                  </div>
                </motion.a>
                
                <div className="mt-8 text-center lg:text-right">
                  <div className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 mb-2">
                    Submission Deadline
                  </div>
                  <div className="text-2xl font-display font-bold text-white">
                    April 05, 2026 <span className="text-primary">@ 11:59 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative background text */}
            <div className="absolute -bottom-10 -left-10 text-[15vw] font-black text-white/[0.02] select-none pointer-events-none whitespace-nowrap">
              SUBMIT NOW
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
