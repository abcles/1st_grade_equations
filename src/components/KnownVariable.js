import React from "react";
import PropTypes from "prop-types";

const KnownVariable = ({ value }) => {
  return <div className="known">{value}</div>;
};

KnownVariable.propTypes = {
  value: PropTypes.string,
};

export default KnownVariable;
