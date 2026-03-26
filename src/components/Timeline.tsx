import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Calendar, Clock, MapPin, Info } from 'lucide-react';

const timelineData = [
  { 
    date: '09 Mar 2026', 
    time: '08:34 PM IST',
    title: 'Hackathon Registration Open', 
    desc: 'Secure your spot in the national challenge.',
    details: 'The gateway to innovation opens. Participants from across India can start forming teams and registering on the Unstop platform.'
  },
  { 
    date: '31 Mar 2026', 
    time: '12:00 AM IST',
    title: 'Registration Deadline', 
    desc: 'Last chance to register for BuildX India.',
    details: 'Make sure your team is complete and registered. No new registrations will be accepted after this deadline.'
  },
  { 
    date: '11 Apr 2026', 
    time: '10:00 AM IST',
    title: 'Hackathon Start', 
    desc: '24 hours of intense building begins.',
    details: 'The clock starts ticking! Teams begin working on their prototypes. Mentors will be available for guidance throughout the day.'
  },
  { 
    date: '12 Apr 2026', 
    time: '11:00 PM IST',
    title: 'Submission Deadline', 
    desc: 'Submit your projects via Unstop.',
    details: 'Final call for submissions. Ensure your GitHub repo, demo video, and presentation are uploaded correctly.'
  },
  { 
    date: '15 Apr 2026', 
    time: '09:00 PM IST',
    title: 'Evaluation Period', 
    desc: 'Judges review submissions.',
    details: 'Our panel of experts evaluates projects based on innovation, technical implementation, and real-world impact.'
  },
  { 
    date: '18 Apr 2026', 
    time: '11:59 PM IST',
    title: 'Results Announcement', 
    desc: 'Winners revealed!',
    details: 'The moment of truth. Join us for the virtual closing ceremony where we announce the top teams and distribute prizes.'
  },
];

export default function Timeline() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4"
          >
            <Calendar className="w-3 h-3" />
            <span>Schedule</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">Event <span className="text-gradient">Timeline</span></h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Hover over an event to reveal more details about each stage of the hackathon.
          </p>
        </div>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent -translate-x-1/2" />

          <div className="space-y-12 md:space-y-24">
            {timelineData.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative flex items-start md:items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Content Card */}
                <div className="flex-1 pl-12 md:pl-0">
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    className={`glass p-6 md:p-8 rounded-[2rem] border-l-4 border-primary relative group cursor-help transition-all duration-500 ${
                      idx % 2 === 0 ? 'md:border-l-0 md:border-r-4 md:text-right' : ''
                    }`}
                  >
                    <div className={`flex items-center gap-3 mb-3 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <Clock className="w-5 h-5" />
                      </div>
                      <span className="text-primary font-bold tracking-tight">{item.date}</span>
                    </div>

                    <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-gradient transition-all">{item.title}</h3>
                    <p className="text-slate-400 font-medium mb-4">{item.desc}</p>

                    <AnimatePresence>
                      {(hoveredIndex === idx) && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 border-t border-white/10 mt-4 text-sm text-slate-500 leading-relaxed italic">
                            {item.details}
                          </div>
                          <div className={`flex items-center gap-4 mt-4 text-xs font-bold text-slate-400 ${idx % 2 === 0 ? 'md:justify-end' : ''}`}>
                            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {item.time}</span>
                            <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> Online</span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                    {/* Visual Indicator for Hover */}
                    <div className={`absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity ${
                      idx % 2 === 0 ? '-right-1' : '-left-1'
                    }`} />
                  </motion.div>
                </div>

                {/* Central Point */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-20">
                  <motion.div
                    animate={{
                      scale: hoveredIndex === idx ? 1.5 : 1,
                      backgroundColor: hoveredIndex === idx ? '#3b82f6' : '#1e293b',
                    }}
                    className="w-4 h-4 rounded-full border-2 border-primary shadow-[0_0_15px_rgba(59,130,246,0.5)] bg-darker"
                  />
                </div>

                {/* Empty Space for Desktop Grid */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
