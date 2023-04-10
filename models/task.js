const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  assignee: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  duedate: {
    type: String,
    required: true,
  },
  duetime: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});
module.exports = mongoose.model("task", taskSchema);
