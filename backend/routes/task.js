// routes/tasks.js
const express = require("express");
const router = express.Router();
const validation = require("../middleware/validation");

// In-memory storage
let tasks = [];
let nextId = 1;

// GET all tasks
router.get("/", (req, res) => {
    res.json(tasks);
});

// POST create new task
router.post("/",validation, (req, res) => {
    const { title, description, priority } = req.body;

    const newTask = {
        id: nextId++,
        title,
        description: description || "",
        completed: false,
        createdAt: new Date(),
        priority
    };

    tasks.push(newTask);
    res.status(201).json(newTask);
});

// PUT update task
router.put("/:id", validation, (req, res) => {
    const id = parseInt(req.params.id);
    const task = tasks.find(t => t.id === id);
    if (!task) return res.status(404).json({ error: "Task not found" });

    const { title, description, completed, priority } = req.body;
    task.title = title;
    task.description = description;
    task.completed = completed;
    task.priority = priority;

    res.json(task);
});

// DELETE task
router.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = tasks.findIndex(t => t.id === id);
    if (index === -1) return res.status(404).json({ error: "Task not found" });

    tasks.splice(index, 1);
    res.status(204).send();
});

// PATCH toggle completed
router.patch("/:id/toggle", (req, res) => {
    const id = parseInt(req.params.id);
    const task = tasks.find(t => t.id === id);
    if (!task) return res.status(404).json({ error: "Task not found" });

    task.completed = !task.completed;
    res.json(task);
});

module.exports = router;
