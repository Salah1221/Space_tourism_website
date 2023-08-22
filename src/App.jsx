import { cloneElement, useEffect, useState } from "react";
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
        />
      ),
    },
  ]);

  const location = useLocation();

  useEffect(() => {
    setR(100);
    setTimeout(() => setR(0), 1000);
  }, [location.pathname]);

  return (
    <div
      className={(isLight ? "light " : "") + "app " + backgroundClass}
      style={{ "--radius": r + "vmax" }}
    >
      <Nav isLight={isLight} setIsLight={setIsLight} />
      <AnimatePresence mode="wait">
        {cloneElement(routes, { key: location.pathname })}
      </AnimatePresence>
    </div>
  );
};

export default App;
