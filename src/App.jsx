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
  const [isLight, setIsLight] = useState(true);
  const [r, setR] = useState(0);
  const [mousePos, setMousePos] = useState([0, 0]);
  const [imgSrc, setImgSrc] = useState("none");

  const width = useSyncExternalStore(
    (callback) => {
      window.addEventListener("resize", callback);
      return () => window.removeEventListener("resize", callback);
    },
    () => window.innerWidth
  );

  const backgrounds = {
    dark: {
      mobile: {
        home: "/assets/home/background-home-mobile.jpg",
        destination: "/assets/destination/background-destination-mobile.jpg",
        crew: "/assets/crew/background-crew-mobile.jpg",
        technology: "/assets/technology/background-technology-mobile.jpg",
      },
      tablet: {
        home: "/assets/home/background-home-tablet.jpg",
        destination: "/assets/destination/background-destination-tablet.jpg",
        crew: "/assets/crew/background-crew-tablet.jpg",
        technology: "/assets/technology/background-technology-tablet.jpg",
      },
      desktop: {
        home: "/assets/home/background-home-desktop.jpg",
        destination: "/assets/destination/background-destination-desktop.jpg",
        crew: "/assets/crew/background-crew-desktop.jpg",
        technology: "/assets/technology/background-technology-desktop.jpg",
      },
    },
    light: {
      mobile: {
        home: "/assets/home/light/Mobile_Home.svg",
        destination: "/assets/destination/light/Mobile_Destination.svg",
        crew: "/assets/crew/light/Mobile_Crew.svg",
        technology: "/assets/technology/light/Mobile_Tech.svg",
      },
      tablet: {
        home: "/assets/home/light/Tablet_Home.svg",
        destination: "/assets/destination/light/Tablet_Destination.svg",
        crew: "/assets/crew/light/Tablet_Crew.svg",
        technology: "/assets/technology/light/Tablet_Tech.svg",
      },
      desktop: {
        home: "/assets/home/light/Desktop_Home.svg",
        destination: "/assets/destination/light/Desktop_Destination.svg",
        crew: "/assets/crew/light/Desktop_Crew.svg",
        technology: "/assets/technology/light/Desktop_Tech.svg",
      },
    },
  };

  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "destination",
      element: (
        <Destination isLight={isLight} destinations={data.destinations} />
      ),
    },
    {
      path: "crew",
      element: (
        <Crew isLight={isLight} crew={data.crew} crewPaths={data.crewPaths} />
      ),
    },
    {
      path: "technology",
      element: (
        <Technology
          isLight={isLight}
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

  let src =
    backgrounds[isLight ? "light" : "dark"][
      width > 800 ? "desktop" : width > 560 ? "tablet" : "mobile"
    ][location.pathname === "/" ? "home" : location.pathname.substring(1)];

  useEffect(() => {
    setR(200);
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setTimeout(() => {
        setImgSrc(src);
        setR(0);
      }, 1000);
    };
    return () => setR(200);
  }, [src]);

  return (
    <div
      className={(isLight ? "light " : "") + "app "}
      style={{
        "--radius": r + "vmax",
        "--center": mousePos[0] + "px " + mousePos[1] + "px",
        "--centerY": mousePos[1] + "px",
        "--background-image": `url(${imgSrc})`,
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
