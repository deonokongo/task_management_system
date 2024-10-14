import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import MyTasks from '../components/MyTasks';
import Calendar from '../components/Calendar';
import Notifications from '../components/Notifications';
import SystemSettings from '../components/SystemSettings';

const Home = () => {
  const { user, logout } = useAuth(); // Get the user and logout function from AuthContext
  const navigate = useNavigate(); // Hook for navigation
  const userName = user ? user.name : 'User'; // Get the user's name, default to 'User' if not found
  const [activeSection, setActiveSection] = useState('My Tasks'); // Set default active section to 'My Tasks'
  const [showProfileMenu, setShowProfileMenu] = useState(false); // State to toggle profile dropdown
  const [showNotifications, setShowNotifications] = useState(false); // State to toggle notifications dropdown

  // Redirect to login page if user is not logged in
  useEffect(() => {
    if (!user) {
      navigate('/login'); // Redirect to login page
    }
  }, [user, navigate]); // Dependency array includes user and navigate

  // Function to render content based on active section
  const renderContent = () => {
    switch (activeSection) {
      case 'My Tasks':
        return <MyTasks />;
      case 'Calendar':
        return <Calendar />;
      case 'Notifications':
        return <Notifications />;
      case 'System Settings':
        return <SystemSettings />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <header className="bg-red-700 text-white p-10 flex justify-between items-center">
        <h1 className="text-xl">Welcome to Your Dashboard</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="text-white focus:outline-none"
              aria-label="Notifications"
            >
              <i className="fas fa-bell"></i>
            </button>
            {showNotifications && (
              <div className="absolute right-0 mt-2 bg-white shadow-lg rounded w-48">
                <div className="p-4">You have new notifications.</div>
              </div>
            )}
          </div>
          <button className="text-white focus:outline-none">
            <i className="fas fa-cog" aria-label="Settings"></i>
          </button>
          <div className="relative">
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="text-white flex items-center focus:outline-none"
              aria-label="User Profile"
            >
              <i className="fas fa-user mr-2"></i>
              {userName}
            </button>
            {showProfileMenu && (
              <div className="absolute right-0 mt-2 bg-white shadow-lg rounded w-48">
                <button
                  className="block px-4 py-2 text-black hover:bg-gray-200"
                  onClick={() => console.log('Navigate to Manage Account')}
                >
                  Manage Account
                </button>
                <button
                  className="block px-4 py-2 text-black hover:bg-gray-200"
                  onClick={logout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </header>
      <main className="flex flex-grow p-4">
        <aside className="w-1/6 bg-black text-white p-4 shadow">
          <h2 className="text-lg font-semibold">Dashboard</h2>
          <ul className="mt-4">
            {['My Tasks', 'Calendar', 'Notifications', 'System Settings'].map((section) => (
              <li key={section}>
                <button
                  onClick={() => setActiveSection(section)}
                  className={`w-full text-left py-2 hover:bg-gray-700 ${activeSection === section ? 'bg-gray-700' : ''}`}
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>
        </aside>
        <div className="flex-grow p-4 bg-white shadow">
          <h2 className="text-2xl">Hi {userName}, welcome to your dashboard!</h2>
          <input
            type="text"
            placeholder="Search..."
            className="mt-4 p-2 border rounded w-full"
          />
          <div className="mt-4">
            {renderContent()} {/* Render content based on the active section */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
