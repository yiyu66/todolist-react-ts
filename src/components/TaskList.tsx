import React from "react";
import { Itask as IProps } from "../App";
import { FaTimes } from "react-icons/fa";

const TaskList: React.FC<IProps> = ({ tasks }) => {
  const List = (): JSX.Element[] => {
    return tasks.map((tasks) => {
      return (
        <li className={`task ${tasks.reminder && "reminder"}`} key={tasks.id}>
          <h3>
            {tasks.text} <FaTimes style={{ color: "red", cursor: "pointer" }} />
          </h3>
          <p>{tasks.day}</p>
        </li>
      );
    });
  };
  return <ul>{List()}</ul>;
};

export default TaskList;
