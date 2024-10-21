import React, {useState} from 'react';
import './EditTask.css';

export default function EditTask({task, onTaskUpdated}) {
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);
    const [priority, setPriority] = useState(task.priority);
    const [dueDate, setDueDate] = useState(task.due_date);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedTask = { title, description, priority, due_date: dueDate };
        // await axios.put(`/api/tasks/${task.id}`, updatedTask);
        onTaskUpdated();
    };

    return (
        <div className="edit-task-container">
            <h2>Edit Task</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <textarea
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
                <button type="submit">Update Task</button>
            </form>
        </div>
    );
}
