const Task = require('../models/task')
const getAllTask = async (req, res) => {
  try {
    const tasks = await Task.find({})
    res
      .status(200)
      .json({ status: 'success', data: { tasks, nbHits: tasks.length } })
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}
const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params
    const oneTask = await Task.findOne({ _id: taskID }) // find one task by id

    if (!oneTask) {
      return res.status(404).json({ msg: `no task with id : ${taskID}` })
    }
    res.status(200).json({ oneTask })
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params
    const task = await Task.findOneAndDelete({ _id: taskID })

    res.status(200).json({ task })
    if (!task) {
      // if task is not found
      return res.status(404).json({ msg: `no task with id : ${taskID}` })
    }
    // findOneAndDelete is a mongoose method
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

const updateTask = async (req, res) => {
  //used patch instead of put because put updates all the fields while patch updates only the fields that are provided, example if you want to update only the name of the task and not the completed field then you can use patch instead of put because put will update the completed field to false if you don't provide it in the request body while patch will not update the completed field if you don't provide it in the request body and will keep it as it is
  try {
    const { id: taskID } = req.params
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true, // return the updated value
      runValidators: true, // run validators on the updated data
    })
    res.status(200).json({ task })
  } catch (error) {
    res.status(404).json({ msg: error.message })
  }
}

module.exports = { getAllTask, getTask, createTask, updateTask, deleteTask }
