import { useState } from "react";
import Logo from "./assets/shared/logo.svg";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isClicked, SetIsClicked] = useState(false);
  const [areClicked, setAreClicked] = useState([true, false, false, false]);

  const handleClick = (index) => {
    let aux = [false, false, false, false];
    aux[index] = true;
    setAreClicked(aux);
  };

  return (
    <header className="primary-header flex">
      <div>
        <img src={Logo} alt="space tourism logo" className="logo" />
      </div>
      <button
        className="mobile-nav-toggle"
        aria-controls="primary-navigation"
        aria-expanded={isClicked ? "true" : "false"}
        onClick={() => SetIsClicked(!isClicked)}
      >
        <span className="sr-only">Menu</span>
        <svg
          width="30"
          height="43"
          viewBox="0 0 30 43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          id="burger-icon"
        >
          <path
            d="M0 12.5531H23.5335C24.4154 12.5067 26.3742 11.7733 27.154 9.21107C27.9338 6.64885 27.4789 4.75504 27.154 4.12841C25.9007 2.36456 23.2689 0.0483464 22.7676 4.89429C22.2663 9.74023 21.4447 11.7872 21.0966 12.205L2.64577 30.6558"
            stroke="#D0D6F9"
            strokeWidth="3"
            id="top"
          />
          <path
            d="M1.84516e-06 30.4469L23.5335 30.4469C24.4154 30.4933 26.3742 31.2267 27.154 33.7889C27.9338 36.3512 27.4789 38.245 27.154 38.8716C25.9007 40.6354 23.2689 42.9517 22.7676 38.1057C22.2663 33.2598 21.4447 31.2128 21.0966 30.795L2.64578 12.3442"
            stroke="#D0D6F9"
            strokeWidth="3"
            id="bottom"
          />
          <path
            d="M0 21.5348H23.6727"
            stroke="#D0D6F9"
            strokeWidth="3"
            id="middle"
          />
        </svg>
      </button>
      <nav>
        <ul
          id="primary-navigation"
          className="primary-navigation underline-indicators flex ff-sans-cond bg-blur"
        >
          <li className={"active".repeat(areClicked[0])}>
            <Link
              to="/"
              className="uppercase text-white letter-spacing-2"
              onClick={() => handleClick(0)}
            >
              <span aria-hidden="true">00</span>Home
            </Link>
          </li>
          <li className={"active".repeat(areClicked[1])}>
            <Link
              to="destination"
              className="uppercase text-white letter-spacing-2"
              onClick={() => handleClick(1)}
            >
              <span aria-hidden="true">01</span>Destination
            </Link>
          </li>
          <li className={"active".repeat(areClicked[2])}>
            <Link
              to="crew"
              className="uppercase text-white letter-spacing-2"
              onClick={() => handleClick(2)}
            >
              <span aria-hidden="true">02</span>Crew
            </Link>
          </li>
          <li className={"active".repeat(areClicked[3])}>
            <Link
              to="technology"
              className="uppercase text-white letter-spacing-2"
              onClick={() => handleClick(3)}
            >
              <span aria-hidden="true">03</span>Technology
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
