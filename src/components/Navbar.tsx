import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'Experience', to: 'experience' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-200/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="text-xl font-bold cursor-pointer gradient-text"
          >
            <span className="hidden sm:inline">mulleragustin.dev</span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                className="text-gray-300 hover:text-primary-400 cursor-pointer transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://github.com/mulleragustin/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/mulleragustin/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:agustinmuller98@gmail.com" 
              className="text-gray-400 hover:text-primary-400 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-300 hover:text-primary-400"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          className="md:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-4 bg-dark-200/95 backdrop-blur-sm space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-primary-400 hover:bg-dark-100"
                onClick={toggleMenu}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex justify-center space-x-6 py-4">
              <a 
                href="https://github.com/mulleragustin/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/mulleragustin/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:agustinmuller98@gmail.com" 
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;