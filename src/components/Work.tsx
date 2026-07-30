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
    coverImage: '/otaaq/Otaaq main.png',
    processImages: [
      '/otaaq/Lofo Icon B.png',
      '/otaaq/Logo Icon O.png',
      '/otaaq/cup collateral.png',
      '/otaaq/Final.png'
    ],
    color: '#e4dccf' // Warm off-white
  },
  {
    id: 'play-haus',
    title: 'Play-Haus',
    category: 'Brand Identity',
    description: 'Comprehensive branding project encompassing visual identity, motion framework, and physical collaterals.',
    coverImage: '/play-haus/pic 2.png',
    processImages: [
      '/play-haus/both logos.png',
      '/play-haus/pic 1.png',
      '/play-haus/pic 2.png',
      '/play-haus/playhaus collateral.png',
      '/play-haus/color selection.png'
    ],
    color: '#d4c5b9' // Lighter warm tone
  }
];

function WorkCard({ item, index, activeHover, setActiveHover, setActiveProject }: any) {
  const [hasHover, setHasHover] = useState(true);
  
  useEffect(() => {
    setHasHover(window.matchMedia('(hover: hover)').matches);
  }, []);

  const isActive = activeHover === item.id;
  const isAnyActive = activeHover !== null;
  const showDetails = !hasHover || isActive;
  const showTitle = !hasHover || isActive || !isAnyActive;

  return (
    <motion.div
      className={`relative cursor-pointer overflow-hidden rounded-3xl transition-all duration-700 ease-[0.16,1,0.3,1] w-full md:w-auto ${
        hasHover
          ? isActive 
            ? 'h-[60vh] md:h-[75vh] md:flex-[3]' 
            : isAnyActive 
              ? 'h-[15vh] md:h-[75vh] md:flex-[0.5]' 
              : 'h-[40vh] md:h-[75vh] md:flex-1'
          : 'h-[40vh] md:h-[75vh]'
      }`}
      onMouseEnter={() => {
        if (hasHover) setActiveHover(item.id);
      }}
      onMouseLeave={() => {
        if (hasHover) setActiveHover(null);
      }}
      onClick={() => setActiveProject(item.id)}
      data-cursor="view"
      style={{ backgroundColor: item.color }}
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img 
          src={item.coverImage} 
          alt={item.title} 
          className="w-full h-full object-cover opacity-80 mix-blend-multiply filter blur-[6px] scale-110 transition-all duration-700 hover:opacity-100 hover:blur-none" 
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent mix-blend-overlay pointer-events-none" />
      </div>
      
      <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between text-white pointer-events-none">
        <div className="flex justify-between items-start">
          <motion.span 
            className="text-xs md:text-sm font-medium uppercase tracking-[0.2em] border border-white/20 px-6 py-3 rounded-full backdrop-blur-md bg-black/20 whitespace-nowrap overflow-hidden"
            animate={{ opacity: showDetails ? 1 : 0, width: showDetails ? 'auto' : 0, padding: showDetails ? '12px 24px' : '0px' }}
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
              opacity: showTitle ? 1 : 0,
              y: showTitle ? 0 : 20
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
                  src={WORK_ITEMS.find(w => w.id === activeProject)?.coverImage} 
                  alt="cover" 
                  className="w-full h-full object-cover transition-all duration-1000"
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
                  <div className="flex flex-col gap-8 md:gap-16">
                    <motion.div 
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-10%" }}
                      transition={{ duration: 0.8 }}
                      className="w-full overflow-hidden relative group"
                    >
                      <img src={WORK_ITEMS.find(w => w.id === activeProject)?.processImages[0]} alt="Process 1" className="w-full h-auto block transition-all duration-1000 scale-100 group-hover:scale-105" />
                    </motion.div>
                    
                    {WORK_ITEMS.find(w => w.id === activeProject)?.processImages[1] && (
                    <motion.div 
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-10%" }}
                      transition={{ duration: 0.8, delay: 0.1 }}
                      className="w-full overflow-hidden relative group"
                    >
                      <img src={WORK_ITEMS.find(w => w.id === activeProject)?.processImages[1]} alt="Process 2" className="w-full h-auto block transition-all duration-1000 scale-100 group-hover:scale-105" />
                    </motion.div>
                    )}
                  </div>

                </div>
              </div>

              <div className="w-full mt-16 md:mt-24 px-4 md:px-8 lg:px-12 max-w-[120rem] mx-auto flex flex-col gap-16 md:gap-24">
                {WORK_ITEMS.find(w => w.id === activeProject)?.processImages[2] && (
                  <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full md:w-3/5 lg:w-1/2 overflow-hidden relative group self-start"
                  >
                    <img src={WORK_ITEMS.find(w => w.id === activeProject)?.processImages[2]} alt="Process 3" className="w-full h-auto block transition-all duration-1000 scale-100 group-hover:scale-105" />
                  </motion.div>
                )}

                {WORK_ITEMS.find(w => w.id === activeProject)?.processImages[3] && (
                  <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="w-full overflow-hidden relative group"
                  >
                    <img src={WORK_ITEMS.find(w => w.id === activeProject)?.processImages[3]} alt="Process 4" className="w-full h-auto block transition-all duration-1000 scale-100 group-hover:scale-105" />
                  </motion.div>
                )}
              </div>

              {WORK_ITEMS.find(w => w.id === activeProject)?.processImages[4] && (
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="w-full mt-16 md:mt-24 px-4 md:px-8 lg:px-12 max-w-[120rem] mx-auto overflow-hidden relative group"
                >
                  <img src={WORK_ITEMS.find(w => w.id === activeProject)?.processImages[4]} alt="Process 5" className="w-full h-auto object-cover transition-all duration-1000 scale-100 group-hover:scale-105" />
                </motion.div>
              )}
            </div>
          </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
