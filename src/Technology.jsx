import PropTypes from "prop-types";
import { useState } from "react";
import { useEffect, useSyncExternalStore } from "react";

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
      <h1 className="numbered-title">
        <span aria-hidden="true">03</span> space launch 101
      </h1>
      <img
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
        loading="lazy"
      />
      <div className="content flex">
        <div className="num-btns flex fs-600 ff-serif">
          <button
            className="bg-dark text-white"
            aria-selected={ind === 0 ? "true" : "false"}
            onClick={() => setInd(0)}
          >
            1
          </button>
          <button
            className="bg-dark text-white"
            aria-selected={ind === 1 ? "true" : "false"}
            onClick={() => setInd(1)}
          >
            2
          </button>
          <button
            className="bg-dark text-white"
            aria-selected={ind === 2 ? "true" : "false"}
            onClick={() => setInd(2)}
          >
            3
          </button>
        </div>
        <article className="grid">
          <h2
            className="fs-700 ff-serif uppercase grid"
            style={{ "--gap": "0.5rem" }}
          >
            <span className="fs-400 text-accent ff-sans-cond uppercase letter-spacing-3">
              The terminology...
            </span>
            {technology[ind].name}
          </h2>
          <p className="text-accent">{technology[ind].description}</p>
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
