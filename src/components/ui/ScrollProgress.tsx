
"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="scroll-progress-track">
      <motion.div
        className="scroll-progress-fill"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
}
