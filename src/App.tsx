import React, { useEffect, useState } from "react";
import "./App.css";
// import List from "./components/List";
import TaskList from "./components/TaskList";
// import AddToList from "./components/AddToList";

export interface IState {
  people: {
    name: string;
    img: string;
    age: number;
    note?: string;
  }[];
}
export interface Itask {
  tasks: {
    id: number;
    text: string;
    day: string;
    reminder: boolean;
  }[];
}

function App() {
  // const [people, setPeople] = useState<IState["people"]>([
  //   {
  //     name: "詹姆斯",
  //     img: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
  //     age: 35,
  //     note: "Allegeric to staying on the same team",
  //   },
  //   {
  //     name: "科比",
  //     img: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
  //     age: 42,
  //   },
  // ]);
  const [tasks, setTasks] = useState<Itask["tasks"]>([]);
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
      console.log(tasksFromServer);
    };
    getTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch("https://7e6d0635-ffba-427a-8206-9544b91dc0f8.mock.pstmn.io/tasks");
    const data = await res.json();
    return data;
  };
  return (
    <div className='container'>
      <h1>任务列表</h1>
      <TaskList tasks={tasks}></TaskList>
      {/* <List people={people}></List> */}
      {/* <AddToList people={people} setPeople={setPeople}></AddToList> */}
    </div>
  );
}

export default App;
