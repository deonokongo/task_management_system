// notificationService.js
const nodemailer = require('nodemailer');
const Task = require('../models/Task');
const cron = require('node-cron');

const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: 'lilian.deon29@gmail.com',
    pass: 'Deon1234*',
  },
});

const sendEmailNotification = (email, title, days) => {
  const mailOptions = {
    from: 'lilian.deon29@gmail.com',
    to: email,
    subject: `Task Due Soon: ${title}`,
    text: `Your task "${title}" is due in ${days} day(s)!`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log('Error sending email:', error);
    }
    console.log('Email sent:', info.response);
  });
};

const scheduleNotifications = () => {
  cron.schedule('0 9 * * *', async () => {
    const today = new Date();
    const threeDaysFromNow = new Date(today);
    const twoDaysFromNow = new Date(today);
    const oneDayFromNow = new Date(today);

    threeDaysFromNow.setDate(today.getDate() + 3);
    twoDaysFromNow.setDate(today.getDate() + 2);
    oneDayFromNow.setDate(today.getDate() + 1);

    const tasks = await Task.find({}); 

    tasks.forEach(task => {
      const dueDate = new Date(task.dueDate);
      const email = task.userEmail;

      if (dueDate.toDateString() === threeDaysFromNow.toDateString()) {
        sendEmailNotification(email, task.title, 3);
      } else if (dueDate.toDateString() === twoDaysFromNow.toDateString()) {
        sendEmailNotification(email, task.title, 2);
      } else if (dueDate.toDateString() === oneDayFromNow.toDateString()) {
        sendEmailNotification(email, task.title, 1);
      }
    });
  });
};

module.exports = {
  scheduleNotifications,
};