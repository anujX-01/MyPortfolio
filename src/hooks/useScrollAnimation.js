import { useEffect } from 'react';

// This hook uses Intersection Observer to detect when elements enter the screen.
// When they do, it adds the specific animation class so they animate in.
export const useScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Check what kind of animation the element wants based on its dataset
            const animationType = entry.target.dataset.animation || 'animate-up';
            entry.target.classList.add(animationType);
            // Once animated, we don't need to observe it anymore
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};
