import React, { useEffect, useState } from "react";
import "./App.css";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Footer from "./components/Footer";
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
  const [showAddTask, setShowAddTask] = useState(false);
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch("https://7e6d0635-ffba-427a-8206-9544b91dc0f8.mock.pstmn.io/tasks");
    const data = await res.json();
    return data;
  };

  const deleteTasks = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const addTask = (task: Itask["tasks"][0]) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { ...task, id: id };
    setTasks([...tasks, newTask]);
  };

  const toggleReminder = (id: number) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, reminder: !task.reminder } : task)));
  };
  return (
    <div className="container">
      <Header
        title="Task Tracker"
        showAdd={showAddTask}
        onAdd={() => {
          setShowAddTask(!showAddTask);
        }}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <TaskList tasks={tasks} onDelete={deleteTasks} onToggle={toggleReminder}></TaskList>
      ) : (
        "No Tasks"
      )}
      <Footer />
    </div>
  );
}

export default App;
