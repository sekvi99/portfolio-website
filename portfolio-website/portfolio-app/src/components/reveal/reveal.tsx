import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import revealMotion from "./reveal.motion";

export interface RevealProps {
  children: JSX.Element;
  width?: "fit-content" | "100%";
}

// Credits to Tom Is Loading

const Reveal = ({ children, width = "fit-content" }: RevealProps) => {
  const { revealEntryMotion, revealExitMotion } = revealMotion;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: "relative", overflow: "hidden" }}>
      <motion.div
        variants={revealEntryMotion.variants}
        initial={revealEntryMotion.initial}
        animate={mainControls}
        transition={revealEntryMotion.transition}
      >
        {children}
      </motion.div>
      <motion.div
        variants={revealExitMotion.variants}
        initial={revealExitMotion.initial}
        animate={slideControls}
        transition={revealExitMotion.transition}
        style={revealExitMotion.style}
      >
      </motion.div>
    </div>
  );
};

export default Reveal;
