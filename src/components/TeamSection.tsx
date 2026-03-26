import { motion } from 'motion/react';
import TeamCard from './TeamCard';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  description?: string;
}

interface TeamSectionProps {
  title: string;
  members: TeamMember[];
}

export default function TeamSection({ title, members }: TeamSectionProps) {
  return (
    <div className="mb-20">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-display font-bold mb-10 flex items-center gap-4"
      >
        <span className="w-12 h-[1px] bg-primary" />
        {title}
      </motion.h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {members.map((member, idx) => (
          <TeamCard
            key={member.name}
            name={member.name}
            role={member.role}
            image={member.image}
            linkedin={member.linkedin}
            description={member.description}
            delay={idx * 0.1}
          />
        ))}
      </div>
    </div>
  );
}
