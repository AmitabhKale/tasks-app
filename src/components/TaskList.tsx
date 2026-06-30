
type tasksProps = {
  id: string;
  text: string;
  day: string;
  reminder: boolean;
};

const TaskList = ({ tasks, deleteTask }: { tasks: tasksProps[]; deleteTask: (id: string) => void }) => {
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id} className="card mb-2 py-2 px-3 border-secondary">
          <h4>{task.text}</h4>

          <div className="row">
            <div className="col-8">
          <p className="text-muted">Due: {task.day}</p>

          <p className="" >
            Reminder
            <span className="fw-bold">: </span> 
            <span className={task.reminder ? 'text-success' : 'text-danger'}>
              {task.reminder ? 'Yes' : 'No'}
            </span>
          </p>
            </div>
            <div className="col-4">
              <button className="btn btn-danger" onClick={() => deleteTask(task.id)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TaskList
