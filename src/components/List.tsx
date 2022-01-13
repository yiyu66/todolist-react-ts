import React from "react";
import { IState as IProps } from "../App";

const List: React.FC<IProps> = ({ people }) => {
  const personList = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <li className="List" key={person.name}>
          <div className="List-header">
            <img className="List-img" src="person.img" alt="头像" />
            <h2>{person.name}</h2>
          </div>
          <p>{person.age} years old</p>
          <p className="List-note">{person.note}</p>
        </li>
      );
    });
  };
  return <ul>{personList()}</ul>;
};

export default List;
