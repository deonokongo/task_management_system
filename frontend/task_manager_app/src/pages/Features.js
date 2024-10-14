import React from 'react';
import { useNavigate } from 'react-router-dom';

const Features = () => {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleGoBack = () => {
    navigate('/'); // Redirect to the landing page
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Features</h1>
      
      <div className="space-y-6">
        <div className="p-4 border-l-4 border-green-500 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-700">Task Management</h2>
          <p className="text-gray-600">
            Easily create, edit, and delete tasks. Organize your tasks by setting priorities and due dates to ensure you stay on top of your responsibilities.
          </p>
        </div>

        <div className="p-4 border-l-4 border-green-500 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-700">User Authentication</h2>
          <p className="text-gray-600">
            Secure login and registration process. Your data is protected, and you can manage your tasks only when you are logged in.
          </p>
        </div>

        <div className="p-4 border-l-4 border-green-500 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-700">Task Notifications</h2>
          <p className="text-gray-600">
            Receive notifications for overdue tasks, ensuring you never miss a deadline. Stay updated with your task's status and changes.
          </p>
        </div>

        <div className="p-4 border-l-4 border-green-500 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-700">Calendar Integration</h2>
          <p className="text-gray-600">
            Visualize your tasks on a calendar. Easily manage your schedule and plan your days effectively.
          </p>
        </div>

        <div className="p-4 border-l-4 border-green-500 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-700">Responsive Design</h2>
          <p className="text-gray-600">
            Access your task management system on any device. The app is designed to work seamlessly on mobile, tablet, and desktop screens.
          </p>
        </div>

        <div className="p-4 border-l-4 border-green-500 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-700">User-Friendly Interface</h2>
          <p className="text-gray-600">
            Enjoy a clean and intuitive interface that makes managing your tasks straightforward and efficient.
          </p>
        </div>
      </div>

      <div className="mt-8 text-center">
        <button 
          onClick={handleGoBack}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Features;
