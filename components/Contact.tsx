import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-primary relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-accent/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Let’s Build Something <span className="text-gradient">Exceptional</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            I’m currently available for freelance work and full-time opportunities. 
            If you have a project that needs some creative confidence, I’d love to hear about it.
          </p>
          
          <a 
            href="mailto:dummy@email.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-primary font-bold rounded-full hover:bg-secondary_accent transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] mb-12"
          >
            <Mail size={20} />
            Start a Conversation
          </a>

          <div className="flex justify-center gap-8">
            <a href="#" className="text-gray-500 hover:text-white transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10">
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10">
              <Twitter size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;