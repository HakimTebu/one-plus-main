// AnimatedSection.js
import React, { useEffect, useRef } from "react";

const AnimatedSection = ({ children, direction = "left", delay = 0 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`animated-section ${direction}`}
      style={{ "--delay": `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
