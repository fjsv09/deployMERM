import axios from "axios";

export const getTasksRequest = async () => await axios.get("/tasks");

export const createTaskRequest = async (task) =>
  await axios.post("/tasks", task);

export const deleteTaskRequest = async (id) =>
  await axios.delete(`/tasks/${id}`);

export const getTaskRequest = async (id) => await axios.get(`/tasks/${id}`);

export const updateTaskRequest = async (id, newFields) =>
  await axios.put(`/tasks/${id}`, newFields);

export const toggleTaskDoneRequest = async (id, done) =>
  await axios.put(`/tasks/${id}`, { done });
