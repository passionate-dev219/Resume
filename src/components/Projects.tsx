
import React, { useEffect, useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
  year: string;
}

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const isIntersecting = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  
  useEffect(() => {
    if (isIntersecting && gridRef.current) {
      const line = lineRef.current;
      
      if (line) {
        setTimeout(() => {
          line.classList.add('animate-fade-in');
        }, 300);
      }
      
      const cards = gridRef.current.children;
      Array.from(cards).forEach((card, index) => {
        const isEven = index % 2 === 0;
        const contentSection = card.querySelector('.content-section') as HTMLElement;
        const imageSection = card.querySelector('.image-section') as HTMLElement;
        
        if (contentSection && imageSection) {
          // Set initial state
          contentSection.style.opacity = '0';
          imageSection.style.opacity = '0';
          contentSection.style.transform = isEven ? 'translateX(-100px)' : 'translateX(100px)';
          imageSection.style.transform = isEven ? 'translateX(100px)' : 'translateX(-100px)';
          
          // First animate the content section
          setTimeout(() => {
            contentSection.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            contentSection.style.opacity = '1';
            contentSection.style.transform = 'translateX(0)';
            
            // Then animate the image section with a delay
            setTimeout(() => {
              imageSection.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
              imageSection.style.opacity = '1';
              imageSection.style.transform = 'translateX(0)';
            }, 700); // Delay between content and image
            
          }, 500 + (index * 1500)); // 1.5 seconds between each project
        }
      });
    }
  }, [isIntersecting]);

  const projects: Project[] = [
    {
      id: 1,
      title: "MatDash Analytics Platform",
      description: "A comprehensive analytics dashboard featuring revenue forecasting, performance metrics, and customer insights. Built with modern React components and interactive data visualizations for business intelligence.",
      image: "/images/cedcb8c0-b11d-4a67-b72d-97977ddec4cd.png",
      technologies: ["React", "TypeScript", "D3.js", "Node.js"],
      github: "https://github.com/yanusukjhonson/matdash-analytics",
      demo: "https://matdash-analytics.vercel.app",
      year: "2025"
    },
    {
      id: 2,
      title: "Enterprise Dashboard Suite",
      description: "A professional dashboard solution for enterprise management with advanced filtering, real-time updates, and comprehensive reporting. Features modular design and scalable architecture for large organizations.",
      image: "/images/df01d867-a25d-44fe-9f18-fd0a34eeeb69.png",
      technologies: ["Vue.js", "Express.js", "PostgreSQL", "Redis"],
      github: "https://github.com/yanusukjhonson/enterprise-dashboard",
      demo: "https://enterprise-dashboard-demo.netlify.app",
      year: "2024"
    },
    {
      id: 3,
      title: "E-Commerce Analytics Hub",
      description: "An advanced e-commerce analytics platform providing detailed insights into sales performance, customer behavior, and product analytics. Includes predictive modeling and automated reporting features.",
      image: "/images/fe876b9e-6ff6-408a-848f-d5fe7f6a4011.png",
      technologies: ["Next.js", "MongoDB", "Chart.js", "AWS"],
      github: "https://github.com/yanusukjhonson/ecommerce-analytics",
      demo: "https://ecommerce-analytics-hub.vercel.app",
      year: "2023"
    },
    {
      id: 4,
      title: "Financial Metrics Dashboard",
      description: "A comprehensive financial dashboard for tracking revenue, expenses, and key performance indicators. Features real-time data synchronization and customizable widgets for financial analysis.",
      image: "/images/db472bbc-bbca-4478-b90c-e44a23704da3.png",
      technologies: ["Angular", "Laravel", "MySQL", "Docker"],
      github: "https://github.com/yanusukjhonson/financial-dashboard",
      demo: "https://financial-metrics-demo.herokuapp.com",
      year: "2022"
    },
    {
      id: 5,
      title: "Business Intelligence Platform",
      description: "A powerful business intelligence solution with advanced data visualization, custom reporting, and collaborative features. Designed for data-driven decision making with intuitive user interface.",
      image: "/images/2b6eff1e-731c-4cc5-9b0e-9dad49d27c11.png",
      technologies: ["React", "Python", "FastAPI", "Elasticsearch"],
      github: "https://github.com/yanusukjhonson/business-intelligence",
      demo: "https://bi-platform-demo.surge.sh",
      year: "2021"
    },
    {
      id: 6,
      title: "Sales Management System",
      description: "An innovative sales management platform featuring lead tracking, performance analytics, and team collaboration tools. Streamlines sales processes with automated workflows and detailed reporting.",
      image: "/images/604fda80-354f-4397-ba72-b83028762b95.png",
      technologies: ["Vue.js", "Django", "PostgreSQL", "Celery"],
      github: "https://github.com/yanusukjhonson/sales-management",
      demo: "https://sales-system-demo.netlify.app",
      year: "2020"
    },
    {
      id: 7,
      title: "Project Management Dashboard",
      description: "A comprehensive project management solution with task tracking, team collaboration, and progress monitoring. Features real-time notifications and customizable project workflows for enhanced productivity.",
      image: "/images/392d9aa4-273f-4e41-9910-bc6c0e817a6f.png",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      github: "https://github.com/yanusukjhonson/project-management",
      demo: "https://project-dashboard-demo.vercel.app",
      year: "2019"
    },
    {
      id: 8,
      title: "Administrative Control Panel",
      description: "A modern administrative interface for system management with user controls, analytics, and monitoring capabilities. Built with responsive design and advanced security features for enterprise use.",
      image: "/images/ddf0df1f-f97d-447f-b540-88930834dbc9.png",
      technologies: ["Angular", "Spring Boot", "Oracle", "Redis"],
      github: "https://github.com/yanusukjhonson/financial-dashboard",
      demo: "https://admin-panel-demo.firebase.app",
      year: "2018"
    },
    {
      id: 9,
      title: "Sleek Analytics Dashboard UI",
      description: "A responsive Sleek admin dashboard UI featuring interactive charts, sales analytics, and real-time metrics like signups, orders, and system usage, designed for efficient business monitoring.",
      image: "/images/2b2ead0a-debf-4a9d-869e-e0016ad6aae3.png",
      technologies: ["Angular", "Spring Boot", "Oracle", "Redis"],
      github: "https://github.com/yanusukjhonson/admin-control-panel",
      demo: "https://admin-panel-demo.last.app",
      year: "2017"
    },
    {
      id: 10,
      title: "Responsive Analytics Dashboard UI",
      description: "A clean and minimalistic admin dashboard interface designed for tracking sales, earnings, user engagement, and business metrics in real time. It features dual area charts for visualizing weekly trends in sales and revenue, alongside KPI cards displaying totals such as 1,500 sales, $780 in earnings, and 4,252 active users.",
      image: "/images/3ecef0bd-d894-432b-9ba1-f5703ee8a1ac.png",
      technologies: ["Next", "Python", "Mysql", "Redis"],
      github: "https://github.com/yanusukjhonson/financial-dashboard",
      demo: "https://admin-panel-demo.firebase.app",
      year: "2016"
    }
  ];

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-24 bg-portfolio-light relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-portfolio-primary">
          My <span className="text-portfolio-accent">Projects</span>
        </h2>
        
        {/* Center dividing line */}
        <div 
          ref={lineRef}
          className="hidden md:block absolute left-1/2 top-32 bottom-0 w-px bg-portfolio-secondary/30 opacity-0 z-10"
          style={{ transform: 'translateX(-0.5px)' }}
        ></div>
        
        <div 
          ref={gridRef}
          className="space-y-16"
        >
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={project.id}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Project Content */}
                <div className="content-section md:w-1/2 px-4 md:px-8">
                  <div className={`${isEven ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                    <div className="text-6xl font-bold text-portfolio-accent/20 mb-2">
                      {project.year}
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-portfolio-primary">
                      {project.title}
                    </h3>
                    <p className="text-portfolio-secondary mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className={`flex flex-wrap gap-2 mb-6 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-white text-portfolio-primary rounded-full text-sm border border-portfolio-accent/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* <div className={`flex gap-4 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-portfolio-secondary hover:text-portfolio-accent transition-all duration-300 hover:scale-110"
                      >
                        <Github className="w-5 h-5" />
                        <span>Code</span>
                      </a>
                      <a 
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-portfolio-secondary hover:text-portfolio-accent transition-all duration-300 hover:scale-110"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>Live Demo</span>
                      </a>
                    </div> */}
                  </div>
                </div>
                
                {/* Project Image */}
                <div className="image-section md:w-1/2 px-4 md:px-8">
                  <div className={`${isEven ? 'md:pl-8' : 'md:pr-8'}`}>
                    <div className="relative group">
                      <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-105">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-portfolio-accent/0 group-hover:bg-portfolio-accent/10 transition-all duration-300"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
