import { motion, useScroll, useTransform } from 'motion/react';
import React, { useRef } from 'react';

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Discovery & Strategy",
    description: "We dive deep into your brand's core truth, understanding your vision, audience, and market landscape to establish a solid strategic foundation.",
    image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=2671&auto=format&fit=crop"
  },
  {
    num: "02",
    title: "Conceptualization",
    description: "Translating strategy into visual directions. We explore moodboards, typographic pairings, and initial concepts that capture the brand's essence.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2664&auto=format&fit=crop"
  },
  {
    num: "03",
    title: "Design & Execution",
    description: "Crafting the final identity. This includes logo design, color palettes, typography systems, and the comprehensive visual language.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
  },
  {
    num: "04",
    title: "Application",
    description: "Bringing the brand to life across various touchpoints. From packaging and stationery to digital platforms and physical spaces.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop"
  },
  {
    num: "05",
    title: "Delivery",
    description: "Handover of meticulously organized assets and comprehensive brand guidelines to ensure consistency moving forward.",
    image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=2667&auto=format&fit=crop"
  }
];

function ProcessStep({ step, index }: { step: any, index: number, key?: React.Key }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="w-[85vw] md:w-[60vw] lg:w-[45vw] flex-shrink-0 flex flex-col gap-6 group relative"
    >
      {/* Huge Background Number */}
      <div className="absolute -top-12 -left-4 md:-top-20 md:-left-8 font-serif text-[8rem] md:text-[14rem] italic text-sand/5 z-0 pointer-events-none group-hover:text-sand/10 transition-colors duration-700 leading-none select-none">
        {step.num}
      </div>

      <div className="overflow-hidden aspect-[16/10] rounded-sm relative z-10 shadow-2xl">
        <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-transparent transition-colors duration-500 z-20 pointer-events-none" />

        <motion.div
          initial={{ scale: 1.1, clipPath: "inset(0 100% 0 0)" }}
          whileInView={{ scale: 1, clipPath: "inset(0 0% 0 0)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full"
        >
          <img
            src={step.image}
            alt={step.title}
            className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
          />
        </motion.div>
      </div>

      <div className="flex gap-6 md:gap-12 mt-4 md:mt-8 pt-8 relative z-10">
        {/* Animated top border */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-0 left-0 h-[1px] bg-sand/30"
        />

        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl md:text-6xl italic text-sand/50 group-hover:text-sand transition-colors duration-500"
        >
          {step.num}
        </motion.div>
        
        <div className="flex flex-col gap-4">
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-3xl md:text-4xl text-sand group-hover:italic transition-all duration-500"
          >
            {step.title}
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-sand/70 max-w-md leading-relaxed text-sm md:text-base"
          >
            {step.description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Process() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-75%"]);

  return (
    <section ref={targetRef} id="about" className="relative h-[400vh] bg-charcoal text-sand z-10">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* Section Header */}
        <div className="absolute top-12 md:top-24 left-6 md:left-12 lg:left-24 z-20">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="uppercase tracking-widest text-sm mb-4 text-sand/60"
          >
            Our Approach
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl italic"
          >
            The Process
          </motion.h2>
        </div>

        {/* Scrolling Content */}
        <motion.div style={{ x }} className="flex gap-16 md:gap-32 pl-6 md:pl-12 lg:pl-[30vw] pt-32">
          {PROCESS_STEPS.map((step, index) => (
            <ProcessStep key={index} step={step} index={index} />
          ))}
        </motion.div>

        {/* Global Progress Bar for Section */}
        <div className="absolute bottom-12 md:bottom-24 left-6 md:left-12 lg:left-24 right-6 md:right-12 lg:right-24 flex items-center gap-4 z-20">
          <span className="text-xs font-mono opacity-50">00</span>
          <div className="flex-1 h-[1px] bg-sand/10 relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-sand origin-left"
              style={{ scaleX: scrollYProgress }}
            />
          </div>
          <span className="text-xs font-mono opacity-50">05</span>
        </div>
      </div>
    </section>
  );
}
