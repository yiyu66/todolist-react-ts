import React from "react";
import { Itask } from "../App";
import { FaTimes } from "react-icons/fa";

interface Props {
  tasks: Itask["tasks"];
  onDelete(taskID: number): void;
  onToggle(taskID: number): void;
}

const TaskList: React.FC<Props> = ({ tasks, onDelete, onToggle }) => {
  const List = (): JSX.Element[] => {
    return tasks.map((tasks) => {
      return (
        <li
          className={`task ${tasks.reminder && "reminder"}`}
          key={tasks.id}
          onDoubleClick={() => {
            onToggle(tasks.id);
          }}
        >
          <h3>
            {tasks.text} <FaTimes style={{ color: "red", cursor: "pointer" }} onClick={() => onDelete(tasks.id)} />
          </h3>
          <p>{tasks.day}</p>
        </li>
      );
    });
  };
  return <ul>{List()}</ul>;
};

export default TaskList;
