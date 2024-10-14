// src/components/TaskCard.js
import React from 'react';

const TaskCard = ({ task, onEdit, onDelete }) => {
  // Determine card color based on priority
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-red-500';
      case 'medium':
        return 'bg-yellow-500';
      case 'low':
        return 'bg-green-500';
      default:
        return 'bg-gray-300';
    }
  };

  return (
    <div className={`p-4 rounded shadow-lg text-white ${getPriorityColor(task.priority)} m-2`}>
      <h3 className="text-lg font-semibold">{task.title}</h3>
      <p className="mt-2">{task.description}</p>
      <p className="text-sm mt-1">Due: {new Date(task.dueDate).toLocaleDateString()}</p>
      <p className="text-sm mt-1">Status: {task.status}</p>
      <div className="mt-4 flex justify-between">
        <button
          onClick={() => onEdit(task)}
          className="bg-blue-700 px-2 py-1 rounded text-white"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(task._id)}
          className="bg-red-700 px-2 py-1 rounded text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
