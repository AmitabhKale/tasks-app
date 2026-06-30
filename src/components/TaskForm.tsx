import { useState } from "react";

type TaskFormProps = {
    tasks: any[];
  addTask: (task: any) => void;
};

const TaskForm = ({ tasks, addTask }: TaskFormProps) => {
  const [taskData, setTaskData] = useState({
    id: "",
    text: "",
    day: "",
    reminder: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    taskData.id = crypto.randomUUID();

    addTask([...tasks, taskData]);
    setTaskData({
      id: "",
      text: "",
      day: "",
      reminder: false,
    });
  }

  return (
    <div className="card mb-2 p-4 border-warning">
      <h5>Add Your Task</h5>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="taskText" className="form-label">
            Task
          </label>
          <input
            type="text"
            value={taskData.text}
            onChange={(e) => setTaskData({ ...taskData, text: e.target.value })}
            className="form-control"
            id="taskText"
            placeholder="Enter task"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="taskDay" className="form-label">
            Day & Time
          </label>
          <input
            type="date"
            value={taskData.day}
            onChange={(e) => setTaskData({ ...taskData, day: e.target.value })}
            className="form-control"
            id="taskDay"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            checked={taskData.reminder}
            onChange={(e) => setTaskData({ ...taskData, reminder: e.target.checked })}
            className="form-check-input"
            id="taskReminder"
          />
          <label htmlFor="taskReminder" className="form-check-label">
            Set Reminder
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Add Task
        </button>
      </form>

      <hr />
    </div>
  );
};

export default TaskForm;
