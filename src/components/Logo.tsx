import React from 'react';
import { Rocket } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import logoImg from '@/src/assets/images/logo.jpeg';

interface LogoProps {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  showText?: boolean;
}

export default function Logo({ 
  className, 
  iconClassName, 
  textClassName,
  showText = true 
}: LogoProps) {
  return (
    <div className={cn("flex items-center gap-3 group", className)}>
      <div className={cn(
        "relative w-10 h-10 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center group-hover:rotate-12 transition-all duration-500 shadow-xl shadow-primary/10 overflow-hidden",
        iconClassName
      )}>
        <img 
          src={logoImg} 
          alt="BuildX" 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Decorative elements */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full border-2 border-black animate-pulse" />
      </div>
      
      {showText && (
        <div className={cn("flex flex-col leading-none", textClassName)}>
          <span className="font-display font-black text-xl tracking-tighter uppercase italic">
            Build<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary">X</span>
          </span>
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/40 -mt-0.5 group-hover:text-primary transition-colors">
            India 2026
          </span>
        </div>
      )}
    </div>
  );
}
