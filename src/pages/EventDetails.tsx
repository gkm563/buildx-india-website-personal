import { motion } from 'motion/react';
import { 
  CheckCircle2, Info, Scale, HelpCircle, Calendar, Users, 
  Rocket, Code, Video, FileText, Shield, Heart, Lightbulb,
  Trophy, Globe, Zap
} from 'lucide-react';
import insightsLogo from '@/src/assets/images/insights.jpeg';
import binternzLogo from '@/src/assets/images/binternz.jpeg';
import unstopLogo from '@/src/assets/images/unstop.jpeg';
import interviewBuddyLogo from '@/src/assets/images/INTERVIEW BUDDY.jpeg';
import xyzLogo from '@/src/assets/images/xyz.jpg';
import n8nLogo from '@/src/assets/images/n8n.webp';
import certifyixLogo from '@/src/assets/images/certifix.webp';
import fuelerLogo from '@/src/assets/images/fueler.png';
import ThoreProblemStatement from '@/src/components/ThoreProblemStatement';

const faqs = [
  { q: 'Who can participate?', a: 'The hackathon is open to students, developers, and tech enthusiasts across India.' },
  { q: 'What is the team size?', a: 'You can participate individually or in teams of 1 to 4 members. Cross-college teams are allowed.' },
  { q: 'Is there a registration fee?', a: 'No, registration for BuildX India 2026 is completely free.' },
  { q: 'What is the mode of the event?', a: 'It is a 100% online hackathon. You can participate from the comfort of your home.' },
  { q: 'Can I use open-source libraries?', a: 'Yes, use of open-source libraries and APIs is allowed and encouraged.' },
];

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

export default function EventDetails() {
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
        
        {/* Animated Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            initial={{ 
              x: Math.random() * 100 + '%', 
              y: Math.random() * 100 + '%',
              opacity: Math.random() * 0.5
            }}
            animate={{ 
              y: [null, '-20%'],
              opacity: [0, 0.5, 0]
            }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}

        {/* Floating Geometric Shapes */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className="absolute border border-white/5 rounded-full"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <motion.div 
          variants={itemVariants} 
          className="text-center mb-20 relative"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Rocket className="w-4 h-4" />
            <span>Event Guide</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight">
            The BuildX <span className="text-gradient">Playbook</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Everything you need to navigate BuildX India 2026, from eligibility to submission guidelines.
          </p>
        </motion.div>

        {/* Quick Info Bento Grid */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-20">
          <div className="md:col-span-2 glass p-8 rounded-[2.5rem] flex flex-col justify-between group hover:border-primary/30 transition-all duration-500">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">11 - 12 April 2026</h3>
              <p className="text-slate-400">24 Hours of non-stop innovation and building.</p>
            </div>
          </div>
          <div className="glass p-8 rounded-[2.5rem] flex flex-col justify-between group hover:border-secondary/30 transition-all duration-500">
            <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">1 - 4</h3>
              <p className="text-slate-400">Team Size</p>
            </div>
          </div>
          <div className="glass p-8 rounded-[2.5rem] flex flex-col justify-between group hover:border-accent/30 transition-all duration-500">
            <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
              <Globe className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Online</h3>
              <p className="text-slate-400">Join from anywhere</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Rules & Guidelines */}
          <div className="lg:col-span-2 space-y-12">
            {/* Introduction */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <Info className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-display font-bold">Introduction</h2>
              </div>
              <div className="glass p-8 rounded-[2rem] text-slate-400 leading-relaxed space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl" />
                <p>
                  BuildX India 2026 is a national-level online hackathon designed to bring together developers, designers, and innovators to create impactful technology solutions.
                </p>
                <p>
                  The goal of this hackathon is to encourage innovation, collaboration, and problem-solving using modern technologies. Participants will work individually or in teams to develop projects that solve real-world challenges.
                </p>
              </div>
            </motion.section>

            {/* Rules */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500">
                  <Scale className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-display font-bold">Rules & Guidelines</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: Zap, text: 'All projects must be original work created during the hackathon.' },
                  { icon: Code, text: 'Use of open-source libraries and APIs is allowed.' },
                  { icon: Shield, text: 'Plagiarism will result in immediate disqualification.' },
                  { icon: Heart, text: 'Participants must follow ethical coding practices.' },
                  { icon: Scale, text: 'Organizers reserve the right to modify rules if necessary.' },
                  { icon: Lightbulb, text: 'Projects must be functional or a working prototype.' }
                ].map((rule, idx) => (
                  <div key={idx} className="glass p-6 rounded-2xl flex gap-4 items-start group hover:bg-white/5 transition-colors">
                    <rule.icon className="w-6 h-6 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                    <p className="text-slate-400 text-sm">{rule.text}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Submission Guidelines */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                  <Rocket className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-display font-bold">Submission Checklist</h2>
              </div>
              <div className="glass p-8 rounded-[2rem] space-y-8 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/5 blur-3xl rounded-full" />
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { icon: FileText, label: 'Project Title & Problem Statement', desc: 'Clearly define what you are solving.' },
                    { icon: Lightbulb, label: 'Solution Description', desc: 'Explain your approach and technology stack.' },
                    { icon: Code, label: 'GitHub Repository Link', desc: 'Must include source code and README.' },
                    { icon: Video, label: 'Demo Video (2–5 minutes)', desc: 'Walkthrough of your working prototype.' },
                    { icon: FileText, label: 'Presentation (PPT or PDF)', desc: 'Summary of your project for judges.' },
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx} 
                      className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-emerald-500/20 group"
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-base font-bold text-white block mb-1">{item.label}</span>
                        <p className="text-xs text-slate-500">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/10">
                  <h4 className="font-bold mb-2 text-emerald-500 flex items-center gap-2">
                    <Info className="w-4 h-4" />
                    Submission Deadline
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    All materials must be submitted via the official portal by <span className="text-white font-bold">12 April 2026, 11:59 PM</span>. Late submissions will not be considered.
                  </p>
                </div>
              </div>
            </motion.section>
          </div>

          {/* Right Column: Judging, FAQ, etc. */}
          <div className="space-y-12">
            {/* Judging Criteria */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 flex items-center justify-center text-yellow-500">
                  <Trophy className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-display font-bold">Judging</h2>
              </div>
              <div className="space-y-4">
                {[
                  { label: 'Innovation & Creativity', weight: '25%', color: 'bg-blue-500' },
                  { label: 'Technical Implementation', weight: '25%', color: 'bg-purple-500' },
                  { label: 'Problem Solving', weight: '20%', color: 'bg-cyan-500' },
                  { label: 'Impact & Feasibility', weight: '20%', color: 'bg-emerald-500' },
                  { label: 'Presentation & Demo', weight: '10%', color: 'bg-orange-500' },
                ].map((item) => (
                  <div key={item.label} className="glass p-5 rounded-2xl group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-sm">{item.label}</span>
                      <span className="text-primary font-bold text-sm">{item.weight}</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: item.weight }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className={`h-full ${item.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Code of Conduct */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-pink-500/10 flex items-center justify-center text-pink-500">
                  <Shield className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-display font-bold">Conduct</h2>
              </div>
              <div className="glass p-6 rounded-2xl text-slate-400 text-sm leading-relaxed">
                Participants must maintain a respectful and professional environment. Any form of harassment, plagiarism, or unethical behavior will lead to disqualification.
              </div>
            </motion.section>

            {/* FAQ */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-display font-bold">FAQ</h2>
              </div>
              <motion.div 
                className="space-y-3"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
              >
                {faqs.map((faq, idx) => (
                  <motion.div 
                    key={idx} 
                    variants={itemVariants}
                    className="glass p-5 rounded-2xl group cursor-pointer hover:bg-white/5 transition-all duration-300 border border-white/5 hover:border-primary/20"
                    whileHover={{ x: 10 }}
                  >
                    <h3 className="font-bold text-sm mb-2 text-white group-hover:text-primary transition-colors flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {faq.q}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed ml-3.5">{faq.a}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>
          </div>
        </div>

        {/* Thore Network Problem Statement */}
        <ThoreProblemStatement />

        {/* Final CTA / Registration Section */}
        <motion.div 
          variants={itemVariants}
          className="mt-24 glass p-12 md:p-20 rounded-[3rem] text-center relative overflow-hidden border-primary/20"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 relative z-10">Ready to <span className="text-gradient">Register?</span></h2>
          <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto relative z-10">
            Join BuildX India 2026 on Unstop and start your innovation journey.
          </p>
          <div className="flex flex-col items-center gap-12 relative z-10">
            <div className="flex justify-center gap-4">
              <a 
                href="https://unstop.com/o/mFoM1gk" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary"
              >
                Register on Unstop
              </a>
              <button className="btn-outline">Join Discord</button>
            </div>

            <div className="pt-8 border-t border-white/10 w-full max-w-md mx-auto">
              <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-6">Official Partners</p>
              <div className="flex flex-wrap justify-center items-center gap-6 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                <img src={insightsLogo} alt="Thore Network" className="h-5 object-contain" />
                <img src={binternzLogo} alt="Binternz" className="h-5 object-contain" />
                <img src={unstopLogo} alt="Unstop" className="h-5 object-contain" />
                <img src={xyzLogo} alt=".xyz" className="h-5 object-contain" />
                <img src={n8nLogo} alt="n8n" className="h-5 object-contain" />
                <img src={interviewBuddyLogo} alt="Interview Buddy" className="h-5 object-contain" />
                <img src={certifyixLogo} alt="Certifyix" className="h-5 object-contain" />
                <img src={fuelerLogo} alt="Fueler" className="h-5 object-contain" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
