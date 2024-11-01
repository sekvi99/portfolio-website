import { Variants } from "framer-motion";

interface NavigationAnimation extends Variants {
  initial: AnimationVariant;
  enter: AnimationVariant;
  exit: AnimationVariant;
}

interface AnimationVariant {
  [key: string]: any;
}

export const navigationAnimation: NavigationAnimation = {
  initial: { y: "-100%" },
  enter: { y: "0%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  exit: { y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
};
