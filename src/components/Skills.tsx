
import React, { useEffect, useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Github } from 'lucide-react';

const techIcons = [
  { name: 'React', icon: '/assets/react-icon.png', color: '#61DAFB', iconText: 'R' },
  { name: 'Next.js', icon: '/assets/nextjs-icon.png', color: '#000000', iconText: 'N' },
  { name: 'Vue.js', icon: '/assets/vue-icon.png', color: '#4FC08D', iconText: 'V' },
  { name: 'Angular', icon: '/assets/angular-icon.png', color: '#DD0031', iconText: 'A' },
  { name: 'JavaScript', icon: '/assets/js-icon.png', color: '#F7DF1E', iconText: 'JS' },
  { name: 'TypeScript', icon: '/assets/ts-icon.png', color: '#3178C6', iconText: 'TS' },
  { name: 'Node.js', icon: '/assets/nodejs-icon.png', color: '#339933', iconText: 'N' },
  { name: 'Express.js', icon: '/assets/express-icon.png', color: '#000000', iconText: 'E' },
  { name: 'Laravel', icon: '/assets/laravel-icon.png', color: '#FF2D20', iconText: 'L' },
  { name: 'Python', icon: '/assets/python-icon.png', color: '#3776AB', iconText: 'P' }
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const stacksRef = useRef<(HTMLLIElement | null)[]>([]);
  
  const isIntersecting = useIntersectionObserver(sectionRef, { threshold: 0.2 });
  
  useEffect(() => {
    if (isIntersecting) {
      const left = leftRef.current;
      const right = rightRef.current;
      
      if (left && right) {
        setTimeout(() => {
          left.classList.add('animate-slide-in-left');
        }, 300);
        
        setTimeout(() => {
          right.classList.add('animate-slide-in-right');
        }, 600);
        
        stacksRef.current.forEach((item, index) => {
          if (item) {
            setTimeout(() => {
              item.classList.add('animate-zoom-in');
            }, 900 + (index * 100));
          }
        });
      }
    }
  }, [isIntersecting]);

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-24 relative bg-portfolio-light"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-portfolio-primary">
          My <span className="text-portfolio-accent">Skills</span>
        </h2>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Left Content */}
          <div 
            ref={leftRef}
            className="md:w-1/2 opacity-0"
          >
            <h3 className="text-2xl font-semibold mb-6 text-portfolio-primary">Technologies I Work With</h3>
            <p className="text-portfolio-secondary mb-6">
              I've worked with a wide range of technologies across the full stack. My expertise includes:
            </p>
            
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {techIcons.map((tech, index) => (
                <li 
                  key={tech.name}
                  ref={el => stacksRef.current[index] = el}
                  className="flex flex-col items-center opacity-0"
                >
                  <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-md mb-2 zoom-hover">
                    <div className="tech-icon" style={{ color: tech.color }}>
                      <div className="flex items-center justify-center w-full h-full">
                        {/* Use real icon if available, otherwise fallback to text */}
                        {tech.iconText}
                      </div>
                    </div>
                  </div>
                  <span className="text-portfolio-primary font-medium">{tech.name}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Right Content */}
          <div 
            ref={rightRef}
            className="md:w-1/2 opacity-0"
          >
            <h3 className="text-2xl font-semibold mb-6 text-portfolio-primary">My Expertise</h3>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Frontend Development</span>
                  <span className="text-portfolio-accent">90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-portfolio-accent h-2.5 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Backend Development</span>
                  <span className="text-portfolio-accent">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-portfolio-accent h-2.5 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">UI/UX Design</span>
                  <span className="text-portfolio-accent">80%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-portfolio-accent h-2.5 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Mobile App Development</span>
                  <span className="text-portfolio-accent">75%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-portfolio-accent h-2.5 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              
              <div className="mt-10">
                <a href="#projects" className="btn-primary w-full sm:w-auto animated-button">
                  View My Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
