import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const Nav = ({ setIsLight, isLight, isClicked, setIsClicked }) => {
  const location = useLocation();
  const [areClicked, setAreClicked] = useState([true, false, false, false]);

  const linkRef = useRef([]);

  const handleClick = (index) => {
    let aux = [false, false, false, false];
    aux[index] = true;
    setAreClicked(aux);
    linkRef.current[index].click();
    setIsClicked(false);
  };

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        handleClick(0);
        break;
      case "/destination":
        handleClick(1);
        break;
      case "/crew":
        handleClick(2);
        break;
      case "/technology":
        handleClick(3);
        break;
    }
  }, [location.pathname]);

  return (
    <header className="primary-header flex">
      <a className="skip-to-content" href="#main">
        Skip to content
      </a>
      <div style={{ lineHeight: 1 }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          className="logo"
        >
          <g fill="none" fillRule="evenodd">
            <circle cx="24" cy="24" r="24" fill="#FFF" id="circle" />
            <path
              fill="#0B0D17"
              d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
              id="star"
            />
          </g>
        </svg>
      </div>
      <button
        className="mobile-nav-toggle"
        aria-controls="primary-navigation"
        aria-expanded={isClicked ? "true" : "false"}
        onClick={() => setIsClicked(!isClicked)}
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
          <li
            className={"active".repeat(areClicked[0])}
            onClick={() => handleClick(0)}
          >
            <Link
              to="/"
              className="uppercase text-white letter-spacing-2"
              ref={(el) => (linkRef.current[0] = el)}
            >
              <span aria-hidden="true">00</span>Home
            </Link>
          </li>
          <li
            className={"active".repeat(areClicked[1])}
            onClick={() => handleClick(1)}
          >
            <Link
              to="destination"
              className="uppercase text-white letter-spacing-2"
              ref={(el) => (linkRef.current[1] = el)}
            >
              <span aria-hidden="true">01</span>Destination
            </Link>
          </li>
          <li
            className={"active".repeat(areClicked[2])}
            onClick={() => handleClick(2)}
          >
            <Link
              to="crew"
              className="uppercase text-white letter-spacing-2"
              ref={(el) => (linkRef.current[2] = el)}
            >
              <span aria-hidden="true">02</span>Crew
            </Link>
          </li>
          <li
            className={"active".repeat(areClicked[3])}
            onClick={() => handleClick(3)}
          >
            <Link
              to="technology"
              className="uppercase text-white letter-spacing-2"
              ref={(el) => (linkRef.current[3] = el)}
            >
              <span aria-hidden="true">03</span>Technology
            </Link>
          </li>
          <li className="no-underline"></li>
        </ul>
      </nav>
      <button
        className={"theme-toggle " + (isLight ? "dark" : "")}
        onClick={() => setIsLight(!isLight)}
        title="Dark/Light theme toggler"
      >
        <svg
          width="49"
          height="49"
          viewBox="0 0 49 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="circles">
            <circle className="circle" cx="2" cy="24.5" r="2" fill="#D0D6F9" />
            <circle
              className="circle"
              cx="8.5901"
              cy="8.59009"
              r="2"
              transform="rotate(45 8.5901 8.59009)"
              fill="#D0D6F9"
            />
            <circle
              className="circle"
              cx="24.5"
              cy="2"
              r="2"
              transform="rotate(90 24.5 2)"
              fill="#D0D6F9"
            />
            <circle
              className="circle"
              cx="40.4099"
              cy="8.59009"
              r="2"
              transform="rotate(135 40.4099 8.59009)"
              fill="#D0D6F9"
            />
            <circle
              className="circle"
              cx="47"
              cy="24.5"
              r="2"
              transform="rotate(180 47 24.5)"
              fill="#D0D6F9"
            />
            <circle
              className="circle"
              cx="40.4099"
              cy="40.4099"
              r="2"
              transform="rotate(-135 40.4099 40.4099)"
              fill="#D0D6F9"
            />
            <circle
              className="circle"
              cx="24.5"
              cy="47"
              r="2"
              transform="rotate(-90 24.5 47)"
              fill="#D0D6F9"
            />
            <circle
              className="circle"
              cx="8.5901"
              cy="40.4099"
              r="2"
              transform="rotate(-45 8.5901 40.4099)"
              fill="#D0D6F9"
            />
          </g>
          <path
            id="sun-part"
            d="M34.844 31.5203C36.2044 29.5191 37 27.1025 37 24.5C37 17.5963 31.4037 12 24.5 12C22.1819 12 20.0113 12.6312 18.1498 13.7309"
            stroke="#D0D6F9"
            strokeWidth="3"
            strokeMiterlimit="10"
          />
          <path
            id="moon"
            d="M18.1498 13.7309C16.9961 14.4645 13.866 16.6723 12.5631 20.7793C12.3711 21.3846 12 22.7669 12 24.5C12 31.4037 17.5963 37 24.5 37C28.8012 37 32.5946 34.8277 34.844 31.5203C29.8682 33.4206 24.2123 32.134 20.5586 28.2725C16.8778 24.3829 15.9212 18.6115 18.1498 13.7309Z"
            stroke="#D0D6F9"
            strokeWidth="3"
            strokeMiterlimit="10"
            strokeLinejoin="bevel"
          />
        </svg>
      </button>
    </header>
  );
};

Nav.propTypes = {
  isLight: PropTypes.bool,
  setIsLight: PropTypes.func,
  isClicked: PropTypes.bool,
  setIsClicked: PropTypes.func,
};

export default Nav;
