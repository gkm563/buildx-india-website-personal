import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Calendar, Clock, MapPin, CheckCircle2, ChevronRight, Bell } from 'lucide-react';

const timelineData = [
  { 
    date: '09',
    month: 'Mar',
    fullDate: '09 Mar 2026', 
    time: '08:34 PM IST',
    title: 'Hackathon Registration Open', 
    desc: 'Secure your spot in the national challenge.',
    details: 'The gateway to innovation opens. Participants from across India can start forming teams and registering on the Unstop platform.',
    status: 'completed',
    type: 'Registration'
  },
  { 
    date: '31',
    month: 'Mar',
    fullDate: '31 Mar 2026', 
    time: '12:00 AM IST',
    title: 'Registration Deadline', 
    desc: 'Last chance to register for BuildX India.',
    details: 'Make sure your team is complete and registered. No new registrations will be accepted after this deadline.',
    status: 'upcoming',
    type: 'Deadline'
  },
  { 
    date: '11',
    month: 'Apr',
    fullDate: '11 Apr 2026', 
    time: '10:00 AM IST',
    title: 'Hackathon Start', 
    desc: '24 hours of intense building begins.',
    details: 'The clock starts ticking! Teams begin working on their prototypes. Mentors will be available for guidance throughout the day.',
    status: 'upcoming',
    type: 'Event'
  },
  { 
    date: '12',
    month: 'Apr',
    fullDate: '12 Apr 2026', 
    time: '11:00 PM IST',
    title: 'Submission Deadline', 
    desc: 'Submit your projects via Unstop.',
    details: 'Final call for submissions. Ensure your GitHub repo, demo video, and presentation are uploaded correctly.',
    status: 'upcoming',
    type: 'Deadline'
  },
  { 
    date: '15',
    month: 'Apr',
    fullDate: '15 Apr 2026', 
    time: '09:00 PM IST',
    title: 'Evaluation Period', 
    desc: 'Judges review submissions.',
    details: 'Our panel of experts evaluates projects based on innovation, technical implementation, and real-world impact.',
    status: 'upcoming',
    type: 'Judging'
  },
  { 
    date: '18',
    month: 'Apr',
    fullDate: '18 Apr 2026', 
    time: '11:59 PM IST',
    title: 'Results Announcement', 
    desc: 'Winners revealed!',
    details: 'The moment of truth. Join us for the virtual closing ceremony where we announce the top teams and distribute prizes.',
    status: 'upcoming',
    type: 'Results'
  },
];

export default function Timeline() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-slate-950/50">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4 border border-primary/20"
          >
            <Calendar className="w-3 h-3" />
            <span>Schedule</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">Event <span className="text-gradient">Timeline</span></h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            The complete roadmap for BuildX India 2026. Mark your calendars for these critical milestones.
          </p>
        </div>

        {/* Enhanced Timeline UI */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Timeline Scroll/List */}
          <div className="lg:col-span-5 space-y-4">
            {timelineData.map((item, idx) => (
              <motion.button
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setActiveTab(idx)}
                className={`w-full text-left p-6 rounded-3xl transition-all duration-300 border flex items-center gap-6 group ${
                  activeTab === idx 
                    ? 'bg-primary/10 border-primary/30 shadow-[0_0_30px_rgba(59,130,246,0.1)]' 
                    : 'bg-white/5 border-white/5 hover:bg-white/10'
                }`}
              >
                <div className={`w-14 h-14 rounded-2xl flex flex-col items-center justify-center shrink-0 border transition-colors ${
                  activeTab === idx ? 'bg-primary border-primary/50 text-white' : 'bg-slate-900 border-white/10 text-slate-400 group-hover:border-primary/30'
                }`}>
                  <span className="text-[10px] font-bold uppercase leading-none mb-1">{item.month}</span>
                  <span className="text-xl font-display font-bold leading-none">{item.date}</span>
                </div>
                <div className="flex-grow min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${activeTab === idx ? 'text-primary' : 'text-slate-500'}`}>
                      {item.type}
                    </span>
                    {item.status === 'completed' && <CheckCircle2 className="w-3 h-3 text-emerald-500" />}
                  </div>
                  <h3 className={`font-bold truncate transition-colors ${activeTab === idx ? 'text-white' : 'text-slate-300'}`}>
                    {item.title}
                  </h3>
                </div>
                <ChevronRight className={`w-5 h-5 transition-transform ${activeTab === idx ? 'text-primary translate-x-1' : 'text-slate-600'}`} />
              </motion.button>
            ))}
          </div>

          {/* Detailed View */}
          <div className="lg:col-span-7 sticky top-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="glass p-8 md:p-12 rounded-[3.5rem] border-primary/20 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-12 opacity-5 translate-x-1/4 -translate-y-1/4">
                  <Clock className="w-64 h-64 text-primary" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-4 rounded-2xl bg-primary/10 text-primary">
                      <Bell className="w-8 h-8" />
                    </div>
                    <div>
                      <div className="text-slate-500 text-sm font-medium mb-1 flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {timelineData[activeTab].fullDate} • {timelineData[activeTab].time}
                      </div>
                      <h3 className="text-3xl md:text-4xl font-display font-bold text-white">
                        {timelineData[activeTab].title}
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-6 mb-12">
                    <p className="text-xl text-slate-300 leading-relaxed font-medium">
                      {timelineData[activeTab].desc}
                    </p>
                    <div className="h-px w-20 bg-primary/50" />
                    <p className="text-slate-400 leading-relaxed">
                      {timelineData[activeTab].details}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span className="font-bold text-slate-200">Online Event</span>
                    </div>
                    {timelineData[activeTab].status === 'completed' && (
                      <div className="px-6 py-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                        <span className="font-bold text-emerald-500">Completed</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Hint for interaction */}
            <p className="text-center mt-8 text-slate-500 text-sm italic">
              Select a milestone to view detailed information and schedule.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
