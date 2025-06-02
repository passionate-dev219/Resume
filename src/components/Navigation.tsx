
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface NavigationProps {
  onSectionChange: (section: string) => void;
}

const Navigation = ({ onSectionChange }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    e.preventDefault();
    onSectionChange(section);
    
    // Scroll to section with animation
    const element = document.getElementById(section);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4",
      isScrolled ? "bg-white shadow-md py-3" : "bg-transparent"
    )}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-portfolio-primary">
          <span className="text-portfolio-accent">P</span>ortfolio
        </div>
        <div className="hidden md:flex space-x-6">
          {["home", "about", "skills", "projects", "contact"].map((section) => (
            <a 
              key={section}
              href={`#${section}`}
              onClick={(e) => handleNavClick(e, section)}
              className="nav-link capitalize"
            >
              {section}
            </a>
          ))}
        </div>
        
        <div className="md:hidden">
          {/* Mobile menu button would go here */}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
