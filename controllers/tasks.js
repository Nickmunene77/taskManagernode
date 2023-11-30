const Task = require('../models/task')
const getAllTask = (req, res) => {
  res.send('all items in the file')
}
const getTask = (req, res) => {
  res.json({ id: req.params.id })
}

const createTask = (req, res) => {
  res.json(req.body)
}

const deleteTask = (req, res) => {
  res.json({ msg: 'delete task' })
}

const updateTask = (req, res) => {
  res.send('update task')
}

module.exports = { getAllTask, getTask, createTask, updateTask, deleteTask }
