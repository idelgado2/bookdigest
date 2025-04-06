import React from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const ButtonNormal: React.FC<ButtonProps> = ({
  type = "button",
  onClick,
  children,
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-2 bg-indigo-600 text-white font-semibold rounded-xl shadow-md hover:bg-indigo-700 transition duration-200 ease-in-out ${className}`}
    >
      {children}
    </button>
  );
};

export default ButtonNormal;
