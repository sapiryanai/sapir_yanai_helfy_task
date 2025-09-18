import "../styles/TaskFilter.css";

export default function TaskFilter({ filter, setFilter, sortOption, setSortOption }) {
  return (
    <div className="task-filter">
      {/* Filter Section */}
      <span className="filter-label">Filter:</span>
      <button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>All</button>
      <button className={filter === "completed" ? "active" : ""} onClick={() => setFilter("completed")}>Completed</button>
      <button className={filter === "pending" ? "active" : ""} onClick={() => setFilter("pending")}>Pending</button>

      {/* Sorting Section */}
      <span className="filter-label" style={{ marginLeft: "20px" }}>Sort by:</span>
      <button className={sortOption === "date" ? "active" : ""} onClick={() => setSortOption("date")}>Date</button>
      <button className={sortOption === "priority" ? "active" : ""} onClick={() => setSortOption("priority")}>Priority</button>
      <button className={sortOption === "title" ? "active" : ""} onClick={() => setSortOption("title")}>Title</button>
    </div>
  );
}
