import { motion } from 'motion/react';
import { useCountdown } from '@/src/hooks/useCountdown';

export default function Countdown() {
  const { days, hours, minutes, seconds, isExpired } = useCountdown('2026-04-11T10:00:00');

  if (isExpired) return null;

  const items = [
    { label: 'Days', value: days },
    { label: 'Hours', value: hours },
    { label: 'Minutes', value: minutes },
    { label: 'Seconds', value: seconds },
  ];

  return (
    <div className="flex gap-4 md:gap-8">
      {items.map((item, idx) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + idx * 0.1 }}
          className="flex flex-col items-center"
        >
          <div className="w-16 h-16 md:w-24 md:h-24 glass rounded-2xl flex items-center justify-center mb-2">
            <span className="text-2xl md:text-4xl font-display font-bold text-gradient">
              {String(item.value).padStart(2, '0')}
            </span>
          </div>
          <span className="text-[10px] md:text-xs uppercase tracking-widest text-slate-500 font-semibold">
            {item.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
