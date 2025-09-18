import React, { useState, useEffect, useRef } from "react"; // <-- useRef נוסף
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";
import { getTasks, createTask, updateTask, deleteTask, toggleTask } from "./services/task";
import "./styles/App.css"; 

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [editingTask, setEditingTask] = useState(null); 
  const [sortOption, setSortOption] = useState("date"); 
  const taskListRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");


  useEffect(() => {
    getTasks().then(setTasks);
  }, []);

  const handleAdd = async (task) => {
    if (editingTask) {
      const updated = await updateTask(editingTask.id, task);
      setTasks(tasks.map(t => t.id === editingTask.id ? updated : t));
      setEditingTask(null);
    } else {
      const newTask = await createTask(task);
      setTasks([...tasks, newTask]);
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this task?");
    if (!confirmed) return;

    await deleteTask(id);
    setTasks(tasks.filter(t => t.id !== id));
  };

  const handleToggle = async (id) => {
    const updated = await toggleTask(id);
    setTasks(tasks.map(t => t.id === id ? updated : t));
  };

  const handleEdit = (task) => {
    setEditingTask(task);
  };

  // סינון
  const filteredTasks = tasks.filter(t => {
    if (filter === "completed") return t.completed;
    if (filter === "pending") return !t.completed;
    return true;
  });
// סינון לפי חיפוש
const searchedTasks = filteredTasks.filter(t =>
  t.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
  t.description.toLowerCase().includes(searchTerm.toLowerCase())
);
  // מיון
 // מיון אחרי סינון וחיפוש
const sortedTasks = [...searchedTasks].sort((a, b) => {
  if (sortOption === "date") return new Date(a.createdAt) - new Date(b.createdAt);
  if (sortOption === "priority") {
    const priorityMap = { low: 1, medium: 2, high: 3 };
    return (priorityMap[b.priority] || 0) - (priorityMap[a.priority] || 0);
  }
  if (sortOption === "title") return a.title.localeCompare(b.title);
  return 0;
});

   useEffect(() => {
    if (taskListRef.current) {
      taskListRef.current.scrollLeft = 0; // אתחול גלילה לאתחול
    }
  }, [filter, sortOption]); 



  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskForm onSubmit={handleAdd} task={editingTask} />
      
   
      <TaskFilter 
        filter={filter} 
        setFilter={setFilter} 
        sortOption={sortOption} 
        setSortOption={setSortOption} 
      />
      <div className="search-container">
  <input
    type="text"
    placeholder="Search tasks..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
</div>
      <div className="tasks-container">
        <TaskList 
  tasks={sortedTasks} 
  onDelete={handleDelete} 
  onToggle={handleToggle} 
  onEdit={handleEdit} 
/>
      </div>
    </div>
  );
}

export default App;
