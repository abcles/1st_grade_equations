import React, { useState, useEffect, lazy, Suspense } from "react";
import EquationList from "./components/EquationList";
import SettingsIcon from "./components/SettingsIcon";
import PrintIcon from "./components/PrintIcon";
import { NO_EQUATIONS, MAX_LIMIT, PAGE_TITLE } from "./utils/constants";
import BreakLine from "./components/BreakLine";

const SettingsSection = React.lazy(() =>
  import("./components/SettingsSection")
);

const App = () => {
  const [noEquations, setNoEquations] = useState(NO_EQUATIONS);
  const [maxLimit, setMaxLimit] = useState(MAX_LIMIT);
  const [equations, setEquations] = useState([]);
  const [areSettingsVisible, setAreSettingsVisible] = useState(false);
  const [pageTitle, setPageTitle] = useState(PAGE_TITLE);
  useEffect(() => {
    const eqArray = [];
    for (let i = 0; i < noEquations; i++) {
      eqArray.push("");
    }
    setEquations(eqArray);
  }, [noEquations, maxLimit]);

  const handleSettingsClick = () => {
    setAreSettingsVisible(areSettingsVisible ? false : true);
  };

  const handlePrinting = () => {
    window.print();
  };

  return (
    <>
      <div className="icons">
        <PrintIcon onPrintClick={handlePrinting} />
        <SettingsIcon onSettingsClick={handleSettingsClick} />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <SettingsSection
          noEquations={noEquations}
          maxLimit={maxLimit}
          pageTitle={pageTitle}
          areSettingsVisible={areSettingsVisible}
          setNoEquations={setNoEquations}
          setMaxLimit={setMaxLimit}
          setPageTitle={setPageTitle}
        />
      </Suspense>
      <h1>{pageTitle}</h1>
      {pageTitle ? <BreakLine /> : null}
      <EquationList
        size={noEquations}
        equations={equations}
        maxLimit={maxLimit}
      />
    </>
  );
};

export default App;
