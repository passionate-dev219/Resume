
import { useState, useEffect, useCallback } from 'react';

interface UseScrollAnimationOptions {
  delay?: number;
  threshold?: number;
  rootMargin?: string;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const { delay = 0, threshold = 0.1, rootMargin = '0px' } = options;
  const [elements, setElements] = useState<Element[]>([]);
  
  const callback = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;
          setTimeout(() => {
            element.classList.add('visible');
          }, delay);
        }
      });
    },
    [delay]
  );
  
  useEffect(() => {
    const observer = new IntersectionObserver(callback, {
      threshold,
      rootMargin,
    });
    
    const currentElements = elements;
    
    if (currentElements.length > 0) {
      currentElements.forEach((element) => observer.observe(element));
    }
    
    return () => {
      if (currentElements.length > 0) {
        currentElements.forEach((element) => observer.unobserve(element));
      }
    };
  }, [callback, elements, rootMargin, threshold]);
  
  const observe = useCallback((elements: Element[]) => {
    setElements(elements);
  }, []);
  
  return { observe };
};
