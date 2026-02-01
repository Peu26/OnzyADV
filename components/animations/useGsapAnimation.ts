import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useScrollReveal(
  callback: (el: HTMLElement) => gsap.core.Animation,
  deps: any[] = []
) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      if (ref.current) {
        const anim = callback(ref.current);
        return () => {
          anim?.kill();
        };
      }
    }, 100);

    return () => clearTimeout(timer);
  }, deps);

  return ref;
}

// Helper for standard fade-in up animation
export function useFadeInUp(delay: number = 0) {
  return useScrollReveal((el) => {
    return gsap.fromTo(
      el,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });
}