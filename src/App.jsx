import { useState } from "react";
import Nav from "./Nav";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Destination from "./Destination";
import Crew from "./Crew";
import Technology from "./Technology";
import data from "./data.json";

const App = () => {
  const [backgroundClass, setBackgroundClass] = useState("home");
  const [isLight, setIsLight] = useState(true);

  return (
    <div className={(isLight ? "light " : "") + "app " + backgroundClass}>
      <Nav isLight={isLight} setIsLight={setIsLight} />
      <Routes>
        <Route
          path="/"
          element={<Home setBackgroundClass={setBackgroundClass} />}
        />
        <Route
          path="destination"
          element={
            <Destination
              isLight={isLight}
              setBackgroundClass={setBackgroundClass}
              destinations={data.destinations}
            />
          }
        />
        <Route
          path="crew"
          element={
            <Crew
              isLight={isLight}
              setBackgroundClass={setBackgroundClass}
              crew={data.crew}
            />
          }
        />
        <Route
          path="technology"
          element={
            <Technology
              isLight={isLight}
              setBackgroundClass={setBackgroundClass}
              technology={data.technology}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
