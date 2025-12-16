import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Twitter, Send, CheckCircle, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call/Network delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Log form data to console as requested
    console.log('Form Submission Data:', formData);
    
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
    
    // Reset status after 5 seconds
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-primary relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-accent/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Let’s Build Something <span className="text-gradient">Exceptional</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              I’m currently available for freelance work and full-time opportunities. 
              Whether you have a question, a project idea, or just want to say hi, feel free to drop me a message!
            </p>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-accent group hover:bg-white/10 transition-colors">
                <Mail size={20} className="group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Email Me</p>
                <a href="mailto:contact@praveenkumar.dev" className="text-white font-medium hover:text-accent transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-accent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">contact@praveenkumar.dev</a>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="#" className="text-gray-500 hover:text-white transition-colors p-3 bg-white/5 rounded-full hover:bg-white/10 hover:scale-110 transform duration-300">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors p-3 bg-white/5 rounded-full hover:bg-white/10 hover:scale-110 transform duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors p-3 bg-white/5 rounded-full hover:bg-white/10 hover:scale-110 transform duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-card p-6 md:p-8 rounded-2xl border border-white/5 shadow-xl relative backdrop-blur-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wide">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-primary/50 border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 hover:border-white/20 transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wide">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-primary/50 border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 hover:border-white/20 transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wide">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-primary/50 border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 hover:border-white/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting' || status === 'success'}
                className={`w-full flex items-center justify-center gap-2 px-8 py-4 font-bold rounded-lg transition-all transform hover:scale-[1.02] active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)] 
                  ${status === 'success' 
                    ? 'bg-green-500/20 text-green-400 cursor-default hover:scale-100 active:scale-100' 
                    : 'bg-accent text-primary hover:bg-white'
                  } disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none`}
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Sending...
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle size={20} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;