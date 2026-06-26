import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Collections', href: '#' },
    { name: 'Skin Intelligence', href: '#features' },
    { name: 'Hair Rituals', href: '#features' },
    { name: 'Virtual Atelier', href: '#features' },
    { name: 'The Circle', href: '#community' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm border-b border-blush/30 py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-8 lg:px-12 flex justify-between items-center">
        {/* Desktop Nav Left */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.slice(0, 2).map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] uppercase tracking-[0.2em] font-medium hover:text-rose-gold transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a href="#" className="flex items-center">
          <span className="text-3xl md:text-4xl font-serif font-light tracking-[0.15em] text-foreground">ELARA</span>
        </a>

        {/* Desktop Nav Right */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.slice(2).map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] uppercase tracking-[0.2em] font-medium hover:text-rose-gold transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <button className="text-[10px] uppercase tracking-[0.2em] border border-foreground px-6 py-2 hover:bg-foreground hover:text-white transition-all duration-500">
            Account
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} strokeWidth={1} /> : <Menu size={20} strokeWidth={1} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden fixed inset-0 top-[73px] bg-white z-40 overflow-hidden"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8 p-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg uppercase tracking-[0.3em] font-light hover:text-rose-gold transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="text-xs uppercase tracking-[0.2em] border border-foreground px-12 py-4 hover:bg-foreground hover:text-white transition-all duration-500 mt-4">
                Explore More
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
