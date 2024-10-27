import { Variants } from "framer-motion";

export interface Loader extends Variants {
  hidden: { [key: string]: any };
  visible: { [key: string]: any };
}

export interface LoaderState {
  initial: { y: number; opacity: number };
  exit: { y: string; opactiy: number };
  transition: { duration: number };
}

const defaultLoaderVariant: Loader = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 1,
      yoyo: Infinity,

      ease: "easeInOut",
    },
  },
};

const defaultLoaderState: LoaderState = {
  initial: { y: 0, opacity: 1 },
  exit: { y: "100%", opactiy: 0 },
  transition: { duration: 2 },
};

export default { defaultLoaderVariant, defaultLoaderState };
