import { motion } from 'motion/react';
import React from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';
import { SiBehance } from '@icons-pack/react-simple-icons';
import Magnetic from './Magnetic';


export default function About() {
      return (
    <section id="about" className="relative bg-charcoal text-sand py-24 md:py-32 flex items-center z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative">
        
        {/* Bio Block */}
        <div>
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
                className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.2] mb-8 text-sand max-w-2xl"
              >
                I'm Rahil, a design student with a focus on brand identity.
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col gap-6"
              >
                <p className="font-sans text-sand leading-relaxed md:text-lg max-w-xl">
                  Logos, colour and type systems, and the collateral that carries a brand into the real world.
                </p>
                <p className="font-sans text-sand leading-relaxed md:text-lg max-w-xl">
                  I care about brands that feel considered rather than templated. Every choice should earn its place, not just look nice. I like working with people who want their brand to feel like it was actually thought through, not assembled from a template.
                </p>
                <p className="font-sans text-sand leading-relaxed md:text-lg max-w-xl pb-2">
                  If you're building something and want it to look like you meant it, that's where I come in.
                </p>

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

      </div>
    </section>
  );
}
