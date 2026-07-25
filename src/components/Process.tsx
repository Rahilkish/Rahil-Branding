import { motion } from 'motion/react';
import React, { useState } from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';
import { SiBehance } from '@icons-pack/react-simple-icons';
import Magnetic from './Magnetic';

const CAPABILITIES = [
  {
    category: "Logo & Brand Marks",
    detail: "Core typographic and symbolic marks.",
    image: "/logo-brand-marks.jpg"
  },
  {
    category: "Colour & Type Systems",
    detail: "Establishing the foundational visual language.",
    image: "/colour-type-systems.jpg"
  },
  {
    category: "Signage & Banners",
    detail: "Designed and produced for live exhibitions.",
    image: "/signage-banners.jpg"
  },
  {
    category: "Social & Digital Assets",
    detail: "Responsive systems for digital touchpoints.",
    image: "/social-digital-assets.jpg"
  },
  {
    category: "Packaging & Print Collateral",
    detail: "Tactile goods and printed brand applications.",
    image: "/packaging-print.jpg"
  },
  {
    category: "Event / Exhibition Collateral",
    detail: "Physical and environmental brand extensions.",
    image: "/event-exhibition.jpg"
  }
];

export default function Process() {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

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
                  src="/profile.jpg" 
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
                I'm Rahil.<br />
                Designer, maker,<br className="hidden md:block" />
                and strategist.
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col gap-6"
              >
                <p className="font-sans text-sand leading-relaxed md:text-lg max-w-xl">
                  Based in Kolkata, I partner with founders to build brands that are grounded in reality—stress-tested against real constraints, not just moodboards.
                </p>
                <p className="font-sans text-sand leading-relaxed md:text-lg max-w-xl">
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
                  <p className="font-sans text-sand leading-relaxed md:text-lg max-w-xl pb-2">
                    I believe that strong design isn't just aesthetic—it's structural. From concept to execution, I bring a systematic approach to creativity, ensuring every touchpoint communicates your core vision. Whether iterating through CAD models or designing responsive interfaces, the goal is always clear, functional, and enduring.
                  </p>
                </motion.div>

                <button
                  onClick={() => setShowMoreInfo(!showMoreInfo)}
                  className="text-left font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-sand/50 hover:text-sand transition-colors mt-2 underline decoration-sand/30 hover:decoration-sand underline-offset-4 w-fit"
                >
                  {showMoreInfo ? 'Less about me' : 'More about me'}
                </button>

                <div className="flex gap-4 mt-2">
                  <Magnetic>
                    <a href="https://instagram.com/rahil_kishnani" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-sand/30 hover:border-sand hover:bg-sand hover:text-charcoal transition-all duration-300 flex items-center justify-center text-sand hover:text-charcoal" data-cursor="hover" aria-label="Instagram">
                      <Instagram strokeWidth={1.5} size={20} />
                    </a>
                  </Magnetic>
                  <Magnetic>
                    <a href="https://www.linkedin.com/in/rahil-kishnani/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-sand/30 hover:border-sand hover:bg-sand hover:text-charcoal transition-all duration-300 flex items-center justify-center text-sand hover:text-charcoal" data-cursor="hover" aria-label="LinkedIn">
                      <Linkedin strokeWidth={1.5} size={20} />
                    </a>
                  </Magnetic>
                  <Magnetic>
                    <a href="https://www.behance.net/rahilkishnani" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-sand/30 hover:border-sand hover:bg-sand hover:text-charcoal transition-all duration-300 flex items-center justify-center text-sand hover:text-charcoal" data-cursor="hover" aria-label="Behance">
                      <SiBehance size={20} />
                    </a>
                  </Magnetic>
                  <Magnetic>
                    <a href="mailto:rahil.designworks@gmail.com" className="w-12 h-12 rounded-full border border-sand/30 hover:border-sand hover:bg-sand hover:text-charcoal transition-all duration-300 flex items-center justify-center text-sand hover:text-charcoal" data-cursor="hover" aria-label="Email">
                      <Mail strokeWidth={1.5} size={20} />
                    </a>
                  </Magnetic>
                </div>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full items-start">
          {CAPABILITIES.map((item, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group flex flex-col bg-sand text-charcoal rounded-[2rem] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sand/10"
              >
                <div className="w-full aspect-square relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.category}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col p-5">
                  <div className="flex items-center gap-3 mb-2">
                     <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-charcoal text-sand font-bold text-sm">
                       {index + 1}
                     </span>
                     <h3 className="text-lg font-bold uppercase tracking-tight">
                       {item.category}
                     </h3>
                  </div>
                  <p className="text-charcoal/80 text-sm md:text-base leading-relaxed font-medium pl-10">
                    {item.detail}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
