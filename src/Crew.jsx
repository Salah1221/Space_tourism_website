import PropTypes from "prop-types";
import { useEffect } from "react";

const Crew = ({ setBackgroundClass }) => {
  useEffect(() => {
    setBackgroundClass("crew");
  });
  return (
    <>
      <div></div>
    </>
  );
};

Crew.propTypes = {
  setBackgroundClass: PropTypes.func,
};

export default Crew;
