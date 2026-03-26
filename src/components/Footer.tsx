import { Link } from 'react-router-dom';
import { Rocket, Twitter, Github, Linkedin, Mail, Instagram } from 'lucide-react';
import logoImg from '@/src/assets/images/logo.jpeg';

export default function Footer() {
  return (
    <footer className="bg-darker border-t border-white/10 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-white to-secondary rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-500" />
                <div className="relative w-12 h-12 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center overflow-hidden">
                  <img 
                    src={logoImg} 
                    alt="BuildX India Logo" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl tracking-tight leading-none">
                  BuildX <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">India</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">2026 Edition</span>
              </div>
            </Link>
            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
              National level innovation challenge organized by UDTech India. 
              Empowering the next generation of developers to build impactful solutions.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/udtech-india" aria-label="LinkedIn Profile" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 hover:text-primary hover:border-primary/50 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/udtech2026" aria-label="Instagram Profile" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 hover:text-primary hover:border-primary/50 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/details" className="hover:text-primary transition-colors">Event Details</Link></li>
              <li><Link to="/sponsors" className="hover:text-primary transition-colors">Sponsors</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                indiaudtech@gmail.com
              </li>
              <li>UDTech India</li>
              <li>Online Event</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2026 BuildX India. All rights reserved. Organized by UDTech India.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
