import { motion } from 'motion/react';
import { Instagram, Linkedin } from 'lucide-react';
import { SiBehance } from '@icons-pack/react-simple-icons';
import Magnetic from './Magnetic';

export default function Contact() {
  return (
    <section id="contact" className="pt-32 md:pt-48 pb-12 px-6 md:px-12 lg:px-24 bg-charcoal text-sand relative z-10 flex flex-col justify-between min-h-[90vh]">
      <div className="w-full text-center flex flex-col items-center flex-grow justify-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-[12vw] md:text-[10vw] leading-[0.8] tracking-tighter uppercase mb-16"
        >
          Ready to <br/><span className="italic font-light">Elevate?</span>
        </motion.h2>
        
        <Magnetic>
          <motion.a 
            href="mailto:rahil.designworks@gmail.com"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            data-cursor="hover"
            className="inline-block border border-sand px-12 py-6 text-sm font-medium uppercase tracking-[0.2em] hover:bg-sand hover:text-charcoal transition-colors duration-300 rounded-full"
          >
            Start a Conversation
          </motion.a>
        </Magnetic>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex gap-4 sm:gap-6 mt-12"
        >
          <Magnetic>
            <a href="https://instagram.com/rahil_kishnani" target="_blank" rel="noreferrer" className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-sand/30 hover:border-sand hover:bg-sand hover:text-charcoal transition-all duration-300 flex items-center justify-center text-sand/80 hover:text-charcoal" data-cursor="hover" aria-label="Instagram">
              <Instagram strokeWidth={1.5} size={24} />
            </a>
          </Magnetic>
          <Magnetic>
            <a href="https://www.linkedin.com/in/rahil-kishnani/" target="_blank" rel="noreferrer" className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-sand/30 hover:border-sand hover:bg-sand hover:text-charcoal transition-all duration-300 flex items-center justify-center text-sand/80 hover:text-charcoal" data-cursor="hover" aria-label="LinkedIn">
              <Linkedin strokeWidth={1.5} size={24} />
            </a>
          </Magnetic>
          <Magnetic>
            <a href="https://www.behance.net/rahilkishnani" target="_blank" rel="noreferrer" className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-sand/30 hover:border-sand hover:bg-sand hover:text-charcoal transition-all duration-300 flex items-center justify-center text-sand/80 hover:text-charcoal" data-cursor="hover" aria-label="Behance">
              <SiBehance size={24} />
            </a>
          </Magnetic>
        </motion.div>
      </div>
      
      <footer className="mt-24 pt-8 border-t border-sand/20 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-sand/50 uppercase tracking-[0.2em]">
        <span>&copy; {new Date().getFullYear()} Rahil Kishnani</span>
        <span>Based in the World</span>
      </footer>
    </section>
  );
}
