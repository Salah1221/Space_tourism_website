import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Destination = ({ setBackgroundClass, destinations }) => {
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
      <h1 className="numbered-title">
        <span aria-hidden="true">01</span> pick your destination
      </h1>
      <img src={destinations[ind].images.webp} alt={destinations[ind].name} />
      <div className="destination-info">
        <div className="tabs underline-indicators flex m-s-justify-center">
          <button
            aria-selected={clickedTabs[0] ? "true" : "false"}
            className="uppercase ff-sans-cond text-accent letter-spacing-2"
            onClick={() => handleClick(0)}
          >
            Moon
          </button>
          <button
            aria-selected={clickedTabs[1] ? "true" : "false"}
            className="uppercase ff-sans-cond text-accent letter-spacing-2"
            onClick={() => handleClick(1)}
          >
            Mars
          </button>
          <button
            aria-selected={clickedTabs[2] ? "true" : "false"}
            className="uppercase ff-sans-cond text-accent letter-spacing-2"
            onClick={() => handleClick(2)}
          >
            Europa
          </button>
          <button
            aria-selected={clickedTabs[3] ? "true" : "false"}
            className="uppercase ff-sans-cond text-accent letter-spacing-2"
            onClick={() => handleClick(3)}
          >
            Titan
          </button>
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
      </div>
    </main>
  );
};

Destination.propTypes = {
  setBackgroundClass: PropTypes.func,
  destinations: PropTypes.array,
};

export default Destination;
