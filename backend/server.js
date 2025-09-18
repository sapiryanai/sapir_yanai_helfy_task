const express = require("express");
const cors = require("cors");
const tasksRoutes = require("./routes/task");

const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Mount routes
app.use("/api/tasks", tasksRoutes);

// Start server
app.listen(PORT, () => {
    console.log(` Backend running on http://localhost:${PORT}`);
});
