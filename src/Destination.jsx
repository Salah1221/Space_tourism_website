import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Destination = ({ destinations, isLight, setHeight, setIsClicked }) => {
  const [ind, setInd] = useState(0);
  const [clickedTabs, setClickedTabs] = useState([true, false, false, false]);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleClick = (index) => {
    setInd(index);
    let aux = [false, false, false, false];
    aux[index] = true;
    setClickedTabs(aux);
  };

  let src = isLight
    ? destinations[ind].images.light
    : destinations[ind].images.webp;

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
      className="grid-container grid-container--destination flow"
      onMouseDown={() => setIsClicked(false)}
    >
      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ y: 30, opacity: 0 }}
        className="numbered-title"
      >
        <span aria-hidden="true">01</span> pick your destination
      </motion.h1>
      {isLoaded ? (
        <motion.img
          src={src}
          alt={destinations[ind].name}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="img"
          key={src}
        />
      ) : (
        <motion.svg
          viewBox="0 0 451 451"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="img"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <circle
            className="loader"
            cx="222.5"
            cy="222.5"
            r="220"
            fill="hsl(var(--clr-light))"
            fillOpacity="0.2"
            stroke="hsl(var(--clr-light))"
            strokeWidth="5"
          />
        </motion.svg>
      )}

      <div className="destination-info">
        <div className="tabs underline-indicators flex m-s-justify-center">
          {destinations.map((destination, i) => (
            <motion.button
              aria-selected={clickedTabs[i] ? "true" : "false"}
              className="uppercase ff-sans-cond text-accent letter-spacing-2"
              onClick={() => handleClick(i)}
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.2, delay: 0.1 * i }}
            >
              {destination.name}
            </motion.button>
          ))}
        </div>
        <motion.h2
          className="fs-800 ff-serif uppercase"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {destinations[ind].name}
        </motion.h2>
        <motion.p
          className="text-accent"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          {destinations[ind].description}
        </motion.p>
        <div className="time-and-distance flex">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <h3 className="fs-200 uppercase ff-sans-cond letter-spacing-3 text-accent">
              Avg. Distance
            </h3>
            <p className="ff-serif uppercase">{destinations[ind].distance}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <h3 className="fs-200 uppercase ff-sans-cond letter-spacing-3 text-accent">
              Est. travel time
            </h3>
            <p className="ff-serif uppercase">{destinations[ind].travel}</p>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

Destination.propTypes = {
  destinations: PropTypes.array,
  isLight: PropTypes.bool,
  setHeight: PropTypes.func,
  setIsClicked: PropTypes.func,
};

export default Destination;
