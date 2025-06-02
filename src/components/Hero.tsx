
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const cta = ctaRef.current;

    if (title && subtitle && cta) {
      setTimeout(() => {
        title.classList.add('animate-slide-in-top');
      }, 300);
      
      setTimeout(() => {
        subtitle.classList.add('animate-slide-in-top');
      }, 800);
      
      setTimeout(() => {
        cta.classList.add('animate-fade-in');
      }, 1300);
    }
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center bg-portfolio-light relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-portfolio-primary/5 to-portfolio-accent/5"></div>
      
      {/* Animated background elements */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-portfolio-accent/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-portfolio-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 
          ref={titleRef} 
          className="text-4xl md:text-6xl font-bold mb-6 opacity-0 text-portfolio-dark"
        >
          Hello, I'm <span className="text-portfolio-accent">Brave Jin</span>
        </h1>
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl text-portfolio-secondary mb-10 max-w-2xl mx-auto opacity-0"
        >
          A passionate full-stack developer who creates beautiful, functional web applications with amazing user experiences.
        </p>
        
        <div 
          ref={ctaRef}
          className="flex flex-col md:flex-row justify-center gap-4 opacity-0"
        >
          <a 
            href="#projects" 
            className="btn-primary animated-button"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="px-6 py-3 border-2 border-portfolio-accent text-portfolio-accent rounded-md font-medium transition-all duration-300 hover:bg-portfolio-accent hover:text-white hover:scale-105"
          >
            Contact Me
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-portfolio-primary hover:text-portfolio-accent transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14"></path>
            <path d="m19 12-7 7-7-7"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
