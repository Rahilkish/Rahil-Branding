import { motion, AnimatePresence } from 'motion/react';
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { createPortal } from 'react-dom';

const WORK_ITEMS = [
  {
    id: 'otaaq',
    title: 'Otaaq',
    category: 'Brand Identity',
    description: 'Full brand system built for a café currently under construction; strategy, logo direction, colour palette.',
    image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&q=80',
    color: '#e4dccf' // Warm off-white
  },
  {
    id: 'play-haus',
    title: 'Play-Haus',
    category: 'Brand Identity',
    description: 'Comprehensive branding project encompassing visual identity, motion framework, and physical collaterals. Details and documentation to be added.',
    image: 'https://images.unsplash.com/photo-1572949645841-094f3a9c4c94?auto=format&fit=crop&q=80',
    color: '#2a2a2a' // Dark
  },
  {
    id: 'lumina',
    title: 'Lumina',
    category: 'Digital Concept',
    description: 'An experimental digital platform focusing on light, interaction, and spatial computing.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80',
    color: '#1a1a1a'
  }
];

function WorkCard({ item, index, activeHover, setActiveHover, setActiveProject }: any) {
  const isActive = activeHover === item.id;
  const isAnyActive = activeHover !== null;

  return (
    <motion.div
      className={`relative h-[60vh] md:h-[75vh] cursor-pointer overflow-hidden rounded-3xl transition-all duration-700 ease-[0.16,1,0.3,1] ${
        isActive ? 'md:flex-[3] flex-[3]' : isAnyActive ? 'md:flex-[0.5] flex-[0.5]' : 'flex-1'
      }`}
      onMouseEnter={() => setActiveHover(item.id)}
      onMouseLeave={() => setActiveHover(null)}
      onClick={() => setActiveProject(item.id)}
      data-cursor="view"
      style={{ backgroundColor: item.color }}
    >
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover opacity-80 mix-blend-multiply filter transition-all duration-700 grayscale hover:grayscale-0" 
          style={{ transform: isActive ? 'scale(1.05)' : 'scale(1)' }}
        />
      </div>
      
      <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between text-white pointer-events-none">
        <div className="flex justify-between items-start">
          <motion.span 
            className="text-xs md:text-sm font-medium uppercase tracking-[0.2em] border border-white/20 px-6 py-3 rounded-full backdrop-blur-md bg-black/20 whitespace-nowrap overflow-hidden"
            animate={{ opacity: isActive ? 1 : 0, width: isActive ? 'auto' : 0, padding: isActive ? '12px 24px' : '0px' }}
            transition={{ duration: 0.4 }}
          >
            {item.category}
          </motion.span>
          <span className="font-serif text-3xl md:text-4xl italic shadow-black drop-shadow-md opacity-80">
            0{index + 1}
          </span>
        </div>
        
        <div className="whitespace-nowrap min-w-max flex items-end">
          <motion.h3 
            className="font-serif text-5xl md:text-7xl lg:text-[7rem] tracking-tighter uppercase leading-[0.8] drop-shadow-lg"
            animate={{ 
              opacity: isActive || !isAnyActive ? 1 : 0,
              y: isActive || !isAnyActive ? 0 : 20
            }}
            transition={{ duration: 0.5 }}
          >
            {item.title}
          </motion.h3>
        </div>
      </div>
    </motion.div>
  );
}

export default function Work() {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [activeHover, setActiveHover] = useState<string | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [activeProject]);

  return (
    <section id="work" className="py-24 md:py-40 px-6 md:px-12 lg:px-24 relative z-20 bg-sand">
      <div className="max-w-[100rem] mx-auto">
        <div className="flex justify-between items-end mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[10vw] md:text-[8vw] tracking-tighter uppercase leading-[0.8] text-charcoal"
          >
            Branding Projects
          </motion.h2>
        </div>

        <div className="flex flex-col md:flex-row gap-4 pb-32">
          {WORK_ITEMS.map((item, index) => (
            <WorkCard 
              key={item.id} 
              item={item} 
              index={index} 
              activeHover={activeHover}
              setActiveHover={setActiveHover}
              setActiveProject={setActiveProject} 
            />
          ))}
        </div>
      </div>

      {/* Full Screen Modal */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {activeProject && (
          <motion.div 
            key="work-modal"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-[300] bg-sand overflow-y-auto"
            data-cursor="auto"
            data-lenis-prevent="true"
          >
            <div 
              className="fixed top-8 right-8 md:top-12 md:right-12 z-[9999] cursor-pointer bg-charcoal text-sand hover:bg-black p-3 md:p-4 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center border border-sand/10"
              onClick={() => setActiveProject(null)}
              data-cursor="hover"
            >
              <X size={24} strokeWidth={1.5} />
            </div>

            {/* Modal Content */}
            <div className="min-h-screen pb-32">
              <div className="h-[80vh] w-full relative overflow-hidden">
                <motion.img 
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  src={WORK_ITEMS.find(w => w.id === activeProject)?.image} 
                  alt="cover" 
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-charcoal/20"></div>
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 lg:p-24 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent flex flex-col justify-end text-sand">
                  <motion.h3 
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="font-serif text-[15vw] md:text-[12vw] lg:text-[10rem] tracking-tighter uppercase leading-[0.85] text-sand"
                  >
                    {WORK_ITEMS.find(w => w.id === activeProject)?.title}
                  </motion.h3>
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-8 text-sm md:text-base font-medium uppercase tracking-[0.2em]"
                  >
                    {WORK_ITEMS.find(w => w.id === activeProject)?.category}
                  </motion.div>
                </div>
              </div>

              <div className="px-6 md:px-12 lg:px-24 pt-24 md:pt-40 max-w-[100rem] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="md:col-span-4 lg:col-span-3"
                >
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-charcoal/40 mb-8 border-b border-charcoal/10 pb-4">The Brief</h4>
                  <p className="text-xl md:text-2xl text-charcoal leading-relaxed font-serif">
                    {WORK_ITEMS.find(w => w.id === activeProject)?.description}
                  </p>
                </motion.div>
                
                <div className="md:col-span-8 lg:col-span-9 flex flex-col gap-8 md:gap-16 mt-8 md:mt-0">
                  <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.8 }}
                    className="w-full aspect-[16/9] overflow-hidden bg-charcoal/5 rounded-sm relative group"
                  >
                    <img src={WORK_ITEMS.find(w => w.id === activeProject)?.image} alt="Process 1" className="absolute inset-0 w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105" />
                  </motion.div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                    <motion.div 
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-10%" }}
                      transition={{ duration: 0.8, delay: 0.1 }}
                      className="w-full aspect-[4/5] overflow-hidden bg-charcoal/5 rounded-sm relative group"
                    >
                      <img src={WORK_ITEMS.find(w => w.id === activeProject)?.image} alt="Process 2" className="absolute inset-0 w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-1000 object-left scale-100 group-hover:scale-105" />
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-10%" }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="w-full aspect-[4/5] overflow-hidden bg-charcoal/5 rounded-sm mt-0 md:mt-24 relative group"
                    >
                      <img src={WORK_ITEMS.find(w => w.id === activeProject)?.image} alt="Process 3" className="absolute inset-0 w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-1000 object-right scale-100 group-hover:scale-105" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
