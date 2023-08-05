/* eslint-disable no-undef */
// Todo.js
const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  isComplete: {
    type: Boolean,
    default: false,
  },
  dateAdded: {
    type: Date,
    default: Date.now,
  },
})

const Todo = mongoose.model("Todo", todoSchema)
module.exports = Todo
