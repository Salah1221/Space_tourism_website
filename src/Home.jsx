import PropTypes from "prop-types";
import { useEffect } from "react";

const Home = ({ setBackgroundClass }) => {
  useEffect(() => {
    setBackgroundClass("home");
  });
  return (
    <>
      <a className="skip-to-content" href="#main">
        Skip to content
      </a>
      <main className="grid-container grid-container--home">
        <div className="lg-grid-center">
          <h1 className="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1 grid">
            So, you want to travel to
            <span className="fs-900 ff-serif text-white no-letter-spacing">
              Space
            </span>
          </h1>
          <p className="text-accent">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="large-button-container">
          <a
            href="#"
            id="main"
            className="large-button uppercase ff-serif text-dark bg-white fs-600"
          >
            Explore
          </a>
        </div>
      </main>
    </>
  );
};

Home.propTypes = {
  setBackgroundClass: PropTypes.func,
};

export default Home;
