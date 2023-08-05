import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Crew = ({ setBackgroundClass, crew }) => {
  const [ind, setInd] = useState(0);

  useEffect(() => {
    setBackgroundClass("crew");
  });
  return (
    <main className="grid-container grid-container--crew flow">
      <h1 className="numbered-title">
        <span aria-hidden="true">02</span> meet your crew
      </h1>
      <div className="dot-indicators flex">
        <button
          aria-selected={ind === 0 ? "true" : "false"}
          onClick={() => setInd(0)}
        >
          <span className="sr-only">The {crew[0].role}</span>
        </button>
        <button
          aria-selected={ind === 1 ? "true" : "false"}
          onClick={() => setInd(1)}
        >
          <span className="sr-only">The {crew[1].role}</span>
        </button>
        <button
          aria-selected={ind === 2 ? "true" : "false"}
          onClick={() => setInd(2)}
        >
          <span className="sr-only">The {crew[2].role}</span>
        </button>
        <button
          aria-selected={ind === 3 ? "true" : "false"}
          onClick={() => setInd(3)}
        >
          <span className="sr-only">The {crew[3].role}</span>
        </button>
      </div>
      <article className="bio grid">
        <h2
          className="fs-700 ff-serif uppercase grid"
          style={{ "--gap": "0.5rem" }}
        >
          <span className="role fs-600">{crew[ind].role}</span>
          {crew[ind].name}
        </h2>
        <p className="text-accent">{crew[ind].bio}</p>
      </article>
      <div className="crew-image">
        <img src={crew[ind].images.webp} alt={crew[ind].name} />
      </div>
    </main>
  );
};

Crew.propTypes = {
  setBackgroundClass: PropTypes.func,
  crew: PropTypes.array,
};

export default Crew;
