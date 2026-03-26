import { motion } from 'motion/react';
import { 
  Rocket, Brain, Search, LayoutTemplate, MessageSquareText, 
  Bot, Target, Lightbulb, FileText, Video, ListTree, CheckCircle2,
  Trophy, Sparkles
} from 'lucide-react';
import insightsLogo from '@/src/assets/images/insights.jpeg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } }
};

export default function ThoreProblemStatement() {
  return (
    <motion.section 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="mt-24 w-full"
    >
      <div className="glass p-8 md:p-12 rounded-[3rem] relative overflow-hidden border-primary/20">
        {/* Background glow for iNSIGHTS theme */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full pointer-events-none" />

        {/* Header Segment */}
        <motion.div variants={itemVariants} className="text-center mb-16 relative z-10">
          <div className="inline-flex items-center justify-center gap-3 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
            <img src={insightsLogo} alt="Thore Network iNSIGHTS" className="h-6 w-auto mix-blend-screen" />
            <span className="text-slate-300 font-semibold text-sm">Official Problem Statement by Thore Network</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white tracking-tight flex items-center justify-center gap-3">
            <Rocket className="w-8 h-8 md:w-12 md:h-12 text-primary" />
            From Idea to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Execution</span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-2xl mx-auto font-medium mb-6">
            “Don’t just think. Build with iNSIGHTS.”<br/>
            <span className="text-primary font-bold">Search Less. Solve More.</span>
          </p>
        </motion.div>

        {/* Context & Goal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 relative z-10">
          <motion.div variants={itemVariants} className="bg-slate-900/50 p-8 rounded-3xl border border-white/5">
            <div className="flex items-center gap-3 mb-4 text-white">
              <Brain className="w-6 h-6 text-secondary" />
              <h3 className="text-2xl font-bold">The Context</h3>
            </div>
            <p className="text-slate-400 leading-relaxed mb-4">
              In today's fast-paced world, students and aspiring innovators often struggle with where to start, how to validate ideas, and how to execute projects end-to-end. Despite access to information, there is a lack of structured guidance, actionable insights, and execution frameworks.
            </p>
            <p className="text-slate-300 font-medium">
              This is where <span className="text-primary font-bold">iNSIGHTS by Thore Network</span> comes in — an AI-powered Do-Engine designed to help users: <span className="text-white">Search less, Solve more, Build faster.</span>
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-slate-900/50 p-8 rounded-3xl border border-white/5 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4 text-white">
              <Target className="w-6 h-6 text-emerald-400" />
              <h3 className="text-2xl font-bold">The Goal</h3>
            </div>
            <p className="text-slate-400 leading-relaxed text-lg">
              To empower participants to move beyond just ideas and actually <span className="text-white font-bold">build execution-ready projects</span> using AI as a co-pilot.
            </p>
          </motion.div>
        </div>

        {/* Challenge Breakdown */}
        <motion.div variants={itemVariants} className="mb-16 relative z-10">
          <h3 className="text-3xl font-display font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
            <Sparkles className="w-8 h-8 text-amber-400" />
            The Challenge
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "1. Problem Discovery (Deep Search)",
                icon: Search,
                color: "text-blue-400",
                bg: "bg-blue-400/10",
                points: ["Identify a relevant real-world problem", "Analyze existing solutions, gaps, and opportunities", "Validate problem significance with insights"]
              },
              {
                title: "2. Build via Project HUB",
                icon: LayoutTemplate,
                color: "text-purple-400",
                bg: "bg-purple-400/10",
                points: ["Create a structured project on iNSIGHTS Project HUB", "Define: Problem Statement, Target Users, Proposed Solution", "Execution Plan (MVP approach) & Tech Stack / AI Integration"]
              },
              {
                title: "3. Content & Communication (Creatya)",
                icon: MessageSquareText,
                color: "text-pink-400",
                bg: "bg-pink-400/10",
                points: ["Generate social media launch content with Creatya", "Create pitch descriptions and storytelling", "Design a high-engagement reel or post"]
              },
              {
                title: "4. AI Assistance (AI Buddy)",
                icon: Bot,
                color: "text-emerald-400",
                bg: "bg-emerald-400/10",
                points: ["Get guidance on end-to-end execution", "Improve your software/solution architecture", "Refine pitch & presentation directly with the AI"]
              }
            ].map((step, idx) => (
              <div key={idx} className="bg-slate-800/40 p-6 rounded-3xl border border-white/10 hover:border-white/20 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-2xl ${step.bg} flex items-center justify-center`}>
                    <step.icon className={`w-6 h-6 ${step.color}`} />
                  </div>
                  <h4 className="text-xl font-bold text-white">{step.title}</h4>
                </div>
                <ul className="space-y-3">
                  {step.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-400 text-sm">
                      <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${step.color.replace('text', 'bg')}`} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Deliverables & Evaluation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 relative z-10">
          {/* Deliverables */}
          <motion.div variants={itemVariants} className="bg-slate-900/50 p-8 rounded-3xl border border-white/5">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <FileText className="w-6 h-6 text-primary" />
              Expected Deliverables
            </h3>
            <ul className="space-y-4">
              {[
                "Project Link (iNSIGHTS Project HUB)",
                "Problem + Solution Deck (PDF)",
                "1 High-Quality Reel / Demo Video (30–60 sec)",
                "Deep Search Insights Summary",
                "Execution Plan / MVP Roadmap"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 bg-slate-800/50 p-3 rounded-xl border border-white/5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-slate-300 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Evaluation Criteria */}
          <motion.div variants={itemVariants} className="bg-slate-900/50 p-8 rounded-3xl border border-white/5">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Trophy className="w-6 h-6 text-amber-400" />
              Evaluation Criteria
            </h3>
            <div className="space-y-4">
              {[
                { label: 'Use of iNSIGHTS Ecosystem', weight: '25%', color: 'bg-primary' },
                { label: 'Problem Relevance & Clarity', weight: '20%', color: 'bg-blue-500' },
                { label: 'Innovation & Creativity', weight: '20%', color: 'bg-purple-500' },
                { label: 'Execution Feasibility', weight: '15%', color: 'bg-emerald-500' },
                { label: 'Content & Storytelling', weight: '10%', color: 'bg-pink-500' },
                { label: 'Demo / Reel Quality', weight: '10%', color: 'bg-amber-500' },
              ].map((item) => (
                <div key={item.label} className="group">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium text-slate-300 text-sm">{item.label}</span>
                    <span className="text-white font-bold text-sm">{item.weight}</span>
                  </div>
                  <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: item.weight }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className={`h-full ${item.color} rounded-full`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Suggested Domains */}
        <motion.div variants={itemVariants} className="text-center relative z-10 w-full">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center gap-3">
            <Lightbulb className="w-6 h-6 text-yellow-400" />
            Suggested Domains (Optional)
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              "Women Safety & Empowerment",
              "HealthTech / Wellness",
              "FinTech / Financial Literacy",
              "Education & Skill Development",
              "Sustainability / Climate Tech",
              "AI for Social Impact"
            ].map((domain, idx) => (
              <span key={idx} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-slate-300 text-sm hover:bg-white/10 hover:text-white transition-colors cursor-default">
                {domain}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}
