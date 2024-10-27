import { motion } from "framer-motion";
import { useEffect } from "react";
import "./loader.scss";
import loaderProps from "./motion/loader.motion";

const Loader: React.FC = (): JSX.Element => {
  const { initial, exit, transition } = loaderProps.defaultLoaderState;

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <motion.div
      className="loader-container"
      initial={initial}
      exit={exit}
      transition={transition}
    >
      <motion.span
        className="loader-text"
        variants={loaderProps.defaultLoaderVariant}
        initial="hidden"
        animate="visible"
      >
        SOME TEXT
      </motion.span>
    </motion.div>
  );
};

export default Loader;
