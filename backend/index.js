const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const { scheduleNotifications } = require('./services/notificationService');

const authRoutes = require('./routes/auth'); 
const taskRoutes = require('./routes/task'); 
dotenv.config();

const app = express();
require("./conn/connect")
require("dotenv").config();

app.use(express.json());
app.use(cors()); 

app.use('/api/auth', authRoutes); 
app.use('/api/tasks', taskRoutes);

scheduleNotifications();


app.use("/", (req, res) => {
  res.send("Hello from backend side");
});
// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
