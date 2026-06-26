import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  index: number;
}

export const FeatureCard = ({ title, category, description, image, index }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="group cursor-pointer"
    >
      <div className="relative aspect-[4/5] overflow-hidden mb-8">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-700" />
      </div>
      <div className="text-center">
        <span className="text-[9px] uppercase tracking-[0.4em] text-rose-gold mb-3 block opacity-80">
          {category}
        </span>
        <h3 className="text-2xl font-serif font-light mb-4 group-hover:italic transition-all duration-500">
          {title}
        </h3>
        <p className="text-xs text-muted-foreground max-w-[240px] mx-auto leading-relaxed font-light tracking-wide mb-6 uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          {description}
        </p>
        <div className="w-8 h-[1px] bg-rose-gold mx-auto group-hover:w-16 transition-all duration-700" />
      </div>
    </motion.div>
  );
};

export const Features = () => {
  const features = [
    {
      title: 'Dermal Intelligence',
      category: 'Skin AI',
      description: 'Advanced analysis for a bespoke ritual tailored to your DNA.',
      image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/c91bf8c1-7589-4171-9a1c-6c46d22dd7e3/skin-ai-luxury-card-9d9cae07-1782514298478.webp',
    },
    {
      title: 'Luminous Strands',
      category: 'Hair AI',
      description: 'Sculpting the perfect silhouette for your crowning glory.',
      image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/c91bf8c1-7589-4171-9a1c-6c46d22dd7e3/hair-ai-luxury-card-b873a728-1782514297921.webp',
    },
    {
      title: 'Virtual Atelier',
      category: 'Fashion AI',
      description: 'Couture styling reimagined through the lens of artificial intelligence.',
      image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/c91bf8c1-7589-4171-9a1c-6c46d22dd7e3/fashion-ai-luxury-card-92ce51aa-1782514298075.webp',
    },
    {
      title: 'The Circle',
      category: 'Community',
      description: 'An exclusive network for the modern empowered woman.',
      image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/c91bf8c1-7589-4171-9a1c-6c46d22dd7e3/community-luxury-card-2cc99767-1782514298452.webp',
    },
  ];

  return (
    <section id="features" className="py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          >
            <span className="text-[10px] uppercase tracking-[0.5em] text-muted-foreground mb-4 block">Our Expertise</span>
            <h2 className="text-5xl md:text-6xl font-serif font-light mb-4 italic text-foreground tracking-wide">The Art of Science</h2>
            <div className="w-20 h-[1px] bg-blush mx-auto mt-8" />
          </motion.div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-20">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
