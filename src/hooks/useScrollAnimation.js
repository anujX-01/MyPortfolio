import { useEffect, useRef } from 'react';

/**
 * Advanced scroll animation hook.
 * Uses IntersectionObserver to add the animation class to elements when they enter the viewport.
 * Supports data-animation to customise the reveal direction.
 * Supports data-delay for staggered timing.
 */
export const useScrollAnimation = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const animationType = el.dataset.animation || 'animate-up';
            const delay = el.dataset.delay || '0';

            // Apply delay before adding the class so CSS transition fires after delay
            setTimeout(() => {
              el.classList.add(animationType);
            }, parseFloat(delay) * 1000);

            observerRef.current.unobserve(el);
          }
        });
      },
      {
        threshold: 0.08,        // Fire when 8% is visible
        rootMargin: '0px 0px -40px 0px', // Triggers slightly before bottom edge
      }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);
};
