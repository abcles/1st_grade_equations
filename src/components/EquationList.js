import React, { useState } from "react";
import Equation from "./Equation";

const EquationList = ({ size, equations, maxLimit }) => {
  const [result, setResult] = useState(0);
  const [answeredFromTotal, setAnsweredFromTotal] = useState(0);

  const adjustResult = (newResult) => {
    console.log("newResult: ", newResult);
    if (newResult == "YES") {
      setResult(result + 1);
    }
    setAnsweredFromTotal(answeredFromTotal + 1);
  };

  return (
    <>
      {equations.map((value, index) => (
        <Equation key={index} adjustResult={adjustResult} maxLimit={maxLimit} />
      ))}
      <div className="hideme">
        Your score: {result} point / {size}
        <br />
        Answered already to: {answeredFromTotal} problems / {size}
      </div>
    </>
  );
};

export default EquationList;
