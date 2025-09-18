import "../styles/TaskItem.css"; // עיצוב לקרוסלה
export default function TaskItem({ task, onDelete, onToggle, onEdit }) {
  
  return (
    <div className={`task-item ${task.priority} ${task.completed ? "completed" : ""}`}>
  <span className="priority-badge">{task.priority}</span>
  <h3>{task.title}</h3>
  <p>{task.description}</p>
  <small>{new Date(task.createdAt).toLocaleString()}</small>
  <button onClick={() => onToggle(task.id)}>
    {task.completed ? "Mark Incomplete" : "Mark Complete"}
  </button>
  <button onClick={() => onEdit(task)}>Edit</button>
  <button onClick={() => onDelete(task.id)}>Delete</button>
</div>

  );
}
