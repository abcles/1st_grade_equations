import React from "react";
import ValidationButton from "./ValidationButton";
import ResultIcon from "./ResultIcon";

const ResultCheck = ({ resultCorrect, onValidationClick }) => {
  return (
    <>
      {resultCorrect !== "YES" && resultCorrect !== "NO" ? (
        <ValidationButton onValidationClick={onValidationClick} />
      ) : null}
      <ResultIcon resultValue={resultCorrect} />
    </>
  );
};

export default ResultCheck;
