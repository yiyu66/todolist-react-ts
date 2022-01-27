import React from "react";
import Button from "./Button";
import { useLocation } from "react-router-dom";
interface Props {
  title?: string;
  showAdd: boolean;
  onAdd: React.MouseEventHandler<HTMLButtonElement>;
}
const Header: React.FC<Props> = ({ title, onAdd, showAdd }) => {
  const location = useLocation();
  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button text={showAdd ? "Close" : "Add"} color={showAdd ? "red" : "green"} onClick={onAdd} />
      )}
    </header>
  );
};
Header.defaultProps = {
  title: "Task Tracker",
};
export default Header;
