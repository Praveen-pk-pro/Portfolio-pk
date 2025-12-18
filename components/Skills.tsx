
import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  // Casting motion.div to any to bypass environment-specific type inference issues with framer-motion props
  const MotionDiv = motion.div as any;

  return (
    <section id="skills" className="py-24 bg-primary relative">
      <div className="container mx-auto px-6">
        {/* Fixed: Using MotionDiv (any) to resolve Property 'initial' does not exist error on line 10 */}
        <MotionDiv 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-white">
            <span className="text-accent">/</span> Technical Arsenal
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {SKILLS.map((category, idx) => (
              // Fixed: Using MotionDiv (any) to resolve Property 'initial' does not exist error on line 24
              <MotionDiv
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-card p-8 rounded-2xl border border-white/5 hover:border-accent/20 transition-all hover:-translate-y-1 group"
              >
                <h3 className="text-xl font-bold text-white mb-6 group-hover:text-accent transition-colors">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-primary border border-white/10 rounded-full text-sm text-gray-300 hover:text-white hover:border-accent/50 transition-all hover:scale-105 hover:bg-accent/5 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>
      </div>
    </section>
  );
};

export default Skills;
