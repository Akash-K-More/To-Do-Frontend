import React, { useState } from 'react';
import './AddTask.css';
import { fetchWithAuth } from '../../../utils/services/interceptor';
import API_ENDPOINTS from '../../../config/apiConfig';
import { getID } from '../../../utils/services/auth';

export default function AddTask({onTaskAdded}) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    let userId = getID();
    try {
      const obj =  {
          userId,
          title,
          description,
          priority,
          dueDate,
      };
      console.log(obj);
      const response = await fetchWithAuth(API_ENDPOINTS.addTask, obj)
      console.log(response);
      // onTaskAdded(response.data.taskId); // Notify parent component about the new task
      onTaskAdded();
      clearForm();
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const clearForm = () => {
    setTitle('');
    setDescription('');
    setPriority('medium');
    setDueDate('');
  };

  return (
    <div className="add-task-container">
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit} className="add-task-form">
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <button type="submit" className="add-task-button">Add Task</button>
      </form>
    </div>
  );
}
