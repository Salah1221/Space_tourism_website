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

  return (
    <div className={"app " + backgroundClass}>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={<Home setBackgroundClass={setBackgroundClass} />}
        />
        <Route
          path="destination"
          element={
            <Destination
              setBackgroundClass={setBackgroundClass}
              destinations={data.destinations}
            />
          }
        />
        <Route
          path="crew"
          element={
            <Crew setBackgroundClass={setBackgroundClass} crew={data.crew} />
          }
        />
        <Route
          path="technology"
          element={<Technology setBackgroundClass={setBackgroundClass} />}
        />
      </Routes>
    </div>
  );
};

export default App;
