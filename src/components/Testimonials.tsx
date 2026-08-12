
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Trophy, Medal, ExternalLink, X, Eye } from 'lucide-react';
import { ACHIEVEMENTS } from '../constants';
import { Achievement } from '../types';

const getAchievementIcon = (type: string) => {
  switch (type) {
    case 'Award':
      return <Trophy className="text-yellow-400 w-6 h-6" />;
    case 'Hackathon':
      return <Medal className="text-purple-400 w-6 h-6" />;
    case 'Certificate':
    default:
      return <Award className="text-cyan-400 w-6 h-6" />;
  }
};

const Testimonials: React.FC = () => {
  const [activeItem, setActiveItem] = useState<Achievement | null>(null);
  const MotionDiv = motion.div as any;

  return (
    <section id="achievements" className="py-24 bg-dark relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              <span className="text-accent">/</span> Certifications & Achievements
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Milestones, technical certifications, and hackathon accomplishments.
            </p>
          </MotionDiv>

          <div className="grid sm:grid-cols-2 gap-8">
            {ACHIEVEMENTS.map((item, idx) => (
              <MotionDiv
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-card p-8 rounded-2xl border border-white/5 hover:border-accent/30 transition-all hover:-translate-y-1 group relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:bg-accent/10 group-hover:border-accent/30 transition-colors">
                      {getAchievementIcon(item.type)}
                    </div>
                    <span className="text-xs font-mono px-3 py-1 bg-white/5 border border-white/10 text-gray-400 rounded-full">
                      {item.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm font-mono text-accent/80 mb-4">
                    {item.issuer}
                  </p>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {item.image && (
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <button
                      onClick={() => setActiveItem(item)}
                      className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent hover:text-white transition-colors"
                    >
                      <Eye size={14} /> View Certificate
                    </button>
                  </div>
                )}
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {activeItem && activeItem.image && (
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveItem(null)}
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
                  <h4 className="text-lg font-bold text-white">{activeItem.title}</h4>
                  <p className="text-xs text-accent font-mono">{activeItem.issuer} • {activeItem.date}</p>
                </div>
                <button
                  onClick={() => setActiveItem(null)}
                  className="p-2 text-gray-400 hover:text-white bg-white/5 rounded-full hover:bg-white/10 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="relative rounded-lg overflow-hidden bg-black/50 flex items-center justify-center min-h-[250px] h-[65vh] w-full max-h-[70vh]">
                {activeItem.image.toLowerCase().endsWith('.pdf') ? (
                  <iframe
                    src={activeItem.image}
                    title={activeItem.title}
                    className="w-full h-full rounded"
                  />
                ) : (
                  <img
                    src={activeItem.image}
                    alt={activeItem.title}
                    className="max-h-[65vh] w-auto object-contain rounded"
                    onError={(e) => {
                      // Fallback visual if image isn't added yet
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent && !parent.querySelector('.fallback-msg')) {
                        const msg = document.createElement('div');
                        msg.className = 'fallback-msg text-center p-8 text-gray-400 font-mono text-sm';
                        msg.innerHTML = `<p class="mb-2 text-accent">📷 Certificate Image Placeholder</p><p class="text-xs text-gray-500">Drop file <strong>${activeItem.image}</strong> into the <code>public/img/</code> folder to display it here.</p>`;
                        parent.appendChild(msg);
                      }
                    }}
                  />
                )}
              </div>
            </MotionDiv>
          </MotionDiv>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Testimonials;
