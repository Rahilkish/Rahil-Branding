import { motion, AnimatePresence } from 'motion/react';
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const CAPABILITIES = [
  {
    category: "Logo & Brand Marks",
    detail: "Core typographic and symbolic marks.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2671&auto=format&fit=crop"
  },
  {
    category: "Colour & Type Systems",
    detail: "Establishing the foundational visual language.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
  },
  {
    category: "Signage & Banners",
    detail: "Designed and produced for live exhibitions.",
    image: "https://images.unsplash.com/photo-1588693822180-8777176cb68f?q=80&w=2574&auto=format&fit=crop"
  },
  {
    category: "Social & Digital Assets",
    detail: "Responsive systems for digital touchpoints.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop"
  },
  {
    category: "Packaging & Print Collateral",
    detail: "Tactile goods and printed brand applications.",
    image: "https://images.unsplash.com/photo-1606148332025-f3f260bc347f?q=80&w=2670&auto=format&fit=crop"
  },
  {
    category: "Event / Exhibition Collateral",
    detail: "Physical and environmental brand extensions.",
    image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=2667&auto=format&fit=crop"
  }
];

import { ScrambleText } from './ScrambleText';

export default function Process() {
  const [selectedItem, setSelectedItem] = useState<typeof CAPABILITIES[0] | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedItem(null);
      }
    };
    if (selectedItem) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem]);

  return (
    <section id="about" className="relative bg-charcoal text-sand py-24 md:py-48 min-h-screen flex items-center z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative">
        
        {/* Bio Block */}
        <div className="mb-24 md:mb-40 border-b border-sand/20 pb-24 md:pb-40">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-24">
            
            {/* Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full md:w-2/5 lg:w-5/12"
            >
              <div className="w-full max-w-sm mx-auto aspect-[3/4] overflow-hidden rounded-sm bg-sand/10 relative group">
                <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none" />
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
                  alt="Rahil" 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                />
              </div>
            </motion.div>

            {/* Text Content */}
            <div className="w-full md:w-3/5 lg:w-7/12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-6 md:mb-8"
              >
                <p className="uppercase tracking-widest text-sm text-sand/60 font-mono">
                  Who I Am
                </p>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-serif text-4xl md:text-5xl lg:text-7xl leading-[1.1] mb-8 text-sand"
              >
                <ScrambleText text="I'm Rahil." delay={0.1} /><br />
                <ScrambleText text="Designer, maker," delay={0.1} /><br className="hidden md:block" />
                <ScrambleText text="and strategist." delay={0.1} />
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col gap-6"
              >
                <p className="font-sans text-sand/80 leading-relaxed md:text-lg max-w-xl">
                  Based in Kolkata, I partner with founders to build brands that are grounded in reality—stress-tested against real constraints, not just moodboards.
                </p>
                <p className="font-sans text-sand/80 leading-relaxed md:text-lg max-w-xl">
                  Beyond the screen, I build with my hands. Glass, wood, brass casting, and 3D printing. Understanding physical materials fundamentally changes how I design digital systems.
                </p>

                <motion.div
                  initial={false}
                  animate={{ 
                    height: showMoreInfo ? 'auto' : 0, 
                    opacity: showMoreInfo ? 1 : 0,
                    marginTop: showMoreInfo ? 8 : 0
                  }}
                  className="overflow-hidden"
                >
                  <p className="font-sans text-sand/80 leading-relaxed md:text-lg max-w-xl pb-2">
                    I believe that strong design isn't just aesthetic—it's structural. From concept to execution, I bring a systematic approach to creativity, ensuring every touchpoint communicates your core vision. Whether iterating through CAD models or designing responsive interfaces, the goal is always clear, functional, and enduring.
                  </p>
                </motion.div>

                <button
                  onClick={() => setShowMoreInfo(!showMoreInfo)}
                  className="text-left font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-sand/50 hover:text-sand transition-colors mt-2 underline decoration-sand/30 hover:decoration-sand underline-offset-4 w-fit"
                >
                  {showMoreInfo ? 'Less about me' : 'More about me'}
                </button>
              </motion.div>
            </div>
            
          </div>
        </div>

        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="uppercase tracking-widest text-sm mb-6 text-sand/60 font-mono"
          >
            What I Do
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.1] max-w-4xl"
          >
            One brand, everywhere <br className="hidden md:block" />it needs to show up.
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full">
          {CAPABILITIES.map((item, index) => {
            const isHovered = hoveredIndex === index;
            const isAnythingHovered = hoveredIndex !== null;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setSelectedItem(item)}
                className={`group relative aspect-square md:aspect-[4/5] overflow-hidden cursor-pointer rounded-sm transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isAnythingHovered && !isHovered ? 'opacity-40 grayscale' : 'opacity-100'
                } ${isHovered ? 'z-10 shadow-2xl md:-translate-y-2' : 'z-0'}`}
              >
                <img
                  src={item.image}
                  alt={item.category}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none ${
                    isHovered ? 'grayscale-0 scale-105' : 'grayscale scale-100'
                  }`}
                />

                <div className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${isHovered ? 'bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent' : 'bg-charcoal/20'}`} />

                <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end pointer-events-none">
                  <span className={`text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-sand drop-shadow-md transition-all duration-700 ${isHovered ? 'mb-2' : 'mb-0'}`}>
                    {item.category}
                  </span>

                  <div className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isHovered ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className={`text-sand/80 text-xs md:text-sm leading-relaxed transform transition-transform duration-700 ${isHovered ? 'translate-y-0' : 'translate-y-4'}`}>
                      {item.detail}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedItem && typeof document !== 'undefined' && createPortal(
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-[600] flex items-center justify-center bg-charcoal/95 backdrop-blur-md p-4 md:p-12 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-full max-h-full flex flex-col items-center"
            >
              <div className="absolute top-0 right-0 -mt-12 -mr-4 md:-mr-12 text-sand/60 hover:text-sand transition-colors text-[10px] font-bold uppercase tracking-[0.2em]">
                Close (ESC)
              </div>
              
              <img
                src={selectedItem.image}
                alt={selectedItem.category}
                className="max-w-full max-h-[75vh] object-contain shadow-2xl border border-sand/20 bg-sand/5 p-2 md:p-4 mb-6"
              />
              
              <div className="text-center">
                <span className="block text-xs font-bold uppercase tracking-[0.2em] text-sand mb-2">
                  {selectedItem.category}
                </span>
                <p className="text-sand/70 text-sm md:text-base">
                  {selectedItem.detail}
                </p>
              </div>
            </motion.div>
          </motion.div>,
          document.body
        )}
      </AnimatePresence>
    </section>
  );
}
