import React from "react";

interface ButtonProps {
  text?: string;
  color?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({ text, color, onClick }) => {
  return (
    <button style={{ backgroundColor: color }} onClick={onClick} className="btn">
      {text}
    </button>
  );
};

export default Button;
Button.defaultProps = {
  text: "button",
  color: "steelblue",
};
