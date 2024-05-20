import { useState } from "react";
import { create, all, evaluate } from "mathjs";

const math = create(all);

interface UseCalculatorHook {
  expression: string;
  result: string;
  updateExpression: (value: string) => void;
  calculateResult: () => void;
  clearExpression: () => void;
  backspaceExpression: () => void;
}

const useCalculator = (): UseCalculatorHook => {
  const [expression, setExpression] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const updateExpression = (value: string): void => {
    setExpression((prev) => prev + value);
  };

  const calculateResult = (): void => {
    try {
      if (expression) {
        const calcResult = evaluate(expression, math);
        setResult(calcResult.toString());
      }
    } catch (error) {
      console.error("Calculation error:", error);
      setResult("Error");
    }
  };

  const clearExpression = (): void => {
    setExpression("");
    setResult("");
  };

  const backspaceExpression = (): void => {
    setExpression((prev) => prev.slice(0, -1));
  };

  return {
    expression,
    result,
    updateExpression,
    calculateResult,
    clearExpression,
    backspaceExpression,
  };
};

export default useCalculator;
