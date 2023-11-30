const mongoose = require('mongoose')

require('dotenv').config()

const connectDB = (url) => {
  return mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    .then((result) => {
      console.log('Connected to DB')
    })
    .catch((err) => {
      console.log(err)
    })
}
module.exports = connectDB
