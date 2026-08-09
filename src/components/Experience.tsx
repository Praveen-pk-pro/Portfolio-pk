import React, { useRef, useLayoutEffect, useState } from 'react';
import gsap from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';
import { EXPERIENCE } from '../constants';
import { ArrowUpRight, Eye, X } from 'lucide-react';
import { ExperienceItem } from '../types';

const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCert, setActiveCert] = useState<ExperienceItem | null>(null);
  const MotionDiv = motion.div as any;

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray('.experience-row');
      
      items.forEach((item: any, i) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 95%",
            toggleActions: "play none none reverse"
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.1,
          ease: "power3.out"
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" className="py-32 bg-primary relative">
      <div className="container mx-auto px-6 md:px-12" ref={containerRef}>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 border-b border-white/10 pb-8">
          <h2 className="text-5xl md:text-7xl font-sans font-bold text-white tracking-tighter">
            Experience
          </h2>
          <p className="text-gray-500 mt-6 md:mt-0 max-w-sm text-right font-mono text-sm tracking-wide uppercase">
            Career Trajectory & <br />Professional Milestones
          </p>
        </div>

        {/* Experience Grid */}
        <div className="flex flex-col">
          {EXPERIENCE.map((item) => (
            <div 
              key={item.id} 
              className="experience-row group relative border-b border-white/10 transition-all duration-500 hover:bg-white/5"
            >
              <div className="py-16 grid grid-cols-1 md:grid-cols-12 gap-y-6 md:gap-8 items-start">
                
                {/* 01. Period (Monospace Technical Look) */}
                <div className="md:col-span-2">
                  <span className="inline-block px-3 py-1 rounded-full border border-white/10 font-mono text-xs text-accent/60 tracking-widest uppercase group-hover:border-accent/30 group-hover:text-accent transition-colors">
                    {item.period}
                  </span>
                </div>

                {/* 02. Role & Company (Visual Weight) */}
                <div className="md:col-span-5 relative">
                  <h3 className="text-3xl md:text-5xl font-sans font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
                    {item.role}
                  </h3>
                  <div className="flex items-center gap-2 mt-3">
                     <span className="w-2 h-2 rounded-full bg-accent/50 group-hover:bg-accent transition-colors"></span>
                     <p className="text-lg text-gray-500 group-hover:text-gray-300 font-light tracking-wide">
                      {item.company}
                    </p>
                  </div>
                </div>

                {/* 03. Description & Certificate Action */}
                <div className="md:col-span-5 flex flex-col justify-between h-full pl-0 md:pl-10">
                  <p className="text-gray-500 leading-relaxed text-base group-hover:text-gray-300 transition-colors">
                    {item.description}
                  </p>
                  
                  {(item.certificate || item.image) && (
                    <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                      <button
                        onClick={() => setActiveCert(item)}
                        className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent hover:text-white transition-colors py-1 px-3 bg-accent/10 rounded-full border border-accent/20 hover:bg-accent/20"
                      >
                        <Eye size={14} /> View Certificate
                      </button>
                    </div>
                  )}

                  {!item.certificate && !item.image && (
                    <div className="hidden md:flex justify-end mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                      <ArrowUpRight className="text-accent w-8 h-8" />
                    </div>
                  )}
                </div>
              </div>
              
              {/* Animated Bottom Border on Hover */}
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-left" />
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {activeCert && (activeCert.certificate || activeCert.image) && (
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCert(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-pointer"
          >
            <MotionDiv
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-card rounded-2xl border border-white/10 p-4 sm:p-6 overflow-hidden cursor-default shadow-2xl"
            >
              <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
                <div>
                  <h4 className="text-lg font-bold text-white">{activeCert.role}</h4>
                  <p className="text-xs text-accent font-mono">{activeCert.company} • {activeCert.period}</p>
                </div>
                <button
                  onClick={() => setActiveCert(null)}
                  className="p-2 text-gray-400 hover:text-white bg-white/5 rounded-full hover:bg-white/10 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="relative rounded-lg overflow-hidden bg-black/50 flex items-center justify-center min-h-[250px] max-h-[70vh]">
                <img
                  src={activeCert.certificate || activeCert.image}
                  alt={activeCert.role}
                  className="max-h-[65vh] w-auto object-contain rounded"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent && !parent.querySelector('.fallback-msg')) {
                      const msg = document.createElement('div');
                      msg.className = 'fallback-msg text-center p-8 text-gray-400 font-mono text-sm';
                      msg.innerHTML = `<p class="mb-2 text-accent">📷 Certificate Image Placeholder</p><p class="text-xs text-gray-500">Drop file <strong>${activeCert.certificate || activeCert.image}</strong> into the <code>public/img/</code> folder to display it here.</p>`;
                      parent.appendChild(msg);
                    }
                  }}
                />
              </div>
            </MotionDiv>
          </MotionDiv>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;