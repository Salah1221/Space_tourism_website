import PropTypes from "prop-types";

const Destination = ({ setBackgroundClass }) => {
  setBackgroundClass("destination");
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
