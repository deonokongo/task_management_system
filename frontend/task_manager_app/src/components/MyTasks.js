import React, { useEffect, useState } from 'react';
import TaskCard from '../components/TaskCard';

const MyTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    priority: 'medium',
    dueDate: '',
    status: 'ongoing',
  });
  const [currentTask, setCurrentTask] = useState(null); // Track the task being edited
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch tasks from the backend
  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await fetch('http://localhost:5000/api/tasks', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`, // Add token here
          },
        });
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error('Failed to fetch tasks', error);
        setError('Failed to load tasks. Please try again.'); // Set error message
      } finally {
        setLoading(false);
      }
    };
    fetchTasks();
  }, []);

  const handleEditTask = async (updatedTask) => {
    console.log('Sending updated task data:', updatedTask); // Log the task data
    const token = localStorage.getItem('token'); // Get the token here
    try {
      const response = await fetch(`http://localhost:5000/api/tasks/${updatedTask._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(updatedTask),
      });
      if (!response.ok) {
        throw new Error('Failed to update task');
      }
      const data = await response.json();
      console.log('Updated task:', data);
      
      // Update state with the updated task
      setTasks(tasks.map(task => (task._id === data._id ? data : task))); // Update state
      setCurrentTask(null); // Clear the current task after updating
      setNewTask({ title: '', description: '', priority: 'medium', dueDate: '', status: 'ongoing' }); // Reset form
    } catch (error) {
      console.error('Failed to update task', error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    setLoading(true);
    setError('');

    try {
        const token = localStorage.getItem('token');
        if (!token) {
            setError('User is not authenticated. Please log in again.');
            setLoading(false);
            return;
        }

        const response = await fetch(`http://localhost:5000/api/tasks/${taskId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            const errorResponse = await response.json(); // Attempt to get the error message
            console.error('Delete response error:', errorResponse); // Log the error response
            throw new Error(errorResponse.message || 'Failed to delete task');
        }

        setTasks(tasks.filter((task) => task._id !== taskId));
        console.log(`Task with ID ${taskId} deleted successfully.`);
    } catch (error) {
        console.error('Failed to delete task', error);
        setError(error.message || 'Failed to delete task. Please try again.');
    } finally {
        setLoading(false);
    }
};

  const handleAddOrUpdateTask = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Retrieve the token from local storage
    const token = localStorage.getItem('token');
    if (!token) {
      setError('User is not authenticated. Please log in again.');
      setLoading(false);
      return;
    }

    const url = currentTask
      ? `http://localhost:5000/api/tasks/${currentTask._id}` // URL for updating a task
      : 'http://localhost:5000/api/tasks'; // URL for creating a task
    const method = currentTask ? 'PUT' : 'POST'; // Use PUT for updating, POST for creating

    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(newTask),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.message || 'Failed to save task');
      }

      const savedTask = await response.json();

      if (currentTask) {
        // Update task in the state
        setTasks(tasks.map(task => (task._id === savedTask._id ? savedTask : task)));
      } else {
        // Add the new task to the state
        setTasks([...tasks, savedTask]);
      }

      // Reset form and close it
      setShowAddTaskForm(false);
      setNewTask({ title: '', description: '', priority: 'medium', dueDate: '', status: 'ongoing' });
      setCurrentTask(null);
    } catch (error) {
      console.error('Failed to save task', error);
      setError(error.message || 'Failed to save task. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Sort tasks by priority
  const sortedTasks = tasks.sort((a, b) => {
    const priorityOrder = { high: 1, medium: 2, low: 3 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });

  return (
    <div className="p-4">
      {loading && <p>Loading tasks...</p>}
      {error && <p className="text-red-500">{error}</p>}
      
      <div className="flex justify-end mb-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => {
            setShowAddTaskForm(!showAddTaskForm);
            setCurrentTask(null); // Reset the current task being edited
            setNewTask({ title: '', description: '', priority: 'medium', dueDate: '', status: 'ongoing' });
          }}
        >
          {showAddTaskForm ? 'Cancel' : '+ Add New Task'}
        </button>
      </div>

      {showAddTaskForm && (
        <form onSubmit={handleAddOrUpdateTask} className="mb-4">
          <input
            type="text"
            placeholder="Title"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
            required
            className="border rounded p-2 mr-2"
          />
          <input
            type="text"
            placeholder="Description"
            value={newTask.description}
            onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
            required
            className="border rounded p-2 mr-2"
          />
          <select
            value={newTask.priority}
            onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
            className="border rounded p-2 mr-2"
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
          <input
            type="date"
            value={newTask.dueDate}
            onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
            className="border rounded p-2 mr-2"
          />
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            {currentTask ? 'Update Task' : 'Add Task'}
          </button>
        </form>
      )}

      <div className="flex flex-wrap">
        {sortedTasks.map((task) => (
          <TaskCard
            key={task._id}
            task={task}
            onEdit={() => {
              setCurrentTask(task); // Set the task to be edited
              setNewTask({ title: task.title, description: task.description, priority: task.priority, dueDate: task.dueDate, status: task.status }); // Pre-fill form with task data
              setShowAddTaskForm(true); // Show the form
            }}
            onDelete={() => handleDeleteTask(task._id)}
          />
        ))}
      </div>
    </div>
  );
};

export default MyTasks;
