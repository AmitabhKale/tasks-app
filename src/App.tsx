import { useState } from "react"
import Header from "./components/Header"
import "bootstrap/dist/css/bootstrap.min.css"
import TaskList from "./components/TaskList"
import TaskForm from "./components/TaskForm"

const App = () => {
  const allTasks = [
        { id: "cd1222", text: 'Docker & Kubernetes', day: '2023-06-01', reminder: true },
        { id: "de2344", text: 'Harness Basics', day: '2023-06-03', reminder: true },
    ];

  const [tasks, setTasks] = useState(allTasks);


  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <Header title="Task Tracker" />
      <div className="container py-3">
        <div className="row gx-3 gy-3">
          <div className="col-12 col-md-6">
            <TaskForm tasks={tasks} addTask={setTasks} />
          </div>
          <div className="col-12 col-md-6">
            <TaskList tasks={tasks} deleteTask={deleteTask} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
