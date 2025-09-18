import { useState, useEffect } from "react";
import "../styles/TaskForm.css";

export default function TaskForm({ onSubmit, task }) {
  const [title, setTitle] = useState(task?.title || "");
  const [description, setDescription] = useState(task?.description || "");
  const [priority, setPriority] = useState(task?.priority || "low");

  // עדכון השדות כאשר task משתנה (לעריכה)
  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setPriority(task.priority);
    }
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return alert("Title is required");
    onSubmit({ title, description, priority });
    setTitle("");
    setDescription("");
    setPriority("low");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
      <input value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" />
      <select value={priority} onChange={e => setPriority(e.target.value)}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button type="submit">{task ? "Update" : "Add"} Task</button>
    </form>
  );
}
