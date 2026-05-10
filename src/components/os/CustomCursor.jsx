import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Real-time fast mouse coordinate trackers
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Slowed, responsive spring coordinate trackers for the outer trailing ring
  const springConfig = { damping: 25, stiffness: 200 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      // Detect interactive elements for expanding/glow state
      const interactive = target.closest(
        "button, a, input, select, textarea, [role='button'], .cursor-pointer, .group"
      );
      setIsHovered(!!interactive);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible, cursorX, cursorY]);

  if (typeof window === "undefined") return null;

  return (
    <>
      {/* Conditionally disable platform cursor on md+ screen desktops, but preserve touch interfaces */}
      <style>
        {`
          @media (min-width: 768px) {
            body, button, a, input, select, textarea, div, span, * {
              cursor: none !important;
            }
          }
        `}
      </style>

      {/* Outer Glow Trailing Ring - highly responsive spring physics */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-primary/50 rounded-full pointer-events-none z-[9999] hidden md:block mix-blend-difference"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          scale: isHovered ? 1.4 : 1,
          opacity: isVisible ? 1 : 0,
          backgroundColor: isHovered ? "hsl(var(--primary) / 0.15)" : "transparent",
          backdropFilter: isHovered ? "blur(1px)" : "none",
        }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
      />

      {/* Inner Core OS Style Arrow - zero delay direct matching tracker */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "0%",
          translateY: "0%",
          opacity: isVisible ? 1 : 0,
        }}
      >
        <svg 
          width="18" 
          height="26" 
          viewBox="0 0 16 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          style={{
            filter: "drop-shadow(0px 2px 3px rgba(0,0,0,0.4))",
            transform: isHovered ? "scale(0.9)" : "scale(1)",
            transition: "transform 0.15s ease"
          }}
        >
          <path 
            d="M0 0L0 16L4.5 11.5L9 20L11.5 18.5L7.5 10L13 10L0 0Z" 
            fill="hsl(var(--primary))" 
            stroke="white" 
            strokeWidth="1.5" 
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </>
  );
};
