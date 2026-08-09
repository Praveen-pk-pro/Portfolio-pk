import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FileText } from 'lucide-react';

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
                I'm a B.Tech Information Technology student at Sree Sakthi Engineering College, Coimbatore (Class of 2028), working as a freelance web developer and AI automation developer alongside my studies.
              </p>
              <p>
                I like building things that actually run in production — not just demos. That's meant shipping a multi-tenant RAG-as-a-Service platform on free-tier infrastructure, a WhatsApp lead-distribution system with cron-scheduled automation, and an end-to-end AI video pipeline that publishes on a schedule with zero manual editing.
              </p>
              <p>
                My stack centers on Python, TypeScript, GitHub Actions, Supabase, and orchestrating AI APIs across Gemini, Groq, and OpenRouter. I'm currently looking for internship and entry-level opportunities where I can keep building real systems, not just toy projects.
              </p>
              
              <div className="pt-2">
                <a 
                  href="/img/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-medium hover:bg-cyan-500/20 hover:border-cyan-400 transition-all hover:scale-105 active:scale-95 text-sm"
                >
                  <FileText size={16} /> View Full Resume (PDF)
                </a>
              </div>
            </div>
            
            <div className="md:col-span-2 about-content">
              <div className="p-6 bg-card rounded-2xl border border-white/5 hover:border-accent/30 transition-colors shadow-lg">
                <h3 className="text-xl font-bold text-white mb-4">Key Highlights</h3>
                <ul className="space-y-3">
                  {['Problem Solver','Team Worker', 'Ships Production Systems', 'Fast Learner'].map((item, i) => (
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