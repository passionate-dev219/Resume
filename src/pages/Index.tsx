
import React, { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  
  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };

  // Custom smooth scrolling with reasonable duration
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    
    const handleClick = (e: MouseEvent) => {
      e.preventDefault();
      
      const target = e.currentTarget as HTMLAnchorElement;
      const targetId = target.getAttribute('href')?.substring(1);
      
      if (targetId) {
        const element = document.getElementById(targetId);
        
        if (element) {
          // Get current scroll position
          const startPosition = window.scrollY;
          // Calculate target position
          const targetPosition = element.getBoundingClientRect().top + startPosition - 100;
          // Calculate distance to scroll
          const distance = targetPosition - startPosition;
          // Duration in milliseconds (700ms for a smoother scrolling experience)
          const duration = 700; 
          
          // Set start time
          let startTime: number | null = null;
          
          // Define the animation function
          function animateScroll(currentTime: number) {
            if (startTime === null) {
              startTime = currentTime;
            }
            
            // Calculate elapsed time
            const elapsedTime = currentTime - startTime;
            
            // Calculate progress (0 to 1)
            const progress = Math.min(elapsedTime / duration, 1);
            
            // Easing function for smoother animation
            const easeInOutCubic = (t: number) => 
              t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
            
            // Apply easing
            const easedProgress = easeInOutCubic(progress);
            
            // Calculate current scroll position
            const currentPosition = startPosition + distance * easedProgress;
            
            // Scroll to position
            window.scrollTo(0, currentPosition);
            
            // Continue animation if not complete
            if (progress < 1) {
              requestAnimationFrame(animateScroll);
            }
          }
          
          // Start animation
          requestAnimationFrame(animateScroll);
        }
      }
    };
    
    links.forEach(link => {
      link.addEventListener('click', handleClick as EventListener);
    });
    
    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleClick as EventListener);
      });
    };
  }, []);
  
  // Intersection Observer to detect which section is in view
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const options = {
      threshold: 0.3,
      rootMargin: '-100px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);
    
    sections.forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="relative">
      <Navigation onSectionChange={handleSectionChange} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
