Task Management App
This task management system is designed to streamline the process of organizing and prioritizing daily tasks. By allowing users to:
Set Priorities: Users can easily categorize tasks based on urgency and importance, ensuring that high-priority items are always front and center.
Allocate Time: The system enables users to allocate specific time slots for each task, helping to create a realistic schedule that promotes focus and productivity.
Reminders and Notifications: Users will receive timely reminders for upcoming deadlines, ensuring that no task is forgotten and that they stay on track throughout the day.
Visual Task Overview: A user-friendly interface provides a clear overview of tasks, making it simple to see what needs to be done and when, reducing stress and enhancing time management.
Team
Dion Okongo
Features
User Authentication: Sign-up and login functionality with JWT-based authentication.
Task Management: Create, update, view, and delete tasks.
Task Priorities: Categorize tasks as high, medium, or low priority.
Calendar Integration: View tasks on a calendar to track deadlines.
Task Status: Mark tasks as ongoing, urgent, or done.
Notifications: Get alerts for overdue tasks.
System Settings: Customize settings and manage account options.
Responsive Design: User-friendly interface with mobile and desktop support.
How to Access
Clone the repository:
bash

git clone https://github.com/deonokongo/task_management_system.git


Install dependencies:
bash
npm install express mongoose bcryptjs jsonwebtoken dotenv cors

cd task-management-app
npm install


Run the app:
bash
npm install --save-dev nodemon

npm start
API Endpoints
User Endpoints
Register a User
URL: http://localhost:5000/api/auth/register
Method: POST
Description: Registers a new user.
Request Body: { "name": "string", "email": "string", "password": "string" }
Login a User http://localhost:5000/api/auth/login
URL: /api/users/login
Method: POST
Description: Logs in an existing user and returns a JWT token.
Request Body: { "email": "string", "password": "string" }
Task Endpoints
Get All Tasks
URL: http://localhost:5000/api/tasks
Method: GET
Description: Retrieves a list of tasks for the authenticated user.
Create a Task
URL: http://localhost:5000/api/tasks
Method: POST
Description: Creates a new task.
Request Body: { "title": "string", "description": "string", "priority": "string", "dueDate": "date" }
Update a Task
URL: http://localhost:5000/api/tasks/:id
Method: PUT
Description: Updates an existing task.
Request Body: { "title": "string", "description": "string", "priority": "string", "dueDate": "date", "status": "string" }
Delete a Task
URL:  http://localhost:5000/api/tasks/:id
Method: DELETE
Description: Deletes a specified task.

Access the app at http://localhost:3000.
Technologies Used
Frontend: React, Tailwind CSS
Backend: Node.js, Express.js, MongoDB, Mongoose
Authentication: JWT (JSON Web Token)
Other Tools: Postman for API testing, Git for version control


