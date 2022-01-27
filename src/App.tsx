import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
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
  // 请求任务列表
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  };
  // 请求单个任务
  const fetchTask = async (id: number) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  };
  const deleteTasks = async (id: number) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    res.status === 200 ? setTasks(tasks.filter((task) => task.id !== id)) : alert("Delete task failed");
  };

  // const addTask = (task: Itask["tasks"][0]) => { // 本地操作
  //   const id = Math.floor(Math.random() * 10000) + 1;
  //   const newTask = { ...task, id: id };
  //   setTasks([...tasks, newTask]);
  // };
  const addTask = async (task: Itask["tasks"][0]) => {
    const res = await fetch(`http://localhost:5000/tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    setTasks([...tasks, data]);
  };

  const toggleReminder = async (id: number) => {
    const taskToToggle = await fetchTask(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    });
    const data = await res.json();
    setTasks(tasks.map((task) => (task.id === id ? { ...task, reminder: data.reminder } : task)));
  };
  return (
    <Router>
      <div className="container">
        <Header
          title="Task Tracker"
          showAdd={showAddTask}
          onAdd={() => {
            setShowAddTask(!showAddTask);
          }}
        />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {showAddTask && <AddTask onAdd={addTask} />}
                {tasks.length > 0 ? (
                  <TaskList tasks={tasks} onDelete={deleteTasks} onToggle={toggleReminder}></TaskList>
                ) : (
                  "No Tasks"
                )}
              </>
            }
          ></Route>
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
