import React, { useEffect, useState } from 'react';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch('/api/notifications'); // Replace with your notifications endpoint
        const data = await response.json();
        setNotifications(data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Notifications</h2>
      {notifications.length === 0 ? (
        <p>No notifications at this time.</p>
      ) : (
        <ul>
          {notifications.map((notification, index) => (
            <li key={index} className="mb-2">
              {notification.message}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notifications;
