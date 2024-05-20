import React from "react";
import Button from "./common/Button";
import BackSpaceIcon from "../assets/BackSpaceIcon";

interface CalculatorExpressionsProps {
  updateExpression: (value: string) => void;
  calculateResult: () => void;
  clearExpression: () => void;
  backspaceExpression: () => void;
}

const CalculatorExpressions = ({
  updateExpression,
  calculateResult,
  clearExpression,
  backspaceExpression,
}: CalculatorExpressionsProps) => {
  const calculatorKeys = [
    ["7", "8", "9", "/"],
    ["4", "5", "6", "*"],
    ["1", "2", "3", "-"],
    ["0", ".", "+"],
  ];
  return (
    <div className="grid grid-cols-4 gap-4 mb-4">
      {calculatorKeys.map((row, index) => (
        <React.Fragment key={index}>
          {row.map((key) => (
            <Button
              key={key}
              className="p-2 hover:bg-sky-300 text-gray-700 font-semibold rounded shadow"
              onClick={() => updateExpression(key)}
            >
              {key}
            </Button>
          ))}
        </React.Fragment>
      ))}

      <Button
        className="col-span-2 mt-2 bg-sky-300 hover:bg-sky-700 text-white"
        onClick={calculateResult}
      >
        =
      </Button>

      <Button
        className="col-span-1 mt-2 hover:sky-300 hover:text-white md:text-2xl text-sm"
        onClick={clearExpression}
      >
        AC
      </Button>

      <Button
        className="col-span-1 mt-2  hover:sky-300 hover:text-white text-center"
        onClick={backspaceExpression}
      >
        <BackSpaceIcon />
      </Button>
    </div>
  );
};

export default CalculatorExpressions;
