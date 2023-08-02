import PropTypes from "prop-types";

const Technology = ({ setBackgroundClass }) => {
  setBackgroundClass("technology");
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
