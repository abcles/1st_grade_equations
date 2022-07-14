import React from "react";

const SizeInput = () => {
  return (
    <>
      Choose the number of problems you want to generate:
      <input
        type="number"
        value={numberEquations}
        onChange={setNumberEquations}
      />
    </>
  );
};

export default SizeInput;
