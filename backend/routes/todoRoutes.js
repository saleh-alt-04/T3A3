/* eslint-disable no-undef */
// todoRoutes.js
const express = require("express")
const router = express.Router()
const Todo = require("../models/Todo")

// Get all todos
router.get("/", async (req, res) => {
  const todos = await Todo.find()
  res.json(todos)
})

// Create new todo
router.post("/", async (req, res) => {
  const newTodo = new Todo({
    task: req.body.task,
  })
  const savedTodo = await newTodo.save()
  res.json(savedTodo)
})

// Get specific todo
router.get("/:id", async (req, res) => {
  const todo = await Todo.findById(req.params.id)
  res.json(todo)
})

// Delete todo
router.delete("/:id", async (req, res) => {
  const removedTodo = await Todo.findByIdAndDelete(req.params.id)
  res.json(removedTodo)
})

// Update todo
router.patch("/:id", async (req, res) => {
  const updatedTodo = await Todo.updateOne(
    { _id: req.params.id },
    { $set: { task: req.body.task, isComplete: req.body.isComplete } }
  )
  res.json(updatedTodo)
})

module.exports = router
