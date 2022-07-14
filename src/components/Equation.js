import React, { useState, useEffect } from "react";
import KnownVariable from "./KnownVariable";
import UnknownVariable from "./UnknownVariable";
import { getRandomNumber } from "../utils/functions";
import { MIN_LIMIT } from "../utils/constants";
import ResultCheck from "./ResultCheck";
import BreakLine from "./BreakLine";

const Equation = ({ maxLimit, adjustResult }) => {
  const [isPlusSign, setIsPlusSign] = useState(true);
  const [memberOneValue, setMemberOneValue] = useState("");
  const [memberTwoValue, setMemberTwoValue] = useState("");
  const [resultValue, setResultValue] = useState("");
  const [unknownPosition, setUnknownPosition] = useState(0);
  const [resultCorrect, setResultCorrect] = useState("");

  const setResult = (result) => {
    setResultCorrect(result);
    console.log("result: ", result);
    adjustResult(result);
  };

  useEffect(() => {
    const valueOne = getRandomNumber(MIN_LIMIT, maxLimit);
    const randSign = getRandomNumber(1, 2);
    if (randSign === 1) {
      // +
      const valueTwo = getRandomNumber(0, maxLimit - valueOne);
      const unknownPosition = getRandomNumber(1, 3);
      setUnknownPosition(unknownPosition);
      switch (unknownPosition) {
        case 1:
          setIsPlusSign(false);
          setMemberOneValue("");
          setMemberTwoValue(
            valueOne > valueTwo ? valueOne.toString() : valueTwo.toString()
          );
          setResultValue(
            valueOne > valueTwo ? valueTwo.toString() : valueOne.toString()
          );
          break;
        case 2:
          setIsPlusSign(false);
          setMemberOneValue(
            valueOne > valueTwo ? valueOne.toString() : valueTwo.toString()
          );
          setMemberTwoValue("");
          setResultValue(
            valueOne > valueTwo ? valueTwo.toString() : valueOne.toString()
          );
          break;
        case 3:
          setIsPlusSign(true);
          setMemberOneValue(valueOne.toString());
          setMemberTwoValue(valueTwo.toString());
          setResultValue("");
          break;
      }
    } else {
      // -
      const valueTwo = getRandomNumber(0, valueOne - MIN_LIMIT);
      const unknownPosition = getRandomNumber(1, 3);
      setUnknownPosition(unknownPosition);
      switch (unknownPosition) {
        case 1:
          setIsPlusSign(true);
          setMemberOneValue("");
          setMemberTwoValue(
            valueOne > valueTwo ? valueTwo.toString() : valueOne.toString()
          );
          setResultValue(
            valueOne > valueTwo ? valueOne.toString() : valueTwo.toString()
          );
          break;
        case 2:
          setIsPlusSign(true);
          setMemberOneValue(
            valueOne > valueTwo ? valueTwo.toString() : valueOne.toString()
          );
          setMemberTwoValue("");
          setResultValue(
            valueOne > valueTwo ? valueOne.toString() : valueTwo.toString()
          );
          break;
        case 3:
          setIsPlusSign(false);
          setMemberOneValue(
            valueOne > valueTwo ? valueOne.toString() : valueTwo.toString()
          );
          setMemberTwoValue(
            valueOne > valueTwo ? valueTwo.toString() : valueOne.toString()
          );
          setResultValue("");
          break;
      }
    }
  }, [maxLimit]);

  const onChangeUnknownVariable = (e) => {
    switch (unknownPosition) {
      case 1:
        setMemberOneValue(e.target.value.toString());
        break;
      case 2:
        setMemberTwoValue(e.target.value.toString());
        break;
      case 3:
        setResultValue(e.target.value.toString());
        break;
    }
  };

  const onValidationClick = () => {
    const val1 = Number(memberOneValue);
    const val2 = Number(memberTwoValue);
    const resVal = Number(resultValue);

    let resultCorrect = true;
    if (isPlusSign) {
      if (val1 + val2 !== resVal) {
        resultCorrect = false;
      }
    } else {
      if (val1 - val2 !== resVal) {
        resultCorrect = false;
      }
    }

    if (resultCorrect) {
      setResult("YES");
    } else {
      setResult("NO");
    }
  };

  switch (unknownPosition) {
    case 1:
      return (
        <div className="eq-container">
          <UnknownVariable
            value={memberOneValue}
            onChangeUnknownVariable={onChangeUnknownVariable}
            readOnly={resultCorrect ? true : false}
          />
          <KnownVariable value={isPlusSign ? "+" : "-"} />
          <KnownVariable value={memberTwoValue.toString()} />
          <KnownVariable value="=" />
          <KnownVariable value={resultValue.toString()} />
          <ResultCheck
            resultCorrect={resultCorrect}
            onValidationClick={onValidationClick}
          />
          <BreakLine />
        </div>
      );
    case 2:
      return (
        <div className="eq-container">
          <KnownVariable value={memberOneValue.toString()} />
          <KnownVariable value={isPlusSign ? "+" : "-"} />
          <UnknownVariable
            value={memberTwoValue}
            onChangeUnknownVariable={onChangeUnknownVariable}
            readOnly={resultCorrect ? true : false}
          />
          <KnownVariable value="=" />
          <KnownVariable value={resultValue.toString()} />
          <ResultCheck
            resultCorrect={resultCorrect}
            onValidationClick={onValidationClick}
          />
          <BreakLine />
        </div>
      );
    case 3:
      return (
        <div className="eq-container">
          <KnownVariable value={memberOneValue.toString()} />
          <KnownVariable value={isPlusSign ? "+" : "-"} />
          <KnownVariable value={memberTwoValue.toString()} />
          <KnownVariable value="=" />
          <UnknownVariable
            value={resultValue}
            onChangeUnknownVariable={onChangeUnknownVariable}
            readOnly={resultCorrect ? true : false}
          />
          <ResultCheck
            resultCorrect={resultCorrect}
            onValidationClick={onValidationClick}
          />
          <BreakLine />
        </div>
      );
    default:
      return null;
  }
};

export default Equation;
