import { motion } from 'motion/react';
import TeamSection from '../components/TeamSection';
import Particles from '../components/Particles';
import gautamPhoto from '@/src/assets/images/Gautam.jpg';
import udtechLogo from '@/src/assets/images/udtech_india_logo.jpg';
import rohitPhoto from '@/src/assets/images/rohit.jpg';

const coreTeam = [
  {
    name: "UDTech India",
    role: "Organized by",
    image: udtechLogo,
    linkedin: "https://www.linkedin.com/company/udtech-india"
  },
  {
    name: "Gautam Kumar Maurya",
    role: "Technical Head",
    image: gautamPhoto,
    linkedin: "https://www.linkedin.com/in/gkm563"
  },
  {
    name: "Sayee",
    role: "Outreach Coordinator",
    image: "https://ui-avatars.com/api/?name=Sayee&background=10b981&color=fff&size=256",
    linkedin: "#"
  },
  {
    name: "Aman",
    role: "Operations Lead",
    image: "https://ui-avatars.com/api/?name=Aman&background=8b5cf6&color=fff&size=256",
    linkedin: "#"
  }
];

const volunteers = [
  {
    name: "Rohit",
    role: "Content Creator",
    image: rohitPhoto,
    linkedin: "https://www.linkedin.com/in/rohit-pal-98230131a"
  },
  {
    name: "Nikhil",
    role: "Graphics Designer",
    image: "https://ui-avatars.com/api/?name=Nikhil&background=f59e0b&color=fff&size=256",
    linkedin: "#"
  },
  {
    name: "Shubhanshu",
    role: "Mentor & Judge Coordinator",
    image: "https://ui-avatars.com/api/?name=Shubhanshu&background=ec4899&color=fff&size=256",
    linkedin: "#"
  },
  {
    name: "Harsh Upadhyay",
    role: "Technical Support Lead",
    image: "https://ui-avatars.com/api/?name=Harsh+Upadhyay&background=ef4444&color=fff&size=256",
    linkedin: "#"
  }
];

export default function Team() {
  return (
    <div className="min-h-screen pt-32 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-20" />
      <Particles />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            Meet the <span className="text-gradient">Team</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            The passionate individuals working behind the scenes to make BuildX India 2026 a reality.
          </p>
        </motion.div>

        <TeamSection title="Core Team" members={coreTeam} />
        <TeamSection title="Volunteers" members={volunteers} />
      </div>
    </div>
  );
}
