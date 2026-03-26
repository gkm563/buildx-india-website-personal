import { motion } from 'motion/react';
import Hero from '../components/Hero';
import ThemeCards from '../components/ThemeCards';
import Timeline from '../components/Timeline';
import Prizes from '../components/Prizes';
import TeamCard from '../components/TeamCard';
import SponsorGrid from '../components/SponsorGrid';
import SponsorHighlight from '../components/SponsorHighlight';
import SponsorMarquee from '../components/SponsorMarquee';
import ProjectSubmission from '../components/ProjectSubmission';
import { ArrowRight, Users, Calendar, Globe, Trophy, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import insightsLogo from '@/src/assets/images/insights.jpeg';
import binternzLogo from '@/src/assets/images/binternz.jpeg';
import unstopLogo from '@/src/assets/images/unstop.jpeg';
import interviewBuddyLogo from '@/src/assets/images/INTERVIEW BUDDY.jpeg';
import xyzLogo from '@/src/assets/images/xyz.jpg';
import n8nLogo from '@/src/assets/images/n8n.webp';
import certifyixLogo from '@/src/assets/images/certifix.webp';
import fuelerLogo from '@/src/assets/images/fueler.png';
import rulebookPdf from '@/src/assets/docs/BuildX India 2026.pdf';
import logoImg from '@/src/assets/images/logo.jpeg';
import gautamPhoto from '@/src/assets/images/Gautam.jpg';
import udtechLogo from '@/src/assets/images/udtech_india_logo.jpg';
export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <SponsorMarquee />

      {/* Stats Section */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Participants', value: '5000+', icon: Users },
            { label: 'Days', value: '2 Days', icon: Calendar },
            { label: 'Mode', value: 'Online', icon: Globe },
            { label: 'Team Size', value: '1-4', icon: Users },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">About <span className="text-gradient">BuildX India</span></h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              BuildX India 2026 is a national-level online hackathon designed to bring together developers, designers, and innovators to create impactful technology solutions.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              Organized by UDTech India, this 24-hour marathon encourages innovation, collaboration, and problem-solving using modern technologies. Participants will work individually or in teams to develop projects that solve real-world challenges.
            </p>
            <Link to="/details" className="btn-outline inline-flex items-center gap-2">
              Learn More
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-video rounded-3xl overflow-hidden glass p-2">
              <img
                src={logoImg}
                alt="BuildX India Logo"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-darker/90 backdrop-blur-xl p-6 rounded-3xl border border-primary/30 shadow-[0_20px_40px_rgba(0,0,0,0.4)] hidden md:block group/badge">
              <div className="text-4xl font-black text-primary mb-1 group-hover/badge:scale-110 transition-transform">24h</div>
              <div className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] whitespace-nowrap">Non-stop building</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sponsor Highlight Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <SponsorHighlight />
        </div>
      </section>

      <ThemeCards />
      <Timeline />
      <Prizes />

      {/* Team Preview */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Meet the <span className="text-gradient">Team</span></h2>
              <p className="text-slate-400">The minds behind BuildX India 2026.</p>
            </div>
            <Link to="/team" className="btn-outline">View Full Team</Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'UDTech India', role: 'Organized by', image: udtechLogo },
              { name: 'Gautam Kumar Maurya', role: 'Technical Head', image: gautamPhoto },
              { name: 'Sayee', role: 'Outreach Coordinator', image: 'https://ui-avatars.com/api/?name=Sayee&background=10b981&color=fff&size=256' },
              { name: 'Aman', role: 'Operations Lead', image: 'https://ui-avatars.com/api/?name=Aman&background=8b5cf6&color=fff&size=256' },
            ].map((member, idx) => (
              <div key={idx}>
                <TeamCard 
                  name={member.name}
                  role={member.role}
                  image={member.image}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-24 px-6 bg-darker/50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-16">Sponsors & <span className="text-gradient">Partners</span></h2>
          <SponsorGrid />
          <div className="mt-16">
            <Link to="/sponsors" className="btn-outline">Become a Sponsor</Link>
          </div>
        </div>
      </section>
      
      <ProjectSubmission />
      
      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 blur-[120px]" />
        <div className="max-w-4xl mx-auto glass p-12 md:p-20 rounded-[3rem] text-center relative z-10 border-primary/20">
          <h2 className="text-3xl md:text-6xl font-display font-bold mb-8 tracking-tight">Ready to <span className="text-gradient">Build?</span></h2>
          <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto">
            Join thousands of developers across India and showcase your skills at BuildX 2026.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="https://unstop.com/o/mFoM1gk"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2 text-lg px-10"
            >
              Register on Unstop
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="pt-8 border-t border-white/10">
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-6">Official Partners</p>
            <div className="flex flex-wrap justify-center items-center gap-6 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              <img src={insightsLogo} alt="Thore Network" className="h-6 object-contain" />
              <img src={binternzLogo} alt="Binternz" className="h-6 object-contain" />
              <img src={unstopLogo} alt="Unstop" className="h-6 object-contain" />
              <img src={xyzLogo} alt=".xyz" className="h-6 object-contain" />
              <img src={n8nLogo} alt="n8n" className="h-6 object-contain" />
              <img src={interviewBuddyLogo} alt="Interview Buddy" className="h-6 object-contain" />
              <img src={certifyixLogo} alt="Certifyix" className="h-6 object-contain" />
              <img src={fuelerLogo} alt="Fueler" className="h-6 object-contain" />
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
