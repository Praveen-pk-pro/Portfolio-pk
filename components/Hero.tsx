import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';
import TechSphere from './TechSphere';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } }); 
      
      // Cinematic fade in sequence
      tl.from(".hero-title", {
        x: -30,
        opacity: 0,
        duration: 1.5,
        delay: 0.1
      })
      .from(".hero-subtitle", {
        opacity: 0,
        y: 10,
        duration: 1.2,
        letterSpacing: "0em" 
      }, "-=1.0")
      .from(".hero-desc", {
        y: 10,
        opacity: 0,
        duration: 1.2
      }, "-=0.8")
      .from(".hero-cta", {
        y: 10,
        opacity: 0,
        stagger: 0.2,
        duration: 1
      }, "-=0.8")
      .from(".hero-social", {
        y: 10,
        opacity: 0,
        stagger: 0.1,
        duration: 1
      }, "-=1.0")
      .from(".hero-sphere", {
        opacity: 0,
        scale: 0.95,
        duration: 2,
        ease: "power2.inOut"
      }, "-=1.8");

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="hero" 
      ref={containerRef}
      className="relative h-[100dvh] min-h-[600px] flex items-center overflow-hidden bg-primary"
    >
      {/* Visual Side (Right) - TechSphere Background */}
      <div className="absolute top-0 right-0 w-full md:w-[65%] h-full z-0 hero-sphere">
         {/* Gradient Mask to fade into black on the left */}
         <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#050505] via-[#050505]/60 to-transparent pointer-events-none" />
         <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#050505] via-transparent to-transparent pointer-events-none" />
         
         <div className="w-full h-full flex items-center justify-center opacity-60 md:opacity-80 mix-blend-screen transform translate-x-1/4 md:translate-x-0">
             <TechSphere />
         </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-20 h-full flex flex-col justify-center">
        <div className="max-w-4xl">
          {/* Main Title - Animated Gradient */}
          <h1 className="hero-title text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-sans font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x bg-[length:200%_auto] mb-4 leading-[0.9]">
            Praveen<br />Kumar
          </h1>

          {/* Subtitle */}
          <h2 className="hero-subtitle text-xs sm:text-sm md:text-base font-medium text-secondary_accent uppercase tracking-[0.3em] md:tracking-[0.8em] pl-1 mb-8 md:mb-12">
            World-Class Web Developer
          </h2>

          <div className="hero-desc flex flex-col gap-8 pl-1 max-w-lg">
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed border-l border-white/20 pl-6 backdrop-blur-sm md:backdrop-blur-none">
              Specializing in building exceptional digital experiences. 
              Merging technical expertise with design elegance to create scalable, performance-driven web applications.
            </p>

            {/* CTAs */}
            <div className="hero-cta flex flex-wrap gap-4">
              <a 
                href="#projects" 
                className="group flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all transform hover:scale-105 active:scale-95"
              >
                View My Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact" 
                className="flex items-center gap-2 px-6 py-3 bg-transparent border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
              >
                Hire Me
              </a>
            </div>

            <div className="flex gap-6 hero-social pt-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 active:scale-95">
                <Github size={22} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 active:scale-95">
                <Linkedin size={22} />
              </a>
              <a href="mailto:dummy@email.com" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 active:scale-95">
                <Mail size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;