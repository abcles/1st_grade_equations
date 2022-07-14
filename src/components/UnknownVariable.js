import React from "react";
import PropTypes from "prop-types";

const UnknownVariable = ({ value, readOnly, onChangeUnknownVariable }) => {
  return (
    <input
      className="unknown"
      type="text"
      value={value}
      onChange={onChangeUnknownVariable}
      readOnly={readOnly}
    />
  );
};

UnknownVariable.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

export default UnknownVariable;
