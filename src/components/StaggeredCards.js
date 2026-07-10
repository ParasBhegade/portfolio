"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function StaggeredCards({ children, className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const childArray = Array.isArray(children) ? children : [children];

  return (
    <div ref={ref} className={`grid grid-cols-2 gap-8 ${className}`}>
      {childArray.map((child, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.5,
            delay: i * 0.12,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}
