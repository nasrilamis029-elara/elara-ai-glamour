import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white py-24 border-t border-blush/30">
      <div className="container mx-auto px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-5">
            <h2 className="text-4xl font-serif font-light tracking-[0.2em] mb-10">ELARA</h2>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground leading-loose mb-10 max-w-sm font-light">
              Elevating the standard of beauty through technological mastery and artistic vision. Join the movement of the modern woman.
            </p>
            <div className="flex space-x-8">
              <a href="#" className="text-foreground hover:text-rose-gold transition-colors duration-300">
                <Instagram size={18} strokeWidth={1} />
              </a>
              <a href="#" className="text-foreground hover:text-rose-gold transition-colors duration-300">
                <Twitter size={18} strokeWidth={1} />
              </a>
              <a href="#" className="text-foreground hover:text-rose-gold transition-colors duration-300">
                <Facebook size={18} strokeWidth={1} />
              </a>
              <a href="#" className="text-foreground hover:text-rose-gold transition-colors duration-300">
                <Linkedin size={18} strokeWidth={1} />
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-7 grid md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 text-rose-gold">Atelier</h4>
              <ul className="space-y-6">
                <li><a href="#" className="text-[10px] uppercase tracking-[0.2em] hover:text-rose-gold transition-colors">Skin AI</a></li>
                <li><a href="#" className="text-[10px] uppercase tracking-[0.2em] hover:text-rose-gold transition-colors">Hair AI</a></li>
                <li><a href="#" className="text-[10px] uppercase tracking-[0.2em] hover:text-rose-gold transition-colors">Fashion AI</a></li>
                <li><a href="#" className="text-[10px] uppercase tracking-[0.2em] hover:text-rose-gold transition-colors">Community</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 text-rose-gold">Maison</h4>
              <ul className="space-y-6">
                <li><a href="#" className="text-[10px] uppercase tracking-[0.2em] hover:text-rose-gold transition-colors">Philosophy</a></li>
                <li><a href="#" className="text-[10px] uppercase tracking-[0.2em] hover:text-rose-gold transition-colors">Sustainability</a></li>
                <li><a href="#" className="text-[10px] uppercase tracking-[0.2em] hover:text-rose-gold transition-colors">Press</a></li>
                <li><a href="#" className="text-[10px] uppercase tracking-[0.2em] hover:text-rose-gold transition-colors">Careers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 text-rose-gold">Assistance</h4>
              <ul className="space-y-6">
                <li><a href="#" className="text-[10px] uppercase tracking-[0.2em] hover:text-rose-gold transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-[10px] uppercase tracking-[0.2em] hover:text-rose-gold transition-colors">Bespoke Rituals</a></li>
                <li><a href="#" className="text-[10px] uppercase tracking-[0.2em] hover:text-rose-gold transition-colors">Privacy</a></li>
                <li><a href="#" className="text-[10px] uppercase tracking-[0.2em] hover:text-rose-gold transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-blush/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[9px] uppercase tracking-[0.3em] text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ELARA. All rights reserved.</p>
          <div className="flex space-x-8 italic">
            <span>Paris</span>
            <span>London</span>
            <span>New York</span>
            <span>Tokyo</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
