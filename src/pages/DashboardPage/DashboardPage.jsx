import React, { useState, useEffect } from 'react';
import AddTask from './AddTask/AddTask';
import EditTask from './EditTask/EditTask';
import ListTasks from './ListTasks/ListTasks';
import { fetchWithAuth, getWithAuth } from '../../utils/services/interceptor';
import API_ENDPOINTS from '../../config/apiConfig';
import { getID } from '../../utils/services/auth';

export default function DashboardPage() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(false);

  const fetchTasks = async () => {
    let userId = getID();

    const headers = {
      'Content-Type': 'application/json',
      'user-id': userId ? userId : '',
    };

    const response = await fetch(API_ENDPOINTS.getTasks + `/${userId}`, {
      method: 'GET',
      headers: headers,
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json(); // Parse the response body as JSON
    setTasks(data.tasks); // Set the tasks state with the retrieved tasks
    console.log("Fetched tasks:", data.tasks); // Log the tasks
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleTaskAdded = () => {
    fetchTasks();
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
  };

  const handleTaskUpdated = () => {
    setEditingTask(null);
    fetchTasks();
  };

  const handleDeleteTask = async (id) => {
    // await axios.delete(`/api/tasks/${id}`);
    fetchTasks();
  };

  return (
    <div className="dashboard">
      <h1 style={{ textAlign: "center" }}>To-Do Dashboard</h1>
      <AddTask onTaskAdded={handleTaskAdded} />
      {editingTask ? (
        <EditTask task={editingTask} onTaskUpdated={handleTaskUpdated} />
      ) : (
        <ListTasks tasks={tasks} onEditTask={handleEditTask} onDeleteTask={handleDeleteTask} />
      )}
    </div>
  );
}
