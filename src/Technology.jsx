import PropTypes from "prop-types";
import { useState } from "react";
import { useEffect, useSyncExternalStore } from "react";
import { motion } from "framer-motion";

const Technology = ({ setBackgroundClass, technology, isLight }) => {
  const width = useSyncExternalStore(
    (callback) => {
      window.addEventListener("resize", callback);
      return () => window.removeEventListener("resize", callback);
    },
    () => window.innerWidth
  );

  useEffect(() => {
    setBackgroundClass("technology");
  });

  const [ind, setInd] = useState(0);

  return (
    <main className="grid-container grid-container--technology flow">
      <motion.h1
        className="numbered-title"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        exit={{ y: 20, opacity: 0 }}
      >
        <span aria-hidden="true">03</span> space launch 101
      </motion.h1>
      <motion.img
        src={
          width < 850
            ? isLight
              ? technology[ind].images["landscape-light"]
              : technology[ind].images.landscape
            : isLight
            ? technology[ind].images["portrait-light"]
            : technology[ind].images.portrait
        }
        alt={technology[ind].name}
        className="tech-img"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        exit={{ opacity: 0 }}
      />
      <div className="content flex">
        <div className="num-btns flex fs-600 ff-serif">
          {technology.map((_, i) => (
            <motion.button
              className="bg-dark text-white"
              aria-selected={ind === i ? "true" : "false"}
              onClick={() => setInd(i)}
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 0.3,
                delay: 0.1 * i + 0.4,
                ease: "easeOut",
              }}
              exit={{ scale: 0 }}
            >
              {i + 1}
            </motion.button>
          ))}
        </div>
        <article className="grid">
          <motion.h2
            className="fs-700 ff-serif uppercase grid"
            style={{ "--gap": "0.5rem" }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            exit={{ y: 20, opacity: 0 }}
          >
            <span className="fs-400 text-accent ff-sans-cond uppercase letter-spacing-3">
              The terminology...
            </span>
            {technology[ind].name}
          </motion.h2>
          <motion.p
            className="text-accent"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.8 }}
            exit={{ y: 20, opacity: 0 }}
          >
            {technology[ind].description}
          </motion.p>
        </article>
      </div>
    </main>
  );
};

Technology.propTypes = {
  setBackgroundClass: PropTypes.func,
  technology: PropTypes.array,
  isLight: PropTypes.bool,
};

export default Technology;
