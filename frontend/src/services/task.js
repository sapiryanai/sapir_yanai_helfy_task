const URL = "http://localhost:4000/api/tasks";

async function getTasks() {
  const res = await fetch(URL);
  return res.json();
}

async function createTask(task) {
  const res = await fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task)
  });
  return res.json();
}

async function updateTask(id, task) {
  const res = await fetch(`${URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task)
  });
  return res.json();
}

async function deleteTask(id) {
  return fetch(`${URL}/${id}`, { method: "DELETE" });
}

async function toggleTask(id) {
  const res = await fetch(`${URL}/${id}/toggle`, { method: "PATCH" });
  return res.json();
}

export { 
  getTasks, 
  createTask, 
  updateTask, 
  deleteTask, 
  toggleTask 
};
