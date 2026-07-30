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
    detail: "Large format brand collateral and live exhibition graphics.",
    image: "/signage-banners.jpg"
  },
  {
    category: "Social & Digital Assets",
    detail: "Responsive systems for digital touchpoints.",
    image: "/social-digital-assets.jpg"
  },
  {
    category: "Packaging & Print",
    detail: "Tactile goods, brand collateral, and printed applications.",
    image: "/packaging-print.jpg"
  },
  {
    category: "Brand Collateral",
    detail: "Stationery and physical brand extensions.",
    image: "/brand collateral.jpg"
  }
];

export default function Process() {

      return (
    <section id="capabilities" className="relative bg-charcoal text-sand py-24 md:py-48 z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative">
        
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
                className="group flex flex-col h-full bg-sand text-charcoal rounded-[2rem] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sand/10"
              >
                <div className="w-full aspect-square relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.category}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col flex-grow p-5">
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
