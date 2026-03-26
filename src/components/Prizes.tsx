import { motion } from 'motion/react';
import { Trophy, Award, Medal } from 'lucide-react';

const prizes = [
  {
    rank: 'Winner',
    amount: '₹5,000 Cash',
    perks: [
      'Certificate of Achievement',
      'Internship Opportunities (Top Performers)',
      'Swag Kits & Goodies (if applicable)',
      'Feature on Official Social Media Pages',
      'Networking Opportunities with Industry Experts',
      'Other special sponsor rewards'
    ],
    icon: Trophy,
    color: 'from-orange-500 to-amber-500' // vibrant orange
  },
  {
    rank: 'Runner-up',
    amount: '₹2,000 Cash',
    perks: [
      'Certificate of Achievement',
      'Internship Opportunities (Top Performers)',
      'Swag Kits & Goodies (if applicable)',
      'Feature on Official Social Media Pages',
      'Networking Opportunities with Industry Experts'
    ],
    icon: Award,
    color: 'from-cyan-500 to-blue-500' // cyan/blue
  },
  {
    rank: 'Top 20',
    amount: 'Special Rewards',
    perks: [
      'Certificate of Achievement',
      'Some special rewards'
    ],
    icon: Trophy,
    color: 'from-pink-500 to-rose-500' // pink/rose
  },
  {
    rank: 'Participation',
    amount: 'Certificate',
    perks: [
      'Participation Certificate'
    ],
    icon: Award,
    color: 'from-emerald-500 to-teal-500' // emerald/teal
  }
];

export default function Prizes() {
  return (
    <section className="py-24 px-6 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-white">Prizes & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Recognition</span></h2>
          <p className="text-slate-300 font-medium">Rewarding the most innovative minds in the country.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {prizes.map((prize, idx) => (
            <motion.div
              key={prize.rank}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative rounded-3xl group ${idx === 0 ? 'scale-105 z-10' : ''}`}
            >
              {/* Magic Border Effect for Top Prize */}
              {idx === 0 && (
                <div className="absolute -inset-[3px] bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl opacity-70 group-hover:opacity-100 blur-sm animate-gradient-xy transition-opacity duration-500" />
              )}
              
              <div className="relative bg-slate-800/40 backdrop-blur-md p-8 rounded-3xl h-full shadow-lg border border-white/10 overflow-hidden z-10 hover:shadow-2xl hover:border-white/20 transition-all duration-500">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${prize.color} opacity-10 blur-3xl`} />
                
                <motion.div 
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: idx * 0.2 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${prize.color} flex items-center justify-center mb-6 shadow-lg`}
                >
                  <prize.icon className="text-white w-8 h-8" />
                </motion.div>

                <h3 className="text-2xl font-bold mb-2 text-white">{prize.rank}</h3>
                <p className="text-primary font-display font-black text-xl mb-6">{prize.amount}</p>

                <ul className="space-y-3">
                  {prize.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-3 text-sm text-slate-300 font-medium">
                      <div className="w-2 h-2 rounded-full bg-primary shadow-sm shadow-primary/50" />
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-slate-800/40 backdrop-blur-md px-8 py-4 rounded-3xl border border-white/10 shadow-lg relative z-10 hover:border-white/20 transition-all text-left">
            <p className="text-sm text-slate-300 font-medium mb-2">
              <span className="text-primary font-bold text-base mr-1">Note:</span> The prize will be awarded to the winning team based on final evaluation by the judging panel. All decisions by the judges will be final and binding.
            </p>
            <p className="text-sm text-slate-300 font-medium">
              * All the prizes and certificates will be released within a few days after the announcement of results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
