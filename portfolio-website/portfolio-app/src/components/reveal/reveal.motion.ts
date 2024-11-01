import { MotionStyle } from "framer-motion";

export interface RevealMotion {
  variants: {
    hidden: { [key: string]: any };
    visible: { [key: string]: any };
  };
  initial: string;
  transition: { duration: number; delay?: number, ease?: string };
}

export interface RevealExitMotion extends RevealMotion {
    style: MotionStyle
}


const revealEntryMotion: RevealMotion = {
  variants: { hidden: { opacity: 0, y: 75 }, visible: { opacity: 1, y: 0 } },
  initial: "hidden",
  transition: { duration: 0.5, delay: 0.25 },
};

const revealExitMotion: RevealExitMotion = {
    variants: { hidden: { left: 0 }, visible: { left: "100%" } },
    initial: "hidden",
    transition: { duration: 0.7, ease: "easeIn" },
    style: {
        position: "absolute",
        top: 4,
        bottom: 4,
        left: 0,
        right: 0,
        background: "var(--primary-highlight-color)",
        zIndex: 20
    }
}

export default { revealEntryMotion, revealExitMotion };
