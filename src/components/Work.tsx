import { motion, AnimatePresence } from 'motion/react';
import React, { useState, useEffect } from 'react';

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
      <AnimatePresence>
        {activeProject && (
          <motion.div 
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-[300] bg-sand overflow-y-auto"
            data-cursor="hover"
          >
            <div 
              className="absolute top-8 right-8 z-[310] cursor-pointer"
              onClick={() => setActiveProject(null)}
              data-cursor="hover"
            >
              <span className="text-xs font-medium uppercase tracking-[0.2em] border border-charcoal/20 px-6 py-3 rounded-full hover:bg-charcoal hover:text-sand transition-colors bg-sand">
                Close
              </span>
            </div>

            {/* Modal Content */}
            <div className="min-h-screen">
              <div className="h-[70vh] w-full relative">
                <img 
                  src={WORK_ITEMS.find(w => w.id === activeProject)?.image} 
                  alt="cover" 
                  className="w-full h-full object-cover filter grayscale"
                />
                <div className="absolute inset-0 bg-charcoal/20"></div>
                <div className="absolute bottom-12 left-6 md:left-12 lg:left-24 text-sand">
                  <h3 className="font-serif text-6xl md:text-8xl lg:text-[10rem] tracking-tighter uppercase leading-[0.8]">
                    {WORK_ITEMS.find(w => w.id === activeProject)?.title}
                  </h3>
                </div>
              </div>

              <div className="px-6 md:px-12 lg:px-24 py-24 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
                <div className="md:col-span-4">
                  <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-charcoal/50 mb-4">The Brief</h4>
                  <p className="text-lg text-charcoal/80 leading-relaxed">
                    {WORK_ITEMS.find(w => w.id === activeProject)?.description}
                  </p>
                </div>
                
                <div className="md:col-span-8 space-y-8">
                  <div className="aspect-[16/9] bg-charcoal/10 flex items-center justify-center italic text-charcoal/40 text-sm">
                    [Process Shot 1]
                  </div>
                  <div className="aspect-[4/5] bg-charcoal/10 flex items-center justify-center italic text-charcoal/40 text-sm">
                    [Process Shot 2]
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
