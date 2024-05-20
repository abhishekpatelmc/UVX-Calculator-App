import React from "react";

interface CalculatorHeaderProps {
  input: string;
  result: string;
}

const CalculatorHeader = ({ input, result }: CalculatorHeaderProps) => {
  return (
    <div className="bg-teal-400 p-4 rounded mb-4 shadow text-white h-32">
      <div className="text-white font-semibold text-3xl text-end">{input}</div>
      <div className="text-white font-semibold text-2xl text-end">{result}</div>
    </div>
  );
};

export default CalculatorHeader;
