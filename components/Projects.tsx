import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Play video when in view (Scroll effect)
    if (!project.video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current?.play().catch(() => {}); // catch autoplay restrictions
            setIsPlaying(true);
          } else {
            videoRef.current?.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.5 } // Play when 50% visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [project.video]);

  return (
    <motion.div
      variants={cardVariants}
      ref={containerRef}
      className="group relative bg-card rounded-2xl overflow-hidden border border-white/5 hover:border-accent/30 transition-all duration-300 flex flex-col h-full hover:shadow-2xl hover:shadow-accent/5"
    >
      <div className="relative h-48 sm:h-56 overflow-hidden bg-black">
        {project.video ? (
          <>
            <video
              ref={videoRef}
              src={project.video}
              loop
              muted
              playsInline
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}
            />
            <img 
              src={project.image} 
              alt={project.title} 
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}
            />
             {/* Play Icon Indicator if paused */}
             {!isPlaying && (
               <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <div className="p-3 bg-white/10 backdrop-blur-md rounded-full">
                    <Play className="text-white fill-current" size={24} />
                  </div>
               </div>
             )}
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10" />
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
          </>
        )}
      </div>
      
      <div className="p-5 sm:p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 flex-1 line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-auto">
          {project.github && (
            <a href={project.github} className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-all hover:scale-105 active:scale-95 inline-flex">
              <Github size={16} /> Code
            </a>
          )}
          {project.link && (
            <a href={project.link} className="flex items-center gap-2 text-sm text-accent hover:text-white transition-all ml-auto hover:scale-105 active:scale-95 inline-flex">
              Live Demo <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-24 bg-dark relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                  <span className="text-accent">/</span> Selected Works
                </h2>
                <p className="text-gray-400 max-w-xl">
                  A showcase of projects that demonstrate my ability to solve complex problems and deliver high-quality digital products.
                </p>
              </div>
              <a href="#" className="hidden md:flex items-center gap-2 text-accent hover:text-white transition-all mt-4 md:mt-0 font-medium group hover:scale-105 active:scale-95">
                View All Projects <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8"
          >
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>

          <div className="md:hidden mt-10 text-center">
            <a href="#" className="inline-flex items-center gap-2 text-accent hover:text-white transition-all font-medium hover:scale-105 active:scale-95">
              View All Projects <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;