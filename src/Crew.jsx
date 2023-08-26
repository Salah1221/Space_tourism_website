import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Crew = ({ setBackgroundClass, crew, isLight, crewPaths }) => {
  const [ind, setInd] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setBackgroundClass("crew");
  });

  let src = isLight ? crew[ind].images.light : crew[ind].images.webp;

  useEffect(() => {
    const img = new Image();
    img.src = src;
    setIsLoaded(false);
    img.onload = () => {
      setIsLoaded(true);
    };
  }, [src]);

  return (
    <main className="grid-container grid-container--crew flow">
      <motion.h1
        className="numbered-title"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        exit={{ y: 20, opacity: 0 }}
      >
        <span aria-hidden="true">02</span> meet your crew
      </motion.h1>
      <div className="dot-indicators flex">
        {crew.map((member, i) => (
          <motion.button
            aria-selected={ind === i ? "true" : "false"}
            onClick={() => setInd(i)}
            key={i}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{ delay: i * 0.1 + 0.1, duration: 0.3 }}
          >
            <span className="sr-only">The {member.role}</span>
          </motion.button>
        ))}
      </div>
      <article className="bio grid">
        <motion.h2
          className="fs-700 ff-serif uppercase grid"
          style={{ "--gap": "0.5rem" }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          <span className="role fs-600">{crew[ind].role}</span>
          {crew[ind].name}
        </motion.h2>
        <motion.p
          className="text-accent"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.3 }}
        >
          {crew[ind].bio}
        </motion.p>
      </article>
      <div className="crew-image">
        {isLoaded ? (
          <motion.img
            src={src}
            alt={crew[ind].name}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.3 }}
            className="img"
          />
        ) : (
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox={
              "0 0 " + crewPaths.widths[ind] + " " + crewPaths.heights[ind]
            }
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            className="img"
          >
            <path
              className="loader"
              d={crewPaths.paths[ind]}
              fill="hsl(var(--clr-light))"
              stroke="hsl(var(--clr-light))"
              fillOpacity={0.2}
              strokeWidth={5}
            />
          </motion.svg>
        )}
      </div>
    </main>
  );
};

Crew.propTypes = {
  setBackgroundClass: PropTypes.func,
  crew: PropTypes.array,
  isLight: PropTypes.bool,
  crewPaths: PropTypes.object,
};

export default Crew;
