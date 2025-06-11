
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
      title: "Online Shopping Website for Clothing",
      description: "This project is about creating a website where users can browse, select, and buy clothes. It includes categories like men’s, women’s, and kids’ wear, and lets users add items to a cart. The website also includes a checkout system with different payment options. It's perfect for launching a fashion store online.",
      image: "/images/cedcb8c0-b11d-4a67-b72d-97977ddec4cd.png",
      technologies: ["React", "TypeScript", "D3.js", "Node.js"],
      github: "https://github.com/yanusukjhonson/matdash-analytics",
      demo: "https://matdash-analytics.vercel.app",
      year: "2025"
    },
    {
      id: 2,
      title: "Grocery Delivery App",
      description: "This project involves building a mobile app where users can order groceries and get them delivered to their homes. The app shows nearby stores, fresh items, and offers. Users can pay online and choose delivery times. It helps people save time by shopping from home.",
      image: "/images/df01d867-a25d-44fe-9f18-fd0a34eeeb69.png",
      technologies: ["Vue.js", "Express.js", "PostgreSQL", "Redis"],
      github: "https://github.com/yanusukjhonson/enterprise-dashboard",
      demo: "https://enterprise-dashboard-demo.netlify.app",
      year: "2024"
    },
    {
      id: 3,
      title: "Product Recommendation System",
      description: "This system suggests items to users based on what they view or buy. It uses customer data to guess what they might want next. For example, if someone buys a laptop, it might show laptop bags or a mouse. It works using algorithms and user history. It’s great for increasing sales and making shopping feel more personal. This is useful for any type of online store.",
      image: "/images/fe876b9e-6ff6-408a-848f-d5fe7f6a4011.png",
      technologies: ["Next.js", "MongoDB", "Chart.js", "AWS"],
      github: "https://github.com/yanusukjhonson/ecommerce-analytics",
      demo: "https://ecommerce-analytics-hub.vercel.app",
      year: "2023"
    },
    {
      id: 4,
      title: "E-Commerce Website with Live Chat Support",
      description: "This website includes a live chat feature that connects customers with support agents. It helps answer questions quickly during shopping. Customers can ask about shipping, returns, or product details. Fast answers help users decide to buy more confidently. The chat works 24/7 and builds trust with users. It’s ideal for electronics or technical product stores.",
      image: "/images/db472bbc-bbca-4478-b90c-e44a23704da3.png",
      technologies: ["Angular", "Laravel", "MySQL", "Docker"],
      github: "https://github.com/yanusukjhonson/financial-dashboard",
      demo: "https://financial-metrics-demo.herokuapp.com",
      year: "2022"
    },
    {
      id: 5,
      title: "Online Bookstore",
      description: "This project is about selling books through an online platform. Users can browse books by title, author, or category. Each book page has a description, price, and user reviews. Buyers can choose between eBooks or printed versions. The site includes recommendations based on reading habits. It’s perfect for small publishers or book lovers starting a store.",
      image: "/images/2b6eff1e-731c-4cc5-9b0e-9dad49d27c11.png",
      technologies: ["React", "Python", "FastAPI", "Elasticsearch"],
      github: "https://github.com/yanusukjhonson/business-intelligence",
      demo: "https://bi-platform-demo.surge.sh",
      year: "2021"
    },
    {
      id: 6,
      title: "E-Commerce App with Push Notifications",
      description: "This mobile app keeps users updated with push messages. It reminds them of sales, new arrivals, or items left in the cart. The app can send alerts even when it’s closed. These notifications improve engagement and bring users back. It supports rich messages with images and offers. It’s great for increasing repeat customers.",
      image: "/images/604fda80-354f-4397-ba72-b83028762b95.png",
      technologies: ["Vue.js", "Django", "PostgreSQL", "Celery"],
      github: "https://github.com/yanusukjhonson/sales-management",
      demo: "https://sales-system-demo.netlify.app",
      year: "2020"
    },
    {
      id: 7,
      title: "Secure Online Payment System",
      description: "This project creates a safe way for users to pay online. It uses encryption to protect credit card or UPI details. Payments go through secure services like Stripe or PayPal. The system also checks for fraud signs and blocks unsafe activity. It includes receipts and refund options for users. It’s a must-have for any e-commerce website.",
      image: "/images/392d9aa4-273f-4e41-9910-bc6c0e817a6f.png",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      github: "https://github.com/yanusukjhonson/project-management",
      demo: "https://project-dashboard-demo.vercel.app",
      year: "2019"
    },
    {
      id: 8,
      title: "Multi-Vendor Marketplace",
      description: "This platform allows many sellers to register and sell their products. Each vendor has their own dashboard to manage inventory. The site handles payments and shipping tools for all vendors. It earns money by taking a small commission on each sale. Users can shop from various brands in one place. It works like a small Amazon or Etsy.",
      image: "/images/ddf0df1f-f97d-447f-b540-88930834dbc9.png",
      technologies: ["Angular", "Spring Boot", "Oracle", "Redis"],
      github: "https://github.com/yanusukjhonson/financial-dashboard",
      demo: "https://admin-panel-demo.firebase.app",
      year: "2018"
    },
    {
      id: 9,
      title: "Order and Delivery Tracking System",
      description: "This tool updates users about their order’s status after purchase. It shows when the item is packed, shipped, and delivered. Customers get a tracking number and estimated delivery time. Notifications are sent by email or in-app messages. It builds trust and keeps people from worrying. It's useful for stores with physical product delivery.",
      image: "/images/2b2ead0a-debf-4a9d-869e-e0016ad6aae3.png",
      technologies: ["Angular", "Spring Boot", "Oracle", "Redis"],
      github: "https://github.com/yanusukjhonson/admin-control-panel",
      demo: "https://admin-panel-demo.last.app",
      year: "2017"
    },
    {
      id: 10,
      title: "Wishlist and Save-for-Later Feature",
      description: "This feature lets users save items they like but aren’t ready to buy. It creates a wishlist that they can return to later. Users can also share their wishlist with friends or family. The store can notify them if saved items go on sale. It improves user engagement and can lead to more purchases. It’s simple, but very effective for customer retention.",
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
