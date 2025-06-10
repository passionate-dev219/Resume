
import React from 'react';
import { Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold mb-4">
              <span className="text-portfolio-accent">S</span>hawn
            </div>
            <p className="text-white/70 max-w-md">
              A passionate full-stack developer focused on creating beautiful and functional web applications with amazing user experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-white/70 hover:text-portfolio-accent transition-colors">Home</a></li>
                <li><a href="#about" className="text-white/70 hover:text-portfolio-accent transition-colors">About</a></li>
                <li><a href="#skills" className="text-white/70 hover:text-portfolio-accent transition-colors">Skills</a></li>
                <li><a href="#projects" className="text-white/70 hover:text-portfolio-accent transition-colors">Projects</a></li>
                <li><a href="#contact" className="text-white/70 hover:text-portfolio-accent transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Services</h3>
              <ul className="space-y-2">
                <li><span className="text-white/70">Web Development</span></li>
                <li><span className="text-white/70">Mobile Development</span></li>
                <li><span className="text-white/70">UI/UX Design</span></li>
                <li><span className="text-white/70">Consulting</span></li>
                <li><span className="text-white/70">Technical Writing</span></li>
              </ul>
            </div>
            
            <div className="col-span-2 md:col-span-1">
              <h3 className="font-semibold text-lg mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-portfolio-accent">Email:</span>
                  <span className="text-white/70">ShawnZhang219@gmail.com</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-portfolio-accent">Phone:</span>
                  <span className="text-white/70">+1 925 775 3204</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-portfolio-accent">Address:</span>
                  <span className="text-white/70">Richmond Hill,Canada</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 mb-4 md:mb-0">
              © {currentYear} Shawn Zhang. All rights reserved.
            </p>
            
            <div className="flex gap-6 items-center">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/70 hover:text-portfolio-accent transition-colors group">
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>GitHub</span>
              </a>
              <a href="#" className="text-white/70 hover:text-portfolio-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/70 hover:text-portfolio-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
