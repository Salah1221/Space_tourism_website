import { useEffect, useState } from "react";
import Nav from "./Nav";

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("./src/data.json")
      .then((response) => response.json())
      .then((result) => setData(result));
  }, []);

  return (
    <div className="app home">
      <Nav></Nav>
      <div className="grid-container grid-container--home">
        <div className="grid-center">
          <h1 className="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1 grid">
            So, you want to travel to
            <span className="fs-900 ff-serif text-white">Space</span>
          </h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div>
          <a
            href="#"
            className="large-button uppercase ff-serif text-dark bg-white fs-600"
          >
            Explore
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
