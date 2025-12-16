import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-content", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="py-24 bg-dark relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10" ref={containerRef}>
        <div className="max-w-4xl mx-auto">
          <h2 className="about-content section-title text-3xl md:text-4xl font-heading font-bold mb-8 text-white">
            <span className="text-accent">/</span> About Me
          </h2>
          
          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-3 space-y-6 text-gray-300 leading-relaxed text-lg about-content">
              <p>
                I am a passionate software engineer with a strong focus on building high-quality, user-centric web applications. 
                With years of experience in full-stack development, I bridge the gap between creative design and robust engineering.
              </p>
              <p>
                My approach is product-first: I don't just write code; I solve business problems. 
                Whether it's optimizing load times for an e-commerce giant or architecting a scalable MVP for a startup, 
                I bring the same level of precision and dedication to every project.
              </p>
              <p>
                When I'm not coding, I'm likely exploring the latest in tech, contributing to open source, or mentoring aspiring developers.
              </p>
            </div>
            
            <div className="md:col-span-2 about-content">
              <div className="p-6 bg-card rounded-2xl border border-white/5 hover:border-accent/30 transition-colors shadow-lg">
                <h3 className="text-xl font-bold text-white mb-4">Key Highlights</h3>
                <ul className="space-y-3">
                  {['Problem Solver', 'Clean Code Advocate', 'Performance Obsessed', 'Fast Learner'].map((item, i) => (
                    <li key={i} className="flex items-center text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 cursor-default">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;