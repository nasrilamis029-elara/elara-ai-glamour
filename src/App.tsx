import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-rose-gold/20">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Distinction Line */}
        <div className="container mx-auto px-6 lg:px-12">
          <div className="w-full h-[1px] bg-blush/20" />
        </div>

        <Features />
        
        {/* CTA Section */}
        <section className="py-40 bg-blush/5 overflow-hidden relative border-t border-blush/20">
          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-[10px] uppercase tracking-[0.5em] text-rose-gold mb-8 block font-semibold">
                The Invitation
              </span>
              <h2 className="text-5xl md:text-7xl font-serif font-light text-foreground mb-12 italic tracking-wide">
                Join the Global <br /> Beauty Atelier
              </h2>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-16 max-w-xl mx-auto leading-loose font-light">
                Step into the future of personalized luxury. Access our exclusive AI rituals and connect with a community that defines elegance.
              </p>
              <button className="luxury-button-filled">
                Apply for Membership
              </button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
