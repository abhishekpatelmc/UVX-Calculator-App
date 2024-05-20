import React from "react";
import useCalculator from "../hooks/useCalculator";
import CalculatorHeader from "../components/CalculatorHeader";
import CalculatorExpressions from "../components/CalculatorExpressions";

const App: React.FC = () => {
  const {
    expression,
    result,
    updateExpression,
    calculateResult,
    clearExpression,
    backspaceExpression,
  } = useCalculator();

  return (
    <div className="w-6/12 flex justify-center mx-auto">
      <div className="mt-10">
        <h1 className="font-semibold md:text-4xl text-2xl text-center mb-5 text-teal-400">
          Calculator App
        </h1>
        <CalculatorHeader input={expression} result={result} />
        <CalculatorExpressions
          updateExpression={updateExpression}
          calculateResult={calculateResult}
          clearExpression={clearExpression}
          backspaceExpression={backspaceExpression}
        />
      </div>
    </div>
  );
};

export default App;
