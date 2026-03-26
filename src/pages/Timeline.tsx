import { motion } from 'motion/react';
import { Calendar, Clock, CheckCircle2, Circle, ArrowRight, Bell } from 'lucide-react';

const timelineEvents = [
  {
    date: '09',
    month: 'Mar',
    fullDate: '09 Mar 26, 08:34 PM IST',
    title: 'Hackathon Registration Open',
    description: 'Kickstart your journey! Registrations officially open for BuildX India 2026 on the Unstop platform.',
    status: 'completed',
    type: 'Registration',
  },
  {
    date: '31',
    month: 'Mar',
    fullDate: '31 Mar 26, 12:00 AM IST',
    title: 'Registration Deadline',
    description: 'Last call for innovators! Ensure your team is registered before the clock strikes midnight.',
    status: 'upcoming',
    type: 'Deadline',
  },
  {
    date: '11',
    month: 'Apr',
    fullDate: '11 Apr 26, 10:00 AM IST',
    title: 'Hackathon Start',
    description: 'The main event begins! 24 hours of non-stop building, learning, and innovation starts now.',
    status: 'upcoming',
    type: 'Event',
  },
  {
    date: '12',
    month: 'Apr',
    fullDate: '12 Apr 26, 11:00 PM IST',
    title: 'Submission Deadline',
    description: 'Time to wrap up! Submit your projects, GitHub repositories, and demo videos for evaluation.',
    status: 'upcoming',
    type: 'Deadline',
  },
  {
    date: '15',
    month: 'Apr',
    fullDate: '15 Apr 26, 09:00 PM IST',
    title: 'Evaluation Period',
    description: 'Our panel of experts reviews the submissions based on innovation, impact, and execution.',
    status: 'upcoming',
    type: 'Judging',
  },
  {
    date: '18',
    month: 'Apr',
    fullDate: '18 Apr 26, 11:59 PM IST',
    title: 'Results Announcement',
    description: 'The moment of truth! Winners are announced and prizes are awarded in the closing ceremony.',
    status: 'upcoming',
    type: 'Results',
  },
];

export default function Timeline() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 px-6 relative min-h-screen"
    >
      {/* Immersive Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-32 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-[0.2em] mb-8">
              <Calendar className="w-3.5 h-3.5" />
              BuildX 2026 Schedule
            </div>
            <h1 className="text-6xl md:text-9xl font-display font-bold mb-8 tracking-tighter">
              The <span className="text-gradient">Timeline</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              From registration to the final announcement, track every milestone of India's most anticipated student hackathon.
            </p>
          </motion.div>
          
          {/* Scroll Indicator */}
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-16 flex flex-col items-center gap-2 text-slate-500"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll to explore</span>
            <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
          </motion.div>
        </div>

        {/* Timeline Content */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central Progress Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent md:-translate-x-1/2 opacity-30" />

          <div className="space-y-24 md:space-y-40">
            {timelineEvents.map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Date Display (Center) */}
                <div className="absolute left-0 md:left-1/2 w-16 h-16 md:w-20 md:h-20 -translate-x-0 md:-translate-x-1/2 z-20">
                  <div className="w-full h-full bg-black border border-white/10 rounded-2xl md:rounded-3xl flex flex-col items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:border-primary/50 transition-colors relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
                    <span className="text-[10px] md:text-xs font-black text-primary uppercase tracking-tighter relative z-10">{event.month}</span>
                    <span className="text-2xl md:text-4xl font-display font-bold leading-none relative z-10">{event.date}</span>
                  </div>
                  {/* Glowing dot on the line */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full blur-sm animate-pulse md:hidden" />
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-[45%] pl-24 md:pl-0 ${idx % 2 === 0 ? 'md:pr-20' : 'md:pl-20'}`}>
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="glass p-8 md:p-10 rounded-[2.5rem] border-white/5 hover:border-primary/30 transition-all group relative"
                  >
                    {/* Event Type Tag */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-6 group-hover:border-primary/20 group-hover:text-primary transition-colors">
                      <div className={`w-1.5 h-1.5 rounded-full ${event.status === 'completed' ? 'bg-emerald-500' : 'bg-primary'}`} />
                      {event.type}
                    </div>

                    <div className="flex items-center gap-2 text-slate-500 text-xs font-medium mb-4">
                      <Clock className="w-3.5 h-3.5" />
                      {event.fullDate}
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-gradient transition-all">
                      {event.title}
                    </h3>
                    <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                      {event.description}
                    </p>

                    {/* Status Badge */}
                    {event.status === 'completed' && (
                      <div className="mt-6 flex items-center gap-2 text-emerald-500 text-xs font-bold uppercase tracking-widest">
                        <CheckCircle2 className="w-4 h-4" />
                        Completed
                      </div>
                    )}

                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity">
                      <Calendar className="w-24 h-24" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-40 relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-[4rem] blur opacity-25 group-hover:opacity-50 transition duration-1000" />
          <div className="relative glass p-12 md:p-24 rounded-[3.5rem] text-center overflow-hidden border-primary/20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 blur-[120px]" />
            
            <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <Bell className="w-10 h-10 text-primary animate-bounce" />
            </div>
            
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 tracking-tight">Stay <span className="text-gradient">Notified</span></h2>
            <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Don't let these dates slip by. Join our Discord community or follow us on social media for real-time updates and reminders.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="https://unstop.com/o/mFoM1gk"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-12 py-4 text-lg flex items-center gap-3"
              >
                Register Now
                <ArrowRight className="w-5 h-5" />
              </a>
              <button className="btn-outline px-12 py-4 text-lg">Join Discord</button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
