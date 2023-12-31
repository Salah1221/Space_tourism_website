import PropTypes from "prop-types";
import { useState } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";

const Technology = ({
  technology,
  isLight,
  width,
  setHeight,
  setIsClicked,
  rootFont,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [ind, setInd] = useState(0);

  let src =
    width < 57.625 * rootFont
      ? isLight
        ? technology[ind].images["landscape-light"]
        : technology[ind].images.landscape
      : isLight
      ? technology[ind].images["portrait-light"]
      : technology[ind].images.portrait;

  useEffect(() => setHeight(document.body.scrollHeight));

  useEffect(() => {
    const img = new Image();
    img.src = src;
    setIsLoaded(false);
    img.onload = () => {
      setIsLoaded(true);
    };
  }, [src]);

  return (
    <main
      className="grid-container grid-container--technology flow"
      onMouseDown={() => setIsClicked(false)}
    >
      <motion.h1
        className="numbered-title"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        exit={{ y: 20, opacity: 0 }}
      >
        <span aria-hidden="true">03</span> space launch 101
      </motion.h1>
      {isLoaded ? (
        <motion.img
          src={src}
          alt={technology[ind].name}
          className="img"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        />
      ) : width < 850 ? (
        <motion.svg
          viewBox="0 0 768 310"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="img"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <path
            d="M0 0H768V310H0V0Z"
            fill="hsl(var(--clr-light))"
            fillOpacity="0.2"
            className="loader"
          />
          <path d="M0 307H768V310H0V307Z" fill="hsl(var(--clr-light))" />
          <path d="M0 0H768V3H0V0Z" fill="hsl(var(--clr-light))" />
        </motion.svg>
      ) : (
        <motion.svg
          viewBox="0 0 515 537"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="img"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <path
            d="M0 0H515V537H0V0Z"
            fill="hsl(var(--clr-light))"
            fillOpacity="0.2"
            className="loader"
          />
          <rect x="5" width="510" height="5" fill="hsl(var(--clr-light))" />
          <rect
            x="5"
            y="532"
            width="510"
            height="5"
            fill="hsl(var(--clr-light))"
          />
          <rect
            x="5"
            width="537"
            height="4.99998"
            transform="rotate(90 5 0)"
            fill="hsl(var(--clr-light))"
          />
        </motion.svg>
      )}

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
                delay: 0.1 * i + 0.3,
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
  technology: PropTypes.array,
  isLight: PropTypes.bool,
  width: PropTypes.number,
  setHeight: PropTypes.func,
  setIsClicked: PropTypes.func,
  rootFont: PropTypes.number,
};

export default Technology;
