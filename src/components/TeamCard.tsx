import React from 'react';
import { motion } from 'motion/react';
import { Linkedin } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  description?: string;
  delay?: number;
}

const TeamCard: React.FC<TeamMemberProps> = ({ name, role, image, linkedin, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -10 }}
      className="group relative"
    >
      <div className="glass rounded-3xl overflow-hidden border border-white/10 group-hover:border-primary/30 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
        {/* Profile Image */}
        <div className="aspect-square overflow-hidden relative">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
          
          {/* LinkedIn Overlay */}
          {linkedin && (
            <motion.a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`LinkedIn profile of ${name}`}
              className="absolute bottom-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all duration-300 translate-y-12 group-hover:translate-y-0"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
          )}
        </div>

        {/* Content */}
        <div className="p-6 text-center">
          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-slate-400 text-sm font-medium">
            {role}
          </p>
          {description && (
            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-xs text-slate-500 leading-relaxed text-left">
                {description}
              </p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TeamCard;
