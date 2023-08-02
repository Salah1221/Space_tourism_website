import PropTypes from "prop-types";
import { useEffect } from "react";

const Technology = ({ setBackgroundClass }) => {
  useEffect(() => {
    setBackgroundClass("technology");
  });
  return (
    <>
      <div></div>
    </>
  );
};

Technology.propTypes = {
  setBackgroundClass: PropTypes.func,
};

export default Technology;
