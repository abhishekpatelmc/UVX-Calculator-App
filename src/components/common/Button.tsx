import React, { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type = "button", className = "", children, ...props }, ref) => {
    const baseClasses =
      "px-4 py-2 font-semibold text-xl hover:bg-sky-300 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75";

    return (
      <button
        ref={ref}
        type={type}
        className={`${baseClasses} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

export default Button;
