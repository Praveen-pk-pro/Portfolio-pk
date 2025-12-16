import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-dark border-t border-white/5 text-center">
      <p className="text-gray-600 text-sm">
        © {new Date().getFullYear()} Praveen Kumar. All rights reserved. <br className="md:hidden" />
        Designed & Built with <span className="text-accent inline-block transition-transform duration-300 hover:scale-125 cursor-pointer">♥</span> using React & Tailwind.
      </p>
    </footer>
  );
};

export default Footer;