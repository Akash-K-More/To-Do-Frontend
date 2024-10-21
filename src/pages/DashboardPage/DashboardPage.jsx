import React, {useState, useEffect} from 'react';
import AddTask from './AddTask/AddTask';
import EditTask from './EditTask/EditTask';
import ListTasks from './ListTasks/ListTasks';

export default function DashboardPage() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const fetchTasks = async () => {
    // const response = await axios.get('/api/tasks');
    // setTasks(response.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleTaskAdded = () => {
    fetchTasks();
  };

  return (
    <div className="dashboard">
      <h1 style={{textAlign: "center"}}>To-Do Dashboard</h1>
      <AddTask onTaskAdded={handleTaskAdded} />
      {/* {editingTask ? (
        <EditTask task={editingTask} onTaskUpdated={handleTaskUpdated} />
      ) : (
        <ListTasks tasks={tasks} onEditTask={handleEditTask} onDeleteTask={handleDeleteTask} />
      )} */}
    </div>
  );
}
