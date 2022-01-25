import React from "react";

interface ButtonProps {
  text?: string;
  color?: string;
  onclick?(): Function;
}

const Button: React.FC<ButtonProps> = ({ text, color, onclick }) => {
  return (
    <button style={{ backgroundColor: color }} onClick={onclick} className="btn">
      {text}
    </button>
  );
};

export default Button;
Button.defaultProps = {
  text: "button",
  color: "steelblue",
};
