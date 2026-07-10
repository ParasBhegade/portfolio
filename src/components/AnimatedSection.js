"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function AnimatedSection({
  children,
  className,
  style,
  id,
  delay = 0,
  direction = "up",
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const directionMap = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
  };

  const offset = directionMap[direction] || directionMap.up;

  return (
    <motion.section
      ref={ref}
      id={id}
      className={className || ""}
      style={style}
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.section>
  );
}
