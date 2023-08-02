import PropTypes from "prop-types";
import { useEffect } from "react";

const Destination = ({ setBackgroundClass }) => {
  useEffect(() => {
    setBackgroundClass("destination");
  });
  return (
    <>
      <div></div>
    </>
  );
};

Destination.propTypes = {
  setBackgroundClass: PropTypes.func,
};

export default Destination;
