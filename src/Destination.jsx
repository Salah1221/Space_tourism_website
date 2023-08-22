import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Destination = ({ setBackgroundClass, destinations, isLight }) => {
  const [ind, setInd] = useState(0);
  const [clickedTabs, setClickedTabs] = useState([true, false, false, false]);

  const handleClick = (index) => {
    setInd(index);
    let aux = [false, false, false, false];
    aux[index] = true;
    setClickedTabs(aux);
  };

  useEffect(() => {
    setBackgroundClass("destination");
  });

  return (
    <main className="grid-container grid-container--destination flow">
      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ y: 30, opacity: 0 }}
        className="numbered-title"
      >
        <span aria-hidden="true">01</span> pick your destination
      </motion.h1>
      <motion.img
        src={
          isLight
            ? destinations[ind].images.light
            : destinations[ind].images.webp
        }
        alt={destinations[ind].name}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{ duration: 0.5 }}
      />
      <motion.div
        className="destination-info"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5 }}
      >
        <div className="tabs underline-indicators flex m-s-justify-center">
          {destinations.map((destination, i) => (
            <button
              aria-selected={clickedTabs[i] ? "true" : "false"}
              className="uppercase ff-sans-cond text-accent letter-spacing-2"
              onClick={() => handleClick(i)}
              key={i}
            >
              {destination.name}
            </button>
          ))}
        </div>
        <h2 className="fs-800 ff-serif uppercase">{destinations[ind].name}</h2>
        <p className="text-accent">{destinations[ind].description}</p>
        <div className="time-and-distance flex">
          <div>
            <h3 className="fs-200 uppercase ff-sans-cond letter-spacing-3 text-accent">
              Avg. Distance
            </h3>
            <p className="ff-serif uppercase">{destinations[ind].distance}</p>
          </div>
          <div>
            <h3 className="fs-200 uppercase ff-sans-cond letter-spacing-3 text-accent">
              Est. travel time
            </h3>
            <p className="ff-serif uppercase">{destinations[ind].travel}</p>
          </div>
        </div>
      </motion.div>
    </main>
  );
};

Destination.propTypes = {
  setBackgroundClass: PropTypes.func,
  destinations: PropTypes.array,
  isLight: PropTypes.bool,
};

export default Destination;
