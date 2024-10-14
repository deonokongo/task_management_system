import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate(); // Use useNavigate to redirect

  const handleGoBack = () => {
    navigate('/'); // Redirect to the landing page
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">About Our Task Management App</h1>
      <p className="text-gray-600 mb-6">
        Our Task Management App is designed to help you organize your tasks efficiently. Whether you're managing personal to-do lists or collaborating with a team, our app offers a user-friendly interface that simplifies task management. You can create, edit, and delete tasks, set priorities, and track deadlines effortlessly.
      </p>
      <p className="text-gray-600 mb-6">
        We believe in making productivity accessible to everyone. With our app, you can stay focused, manage your time effectively, and boost your productivity. Our team is committed to continuously improving the app by adding new features and enhancing user experience based on your feedback.
      </p>
      <p className="text-gray-600 mb-6">
        Thank you for choosing our Task Management App! We hope it helps you achieve your goals and manage your tasks with ease.
      </p>

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

export default About;
