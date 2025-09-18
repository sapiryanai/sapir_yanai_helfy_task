# Task Manager App

A simple Task Manager application built with **React** (frontend) and **Express.js/Node.js** (backend).  
Allows users to create, view, edit, delete, and toggle tasks with priorities, filtering, sorting, and search functionality.

## Folder Structure
├── backend/
│ ├── package.json
│ ├── server.js
│ ├── routes/
│ └── middleware/
├── frontend/
│ ├── package.json
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ ├── services/
│ │ ├── styles/
│ │ └── App.js
├── .gitignore
└── README.md

## Backend Setup
1. cd backend
2. npm install
3. npm start (runs on port 4000)

## Frontend Setup
1. cd frontend
2. npm install
3. npm start(runs on port 3000)

## Running the App
1. Start backend:
   cd backend
   npm install
   node server.js
2. Start frontend:
   cd frontend
   npm install
   npm start
3. Open http://localhost:3000 in your browser

## API Endpoints
1. Get All Tasks
   GET /api/tasks

    Response:
    Status: 200 OK

    Body: Array of tasks

2. Create a New Task
   POST /api/tasks


   Request Body:

{
  "title": "New Task",
  "description": "Optional description",
  "priority": "low"
}


Response:

Status: 201 Created

Body: The created task object

3. Update a Task
PUT /api/tasks/:id


Request Body:

{
  "title": "Updated Task",
  "description": "Updated description",
  "completed": true,
  "priority": "high"
}


Response:

Status: 200 OK

Body: Updated task object

Error: 404 if task not found

4. Delete a Task
DELETE /api/tasks/:id


Response:

Status: 204 No Content

Error: 404 if task not found

5. Toggle Task Completion
PATCH /api/tasks/:id/toggle


Response:

Status: 200 OK

Body: Task object with updated completed status

Error: 404 if task not found

## Assumptions & Design Decisions
Data is stored in-memory; no database is used

Tasks have priority levels: low, medium, high

Carousel implemented with vanilla React + CSS (no external libraries)

Backend runs on port 4000, frontend on 3000

Simple validation on task creation

## Time Spent
Backend API: 70 minutes

Frontend Core Features: 80 minutes

Styling & Polish: 55 minutes

Testing & Debugging: 35 minutes

