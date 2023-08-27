import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="grid-container grid-container--home">
      <motion.div
        className="lg-grid-center"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        exit={{
          y: 20,
          opacity: 0,
        }}
      >
        <h1 className="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1 grid">
          So, you want to travel to
          <span className="fs-900 ff-serif text-white no-letter-spacing">
            Space
          </span>
        </h1>
        <p className="text-accent">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </motion.div>
      <motion.div
        className="large-button-container"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{
          scale: 0,
          opacity: 0,
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Link
          to="destination"
          id="main"
          className="large-button uppercase ff-serif text-dark bg-white fs-600"
        >
          Explore
        </Link>
      </motion.div>
    </main>
  );
};

export default Home;
