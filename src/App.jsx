import { cloneElement, useEffect, useState, useSyncExternalStore } from "react";
import Nav from "./Nav";
import Home from "./Home";
import { useLocation, useRoutes } from "react-router-dom";
import Destination from "./Destination";
import Crew from "./Crew";
import Technology from "./Technology";
import data from "./data.json";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const [backgroundClass, setBackgroundClass] = useState("home");
  const [isLight, setIsLight] = useState(true);
  const [r, setR] = useState(0);
  const [mousePos, setMousePos] = useState([0, 0]);

  const width = useSyncExternalStore(
    (callback) => {
      window.addEventListener("resize", callback);
      return () => window.removeEventListener("resize", callback);
    },
    () => window.innerWidth
  );

  const routes = useRoutes([
    {
      path: "/",
      element: <Home setBackgroundClass={setBackgroundClass} />,
    },
    {
      path: "destination",
      element: (
        <Destination
          isLight={isLight}
          setBackgroundClass={setBackgroundClass}
          destinations={data.destinations}
        />
      ),
    },
    {
      path: "crew",
      element: (
        <Crew
          isLight={isLight}
          setBackgroundClass={setBackgroundClass}
          crew={data.crew}
          crewPaths={data.crewPaths}
        />
      ),
    },
    {
      path: "technology",
      element: (
        <Technology
          isLight={isLight}
          setBackgroundClass={setBackgroundClass}
          technology={data.technology}
          width={width}
        />
      ),
    },
  ]);

  const location = useLocation();

  const handleClick = (e) => {
    setMousePos([e.clientX, e.clientY]);
  };

  useEffect(() => {
    setR(200);
    setTimeout(() => setR(0), 1000);
    return () => setR(200);
  }, [location.pathname]);

  return (
    <div
      className={(isLight ? "light " : "") + "app " + backgroundClass}
      style={{
        "--radius": r + "vmax",
        "--center": mousePos[0] + "px " + mousePos[1] + "px",
        "--centerY": mousePos[1] + "px",
      }}
      onMouseDown={handleClick}
    >
      <Nav isLight={isLight} setIsLight={setIsLight} />
      <AnimatePresence mode="wait">
        {cloneElement(routes, { key: location.pathname })}
      </AnimatePresence>
    </div>
  );
};

export default App;
