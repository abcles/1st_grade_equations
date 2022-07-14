import React from "react";

const SettingsSection = ({
  noEquations,
  maxLimit,
  pageTitle,
  areSettingsVisible,
  setNoEquations,
  setMaxLimit,
  setPageTitle,
}) => {
  return areSettingsVisible ? (
    <>
      <div className="hideme">
        Set the number of equations you want to generate:
        <br />
        <input
          value={noEquations}
          type="number"
          onChange={(e) => setNoEquations(e.target.value)}
        />
        <br />
        Set the maximum you want to use for computations:
        <br />
        <input
          value={maxLimit}
          type="number"
          onChange={(e) => setMaxLimit(e.target.value)}
        />
        <br />
        Set the page title:
        <br />
        <input
          value={pageTitle}
          onChange={(e) => setPageTitle(e.target.value)}
        />
        <br />
      </div>
    </>
  ) : (
    <></>
  );
};

export default SettingsSection;
