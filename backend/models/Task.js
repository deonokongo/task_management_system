const mongoose = require('mongoose');

// Define the Task Schema
const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  dueDate: { type: Date, required: true },
  priority: { type: String, enum: ['low', 'medium', 'high'], default: 'medium' },
  status: { type: String, enum: ['ongoing', 'urgent', 'done'], default: 'ongoing' },
  createdAt: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true } // Reference to User model
});

// Export the Task model
module.exports = mongoose.model('Task', TaskSchema);
