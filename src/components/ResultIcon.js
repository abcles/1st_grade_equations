import React from "react";

const ValidationButton = ({ resultValue }) =>
  resultValue ? (
    resultValue === "YES" ? (
      <span className="correct">✔</span>
    ) : (
      <span className="incorrect">✘</span>
    )
  ) : null;

export default ValidationButton;
