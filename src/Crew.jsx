import PropTypes from "prop-types";

const Crew = ({ setBackgroundClass }) => {
  setBackgroundClass("crew");
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
