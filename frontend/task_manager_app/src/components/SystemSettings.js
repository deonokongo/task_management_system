import React, { useState, useRef, useEffect } from 'react';

const SystemSettings = () => {
  const [showDropdown, setShowDropdown] = useState(false); // State to toggle dropdown visibility
  const dropdownRef = useRef(null); // Ref for the dropdown menu

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handler functions
  const handleAddTask = () => {
    console.log('Add Task clicked');
    // Logic to add a task (e.g., open a modal)
  };

  const handleEditTask = () => {
    console.log('Edit Task clicked');
    // Logic to edit a task (e.g., open a modal with the task's current data)
  };

  const handleChangeSchedule = () => {
    console.log('Change Schedule clicked');
    // Logic to change the schedule of a task (e.g., show a date picker)
  };

  const handleChangePriority = () => {
    console.log('Change Priority clicked');
    // Logic to change the priority of a task (e.g., show a dropdown to select a new priority)
  };

  const handleDeleteTask = () => {
    console.log('Delete Task clicked');
    // Logic to delete a task (e.g., prompt for confirmation)
  };

  const handleLogout = () => {
    console.log('Logout clicked');
    // Logic to logout the user (e.g., clear user data and redirect)
  };

  return (
    <div className="relative">
      <button 
        onClick={() => setShowDropdown(prev => !prev)} // Toggle dropdown on button click
        className="p-2 bg-blue-500 text-white rounded"
      >
        Manage Tasks
      </button>
      {showDropdown && (
        <div 
          ref={dropdownRef} // Set ref to the dropdown
          className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded"
        >
          <button
            onClick={() => {
              handleAddTask();
              setShowDropdown(false);
            }}
            className="block px-4 py-2 text-black hover:bg-gray-200 w-full text-left"
          >
            Add Task
          </button>
          <button
            onClick={() => {
              handleEditTask();
              setShowDropdown(false);
            }}
            className="block px-4 py-2 text-black hover:bg-gray-200 w-full text-left"
          >
            Edit Task
          </button>
          <button
            onClick={() => {
              handleChangeSchedule();
              setShowDropdown(false);
            }}
            className="block px-4 py-2 text-black hover:bg-gray-200 w-full text-left"
          >
            Change Schedule
          </button>
          <button
            onClick={() => {
              handleChangePriority();
              setShowDropdown(false);
            }}
            className="block px-4 py-2 text-black hover:bg-gray-200 w-full text-left"
          >
            Change Priority
          </button>
          <button
            onClick={() => {
              handleDeleteTask();
              setShowDropdown(false);
            }}
            className="block px-4 py-2 text-black hover:bg-gray-200 w-full text-left"
          >
            Delete Task
          </button>
          <button
            onClick={() => {
              handleLogout();
              setShowDropdown(false);
            }}
            className="block px-4 py-2 text-black hover:bg-gray-200 w-full text-left"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default SystemSettings;
