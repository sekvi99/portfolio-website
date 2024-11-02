import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./loader.scss";
import loaderProps from "./motion/loader.motion";

const Loader: React.FC = (): JSX.Element => {
  const { initial, exit, transition } = loaderProps.defaultLoaderState;
  const countdownValues = ["3..", "2..", "1..", "Welcome"];
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const interval = setInterval(() => {
      setCountdown((prev) => prev + 1);
    }, 500);

    return () => {
      clearInterval(interval);
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
        {countdownValues[countdown] || "Welcome"}
      </motion.span>
    </motion.div>
  );
};

export default Loader;
