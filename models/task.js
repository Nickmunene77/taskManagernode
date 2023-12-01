const mongoose = require('mongoose')
const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provide name'],
    trim: true,
    maxlength: [20, 'name cannot be more than 20 characters'],
  },
  completed: {
    type: Boolean,
    default: false,
  },
})
module.exports = mongoose.model('Task', taskSchema)
// Task is the name of the collection in the database, collection name will be pluralized,collection is like a table in SQL, model accepts two arguments, first is the name of the model, second is the schema
