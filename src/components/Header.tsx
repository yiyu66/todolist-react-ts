import React from "react";
import Button from "./Button";
interface Props {
  title?: string;
  showAdd: boolean;
  onAdd?() : Function;
}
const Header: React.FC<Props> = ({ title, onAdd, showAdd }) => {
  return (
    <div>
      <h1>{title}</h1>
      <Button text={showAdd ? "Close" : "Add"} color={showAdd ? "red" : "green"} onclick={onAdd} />
    </div>
  );
};
Header.defaultProps = {
  title: "Task Tracker",
};
export default Header;
