import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Crew = ({ setBackgroundClass, crew, isLight }) => {
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
        {crew.map((member, i) => (
          <button
            aria-selected={ind === i ? "true" : "false"}
            onClick={() => setInd(i)}
            key={i}
          >
            <span className="sr-only">The {member.role}</span>
          </button>
        ))}
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
        <img
          src={isLight ? crew[ind].images.light : crew[ind].images.webp}
          alt={crew[ind].name}
          loading="lazy"
        />
      </div>
    </main>
  );
};

Crew.propTypes = {
  setBackgroundClass: PropTypes.func,
  crew: PropTypes.array,
  isLight: PropTypes.bool,
};

export default Crew;
