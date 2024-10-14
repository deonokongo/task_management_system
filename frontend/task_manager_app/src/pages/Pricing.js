import React from 'react';
import { useNavigate } from 'react-router-dom';

const Pricing = () => {
  const navigate = useNavigate(); // Use useNavigate to navigate between pages

  // Handle choosing a plan
  const handleChoosePlan = (plan) => {
    alert(`You have chosen the ${plan} plan!`);
    // Add any further actions you want to take when a plan is chosen
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Pricing Plans</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Basic Plan */}
          <div className="border rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Basic Plan</h2>
            <p className="text-xl text-gray-600 mb-4">$10/month</p>
            <ul className="list-disc list-inside mb-4 text-gray-600">
              <li>Basic features</li>
              <li>1 user</li>
              <li>10 tasks per month</li>
            </ul>
            <button
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
              onClick={() => handleChoosePlan('Basic')}
            >
              Choose Plan
            </button>
          </div>
          
          {/* Pro Plan */}
          <div className="border rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Pro Plan</h2>
            <p className="text-xl text-gray-600 mb-4">$20/month</p>
            <ul className="list-disc list-inside mb-4 text-gray-600">
              <li>All basic features</li>
              <li>Up to 5 users</li>
              <li>100 tasks per month</li>
            </ul>
            <button
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
              onClick={() => handleChoosePlan('Pro')}
            >
              Choose Plan
            </button>
          </div>

          {/* Premium Plan */}
          <div className="border rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Premium Plan</h2>
            <p className="text-xl text-gray-600 mb-4">$30/month</p>
            <ul className="list-disc list-inside mb-4 text-gray-600">
              <li>All Pro features</li>
              <li>Unlimited users</li>
              <li>Unlimited tasks</li>
              <li>Priority support</li>
            </ul>
            <button
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
              onClick={() => handleChoosePlan('Premium')}
            >
              Choose Plan
            </button>
          </div>
        </div>

        {/* Go Back Button */}
        <div className="mt-8 text-center">
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition duration-200"
            onClick={() => navigate('/')} // Navigate back to the landing page
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
