
import React, { useEffect, useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const waterFlowRef = useRef<HTMLDivElement>(null);
  
  const isIntersecting = useIntersectionObserver(sectionRef, { threshold: 0.2 });
  
  useEffect(() => {
    if (isIntersecting) {
      const text = textRef.current;
      const image = imageRef.current;
      const line = lineRef.current;
      const waterFlow = waterFlowRef.current;
      
      if (text && image && line) {
        setTimeout(() => {
          line.classList.add('animate-fade-in');
        }, 300);
        
        setTimeout(() => {
          text.classList.add('animate-slide-in-left');
        }, 600);
        
        setTimeout(() => {
          image.classList.add('animate-slide-in-right');
        }, 900);
        
        if (waterFlow) {
          setTimeout(() => {
            waterFlow.classList.add('animate-fade-in');
          }, 1200);
        }
      }
    }
  }, [isIntersecting]);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-24 relative bg-white overflow-hidden"
    >
      {/* Water flow effect */}
      <div 
        ref={waterFlowRef}
        className="absolute inset-0 opacity-0 pointer-events-none z-0"
      >
        <div className="water-flow-1"></div>
        <div className="water-flow-2"></div>
        <div className="water-flow-3"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-portfolio-primary">
          About <span className="text-portfolio-accent">Me</span>
        </h2>
        
        <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Center line */}
          <div 
            ref={lineRef}
            className="md:block hidden about-line opacity-0"
          ></div>
          
          {/* Left content */}
          <div 
            ref={textRef}
            className="md:w-1/2 opacity-0"
          >
            <h3 className="text-2xl font-semibold mb-4 text-portfolio-primary">My Journey</h3>
            <p className="text-portfolio-secondary mb-4">
              With over 7 years of experience in web and mobile development, I've worked with a diverse range of clients from startups to established businesses. My passion is creating beautiful and functional applications that solve real problems.
            </p>
            <p className="text-portfolio-secondary mb-6">
              I specialize in front-end development with React and Next.js, but I'm also proficient in backend technologies like Node.js, Express, and various databases. I believe in writing clean, maintainable code and constantly learning new technologies.
            </p>
            <div className="flex gap-4">
              <a href="/Resume-BraveJin.pdf"><button className="btn-primary">View my Resume</button></a>
              <button className="px-6 py-3 border-2 border-portfolio-accent text-portfolio-accent rounded-md font-medium transition-all duration-300 hover:bg-portfolio-accent hover:text-white hover:scale-105">
                My Skills
              </button>
            </div>
          </div>
          
          {/* Right content */}
          <div 
            ref={imageRef}
            className="md:w-1/2 opacity-0"
          >
            <div className="relative">
              <div className="w-full h-80 md:h-96 bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src="/images/345d4365-a328-4f02-a64f-db8abebae726.png"
                  alt="Brave Jin" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-portfolio-primary font-semibold">7+ Years Experience</div>
                <div className="text-portfolio-accent font-bold text-2xl">Brave Jin</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
