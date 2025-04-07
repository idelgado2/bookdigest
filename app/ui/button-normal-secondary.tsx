import React from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const ButtonSecondary: React.FC<ButtonProps> = ({
  type = "button",
  onClick,
  children,
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-2 bg-secondary text-white font-semibold rounded-xl shadow-md hover:bg-secondaryHover transition duration-200 ease-in-out ${className}`}
    >
      {children}
    </button>
  );
};

export default ButtonSecondary;
