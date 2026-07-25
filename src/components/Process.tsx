import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Discovery & Strategy",
    description: "We dive deep into your brand's core truth, understanding your vision, audience, and market landscape to establish a solid strategic foundation that informs every design decision.",
    image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=2671&auto=format&fit=crop"
  },
  {
    num: "02",
    title: "Conceptualization",
    description: "Translating strategy into visual directions. We explore moodboards, typographic pairings, and initial concepts that capture the brand's essence and differentiate it in the market.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2664&auto=format&fit=crop"
  },
  {
    num: "03",
    title: "Design & Execution",
    description: "Crafting the final identity. This includes logo design, color palettes, typography systems, and a comprehensive visual language that is both beautiful and functional.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
  },
  {
    num: "04",
    title: "Application",
    description: "Bringing the brand to life across various touchpoints. From packaging and stationery to digital platforms and physical spaces, ensuring a cohesive experience everywhere.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop"
  },
  {
    num: "05",
    title: "Delivery",
    description: "Handover of meticulously organized assets and comprehensive brand guidelines to ensure consistency moving forward and empower your team to use the new identity.",
    image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=2667&auto=format&fit=crop"
  }
];

export default function Process() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="about" className="relative bg-charcoal text-sand py-24 md:py-48 min-h-screen flex items-center z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-32">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="uppercase tracking-widest text-sm mb-6 text-sand/60 font-mono"
          >
            The Methodology
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.1] max-w-2xl"
          >
            A disciplined <span className="italic text-sand/70">approach</span> to creation.
          </motion.h2>
        </div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-24 relative items-start">
          
          {/* Left: The Index */}
          <div className="w-full md:w-1/2 lg:w-7/12 flex flex-col">
            {PROCESS_STEPS.map((step, index) => (
              <div 
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                className="group border-b border-sand/20 py-8 md:py-10 cursor-pointer relative"
              >
                <div className="flex items-baseline gap-6 md:gap-10 relative z-10">
                  <span className={`font-mono text-sm transition-colors duration-500 ${activeIndex === index ? 'text-sand' : 'text-sand/30'}`}>
                    {step.num}
                  </span>
                  <h3 className={`font-serif text-3xl md:text-5xl lg:text-6xl transition-all duration-500 ${activeIndex === index ? 'text-sand italic' : 'text-sand/40 group-hover:text-sand/70'}`}>
                    {step.title}
                  </h3>
                </div>
                
                {/* Description & Mobile Image - reveals on active */}
                <motion.div 
                  initial={false}
                  animate={{ 
                    height: activeIndex === index ? 'auto' : 0,
                    opacity: activeIndex === index ? 1 : 0,
                    marginTop: activeIndex === index ? 24 : 0
                  }}
                  className="overflow-hidden"
                >
                  <div className="ml-0 md:ml-16 lg:ml-20">
                    <p className="font-sans text-sand/70 leading-relaxed text-sm md:text-base max-w-md">
                      {step.description}
                    </p>
                    
                    {/* Mobile Image */}
                    <div className="md:hidden aspect-[4/3] w-full overflow-hidden rounded-sm mt-8">
                       <img 
                         src={step.image} 
                         alt={step.title} 
                         className="w-full h-full object-cover filter grayscale" 
                       />
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Right: The Visual (Sticky on Desktop) */}
          <div className="w-full md:w-1/2 lg:w-5/12 hidden md:block sticky top-32">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-sm relative">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIndex}
                  src={PROCESS_STEPS[activeIndex].image}
                  alt={PROCESS_STEPS[activeIndex].title}
                  initial={{ opacity: 0, scale: 1.05, filter: "blur(10px) grayscale(100%)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px) grayscale(0%)" }}
                  exit={{ opacity: 0, scale: 0.95, filter: "blur(10px) grayscale(100%)" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
