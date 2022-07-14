import React from "react";

const ValidationButton = ({ onValidationClick }) => {
  return (
    <span className="validation-span hideme">
      <input
        className="validation"
        type="button"
        value="✓ Check"
        onClick={onValidationClick}
      />
    </span>
  );
};

export default ValidationButton;
