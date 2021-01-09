import axios from "axios";

const service = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});
export default service;

function getTasks() {
  return service.get("/api/tasks").then((response) => response.data);
}
export { getTasks };

function createTask(title, doneyet) {
  return service
    .post("/api/tasks", { title, doneyet })
    .then((response) => response.data);
}

export { createTask };

function deleteTask(taskId) {
  return service
    .delete(`/api/tasks/${taskId}`)
    .then((response) => response.data);
}

export { deleteTask };

function updateTask(taskId, status) {
  return service
    .put(`/api/tasks/${taskId}`, status)
    .then((response) => response.data);
}

export { updateTask };
