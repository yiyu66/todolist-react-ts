import React, { useEffect, useState } from "react";
import "./App.css";
// import List from "./components/List";
import TaskList from "./components/TaskList";
// import AddToList from "./components/AddToList";
export interface Itask {
  tasks: {
    id: number;
    text: string;
    day: string;
    reminder: boolean;
  }[];
}

function App() {
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

  const deleteTasks = (id: number) => {
    console.log("delete", id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id: number) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, reminder: !task.reminder } : task)));
  };
  return (
    <div className="container">
      <h1>任务列表</h1>
      {tasks.length > 0 ? (
        <TaskList tasks={tasks} onDelete={deleteTasks} onToggle={toggleReminder}></TaskList>
      ) : (
        "No Tasks"
      )}
      {/* <List people={people}></List> */}
      {/* <AddToList people={people} setPeople={setPeople}></AddToList> */}
    </div>
  );
}

export default App;
