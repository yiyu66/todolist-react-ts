import React from "react";
import Button from "./Button";
interface Props {
  title?: string;
  showAdd: boolean;
  onAdd: React.MouseEventHandler<HTMLButtonElement>;
}
const Header: React.FC<Props> = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button text={showAdd ? "Close" : "Add"} color={showAdd ? "red" : "green"} onClick={onAdd} />
    </header>
  );
};
Header.defaultProps = {
  title: "Task Tracker",
};
export default Header;
