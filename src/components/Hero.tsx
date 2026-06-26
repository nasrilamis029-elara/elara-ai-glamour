import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white pt-20">
      <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Text Content */}
        <div className="lg:col-span-5 z-10 text-center lg:text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-rose-gold font-semibold mb-6 block">
              The Future of Beauty
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-light text-foreground leading-[0.9] mb-8">
              Pure <br />
              <span className="italic">Radiance</span>
            </h1>
            <p className="text-sm md:text-base text-muted-foreground mb-12 max-w-md mx-auto lg:mx-0 leading-relaxed font-light tracking-wide">
              Where sophisticated AI meets high-fashion artistry. Discover a personalized journey curated just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <button className="luxury-button-filled group relative overflow-hidden">
                <span className="relative z-10">Discover AI Atelier</span>
              </button>
              <button className="luxury-button group relative overflow-hidden">
                <span className="relative z-10">Shop Collections</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Hero Image Section */}
        <div className="lg:col-span-7 order-1 lg:order-2 h-[60vh] lg:h-[80vh] relative">
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full relative"
          >
            <div className="absolute inset-0 border-[20px] border-blush/20 z-0 translate-x-8 translate-y-8 hidden lg:block" />
            <img
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/c91bf8c1-7589-4171-9a1c-6c46d22dd7e3/luxury-hero-shot-923c57de-1782514300324.webp"
              alt="Luxury Beauty"
              className="w-full h-full object-cover relative z-10 shadow-2xl"
            />
            
            {/* Overlay Info Card */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 1.5 }}
              className="absolute bottom-12 -left-8 lg:-left-12 bg-white p-8 z-20 shadow-xl max-w-[280px] hidden md:block"
            >
              <div className="border-l border-rose-gold pl-4">
                <p className="text-[10px] uppercase tracking-[0.2em] text-rose-gold font-bold mb-2">Editor's Choice</p>
                <h3 className="font-serif italic text-xl mb-3">Infinite Glow</h3>
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest leading-loose">
                  Curated skincare rituals powered by neural skin analysis.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
